/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:36.44
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodeloetiquetatermica', false, function () {
   this.ServerClass =  "hconsultamodeloetiquetatermica" ;
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
      this.AV19EtiquetaTermicaModeloOut=gx.fn.getIntegerValue("vETIQUETATERMICAMODELOOUT",'.') ;
   };
   this.e17wt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11wt2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12wt2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13wt2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14wt2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15wt2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19wt2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21wt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,35,38,40,42,44,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodeloetiquetatermica",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5903,24,"ETIQUETATERMICAMODELO","","","EtiquetaTermicaModelo","int",0,"px",3,3,"right",null,[],5903,"EtiquetaTermicaModelo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5904,25,"ETIQUETATERMICADESCRICAO","","","EtiquetaTermicaDescricao","svchar",0,"px",40,40,"left",null,[],5904,"EtiquetaTermicaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5919,26,"ETIQUETATERMICADENSIDADE","","","EtiquetaTermicaDensidade","int",0,"px",3,3,"right",null,[],5919,"EtiquetaTermicaDensidade",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Linguagem",27,"vLINGUAGEM","","","Linguagem","svchar",0,"px",20,20,"left",null,[],"Linguagem","Linguagem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5921,28,"ETIQUETATERMICAPERCENTDESC","","","EtiquetaTermicaPercentDesc","decimal",0,"px",5,5,"right",null,[],5921,"EtiquetaTermicaPercentDesc",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5906,29,"ETIQUETATERMICALINGUAGEM","Etiqueta Termica Linguagem","","EtiquetaTermicaLinguagem","char",0,"px",1,1,"left",null,[],5906,"EtiquetaTermicaLinguagem",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICAMODELO",gxz:"ZV16EtiquetaTermicaModelo",gxold:"OV16EtiquetaTermicaModelo",gxvar:"AV16EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAMODELO",gx.O.AV16EtiquetaTermicaModelo,0)},c2v:function(){gx.O.AV16EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICADESCRICAO",gxz:"ZV17EtiquetaTermicaDescricao",gxold:"OV17EtiquetaTermicaDescricao",gxvar:"AV17EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.ZV17EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICADESCRICAO",gx.O.AV17EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.AV17EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAMODELO",gxz:"Z5903EtiquetaTermicaModelo",gxold:"O5903EtiquetaTermicaModelo",gxvar:"A5903EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICAMODELO",row || gx.fn.currentGridRowImpl(23),gx.O.A5903EtiquetaTermicaModelo,0)},c2v:function(){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATERMICAMODELO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADESCRICAO",gxz:"Z5904EtiquetaTermicaDescricao",gxold:"O5904EtiquetaTermicaDescricao",gxvar:"A5904EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5904EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.Z5904EtiquetaTermicaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICADESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5904EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.A5904EtiquetaTermicaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICADESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADENSIDADE",gxz:"Z5919EtiquetaTermicaDensidade",gxold:"O5919EtiquetaTermicaDensidade",gxvar:"A5919EtiquetaTermicaDensidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5919EtiquetaTermicaDensidade=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5919EtiquetaTermicaDensidade=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICADENSIDADE",row || gx.fn.currentGridRowImpl(23),gx.O.A5919EtiquetaTermicaDensidade,0)},c2v:function(){gx.O.A5919EtiquetaTermicaDensidade=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATERMICADENSIDADE",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLINGUAGEM",gxz:"ZV18Linguagem",gxold:"OV18Linguagem",gxvar:"AV18Linguagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18Linguagem=Value},v2z:function(Value){gx.O.ZV18Linguagem=Value},v2c:function(row){gx.fn.setGridControlValue("vLINGUAGEM",row || gx.fn.currentGridRowImpl(23),gx.O.AV18Linguagem,0)},c2v:function(){gx.O.AV18Linguagem=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINGUAGEM",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAPERCENTDESC",gxz:"Z5921EtiquetaTermicaPercentDesc",gxold:"O5921EtiquetaTermicaPercentDesc",gxvar:"A5921EtiquetaTermicaPercentDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5921EtiquetaTermicaPercentDesc=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5921EtiquetaTermicaPercentDesc=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ETIQUETATERMICAPERCENTDESC",row || gx.fn.currentGridRowImpl(23),gx.O.A5921EtiquetaTermicaPercentDesc,2,',')},c2v:function(){gx.O.A5921EtiquetaTermicaPercentDesc=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ETIQUETATERMICAPERCENTDESC",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALINGUAGEM",gxz:"Z5906EtiquetaTermicaLinguagem",gxold:"O5906EtiquetaTermicaLinguagem",gxvar:"A5906EtiquetaTermicaLinguagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5906EtiquetaTermicaLinguagem=Value},v2z:function(Value){gx.O.Z5906EtiquetaTermicaLinguagem=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICALINGUAGEM",row || gx.fn.currentGridRowImpl(23),gx.O.A5906EtiquetaTermicaLinguagem,0)},c2v:function(){gx.O.A5906EtiquetaTermicaLinguagem=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICALINGUAGEM",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLENAV",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16EtiquetaTermicaModelo = 0 ;
   this.ZV16EtiquetaTermicaModelo = 0 ;
   this.OV16EtiquetaTermicaModelo = 0 ;
   this.AV17EtiquetaTermicaDescricao = "" ;
   this.ZV17EtiquetaTermicaDescricao = "" ;
   this.OV17EtiquetaTermicaDescricao = "" ;
   this.Z5903EtiquetaTermicaModelo = 0 ;
   this.O5903EtiquetaTermicaModelo = 0 ;
   this.Z5904EtiquetaTermicaDescricao = "" ;
   this.O5904EtiquetaTermicaDescricao = "" ;
   this.Z5919EtiquetaTermicaDensidade = 0 ;
   this.O5919EtiquetaTermicaDensidade = 0 ;
   this.ZV18Linguagem = "" ;
   this.OV18Linguagem = "" ;
   this.Z5921EtiquetaTermicaPercentDesc = 0 ;
   this.O5921EtiquetaTermicaPercentDesc = 0 ;
   this.Z5906EtiquetaTermicaLinguagem = "" ;
   this.O5906EtiquetaTermicaLinguagem = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16EtiquetaTermicaModelo = 0 ;
   this.AV17EtiquetaTermicaDescricao = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19EtiquetaTermicaModeloOut = 0 ;
   this.A9866EtiquetaTermicaSituacao = "" ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.A5919EtiquetaTermicaDensidade = 0 ;
   this.AV18Linguagem = "" ;
   this.A5921EtiquetaTermicaPercentDesc = 0 ;
   this.A5906EtiquetaTermicaLinguagem = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17wt2_client": ["ENTER", true] ,"e11wt2_client": ["'GXM_FIRST'", true] ,"e12wt2_client": ["'GXM_PREVIOUS'", true] ,"e13wt2_client": ["'GXM_NEXT'", true] ,"e14wt2_client": ["'GXM_LAST'", true] ,"e15wt2_client": ["'PROCURAR'", true] ,"e19wt2_client": ["'ATUALIZAPAGINA'", true] ,"e21wt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ETIQUETATERMICAMODELO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICAMODELO","Title")',ctrl:'ETIQUETATERMICAMODELO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ETIQUETATERMICADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICADESCRICAO","Title")',ctrl:'ETIQUETATERMICADESCRICAO',prop:'Title'},{ctrl:'ETIQUETATERMICADENSIDADE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICADENSIDADE","Title")',ctrl:'ETIQUETATERMICADENSIDADE',prop:'Title'},{ctrl:'vLINGUAGEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vLINGUAGEM","Title")',ctrl:'vLINGUAGEM',prop:'Title'},{ctrl:'ETIQUETATERMICAPERCENTDESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICAPERCENTDESC","Title")',ctrl:'ETIQUETATERMICAPERCENTDESC',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'}],[{av:'AV19EtiquetaTermicaModeloOut',fld:'vETIQUETATERMICAMODELOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV17EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19EtiquetaTermicaModeloOut", "vETIQUETATERMICAMODELOOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodeloetiquetatermica());
