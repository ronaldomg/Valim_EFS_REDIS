/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:23.82
*/
gx.evt.autoSkip = false;
gx.define('hconsultaatributoesquema', false, function () {
   this.ServerClass =  "hconsultaatributoesquema" ;
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
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2918AtributoEsquemaSnVencimento=gx.fn.getControlValue("ATRIBUTOESQUEMASNVENCIMENTO") ;
      this.AV20cAtributoEsquemaCodigo=gx.fn.getIntegerValue("vCATRIBUTOESQUEMACODIGO",'.') ;
   };
   this.e17mt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11mt2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12mt2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13mt2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14mt2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15mt2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20mt2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21mt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,30,31,32,33,39,42,44,46,48,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaatributoesquema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2921,30,"ATRIBUTOESQUEMACODIGO","","","AtributoEsquemaCodigo","int",0,"px",2,2,"right",null,[],2921,"AtributoEsquemaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2916,31,"ATRIBUTOESQUEMADESCRICAO","","","AtributoEsquemaDescricao","char",0,"px",15,15,"left",null,[],2916,"AtributoEsquemaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Snvalorcadastrado","vSNVALORCADASTRADO",32,0,"px",17,"px",null,"","Valor Cadastrado","Image","");
   GridContainer.addBitmap("&Snatributovencimento","vSNATRIBUTOVENCIMENTO",33,0,"px",17,"px",null,"","Atributo Vencimento","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV16EsquemaCodigo",gxold:"OV16EsquemaCodigo",gxvar:"AV16EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV16EsquemaCodigo,0)},c2v:function(){gx.O.AV16EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV17EsquemaDescricao",gxold:"OV17EsquemaDescricao",gxvar:"AV17EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV17EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV17EsquemaDescricao,0)},c2v:function(){gx.O.AV17EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vATRIBUTOESQUEMACODIGO",gxz:"ZV22AtributoEsquemaCodigo",gxold:"OV22AtributoEsquemaCodigo",gxvar:"AV22AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMACODIGO",gx.O.AV22AtributoEsquemaCodigo,0)},c2v:function(){gx.O.AV22AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vATRIBUTOESQUEMADESCRICAO",gxz:"ZV21AtributoEsquemaDescricao",gxold:"OV21AtributoEsquemaDescricao",gxvar:"AV21AtributoEsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.ZV21AtributoEsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMADESCRICAO",gx.O.AV21AtributoEsquemaDescricao,0)},c2v:function(){gx.O.AV21AtributoEsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vATRIBUTOESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMACODIGO",gxz:"Z2921AtributoEsquemaCodigo",gxold:"O2921AtributoEsquemaCodigo",gxvar:"A2921AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATRIBUTOESQUEMACODIGO",row || gx.fn.currentGridRowImpl(29),gx.O.A2921AtributoEsquemaCodigo,0)},c2v:function(){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATRIBUTOESQUEMACODIGO",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMADESCRICAO",gxz:"Z2916AtributoEsquemaDescricao",gxold:"O2916AtributoEsquemaDescricao",gxvar:"A2916AtributoEsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2916AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.Z2916AtributoEsquemaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ATRIBUTOESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2916AtributoEsquemaDescricao,0)},c2v:function(){gx.O.A2916AtributoEsquemaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ATRIBUTOESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALORCADASTRADO",gxz:"ZV19SnValorCadastrado",gxold:"OV19SnValorCadastrado",gxvar:"AV19SnValorCadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19SnValorCadastrado=Value},v2z:function(Value){gx.O.ZV19SnValorCadastrado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNVALORCADASTRADO",row || gx.fn.currentGridRowImpl(29),gx.O.AV19SnValorCadastrado,gx.O.AV28Snvalorcadastrado_GXI)},c2v:function(){gx.O.AV28Snvalorcadastrado_GXI=this.val_GXI();gx.O.AV19SnValorCadastrado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNVALORCADASTRADO",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNVALORCADASTRADO_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV28Snvalorcadastrado_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNATRIBUTOVENCIMENTO",gxz:"ZV18SnAtributoVencimento",gxold:"OV18SnAtributoVencimento",gxvar:"AV18SnAtributoVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18SnAtributoVencimento=Value},v2z:function(Value){gx.O.ZV18SnAtributoVencimento=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNATRIBUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(29),gx.O.AV18SnAtributoVencimento,gx.O.AV29Snatributovencimento_GXI)},c2v:function(){gx.O.AV29Snatributovencimento_GXI=this.val_GXI();gx.O.AV18SnAtributoVencimento=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNATRIBUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNATRIBUTOVENCIMENTO_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV29Snatributovencimento_GXI',nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[50]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16EsquemaCodigo = 0 ;
   this.ZV16EsquemaCodigo = 0 ;
   this.OV16EsquemaCodigo = 0 ;
   this.AV17EsquemaDescricao = "" ;
   this.ZV17EsquemaDescricao = "" ;
   this.OV17EsquemaDescricao = "" ;
   this.AV22AtributoEsquemaCodigo = 0 ;
   this.ZV22AtributoEsquemaCodigo = 0 ;
   this.OV22AtributoEsquemaCodigo = 0 ;
   this.AV21AtributoEsquemaDescricao = "" ;
   this.ZV21AtributoEsquemaDescricao = "" ;
   this.OV21AtributoEsquemaDescricao = "" ;
   this.Z2921AtributoEsquemaCodigo = 0 ;
   this.O2921AtributoEsquemaCodigo = 0 ;
   this.Z2916AtributoEsquemaDescricao = "" ;
   this.O2916AtributoEsquemaDescricao = "" ;
   this.ZV19SnValorCadastrado = "" ;
   this.OV19SnValorCadastrado = "" ;
   this.ZV18SnAtributoVencimento = "" ;
   this.OV18SnAtributoVencimento = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16EsquemaCodigo = 0 ;
   this.AV17EsquemaDescricao = "" ;
   this.AV22AtributoEsquemaCodigo = 0 ;
   this.AV21AtributoEsquemaDescricao = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV20cAtributoEsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.AV19SnValorCadastrado = "" ;
   this.AV18SnAtributoVencimento = "" ;
   this.Events = {"e17mt2_client": ["ENTER", true] ,"e11mt2_client": ["'GXM_FIRST'", true] ,"e12mt2_client": ["'GXM_PREVIOUS'", true] ,"e13mt2_client": ["'GXM_NEXT'", true] ,"e14mt2_client": ["'GXM_LAST'", true] ,"e15mt2_client": ["'PROCURAR'", true] ,"e20mt2_client": ["'ATUALIZAPAGINA'", true] ,"e21mt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ATRIBUTOESQUEMACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ATRIBUTOESQUEMACODIGO","Title")',ctrl:'ATRIBUTOESQUEMACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ATRIBUTOESQUEMADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ATRIBUTOESQUEMADESCRICAO","Title")',ctrl:'ATRIBUTOESQUEMADESCRICAO',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'}],[{av:'AV20cAtributoEsquemaCodigo',fld:'vCATRIBUTOESQUEMACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[{av:'AV19SnValorCadastrado',fld:'vSNVALORCADASTRADO'},{av:'AV18SnAtributoVencimento',fld:'vSNATRIBUTOVENCIMENTO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV21AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16EsquemaCodigo',fld:'vESQUEMACODIGO',hsh:true},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[]];
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2918AtributoEsquemaSnVencimento", "ATRIBUTOESQUEMASNVENCIMENTO", 0, "char");
   this.setVCMap("AV20cAtributoEsquemaCodigo", "vCATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2918AtributoEsquemaSnVencimento", "ATRIBUTOESQUEMASNVENCIMENTO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   GridContainer.addRefreshingVar({rfrVar:"A2918AtributoEsquemaSnVencimento"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaatributoesquema());
