/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:55.12
*/
gx.evt.autoSkip = false;
gx.define('hconsultavaloratributo', false, function () {
   this.ServerClass =  "hconsultavaloratributo" ;
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
      this.AV16cValorAtributoCodigo=gx.fn.getIntegerValue("vCVALORATRIBUTOCODIGO",'.') ;
   };
   this.e17nz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nz2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nz2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nz2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nz2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nz2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20nz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,41,44,46,48,50,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultavaloratributo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2941,34,"VALORATRIBUTOCODIGO","","","ValorAtributoCodigo","int",0,"px",4,4,"right",null,[],2941,"ValorAtributoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2938,35,"VALORATRIBUTODESCRICAO","","","ValorAtributoDescricao","char",0,"px",15,15,"left",null,[],2938,"ValorAtributoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV18EsquemaCodigo",gxold:"OV18EsquemaCodigo",gxvar:"AV18EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV18EsquemaCodigo,0)},c2v:function(){gx.O.AV18EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vATRIBUTOESQUEMACODIGO",gxz:"ZV19AtributoEsquemaCodigo",gxold:"OV19AtributoEsquemaCodigo",gxvar:"AV19AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMACODIGO",gx.O.AV19AtributoEsquemaCodigo,0)},c2v:function(){gx.O.AV19AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORATRIBUTOCODIGO",gxz:"ZV20ValorAtributoCodigo",gxold:"OV20ValorAtributoCodigo",gxvar:"AV20ValorAtributoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ValorAtributoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ValorAtributoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTOCODIGO",gx.O.AV20ValorAtributoCodigo,0)},c2v:function(){gx.O.AV20ValorAtributoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORATRIBUTODESCRICAO",gxz:"ZV17ValorAtributoDescricao",gxold:"OV17ValorAtributoDescricao",gxvar:"AV17ValorAtributoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ValorAtributoDescricao=Value},v2z:function(Value){gx.O.ZV17ValorAtributoDescricao=Value},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTODESCRICAO",gx.O.AV17ValorAtributoDescricao,0)},c2v:function(){gx.O.AV17ValorAtributoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vVALORATRIBUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORATRIBUTOCODIGO",gxz:"Z2941ValorAtributoCodigo",gxold:"O2941ValorAtributoCodigo",gxvar:"A2941ValorAtributoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2941ValorAtributoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2941ValorAtributoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VALORATRIBUTOCODIGO",row || gx.fn.currentGridRowImpl(33),gx.O.A2941ValorAtributoCodigo,0)},c2v:function(){gx.O.A2941ValorAtributoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VALORATRIBUTOCODIGO",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORATRIBUTODESCRICAO",gxz:"Z2938ValorAtributoDescricao",gxold:"O2938ValorAtributoDescricao",gxvar:"A2938ValorAtributoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2938ValorAtributoDescricao=Value},v2z:function(Value){gx.O.Z2938ValorAtributoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("VALORATRIBUTODESCRICAO",row || gx.fn.currentGridRowImpl(33),gx.O.A2938ValorAtributoDescricao,0)},c2v:function(){gx.O.A2938ValorAtributoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("VALORATRIBUTODESCRICAO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLENAV",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18EsquemaCodigo = 0 ;
   this.ZV18EsquemaCodigo = 0 ;
   this.OV18EsquemaCodigo = 0 ;
   this.AV19AtributoEsquemaCodigo = 0 ;
   this.ZV19AtributoEsquemaCodigo = 0 ;
   this.OV19AtributoEsquemaCodigo = 0 ;
   this.AV20ValorAtributoCodigo = 0 ;
   this.ZV20ValorAtributoCodigo = 0 ;
   this.OV20ValorAtributoCodigo = 0 ;
   this.AV17ValorAtributoDescricao = "" ;
   this.ZV17ValorAtributoDescricao = "" ;
   this.OV17ValorAtributoDescricao = "" ;
   this.Z2941ValorAtributoCodigo = 0 ;
   this.O2941ValorAtributoCodigo = 0 ;
   this.Z2938ValorAtributoDescricao = "" ;
   this.O2938ValorAtributoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18EsquemaCodigo = 0 ;
   this.AV19AtributoEsquemaCodigo = 0 ;
   this.AV20ValorAtributoCodigo = 0 ;
   this.AV17ValorAtributoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16cValorAtributoCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.Events = {"e17nz2_client": ["ENTER", true] ,"e11nz2_client": ["'GXM_FIRST'", true] ,"e12nz2_client": ["'GXM_PREVIOUS'", true] ,"e13nz2_client": ["'GXM_NEXT'", true] ,"e14nz2_client": ["'GXM_LAST'", true] ,"e15nz2_client": ["'PROCURAR'", true] ,"e20nz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV17ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'VALORATRIBUTOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORATRIBUTOCODIGO","Title")',ctrl:'VALORATRIBUTOCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'VALORATRIBUTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORATRIBUTODESCRICAO","Title")',ctrl:'VALORATRIBUTODESCRICAO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'}],[{av:'AV16cValorAtributoCodigo',fld:'vCVALORATRIBUTOCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV17ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO',hsh:true}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV17ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO',hsh:true},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV17ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO',hsh:true},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV17ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO',hsh:true},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV17ValorAtributoDescricao',fld:'vVALORATRIBUTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV16cValorAtributoCodigo", "vCVALORATRIBUTOCODIGO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultavaloratributo());
