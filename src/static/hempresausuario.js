/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:52.43
*/
gx.evt.autoSkip = false;
gx.define('hempresausuario', false, function () {
   this.ServerClass =  "hempresausuario" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Empresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111z2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121z2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e201z2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e161z2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131z2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151z2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e211z2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e231z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,25,28,31,33,35,37,39,42,44,45,49,50,51,52,53,59];
   this.GXLastCtrlId =59;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hempresausuario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(138,49,"EMPRESAID","","","EmpresaId","char",0,"px",10,10,"left",null,[],138,"EmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(186,50,"EMPRESANOME","","","EmpresaNome","svchar",0,"px",40,40,"left",null,[],186,"EmpresaNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(218,51,"EMPRESAUSUARIOID","Empresa Usuario Id","","EmpresaUsuarioId","int",0,"px",7,7,"right",null,[],218,"EmpresaUsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(216,52,"EMPRESAUSUARIOUSUARIOID","Empresa Usuario Usuario Id","","EmpresaUsuarioUsuarioId","char",0,"px",12,12,"left",null,[],216,"EmpresaUsuarioUsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e201z2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV15UsuarioId",gxold:"OV15UsuarioId",gxvar:"AV15UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15UsuarioId=Value},v2z:function(Value){gx.O.ZV15UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV15UsuarioId,0)},c2v:function(){gx.O.AV15UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV25UsuarioNome",gxold:"OV25UsuarioNome",gxvar:"AV25UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25UsuarioNome=Value},v2z:function(Value){gx.O.ZV25UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV25UsuarioNome,0)},c2v:function(){gx.O.AV25UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[31]={fld:"IMAGE2",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Empresaid,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[50],ip:[50,49],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANOME",gxz:"Z186EmpresaNome",gxold:"O186EmpresaNome",gxvar:"A186EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A186EmpresaNome=Value},v2z:function(Value){gx.O.Z186EmpresaNome=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(48),gx.O.A186EmpresaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A186EmpresaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAUSUARIOID",gxz:"Z218EmpresaUsuarioId",gxold:"O218EmpresaUsuarioId",gxvar:"A218EmpresaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A218EmpresaUsuarioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z218EmpresaUsuarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EMPRESAUSUARIOID",row || gx.fn.currentGridRowImpl(48),gx.O.A218EmpresaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A218EmpresaUsuarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EMPRESAUSUARIOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAUSUARIOUSUARIOID",gxz:"Z216EmpresaUsuarioUsuarioId",gxold:"O216EmpresaUsuarioUsuarioId",gxvar:"A216EmpresaUsuarioUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A216EmpresaUsuarioUsuarioId=Value},v2z:function(Value){gx.O.Z216EmpresaUsuarioUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAUSUARIOUSUARIOID",row || gx.fn.currentGridRowImpl(48),gx.O.A216EmpresaUsuarioUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A216EmpresaUsuarioUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAUSUARIOUSUARIOID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV10OrderedBy",gxold:"OV10OrderedBy",gxvar:"AV10OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV10OrderedBy,0)},c2v:function(){gx.O.AV10OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15UsuarioId = "" ;
   this.ZV15UsuarioId = "" ;
   this.OV15UsuarioId = "" ;
   this.AV25UsuarioNome = "" ;
   this.ZV25UsuarioNome = "" ;
   this.OV25UsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.Z186EmpresaNome = "" ;
   this.O186EmpresaNome = "" ;
   this.Z218EmpresaUsuarioId = 0 ;
   this.O218EmpresaUsuarioId = 0 ;
   this.Z216EmpresaUsuarioUsuarioId = "" ;
   this.O216EmpresaUsuarioUsuarioId = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.AV10OrderedBy = 0 ;
   this.ZV10OrderedBy = 0 ;
   this.OV10OrderedBy = 0 ;
   this.AV15UsuarioId = "" ;
   this.AV25UsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV10OrderedBy = 0 ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A218EmpresaUsuarioId = 0 ;
   this.A216EmpresaUsuarioUsuarioId = "" ;
   this.AV7bmpExc = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.Events = {"e111z2_client": ["'ANTERIOR'", true] ,"e121z2_client": ["'PROXIMO'", true] ,"e201z2_client": ["'EXCLUIR'", true] ,"e161z2_client": ["VPAGINA.CLICK", true] ,"e131z2_client": ["'NOVO'", true] ,"e141z2_client": ["'FECHAR'", true] ,"e151z2_client": ["'PROCURAR'", true] ,"e211z2_client": ["'ATUALIZAPAGINA'", true] ,"e221z2_client": ["ENTER", true] ,"e231z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'EMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAID","Title")',ctrl:'EMPRESAID',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'},{ctrl:'EMPRESANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESANOME","Title")',ctrl:'EMPRESANOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV9NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV27filtros',fld:'vFILTROS'},{av:'AV10OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A218EmpresaUsuarioId',fld:'EMPRESAUSUARIOID'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10OrderedBy',fld:'vORDEREDBY'}],[{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV25UsuarioNome',fld:'vUSUARIONOME'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV15UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hempresausuario());
