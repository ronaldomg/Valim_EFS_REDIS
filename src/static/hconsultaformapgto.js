/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:6.58
*/
gx.evt.autoSkip = false;
gx.define('hconsultaformapgto', false, function () {
   this.ServerClass =  "hconsultaformapgto" ;
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
      this.A3490FormaPgtoTipo=gx.fn.getControlValue("FORMAPGTOTIPO") ;
      this.A3492FormaPgtoTipoCliente=gx.fn.getControlValue("FORMAPGTOTIPOCLIENTE") ;
      this.AV21PFormaPgtoId=gx.fn.getIntegerValue("vPFORMAPGTOID",'.') ;
   };
   this.e17n32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n32_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n32_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n32_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n32_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n32_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20n32_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21n31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,43,46,48,50,52,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaformapgto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3376,34,"FORMAPGTOID","","","FormaPgtoId","int",0,"px",3,3,"right",null,[],3376,"FormaPgtoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3489,35,"FORMAPGTODESCRICAO","","","FormaPgtoDescricao","svchar",0,"px",20,20,"left",null,[],3489,"FormaPgtoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipo",36,"vTIPO","Tipo","","Tipo","char",0,"px",30,30,"left",null,[],"Tipo","Tipo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tpcliente",37,"vTPCLIENTE","Tipo Cliente","","TpCliente","char",0,"px",40,40,"left",null,[],"Tpcliente","TpCliente",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOID",gxz:"ZV16FormaPgtoId",gxold:"OV16FormaPgtoId",gxvar:"AV16FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID",gx.O.AV16FormaPgtoId,0)},c2v:function(){gx.O.AV16FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTODESCRICAO",gxz:"ZV17FormaPgtoDescricao",gxold:"OV17FormaPgtoDescricao",gxvar:"AV17FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV17FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV17FormaPgtoDescricao,0)},c2v:function(){gx.O.AV17FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOTIPO",gxz:"ZV18FormaPgtoTipo",gxold:"OV18FormaPgtoTipo",gxvar:"AV18FormaPgtoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18FormaPgtoTipo=Value},v2z:function(Value){gx.O.ZV18FormaPgtoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAPGTOTIPO",gx.O.AV18FormaPgtoTipo)},c2v:function(){gx.O.AV18FormaPgtoTipo=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOTIPO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOTIPOCLIENTE",gxz:"ZV19FormaPgtoTipoCliente",gxold:"OV19FormaPgtoTipoCliente",gxvar:"AV19FormaPgtoTipoCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19FormaPgtoTipoCliente=Value},v2z:function(Value){gx.O.ZV19FormaPgtoTipoCliente=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAPGTOTIPOCLIENTE",gx.O.AV19FormaPgtoTipoCliente)},c2v:function(){gx.O.AV19FormaPgtoTipoCliente=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOTIPOCLIENTE")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(33),gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTODESCRICAO",gxz:"Z3489FormaPgtoDescricao",gxold:"O3489FormaPgtoDescricao",gxvar:"A3489FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3489FormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3489FormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(33),gx.O.A3489FormaPgtoDescricao,0)},c2v:function(){gx.O.A3489FormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV23Tipo",gxold:"OV23Tipo",gxvar:"AV23Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23Tipo=Value},v2z:function(Value){gx.O.ZV23Tipo=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(33),gx.O.AV23Tipo,0)},c2v:function(){gx.O.AV23Tipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPCLIENTE",gxz:"ZV24TpCliente",gxold:"OV24TpCliente",gxvar:"AV24TpCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV24TpCliente=Value},v2z:function(Value){gx.O.ZV24TpCliente=Value},v2c:function(row){gx.fn.setGridControlValue("vTPCLIENTE",row || gx.fn.currentGridRowImpl(33),gx.O.AV24TpCliente,0)},c2v:function(){gx.O.AV24TpCliente=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPCLIENTE",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV26Pagina",gxold:"OV26Pagina",gxvar:"AV26Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV26Pagina)},c2v:function(){gx.O.AV26Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV27PaginaAux",gxold:"OV27PaginaAux",gxvar:"AV27PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV27PaginaAux,0)},c2v:function(){gx.O.AV27PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16FormaPgtoId = 0 ;
   this.ZV16FormaPgtoId = 0 ;
   this.OV16FormaPgtoId = 0 ;
   this.AV17FormaPgtoDescricao = "" ;
   this.ZV17FormaPgtoDescricao = "" ;
   this.OV17FormaPgtoDescricao = "" ;
   this.AV18FormaPgtoTipo = "" ;
   this.ZV18FormaPgtoTipo = "" ;
   this.OV18FormaPgtoTipo = "" ;
   this.AV19FormaPgtoTipoCliente = "" ;
   this.ZV19FormaPgtoTipoCliente = "" ;
   this.OV19FormaPgtoTipoCliente = "" ;
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.Z3489FormaPgtoDescricao = "" ;
   this.O3489FormaPgtoDescricao = "" ;
   this.ZV23Tipo = "" ;
   this.OV23Tipo = "" ;
   this.ZV24TpCliente = "" ;
   this.OV24TpCliente = "" ;
   this.AV26Pagina = 0 ;
   this.ZV26Pagina = 0 ;
   this.OV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.ZV27PaginaAux = 0 ;
   this.OV27PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16FormaPgtoId = 0 ;
   this.AV17FormaPgtoDescricao = "" ;
   this.AV18FormaPgtoTipo = "" ;
   this.AV19FormaPgtoTipoCliente = "" ;
   this.AV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21PFormaPgtoId = 0 ;
   this.A3492FormaPgtoTipoCliente = "" ;
   this.A3490FormaPgtoTipo = "" ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.AV23Tipo = "" ;
   this.AV24TpCliente = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17n32_client": ["ENTER", true] ,"e11n32_client": ["'GXM_FIRST'", true] ,"e12n32_client": ["'GXM_PREVIOUS'", true] ,"e13n32_client": ["'GXM_NEXT'", true] ,"e14n32_client": ["'GXM_LAST'", true] ,"e15n32_client": ["'PROCURAR'", true] ,"e20n32_client": ["'ATUALIZAPAGINA'", true] ,"e21n31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'FORMAPGTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTOID","Title")',ctrl:'FORMAPGTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'FORMAPGTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTODESCRICAO","Title")',ctrl:'FORMAPGTODESCRICAO',prop:'Title'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'}],[{av:'AV21PFormaPgtoId',fld:'vPFORMAPGTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'AV26Pagina',fld:'vPAGINA'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["LOAD"] = [[{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'}],[{av:'AV23Tipo',fld:'vTIPO'},{av:'AV24TpCliente',fld:'vTPCLIENTE'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV17FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV18FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV19FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3490FormaPgtoTipo", "FORMAPGTOTIPO", 0, "char");
   this.setVCMap("A3492FormaPgtoTipoCliente", "FORMAPGTOTIPOCLIENTE", 0, "char");
   this.setVCMap("AV21PFormaPgtoId", "vPFORMAPGTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3490FormaPgtoTipo", "FORMAPGTOTIPO", 0, "char");
   this.setVCMap("A3492FormaPgtoTipoCliente", "FORMAPGTOTIPOCLIENTE", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A3490FormaPgtoTipo"});
   GridContainer.addRefreshingVar({rfrVar:"A3492FormaPgtoTipoCliente"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaformapgto());
