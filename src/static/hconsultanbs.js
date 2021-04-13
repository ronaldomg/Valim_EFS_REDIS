/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:0.49
*/
gx.evt.autoSkip = false;
gx.define('hconsultanbs', false, function () {
   this.ServerClass =  "hconsultanbs" ;
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
      this.AV27NBSCodigoIN=gx.fn.getIntegerValue("vNBSCODIGOIN",'.') ;
      this.AV22SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV26NBSCodigo=gx.fn.getIntegerValue("vNBSCODIGO",'.') ;
   };
   this.e1812c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1112c2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1212c2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1312c2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1412c2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1512c2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1612c2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e2112c2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2212c2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2312c1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,39,41,43,45,47,48,49,50];
   this.GXLastCtrlId =50;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultanbs",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(7634,24,"NBSCODIGO","","","NBSCodigo","int",0,"px",10,10,"right",null,[],7634,"NBSCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricaonbs",25,"vDESCRICAONBS","","","DescricaoNBS","svchar",0,"px",50,50,"left",null,[],"Descricaonbs","DescricaoNBS",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",26,0,"px",17,"px","e2112c2_client","","Alt","Image","");
   GridContainer.addSingleLineEdit(7629,27,"NBSDESCRICAO","Descrição do NBS","","NBSDescricao","svchar",0,"px",150,80,"left",null,[],7629,"NBSDescricao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNBSCOD",gxz:"ZV29NBSCod",gxold:"OV29NBSCod",gxvar:"AV29NBSCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NBSCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29NBSCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSCOD",gx.O.AV29NBSCod,0)},c2v:function(){gx.O.AV29NBSCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSCOD",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNBSDESC",gxz:"ZV30NBSDesc",gxold:"OV30NBSDesc",gxvar:"AV30NBSDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30NBSDesc=Value},v2z:function(Value){gx.O.ZV30NBSDesc=Value},v2c:function(){gx.fn.setControlValue("vNBSDESC",gx.O.AV30NBSDesc,0)},c2v:function(){gx.O.AV30NBSDesc=this.val()},val:function(){return gx.fn.getControlValue("vNBSDESC")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NBSCODIGO",gxz:"Z7634NBSCodigo",gxold:"O7634NBSCodigo",gxvar:"A7634NBSCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7634NBSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7634NBSCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NBSCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A7634NBSCodigo,0)},c2v:function(){gx.O.A7634NBSCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NBSCODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAONBS",gxz:"ZV28DescricaoNBS",gxold:"OV28DescricaoNBS",gxvar:"AV28DescricaoNBS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28DescricaoNBS=Value},v2z:function(Value){gx.O.ZV28DescricaoNBS=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAONBS",row || gx.fn.currentGridRowImpl(23),gx.O.AV28DescricaoNBS,0)},c2v:function(){gx.O.AV28DescricaoNBS=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAONBS",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpAlt",gxold:"OV21bmpAlt",gxvar:"AV21bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpAlt=Value},v2z:function(Value){gx.O.ZV21bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV21bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NBSDESCRICAO",gxz:"Z7629NBSDescricao",gxold:"O7629NBSDescricao",gxvar:"A7629NBSDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7629NBSDescricao=Value},v2z:function(Value){gx.O.Z7629NBSDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NBSDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A7629NBSDescricao,0)},c2v:function(){gx.O.A7629NBSDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NBSDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNADD",grid:0};
   GXValidFnc[39]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[47]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV29NBSCod = 0 ;
   this.ZV29NBSCod = 0 ;
   this.OV29NBSCod = 0 ;
   this.AV30NBSDesc = "" ;
   this.ZV30NBSDesc = "" ;
   this.OV30NBSDesc = "" ;
   this.Z7634NBSCodigo = 0 ;
   this.O7634NBSCodigo = 0 ;
   this.ZV28DescricaoNBS = "" ;
   this.OV28DescricaoNBS = "" ;
   this.ZV21bmpAlt = "" ;
   this.OV21bmpAlt = "" ;
   this.Z7629NBSDescricao = "" ;
   this.O7629NBSDescricao = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV29NBSCod = 0 ;
   this.AV30NBSDesc = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV26NBSCodigo = 0 ;
   this.AV27NBSCodigoIN = 0 ;
   this.A7634NBSCodigo = 0 ;
   this.AV28DescricaoNBS = "" ;
   this.AV21bmpAlt = "" ;
   this.A7629NBSDescricao = "" ;
   this.AV22SnParametro = "" ;
   this.Events = {"e1812c2_client": ["ENTER", true] ,"e1112c2_client": ["'GXM_FIRST'", true] ,"e1212c2_client": ["'GXM_PREVIOUS'", true] ,"e1312c2_client": ["'GXM_NEXT'", true] ,"e1412c2_client": ["'GXM_LAST'", true] ,"e1512c2_client": ["'PROCURAR'", true] ,"e1612c2_client": ["'NOVO'", true] ,"e2112c2_client": ["'ALTERAR'", true] ,"e2212c2_client": ["'ATUALIZAPAGINA'", true] ,"e2312c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{ctrl:'NBSCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NBSCODIGO","Title")',ctrl:'NBSCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAONBS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAONBS","Title")',ctrl:'vDESCRICAONBS',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A7634NBSCodigo',fld:'NBSCODIGO'}],[{av:'AV26NBSCodigo',fld:'vNBSCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[{av:'AV28DescricaoNBS',fld:'vDESCRICAONBS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A7634NBSCodigo',fld:'NBSCODIGO'}],[{av:'A7634NBSCodigo',fld:'NBSCODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29NBSCod',fld:'vNBSCOD'},{av:'AV30NBSDesc',fld:'vNBSDESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV27NBSCodigoIN',fld:'vNBSCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A7629NBSDescricao',fld:'NBSDESCRICAO'}],[]];
   this.setVCMap("AV27NBSCodigoIN", "vNBSCODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV26NBSCodigo", "vNBSCODIGO", 0, "int");
   this.setVCMap("AV27NBSCodigoIN", "vNBSCODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV27NBSCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A7629NBSDescricao", rfrProp:"Value", gxAttId:"7629"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultanbs());
