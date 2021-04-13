/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:25.10
*/
gx.evt.autoSkip = false;
gx.define('hconsultagrupotipodemonstracao', false, function () {
   this.ServerClass =  "hconsultagrupotipodemonstracao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV18TipoDemonstracaoId=gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.') ;
      this.AV17PGrupoTipoDemonstracaoId=gx.fn.getControlValue("vPGRUPOTIPODEMONSTRACAOID") ;
   };
   this.e17132_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11132_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12132_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13132_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14132_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15132_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19132_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21131_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,38,44,47,49,51,53,55,56,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagrupotipodemonstracao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(272,34,"GRUPOTIPODEMONSTRACAOID","","","GrupoTipoDemonstracaoId","svchar",0,"px",30,30,"left",null,[],272,"GrupoTipoDemonstracaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(245,35,"GRUPOTIPODEMONSTRACAOTITULO","","","GrupoTipoDemonstracaoTitulo","svchar",0,"px",40,40,"left",null,[],245,"GrupoTipoDemonstracaoTitulo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(271,36,"TIPODEMONSTRACAOID","","","TipoDemonstracaoId","int",0,"px",3,3,"right",null,[],271,"TipoDemonstracaoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(248,37,"GRUPOTIPODEMONSTRACAOFONTE","Fonte de Apuração","","GrupoTipoDemonstracaoFonte","char",0,"px",1,1,"left",null,[],248,"GrupoTipoDemonstracaoFonte",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(247,38,"GRUPOTIPODEMONSTRACAOCLASSIFIC","Classificação","","GrupoTipoDemonstracaoClassific","char",0,"px",1,1,"left",null,[],247,"GrupoTipoDemonstracaoClassific",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOTIPODEMONSTRACAOID",gxz:"ZV13GrupoTipoDemonstracaoId",gxold:"OV13GrupoTipoDemonstracaoId",gxvar:"AV13GrupoTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.ZV13GrupoTipoDemonstracaoId=Value},v2c:function(){gx.fn.setControlValue("vGRUPOTIPODEMONSTRACAOID",gx.O.AV13GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.AV13GrupoTipoDemonstracaoId=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOTIPODEMONSTRACAOTITULO",gxz:"ZV14GrupoTipoDemonstracaoTitulo",gxold:"OV14GrupoTipoDemonstracaoTitulo",gxvar:"AV14GrupoTipoDemonstracaoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GrupoTipoDemonstracaoTitulo=Value},v2z:function(Value){gx.O.ZV14GrupoTipoDemonstracaoTitulo=Value},v2c:function(){gx.fn.setControlValue("vGRUPOTIPODEMONSTRACAOTITULO",gx.O.AV14GrupoTipoDemonstracaoTitulo,0)},c2v:function(){gx.O.AV14GrupoTipoDemonstracaoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOTITULO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOTIPODEMONSTRACAOCLASSIFICACAO",gxz:"ZV15GrupoTipoDemonstracaoClassificacao",gxold:"OV15GrupoTipoDemonstracaoClassificacao",gxvar:"AV15GrupoTipoDemonstracaoClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15GrupoTipoDemonstracaoClassificacao=Value},v2z:function(Value){gx.O.ZV15GrupoTipoDemonstracaoClassificacao=Value},v2c:function(){gx.fn.setComboBoxValue("vGRUPOTIPODEMONSTRACAOCLASSIFICACAO",gx.O.AV15GrupoTipoDemonstracaoClassificacao)},c2v:function(){gx.O.AV15GrupoTipoDemonstracaoClassificacao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOCLASSIFICACAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOTIPODEMONSTRACAOFONTE",gxz:"ZV16GrupoTipoDemonstracaoFonte",gxold:"OV16GrupoTipoDemonstracaoFonte",gxvar:"AV16GrupoTipoDemonstracaoFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16GrupoTipoDemonstracaoFonte=Value},v2z:function(Value){gx.O.ZV16GrupoTipoDemonstracaoFonte=Value},v2c:function(){gx.fn.setComboBoxValue("vGRUPOTIPODEMONSTRACAOFONTE",gx.O.AV16GrupoTipoDemonstracaoFonte)},c2v:function(){gx.O.AV16GrupoTipoDemonstracaoFonte=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOFONTE")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOID",gxz:"Z272GrupoTipoDemonstracaoId",gxold:"O272GrupoTipoDemonstracaoId",gxvar:"A272GrupoTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A272GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.Z272GrupoTipoDemonstracaoId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(33),gx.O.A272GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.A272GrupoTipoDemonstracaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOTITULO",gxz:"Z245GrupoTipoDemonstracaoTitulo",gxold:"O245GrupoTipoDemonstracaoTitulo",gxvar:"A245GrupoTipoDemonstracaoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A245GrupoTipoDemonstracaoTitulo=Value},v2z:function(Value){gx.O.Z245GrupoTipoDemonstracaoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOTITULO",row || gx.fn.currentGridRowImpl(33),gx.O.A245GrupoTipoDemonstracaoTitulo,0)},c2v:function(){gx.O.A245GrupoTipoDemonstracaoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOTITULO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(33),gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOFONTE",gxz:"Z248GrupoTipoDemonstracaoFonte",gxold:"O248GrupoTipoDemonstracaoFonte",gxvar:"A248GrupoTipoDemonstracaoFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A248GrupoTipoDemonstracaoFonte=Value},v2z:function(Value){gx.O.Z248GrupoTipoDemonstracaoFonte=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOFONTE",row || gx.fn.currentGridRowImpl(33),gx.O.A248GrupoTipoDemonstracaoFonte,0)},c2v:function(){gx.O.A248GrupoTipoDemonstracaoFonte=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOFONTE",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOCLASSIFIC",gxz:"Z247GrupoTipoDemonstracaoClassific",gxold:"O247GrupoTipoDemonstracaoClassific",gxvar:"A247GrupoTipoDemonstracaoClassific",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A247GrupoTipoDemonstracaoClassific=Value},v2z:function(Value){gx.O.Z247GrupoTipoDemonstracaoClassific=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOCLASSIFIC",row || gx.fn.currentGridRowImpl(33),gx.O.A247GrupoTipoDemonstracaoClassific,0)},c2v:function(){gx.O.A247GrupoTipoDemonstracaoClassific=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOCLASSIFIC",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLENAV",grid:0};
   GXValidFnc[47]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[55]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13GrupoTipoDemonstracaoId = "" ;
   this.ZV13GrupoTipoDemonstracaoId = "" ;
   this.OV13GrupoTipoDemonstracaoId = "" ;
   this.AV14GrupoTipoDemonstracaoTitulo = "" ;
   this.ZV14GrupoTipoDemonstracaoTitulo = "" ;
   this.OV14GrupoTipoDemonstracaoTitulo = "" ;
   this.AV15GrupoTipoDemonstracaoClassificacao = "" ;
   this.ZV15GrupoTipoDemonstracaoClassificacao = "" ;
   this.OV15GrupoTipoDemonstracaoClassificacao = "" ;
   this.AV16GrupoTipoDemonstracaoFonte = "" ;
   this.ZV16GrupoTipoDemonstracaoFonte = "" ;
   this.OV16GrupoTipoDemonstracaoFonte = "" ;
   this.Z272GrupoTipoDemonstracaoId = "" ;
   this.O272GrupoTipoDemonstracaoId = "" ;
   this.Z245GrupoTipoDemonstracaoTitulo = "" ;
   this.O245GrupoTipoDemonstracaoTitulo = "" ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.Z248GrupoTipoDemonstracaoFonte = "" ;
   this.O248GrupoTipoDemonstracaoFonte = "" ;
   this.Z247GrupoTipoDemonstracaoClassific = "" ;
   this.O247GrupoTipoDemonstracaoClassific = "" ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13GrupoTipoDemonstracaoId = "" ;
   this.AV14GrupoTipoDemonstracaoTitulo = "" ;
   this.AV15GrupoTipoDemonstracaoClassificacao = "" ;
   this.AV16GrupoTipoDemonstracaoFonte = "" ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18TipoDemonstracaoId = 0 ;
   this.AV17PGrupoTipoDemonstracaoId = "" ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A272GrupoTipoDemonstracaoId = "" ;
   this.A245GrupoTipoDemonstracaoTitulo = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A248GrupoTipoDemonstracaoFonte = "" ;
   this.A247GrupoTipoDemonstracaoClassific = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17132_client": ["ENTER", true] ,"e11132_client": ["'GXM_FIRST'", true] ,"e12132_client": ["'GXM_PREVIOUS'", true] ,"e13132_client": ["'GXM_NEXT'", true] ,"e14132_client": ["'GXM_LAST'", true] ,"e15132_client": ["'PROCURAR'", true] ,"e19132_client": ["'ATUALIZAPAGINA'", true] ,"e21131_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPODEMONSTRACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODEMONSTRACAOID","Title")',ctrl:'TIPODEMONSTRACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOTIPODEMONSTRACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOTIPODEMONSTRACAOID","Title")',ctrl:'GRUPOTIPODEMONSTRACAOID',prop:'Title'},{ctrl:'GRUPOTIPODEMONSTRACAOTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOTIPODEMONSTRACAOTITULO","Title")',ctrl:'GRUPOTIPODEMONSTRACAOTITULO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'}],[{av:'AV17PGrupoTipoDemonstracaoId',fld:'vPGRUPOTIPODEMONSTRACAOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'A245GrupoTipoDemonstracaoTitulo',fld:'GRUPOTIPODEMONSTRACAOTITULO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV14GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV15GrupoTipoDemonstracaoClassificacao',fld:'vGRUPOTIPODEMONSTRACAOCLASSIFICACAO'},{av:'AV16GrupoTipoDemonstracaoFonte',fld:'vGRUPOTIPODEMONSTRACAOFONTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18TipoDemonstracaoId", "vTIPODEMONSTRACAOID", 0, "int");
   this.setVCMap("AV17PGrupoTipoDemonstracaoId", "vPGRUPOTIPODEMONSTRACAOID", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18TipoDemonstracaoId", "vTIPODEMONSTRACAOID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV18TipoDemonstracaoId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagrupotipodemonstracao());
