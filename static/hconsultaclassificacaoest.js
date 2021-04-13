/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:54.13
*/
gx.evt.autoSkip = false;
gx.define('hconsultaclassificacaoest', false, function () {
   this.ServerClass =  "hconsultaclassificacaoest" ;
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
      this.A2923ClassificacaoEstSnObrigatorio=gx.fn.getControlValue("CLASSIFICACAOESTSNOBRIGATORIO") ;
      this.AV17cClassificacaoEstId=gx.fn.getControlValue("vCCLASSIFICACAOESTID") ;
   };
   this.e17mx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11mx2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12mx2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13mx2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14mx2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15mx2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20mx2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21mx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaclassificacaoest",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2930,24,"CLASSIFICACAOESTID","","","ClassificacaoEstId","char",0,"px",15,15,"left",null,[],2930,"ClassificacaoEstId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2922,25,"CLASSIFICACAOESTDESCRICAO","","","ClassificacaoEstDescricao","svchar",0,"px",40,40,"left",null,[],2922,"ClassificacaoEstDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsimounao","vBMPSIMOUNAO",26,0,"px",17,"px",null,"","Obrigatório","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOESTID",gxz:"ZV19ClassificacaoEstId",gxold:"OV19ClassificacaoEstId",gxvar:"AV19ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV19ClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTID",gx.O.AV19ClassificacaoEstId,0)},c2v:function(){gx.O.AV19ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOESTDESCRICAO",gxz:"ZV18ClassificacaoEstDescricao",gxold:"OV18ClassificacaoEstDescricao",gxvar:"AV18ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV18ClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTDESCRICAO",gx.O.AV18ClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV18ClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTID",gxz:"Z2930ClassificacaoEstId",gxold:"O2930ClassificacaoEstId",gxvar:"A2930ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2930ClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2930ClassificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(23),gx.O.A2930ClassificacaoEstId,0)},c2v:function(){gx.O.A2930ClassificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTDESCRICAO",gxz:"Z2922ClassificacaoEstDescricao",gxold:"O2922ClassificacaoEstDescricao",gxvar:"A2922ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2922ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2922ClassificacaoEstDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2922ClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2922ClassificacaoEstDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIMOUNAO",gxz:"ZV16bmpSimOuNao",gxold:"OV16bmpSimOuNao",gxvar:"AV16bmpSimOuNao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpSimOuNao=Value},v2z:function(Value){gx.O.ZV16bmpSimOuNao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIMOUNAO",row || gx.fn.currentGridRowImpl(23),gx.O.AV16bmpSimOuNao,gx.O.AV25Bmpsimounao_GXI)},c2v:function(){gx.O.AV25Bmpsimounao_GXI=this.val_GXI();gx.O.AV16bmpSimOuNao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIMOUNAO",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIMOUNAO_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV25Bmpsimounao_GXI',nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"IMAGE2",grid:0};
   GXValidFnc[39]={fld:"IMAGE3",grid:0};
   GXValidFnc[41]={fld:"IMAGE4",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19ClassificacaoEstId = "" ;
   this.ZV19ClassificacaoEstId = "" ;
   this.OV19ClassificacaoEstId = "" ;
   this.AV18ClassificacaoEstDescricao = "" ;
   this.ZV18ClassificacaoEstDescricao = "" ;
   this.OV18ClassificacaoEstDescricao = "" ;
   this.Z2930ClassificacaoEstId = "" ;
   this.O2930ClassificacaoEstId = "" ;
   this.Z2922ClassificacaoEstDescricao = "" ;
   this.O2922ClassificacaoEstDescricao = "" ;
   this.ZV16bmpSimOuNao = "" ;
   this.OV16bmpSimOuNao = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19ClassificacaoEstId = "" ;
   this.AV18ClassificacaoEstDescricao = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17cClassificacaoEstId = "" ;
   this.A2923ClassificacaoEstSnObrigatorio = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.AV16bmpSimOuNao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17mx2_client": ["ENTER", true] ,"e11mx2_client": ["'GXM_FIRST'", true] ,"e12mx2_client": ["'GXM_PREVIOUS'", true] ,"e13mx2_client": ["'GXM_NEXT'", true] ,"e14mx2_client": ["'GXM_LAST'", true] ,"e15mx2_client": ["'PROCURAR'", true] ,"e20mx2_client": ["'ATUALIZAPAGINA'", true] ,"e21mx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CLASSIFICACAOESTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOESTID","Title")',ctrl:'CLASSIFICACAOESTID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CLASSIFICACAOESTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOESTDESCRICAO","Title")',ctrl:'CLASSIFICACAOESTDESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'}],[{av:'AV17cClassificacaoEstId',fld:'vCCLASSIFICACAOESTID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[{av:'AV16bmpSimOuNao',fld:'vBMPSIMOUNAO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV18ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2923ClassificacaoEstSnObrigatorio", "CLASSIFICACAOESTSNOBRIGATORIO", 0, "char");
   this.setVCMap("AV17cClassificacaoEstId", "vCCLASSIFICACAOESTID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2923ClassificacaoEstSnObrigatorio", "CLASSIFICACAOESTSNOBRIGATORIO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A2923ClassificacaoEstSnObrigatorio"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaclassificacaoest());
