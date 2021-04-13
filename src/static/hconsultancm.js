/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:28.32
*/
gx.evt.autoSkip = false;
gx.define('hconsultancm', false, function () {
   this.ServerClass =  "hconsultancm" ;
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
      this.AV29NCMCodigoIN=gx.fn.getIntegerValue("vNCMCODIGOIN",'.') ;
      this.AV22SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV28NCMCodigo=gx.fn.getIntegerValue("vNCMCODIGO",'.') ;
   };
   this.e16ne2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11ne2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ne2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ne2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ne2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ne2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e17ne2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20ne2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22ne2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23ne1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,35,38,41,43,45,47,49,50,51,52];
   this.GXLastCtrlId =52;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultancm",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2979,24,"NCMCODIGO","","","NCMCodigo","int",0,"px",8,8,"right","e16ne2_client",[],2979,"NCMCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricaoncm",25,"vDESCRICAONCM","","","DescricaoNCM","char",0,"px",50,50,"left",null,[],"Descricaoncm","DescricaoNCM",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(7636,26,"NCMALIQUOTAIMPORTACAO","Alíquota Imp","","NCMAliquotaImportacao","decimal",0,"px",6,6,"right",null,[],7636,"NCMAliquotaImportacao",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7635,27,"NCMALIQUOTANACIONAL","Alíquota Nac","","NCMAliquotaNacional","decimal",0,"px",6,6,"right",null,[],7635,"NCMAliquotaNacional",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2976,28,"NCMDESCRICAO","Descrição do NCM","","NCMDescricao","svchar",0,"px",150,80,"left",null,[],2976,"NCMDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",29,0,"px",17,"px","e20ne2_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNCMCOD",gxz:"ZV26NCMCod",gxold:"OV26NCMCod",gxvar:"AV26NCMCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26NCMCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26NCMCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCOD",gx.O.AV26NCMCod,0)},c2v:function(){gx.O.AV26NCMCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCOD",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNCMDESC",gxz:"ZV27NCMDesc",gxold:"OV27NCMDesc",gxvar:"AV27NCMDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NCMDesc=Value},v2z:function(Value){gx.O.ZV27NCMDesc=Value},v2c:function(){gx.fn.setControlValue("vNCMDESC",gx.O.AV27NCMDesc,0)},c2v:function(){gx.O.AV27NCMDesc=this.val()},val:function(){return gx.fn.getControlValue("vNCMDESC")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NCMCODIGO",gxz:"Z2979NCMCodigo",gxold:"O2979NCMCodigo",gxvar:"A2979NCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2979NCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2979NCMCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NCMCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A2979NCMCodigo,0)},c2v:function(){gx.O.A2979NCMCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NCMCODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAONCM",gxz:"ZV16DescricaoNCM",gxold:"OV16DescricaoNCM",gxvar:"AV16DescricaoNCM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16DescricaoNCM=Value},v2z:function(Value){gx.O.ZV16DescricaoNCM=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAONCM",row || gx.fn.currentGridRowImpl(23),gx.O.AV16DescricaoNCM,0)},c2v:function(){gx.O.AV16DescricaoNCM=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAONCM",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NCMALIQUOTAIMPORTACAO",gxz:"Z7636NCMAliquotaImportacao",gxold:"O7636NCMAliquotaImportacao",gxvar:"A7636NCMAliquotaImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7636NCMAliquotaImportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7636NCMAliquotaImportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("NCMALIQUOTAIMPORTACAO",row || gx.fn.currentGridRowImpl(23),gx.O.A7636NCMAliquotaImportacao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7636NCMAliquotaImportacao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("NCMALIQUOTAIMPORTACAO",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NCMALIQUOTANACIONAL",gxz:"Z7635NCMAliquotaNacional",gxold:"O7635NCMAliquotaNacional",gxvar:"A7635NCMAliquotaNacional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7635NCMAliquotaNacional=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7635NCMAliquotaNacional=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("NCMALIQUOTANACIONAL",row || gx.fn.currentGridRowImpl(23),gx.O.A7635NCMAliquotaNacional,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7635NCMAliquotaNacional=this.val()},val:function(row){return gx.fn.getGridDecimalValue("NCMALIQUOTANACIONAL",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NCMDESCRICAO",gxz:"Z2976NCMDescricao",gxold:"O2976NCMDescricao",gxvar:"A2976NCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2976NCMDescricao=Value},v2z:function(Value){gx.O.Z2976NCMDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NCMDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A2976NCMDescricao,0)},c2v:function(){gx.O.A2976NCMDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NCMDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpAlt",gxold:"OV21bmpAlt",gxvar:"AV21bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpAlt=Value},v2z:function(Value){gx.O.ZV21bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV21bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLENAV",grid:0};
   GXValidFnc[38]={fld:"BTNADD",grid:0};
   GXValidFnc[41]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[49]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV26NCMCod = 0 ;
   this.ZV26NCMCod = 0 ;
   this.OV26NCMCod = 0 ;
   this.AV27NCMDesc = "" ;
   this.ZV27NCMDesc = "" ;
   this.OV27NCMDesc = "" ;
   this.Z2979NCMCodigo = 0 ;
   this.O2979NCMCodigo = 0 ;
   this.ZV16DescricaoNCM = "" ;
   this.OV16DescricaoNCM = "" ;
   this.Z7636NCMAliquotaImportacao = 0 ;
   this.O7636NCMAliquotaImportacao = 0 ;
   this.Z7635NCMAliquotaNacional = 0 ;
   this.O7635NCMAliquotaNacional = 0 ;
   this.Z2976NCMDescricao = "" ;
   this.O2976NCMDescricao = "" ;
   this.ZV21bmpAlt = "" ;
   this.OV21bmpAlt = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV26NCMCod = 0 ;
   this.AV27NCMDesc = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV28NCMCodigo = 0 ;
   this.AV29NCMCodigoIN = 0 ;
   this.A2979NCMCodigo = 0 ;
   this.AV16DescricaoNCM = "" ;
   this.A7636NCMAliquotaImportacao = 0 ;
   this.A7635NCMAliquotaNacional = 0 ;
   this.A2976NCMDescricao = "" ;
   this.AV21bmpAlt = "" ;
   this.AV22SnParametro = "" ;
   this.Events = {"e16ne2_client": ["ENTER", true] ,"e11ne2_client": ["'GXM_FIRST'", true] ,"e12ne2_client": ["'GXM_PREVIOUS'", true] ,"e13ne2_client": ["'GXM_NEXT'", true] ,"e14ne2_client": ["'GXM_LAST'", true] ,"e15ne2_client": ["'PROCURAR'", true] ,"e17ne2_client": ["'NOVO'", true] ,"e20ne2_client": ["'ALTERAR'", true] ,"e22ne2_client": ["'ATUALIZAPAGINA'", true] ,"e23ne1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{ctrl:'NCMCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NCMCODIGO","Title")',ctrl:'NCMCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAONCM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAONCM","Title")',ctrl:'vDESCRICAONCM',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2979NCMCodigo',fld:'NCMCODIGO'}],[{av:'AV28NCMCodigo',fld:'vNCMCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2979NCMCodigo',fld:'NCMCODIGO'}],[{av:'A2979NCMCodigo',fld:'NCMCODIGO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[{av:'AV16DescricaoNCM',fld:'vDESCRICAONCM'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26NCMCod',fld:'vNCMCOD'},{av:'AV27NCMDesc',fld:'vNCMDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV29NCMCodigoIN',fld:'vNCMCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A2976NCMDescricao',fld:'NCMDESCRICAO'}],[]];
   this.EnterCtrl = ["NCMCODIGO"];
   this.setVCMap("AV29NCMCodigoIN", "vNCMCODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV28NCMCodigo", "vNCMCODIGO", 0, "int");
   this.setVCMap("AV29NCMCodigoIN", "vNCMCODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV29NCMCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A2976NCMDescricao", rfrProp:"Value", gxAttId:"2976"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultancm());
