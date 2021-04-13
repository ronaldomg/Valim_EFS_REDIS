/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:12:17.21
*/
gx.evt.autoSkip = false;
gx.define('hconsultaconvenio', false, function () {
   this.ServerClass =  "hconsultaconvenio" ;
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
      this.AV20OutConvenioId=gx.fn.getIntegerValue("vOUTCONVENIOID",'.') ;
   };
   this.e17b32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11b32_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12b32_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13b32_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14b32_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15b32_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19b32_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21b31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,40,43,45,47,49,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaconvenio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1681,29,"CONVENIOID","","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2082,30,"CONVENIODESCRICAO","","","ConvenioDescricao","svchar",0,"px",40,40,"left",null,[],2082,"ConvenioDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2083,31,"CONVENIONUMERO","","","ConvenioNumero","svchar",0,"px",50,50,"left",null,[],2083,"ConvenioNumero",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2084,32,"CONVENIOEXERCICIO","","","ConvenioExercicio","svchar",0,"px",15,15,"left",null,[],2084,"ConvenioExercicio",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2087,33,"CONVENIOVENCIMENTO","","","ConvenioVencimento","date",0,"px",10,10,"right",null,[],2087,"ConvenioVencimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2080,34,"CONVENIOTIPOCONVENIO","","ConvenioTipoConvenio","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV15ConvenioId",gxold:"OV15ConvenioId",gxvar:"AV15ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV15ConvenioId,0)},c2v:function(){gx.O.AV15ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIODESCRICAO",gxz:"ZV18ConvenioDescricao",gxold:"OV18ConvenioDescricao",gxvar:"AV18ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV18ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV18ConvenioDescricao,0)},c2v:function(){gx.O.AV18ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOTIPOCONVENIO",gxz:"ZV19ConvenioTipoConvenio",gxold:"OV19ConvenioTipoConvenio",gxvar:"AV19ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19ConvenioTipoConvenio=Value},v2z:function(Value){gx.O.ZV19ConvenioTipoConvenio=Value},v2c:function(){gx.fn.setComboBoxValue("vCONVENIOTIPOCONVENIO",gx.O.AV19ConvenioTipoConvenio)},c2v:function(){gx.O.AV19ConvenioTipoConvenio=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOTIPOCONVENIO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOID",row || gx.fn.currentGridRowImpl(28),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIONUMERO",gxz:"Z2083ConvenioNumero",gxold:"O2083ConvenioNumero",gxvar:"A2083ConvenioNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2083ConvenioNumero=Value},v2z:function(Value){gx.O.Z2083ConvenioNumero=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIONUMERO",row || gx.fn.currentGridRowImpl(28),gx.O.A2083ConvenioNumero,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2083ConvenioNumero=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIONUMERO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOEXERCICIO",gxz:"Z2084ConvenioExercicio",gxold:"O2084ConvenioExercicio",gxvar:"A2084ConvenioExercicio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2084ConvenioExercicio=Value},v2z:function(Value){gx.O.Z2084ConvenioExercicio=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOEXERCICIO",row || gx.fn.currentGridRowImpl(28),gx.O.A2084ConvenioExercicio,0)},c2v:function(){gx.O.A2084ConvenioExercicio=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOEXERCICIO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVENCIMENTO",gxz:"Z2087ConvenioVencimento",gxold:"O2087ConvenioVencimento",gxvar:"A2087ConvenioVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2087ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVENCIMENTO",row || gx.fn.currentGridRowImpl(28),gx.O.A2087ConvenioVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONVENIOVENCIMENTO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOTIPOCONVENIO",gxz:"Z2080ConvenioTipoConvenio",gxold:"O2080ConvenioTipoConvenio",gxvar:"A2080ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2080ConvenioTipoConvenio=Value},v2z:function(Value){gx.O.Z2080ConvenioTipoConvenio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONVENIOTIPOCONVENIO",row || gx.fn.currentGridRowImpl(28),gx.O.A2080ConvenioTipoConvenio)},c2v:function(){gx.O.A2080ConvenioTipoConvenio=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOTIPOCONVENIO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLENAV",grid:0};
   GXValidFnc[43]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[51]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15ConvenioId = 0 ;
   this.ZV15ConvenioId = 0 ;
   this.OV15ConvenioId = 0 ;
   this.AV18ConvenioDescricao = "" ;
   this.ZV18ConvenioDescricao = "" ;
   this.OV18ConvenioDescricao = "" ;
   this.AV19ConvenioTipoConvenio = "" ;
   this.ZV19ConvenioTipoConvenio = "" ;
   this.OV19ConvenioTipoConvenio = "" ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.Z2083ConvenioNumero = "" ;
   this.O2083ConvenioNumero = "" ;
   this.Z2084ConvenioExercicio = "" ;
   this.O2084ConvenioExercicio = "" ;
   this.Z2087ConvenioVencimento = gx.date.nullDate() ;
   this.O2087ConvenioVencimento = gx.date.nullDate() ;
   this.Z2080ConvenioTipoConvenio = "" ;
   this.O2080ConvenioTipoConvenio = "" ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15ConvenioId = 0 ;
   this.AV18ConvenioDescricao = "" ;
   this.AV19ConvenioTipoConvenio = "" ;
   this.AV25PaginaAux = 0 ;
   this.AV24Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV20OutConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.A2083ConvenioNumero = "" ;
   this.A2084ConvenioExercicio = "" ;
   this.A2087ConvenioVencimento = gx.date.nullDate() ;
   this.A2080ConvenioTipoConvenio = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17b32_client": ["ENTER", true] ,"e11b32_client": ["'GXM_FIRST'", true] ,"e12b32_client": ["'GXM_PREVIOUS'", true] ,"e13b32_client": ["'GXM_NEXT'", true] ,"e14b32_client": ["'GXM_LAST'", true] ,"e15b32_client": ["'PROCURAR'", true] ,"e19b32_client": ["'ATUALIZAPAGINA'", true] ,"e21b31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CONVENIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOID","Title")',ctrl:'CONVENIOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CONVENIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIODESCRICAO","Title")',ctrl:'CONVENIODESCRICAO',prop:'Title'},{ctrl:'CONVENIONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIONUMERO","Title")',ctrl:'CONVENIONUMERO',prop:'Title'},{ctrl:'CONVENIOEXERCICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOEXERCICIO","Title")',ctrl:'CONVENIOEXERCICIO',prop:'Title'},{ctrl:'CONVENIOVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOVENCIMENTO","Title")',ctrl:'CONVENIOVENCIMENTO',prop:'Title'},{ctrl:'CONVENIOTIPOCONVENIO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'}],[{av:'AV20OutConvenioId',fld:'vOUTCONVENIOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvenioId',fld:'vCONVENIOID'},{av:'AV18ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV19ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20OutConvenioId", "vOUTCONVENIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaconvenio());
