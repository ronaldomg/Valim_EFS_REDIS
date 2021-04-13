/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:26.50
*/
gx.evt.autoSkip = false;
gx.define('hconsultamapapreco', false, function () {
   this.ServerClass =  "hconsultamapapreco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3405MapaPrecoNumero=gx.fn.getIntegerValue("MAPAPRECONUMERO",'.') ;
      this.A3370SolicitacaoEmpresaId=gx.fn.getControlValue("SOLICITACAOEMPRESAID") ;
      this.AV24SolicitacaoEmpresaId=gx.fn.getControlValue("vSOLICITACAOEMPRESAID") ;
      this.A3371SolicitacaoNumero=gx.fn.getIntegerValue("SOLICITACAONUMERO",'.') ;
      this.A3406MapaPrecoDataHoraAlt=gx.fn.getDateTimeValue("MAPAPRECODATAHORAALT") ;
      this.A3407MapaPrecoTipoPreco=gx.fn.getControlValue("MAPAPRECOTIPOPRECO") ;
      this.A3675MapaPrecoUsuarioAlt=gx.fn.getControlValue("MAPAPRECOUSUARIOALT") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.AV25MapaPrecoUsuarioAlt=gx.fn.getControlValue("vMAPAPRECOUSUARIOALT") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
      this.AV22OutMapaPrecoNumero=gx.fn.getIntegerValue("vOUTMAPAPRECONUMERO",'.') ;
   };
   this.e16nd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nd2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nd2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nd2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nd2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e19nd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,25,26,27,28,34,37,39,41,43,45,46,47];
   this.GXLastCtrlId =47;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",24,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamapapreco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Mapapreconumero",25,"vMAPAPRECONUMERO","Nº Mapa","","MapaPrecoNumero","int",0,"px",2,2,"right",null,[],"Mapapreconumero","MapaPrecoNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Mapaprecodatahoraalt",26,"vMAPAPRECODATAHORAALT","Data","","MapaPrecoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"Mapaprecodatahoraalt","MapaPrecoDataHoraAlt",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Usuarionome",27,"vUSUARIONOME","Usuário","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],"Usuarionome","UsuarioNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Mapaprecotipopreco",28,"vMAPAPRECOTIPOPRECO","Tipo do Preço","","MapaPrecoTipoPreco","char",0,"px",1,1,"left",null,[],"Mapaprecotipopreco","MapaPrecoTipoPreco",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV16SolicitacaoNumero",gxold:"OV16SolicitacaoNumero",gxvar:"AV16SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV16SolicitacaoNumero,0)},c2v:function(){gx.O.AV16SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCMAPAPRECONUMERO",gxz:"ZV17cMapaPrecoNumero",gxold:"OV17cMapaPrecoNumero",gxvar:"AV17cMapaPrecoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cMapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17cMapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMAPAPRECONUMERO",gx.O.AV17cMapaPrecoNumero,0)},c2v:function(){gx.O.AV17cMapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECONUMERO",gxz:"ZV18MapaPrecoNumero",gxold:"OV18MapaPrecoNumero",gxvar:"AV18MapaPrecoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18MapaPrecoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vMAPAPRECONUMERO",row || gx.fn.currentGridRowImpl(24),gx.O.AV18MapaPrecoNumero,0)},c2v:function(){gx.O.AV18MapaPrecoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vMAPAPRECONUMERO",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECODATAHORAALT",gxz:"ZV19MapaPrecoDataHoraAlt",gxold:"OV19MapaPrecoDataHoraAlt",gxvar:"AV19MapaPrecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vMAPAPRECODATAHORAALT",row || gx.fn.currentGridRowImpl(24),gx.O.AV19MapaPrecoDataHoraAlt,0)},c2v:function(){gx.O.AV19MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vMAPAPRECODATAHORAALT",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV20UsuarioNome",gxold:"OV20UsuarioNome",gxvar:"AV20UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20UsuarioNome=Value},v2z:function(Value){gx.O.ZV20UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(24),gx.O.AV20UsuarioNome,0)},c2v:function(){gx.O.AV20UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECOTIPOPRECO",gxz:"ZV21MapaPrecoTipoPreco",gxold:"OV21MapaPrecoTipoPreco",gxvar:"AV21MapaPrecoTipoPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21MapaPrecoTipoPreco=Value},v2z:function(Value){gx.O.ZV21MapaPrecoTipoPreco=Value},v2c:function(row){gx.fn.setGridControlValue("vMAPAPRECOTIPOPRECO",row || gx.fn.currentGridRowImpl(24),gx.O.AV21MapaPrecoTipoPreco,0)},c2v:function(){gx.O.AV21MapaPrecoTipoPreco=this.val()},val:function(row){return gx.fn.getGridControlValue("vMAPAPRECOTIPOPRECO",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV16SolicitacaoNumero = 0 ;
   this.ZV16SolicitacaoNumero = 0 ;
   this.OV16SolicitacaoNumero = 0 ;
   this.AV17cMapaPrecoNumero = 0 ;
   this.ZV17cMapaPrecoNumero = 0 ;
   this.OV17cMapaPrecoNumero = 0 ;
   this.ZV18MapaPrecoNumero = 0 ;
   this.OV18MapaPrecoNumero = 0 ;
   this.ZV19MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.OV19MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.ZV20UsuarioNome = "" ;
   this.OV20UsuarioNome = "" ;
   this.ZV21MapaPrecoTipoPreco = "" ;
   this.OV21MapaPrecoTipoPreco = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV16SolicitacaoNumero = 0 ;
   this.AV17cMapaPrecoNumero = 0 ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV22OutMapaPrecoNumero = 0 ;
   this.AV18MapaPrecoNumero = 0 ;
   this.AV19MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV20UsuarioNome = "" ;
   this.AV21MapaPrecoTipoPreco = "" ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A3406MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.A3407MapaPrecoTipoPreco = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.AV24SolicitacaoEmpresaId = "" ;
   this.AV25MapaPrecoUsuarioAlt = "" ;
   this.Events = {"e16nd2_client": ["ENTER", true] ,"e11nd2_client": ["'GXM_FIRST'", true] ,"e12nd2_client": ["'GXM_PREVIOUS'", true] ,"e13nd2_client": ["'GXM_NEXT'", true] ,"e14nd2_client": ["'GXM_LAST'", true] ,"e19nd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV16SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV17cMapaPrecoNumero',fld:'vCMAPAPRECONUMERO'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'}],[{av:'AV22OutMapaPrecoNumero',fld:'vOUTMAPAPRECONUMERO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV16SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV17cMapaPrecoNumero',fld:'vCMAPAPRECONUMERO'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV16SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV17cMapaPrecoNumero',fld:'vCMAPAPRECONUMERO'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV16SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV17cMapaPrecoNumero',fld:'vCMAPAPRECONUMERO'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV16SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV17cMapaPrecoNumero',fld:'vCMAPAPRECONUMERO'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["LOAD"] = [[{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV24SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV16SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV17cMapaPrecoNumero',fld:'vCMAPAPRECONUMERO'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{ctrl:'GRID',prop:'Rows'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV29ContLinhas',fld:'vCONTLINHAS'},{av:'AV18MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV19MapaPrecoDataHoraAlt',fld:'vMAPAPRECODATAHORAALT'},{av:'AV21MapaPrecoTipoPreco',fld:'vMAPAPRECOTIPOPRECO'},{av:'AV25MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT',hsh:true},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Resto',fld:'vRESTO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26NumPagina',fld:'vNUMPAGINA'},{av:'AV34GXLvl66',fld:'vGXLVL66'},{av:'AV20UsuarioNome',fld:'vUSUARIONOME'}]];
   this.setVCMap("A3405MapaPrecoNumero", "MAPAPRECONUMERO", 0, "int");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV24SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A3406MapaPrecoDataHoraAlt", "MAPAPRECODATAHORAALT", 0, "dtime");
   this.setVCMap("A3407MapaPrecoTipoPreco", "MAPAPRECOTIPOPRECO", 0, "char");
   this.setVCMap("A3675MapaPrecoUsuarioAlt", "MAPAPRECOUSUARIOALT", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV25MapaPrecoUsuarioAlt", "vMAPAPRECOUSUARIOALT", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("AV22OutMapaPrecoNumero", "vOUTMAPAPRECONUMERO", 0, "int");
   this.setVCMap("A3405MapaPrecoNumero", "MAPAPRECONUMERO", 0, "int");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV24SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A3406MapaPrecoDataHoraAlt", "MAPAPRECODATAHORAALT", 0, "dtime");
   this.setVCMap("A3407MapaPrecoTipoPreco", "MAPAPRECOTIPOPRECO", 0, "char");
   this.setVCMap("A3675MapaPrecoUsuarioAlt", "MAPAPRECOUSUARIOALT", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV25MapaPrecoUsuarioAlt", "vMAPAPRECOUSUARIOALT", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"A3405MapaPrecoNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV24SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar({rfrVar:"AV18MapaPrecoNumero", rfrProp:"Value", gxAttId:"Mapapreconumero"});
   GridContainer.addRefreshingVar({rfrVar:"A3406MapaPrecoDataHoraAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A3407MapaPrecoTipoPreco"});
   GridContainer.addRefreshingVar({rfrVar:"A3675MapaPrecoUsuarioAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A75UsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"AV25MapaPrecoUsuarioAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamapapreco());
