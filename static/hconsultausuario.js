/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:33.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultausuario', false, function () {
   this.ServerClass =  "hconsultausuario" ;
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
      this.A612UsuarioSituacao=gx.fn.getControlValue("USUARIOSITUACAO") ;
      this.AV13PUsuarioId=gx.fn.getControlValue("vPUSUARIOID") ;
   };
   this.e171m2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111m2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121m2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131m2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141m2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151m2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201m1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultausuario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(75,24,"USUARIOID","","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(219,25,"USUARIONOME","","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],219,"UsuarioNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(604,26,"USUARIOPRIVILEGIO","","UsuarioPrivilegio","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpsit","vBMPSIT",27,0,"px",17,"px",null,"","Situação","Image","");
   GridContainer.addSingleLineEdit(609,28,"USUARIODATASENHA","","","UsuarioDataSenha","date",0,"px",10,10,"right",null,[],609,"UsuarioDataSenha",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV11UsuarioId",gxold:"OV11UsuarioId",gxvar:"AV11UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11UsuarioId=Value},v2z:function(Value){gx.O.ZV11UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV11UsuarioId,0)},c2v:function(){gx.O.AV11UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIONOME",gxz:"ZV12UsuarioNome",gxold:"OV12UsuarioNome",gxvar:"AV12UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12UsuarioNome=Value},v2z:function(Value){gx.O.ZV12UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV12UsuarioNome,0)},c2v:function(){gx.O.AV12UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(23),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(23),gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOPRIVILEGIO",gxz:"Z604UsuarioPrivilegio",gxold:"O604UsuarioPrivilegio",gxvar:"A604UsuarioPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A604UsuarioPrivilegio=Value},v2z:function(Value){gx.O.Z604UsuarioPrivilegio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("USUARIOPRIVILEGIO",row || gx.fn.currentGridRowImpl(23),gx.O.A604UsuarioPrivilegio);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A604UsuarioPrivilegio=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOPRIVILEGIO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIT",gxz:"ZV16bmpSit",gxold:"OV16bmpSit",gxvar:"AV16bmpSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpSit=Value},v2z:function(Value){gx.O.ZV16bmpSit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIT",row || gx.fn.currentGridRowImpl(23),gx.O.AV16bmpSit,gx.O.AV24Bmpsit_GXI)},c2v:function(){gx.O.AV24Bmpsit_GXI=this.val_GXI();gx.O.AV16bmpSit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV24Bmpsit_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIODATASENHA",gxz:"Z609UsuarioDataSenha",gxold:"O609UsuarioDataSenha",gxvar:"A609UsuarioDataSenha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A609UsuarioDataSenha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z609UsuarioDataSenha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("USUARIODATASENHA",row || gx.fn.currentGridRowImpl(23),gx.O.A609UsuarioDataSenha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A609UsuarioDataSenha=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("USUARIODATASENHA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV11UsuarioId = "" ;
   this.ZV11UsuarioId = "" ;
   this.OV11UsuarioId = "" ;
   this.AV12UsuarioNome = "" ;
   this.ZV12UsuarioNome = "" ;
   this.OV12UsuarioNome = "" ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.Z604UsuarioPrivilegio = "" ;
   this.O604UsuarioPrivilegio = "" ;
   this.ZV16bmpSit = "" ;
   this.OV16bmpSit = "" ;
   this.Z609UsuarioDataSenha = gx.date.nullDate() ;
   this.O609UsuarioDataSenha = gx.date.nullDate() ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV11UsuarioId = "" ;
   this.AV12UsuarioNome = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV13PUsuarioId = "" ;
   this.A612UsuarioSituacao = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A604UsuarioPrivilegio = "" ;
   this.AV16bmpSit = "" ;
   this.A609UsuarioDataSenha = gx.date.nullDate() ;
   this.Events = {"e171m2_client": ["ENTER", true] ,"e111m2_client": ["'GXM_FIRST'", true] ,"e121m2_client": ["'GXM_PREVIOUS'", true] ,"e131m2_client": ["'GXM_NEXT'", true] ,"e141m2_client": ["'GXM_LAST'", true] ,"e151m2_client": ["'PROCURAR'", true] ,"e201m1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'USUARIONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIONOME","Title")',ctrl:'USUARIONOME',prop:'Title'},{ctrl:'USUARIOPRIVILEGIO'},{ctrl:'USUARIODATASENHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIODATASENHA","Title")',ctrl:'USUARIODATASENHA',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A75UsuarioId',fld:'USUARIOID'}],[{av:'AV13PUsuarioId',fld:'vPUSUARIOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'}],[{av:'AV16bmpSit',fld:'vBMPSIT'},{av:'gx.fn.getCtrlProperty("vBMPSIT","Tooltiptext")',ctrl:'vBMPSIT',prop:'Tooltiptext'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11UsuarioId',fld:'vUSUARIOID'},{av:'AV12UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.setVCMap("A612UsuarioSituacao", "USUARIOSITUACAO", 0, "char");
   this.setVCMap("AV13PUsuarioId", "vPUSUARIOID", 0, "char");
   this.setVCMap("A612UsuarioSituacao", "USUARIOSITUACAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"A612UsuarioSituacao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultausuario());
