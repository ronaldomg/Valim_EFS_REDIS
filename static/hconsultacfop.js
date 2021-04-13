/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:51.99
*/
gx.evt.autoSkip = false;
gx.define('hconsultacfop', false, function () {
   this.ServerClass =  "hconsultacfop" ;
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
      this.AV22CFOPCodigoIN=gx.fn.getIntegerValue("vCFOPCODIGOIN",'.') ;
      this.AV23SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV18CFOPTipoEntSai=gx.fn.getControlValue("vCFOPTIPOENTSAI") ;
      this.AV19PCFOPCodigo=gx.fn.getIntegerValue("vPCFOPCODIGO",'.') ;
   };
   this.e18mw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11mw2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12mw2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13mw2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14mw2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15mw2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16mw2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21mw2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22mw2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23mw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,35,38,41,43,45,47,49,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacfop",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3430,24,"CFOPCODIGO","","","CFOPCodigo","int",0,"px",4,4,"right",null,[],3430,"CFOPCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Cfopdescricaogrid",25,"vCFOPDESCRICAOGRID","","","CFOPDescricaoGrid","svchar",0,"px",40,40,"left",null,[],"Cfopdescricaogrid","CFOPDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3436,26,"CFOPDESCRICAO","Descrição CFOP","","CFOPDescricao","svchar",410,"px",340,80,"left",null,[],3436,"CFOPDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3444,27,"CFOPTIPOENTSAI","Entrada/Saída","","CFOPTipoEntSai","char",0,"px",2,2,"left",null,[],3444,"CFOPTipoEntSai",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipo",28,"vTIPO","Tipo","","Tipo","svchar",0,"px",50,50,"left",null,[],"Tipo","Tipo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",29,0,"px",17,"px","e21mw2_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPCODIGO",gxz:"ZV16CFOPCodigo",gxold:"OV16CFOPCodigo",gxvar:"AV16CFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGO",gx.O.AV16CFOPCodigo,0)},c2v:function(){gx.O.AV16CFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:340,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPDESCRICAO",gxz:"ZV17CFOPDescricao",gxold:"OV17CFOPDescricao",gxvar:"AV17CFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CFOPDescricao=Value},v2z:function(Value){gx.O.ZV17CFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("vCFOPDESCRICAO",gx.O.AV17CFOPDescricao,0)},c2v:function(){gx.O.AV17CFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPCODIGO",gxz:"Z3430CFOPCodigo",gxold:"O3430CFOPCodigo",gxvar:"A3430CFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3430CFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3430CFOPCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CFOPCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A3430CFOPCodigo,0)},c2v:function(){gx.O.A3430CFOPCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CFOPCODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPDESCRICAOGRID",gxz:"ZV26CFOPDescricaoGrid",gxold:"OV26CFOPDescricaoGrid",gxvar:"AV26CFOPDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV26CFOPDescricaoGrid=Value},v2z:function(Value){gx.O.ZV26CFOPDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCFOPDESCRICAOGRID",row || gx.fn.currentGridRowImpl(23),gx.O.AV26CFOPDescricaoGrid,0)},c2v:function(){gx.O.AV26CFOPDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCFOPDESCRICAOGRID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:340,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPDESCRICAO",gxz:"Z3436CFOPDescricao",gxold:"O3436CFOPDescricao",gxvar:"A3436CFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3436CFOPDescricao=Value},v2z:function(Value){gx.O.Z3436CFOPDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CFOPDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3436CFOPDescricao,0)},c2v:function(){gx.O.A3436CFOPDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CFOPDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPTIPOENTSAI",gxz:"Z3444CFOPTipoEntSai",gxold:"O3444CFOPTipoEntSai",gxvar:"A3444CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3444CFOPTipoEntSai=Value},v2z:function(Value){gx.O.Z3444CFOPTipoEntSai=Value},v2c:function(row){gx.fn.setGridControlValue("CFOPTIPOENTSAI",row || gx.fn.currentGridRowImpl(23),gx.O.A3444CFOPTipoEntSai,0)},c2v:function(){gx.O.A3444CFOPTipoEntSai=this.val()},val:function(row){return gx.fn.getGridControlValue("CFOPTIPOENTSAI",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV20Tipo",gxold:"OV20Tipo",gxvar:"AV20Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20Tipo=Value},v2z:function(Value){gx.O.ZV20Tipo=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(23),gx.O.AV20Tipo,0)},c2v:function(){gx.O.AV20Tipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpAlt",gxold:"OV21bmpAlt",gxvar:"AV21bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpAlt=Value},v2z:function(Value){gx.O.ZV21bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV21bmpAlt,gx.O.AV31Bmpalt_GXI)},c2v:function(){gx.O.AV31Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV31Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLENAV",grid:0};
   GXValidFnc[38]={fld:"BTNADD",grid:0};
   GXValidFnc[41]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[49]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[50]={fld:"JSPROMPT", format:2,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV25Pagina)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16CFOPCodigo = 0 ;
   this.ZV16CFOPCodigo = 0 ;
   this.OV16CFOPCodigo = 0 ;
   this.AV17CFOPDescricao = "" ;
   this.ZV17CFOPDescricao = "" ;
   this.OV17CFOPDescricao = "" ;
   this.Z3430CFOPCodigo = 0 ;
   this.O3430CFOPCodigo = 0 ;
   this.ZV26CFOPDescricaoGrid = "" ;
   this.OV26CFOPDescricaoGrid = "" ;
   this.Z3436CFOPDescricao = "" ;
   this.O3436CFOPDescricao = "" ;
   this.Z3444CFOPTipoEntSai = "" ;
   this.O3444CFOPTipoEntSai = "" ;
   this.ZV20Tipo = "" ;
   this.OV20Tipo = "" ;
   this.ZV21bmpAlt = "" ;
   this.OV21bmpAlt = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16CFOPCodigo = 0 ;
   this.AV17CFOPDescricao = "" ;
   this.AV25Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18CFOPTipoEntSai = "" ;
   this.AV19PCFOPCodigo = 0 ;
   this.AV22CFOPCodigoIN = 0 ;
   this.A3430CFOPCodigo = 0 ;
   this.AV26CFOPDescricaoGrid = "" ;
   this.A3436CFOPDescricao = "" ;
   this.A3444CFOPTipoEntSai = "" ;
   this.AV20Tipo = "" ;
   this.AV21bmpAlt = "" ;
   this.AV23SnParametro = "" ;
   this.Events = {"e18mw2_client": ["ENTER", true] ,"e11mw2_client": ["'GXM_FIRST'", true] ,"e12mw2_client": ["'GXM_PREVIOUS'", true] ,"e13mw2_client": ["'GXM_NEXT'", true] ,"e14mw2_client": ["'GXM_LAST'", true] ,"e15mw2_client": ["'PROCURAR'", true] ,"e16mw2_client": ["'NOVO'", true] ,"e21mw2_client": ["'ALTERAR'", true] ,"e22mw2_client": ["'ATUALIZAPAGINA'", true] ,"e23mw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{ctrl:'CFOPCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CFOPCODIGO","Title")',ctrl:'CFOPCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vCFOPDESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCFOPDESCRICAOGRID","Title")',ctrl:'vCFOPDESCRICAOGRID',prop:'Title'},{av:'AV27NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'}],[{av:'AV19PCFOPCodigo',fld:'vPCFOPCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'AV18CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI',hsh:true}],[{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["LOAD"] = [[{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'}],[{av:'AV20Tipo',fld:'vTIPO'},{av:'AV26CFOPDescricaoGrid',fld:'vCFOPDESCRICAOGRID'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV18CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI',hsh:true}],[{av:'AV18CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI',hsh:true}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV25Pagina',fld:'vPAGINA'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV18CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI',hsh:true}],[{av:'AV18CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI',hsh:true},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV17CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22CFOPCodigoIN',fld:'vCFOPCODIGOIN',hsh:true},{av:'AV23SnParametro',fld:'vSNPARAMETRO'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'}],[]];
   this.setVCMap("AV22CFOPCodigoIN", "vCFOPCODIGOIN", 0, "int");
   this.setVCMap("AV23SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV18CFOPTipoEntSai", "vCFOPTIPOENTSAI", 0, "char");
   this.setVCMap("AV19PCFOPCodigo", "vPCFOPCODIGO", 0, "int");
   this.setVCMap("AV22CFOPCodigoIN", "vCFOPCODIGOIN", 0, "int");
   this.setVCMap("AV23SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV22CFOPCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV23SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A3444CFOPTipoEntSai", rfrProp:"Value", gxAttId:"3444"});
   GridContainer.addRefreshingVar({rfrVar:"A3436CFOPDescricao", rfrProp:"Value", gxAttId:"3436"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacfop());
