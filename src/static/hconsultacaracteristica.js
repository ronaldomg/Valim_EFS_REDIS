/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:57.99
*/
gx.evt.autoSkip = false;
gx.define('hconsultacaracteristica', false, function () {
   this.ServerClass =  "hconsultacaracteristica" ;
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
      this.AV7EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV24CaracteristicaCodigoOut=gx.fn.getControlValue("vCARACTERISTICACODIGOOUT") ;
   };
   this.Validv_Caracteristicatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCARACTERISTICATIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e172e32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112e32_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122e32_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132e32_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142e32_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152e32_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192e32_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e212e31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacaracteristica",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11320,29,"CARACTERISTICACODIGO","Código","","CaracteristicaCodigo","char",0,"px",2,2,"left",null,[],11320,"CaracteristicaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11387,30,"CARACTERISTICADESCRICAO","Descrição","","CaracteristicaDescricao","svchar",0,"px",30,30,"left",null,[],11387,"CaracteristicaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11319,31,"CARACTERISTICATIPO","Caracteristica Tipo","","CaracteristicaTipo","char",0,"px",1,1,"left",null,[],11319,"CaracteristicaTipo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Caracteristicatipo,isvalid:null,rgrid:[this.GridContainer],fld:"vCARACTERISTICATIPO",gxz:"ZV20CaracteristicaTipo",gxold:"OV20CaracteristicaTipo",gxvar:"AV20CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20CaracteristicaTipo=Value},v2z:function(Value){gx.O.ZV20CaracteristicaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCARACTERISTICATIPO",gx.O.AV20CaracteristicaTipo)},c2v:function(){gx.O.AV20CaracteristicaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARACTERISTICACODIGO",gxz:"ZV23CaracteristicaCodigo",gxold:"OV23CaracteristicaCodigo",gxvar:"AV23CaracteristicaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CaracteristicaCodigo=Value},v2z:function(Value){gx.O.ZV23CaracteristicaCodigo=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICACODIGO",gx.O.AV23CaracteristicaCodigo,0)},c2v:function(){gx.O.AV23CaracteristicaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICACODIGO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARACTERISTICADESCRICAO",gxz:"ZV22CaracteristicaDescricao",gxold:"OV22CaracteristicaDescricao",gxvar:"AV22CaracteristicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CaracteristicaDescricao=Value},v2z:function(Value){gx.O.ZV22CaracteristicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICADESCRICAO",gx.O.AV22CaracteristicaDescricao,0)},c2v:function(){gx.O.AV22CaracteristicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICACODIGO",gxz:"Z11320CaracteristicaCodigo",gxold:"O11320CaracteristicaCodigo",gxvar:"A11320CaracteristicaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11320CaracteristicaCodigo=Value},v2z:function(Value){gx.O.Z11320CaracteristicaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("CARACTERISTICACODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A11320CaracteristicaCodigo,0)},c2v:function(){gx.O.A11320CaracteristicaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("CARACTERISTICACODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICADESCRICAO",gxz:"Z11387CaracteristicaDescricao",gxold:"O11387CaracteristicaDescricao",gxvar:"A11387CaracteristicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11387CaracteristicaDescricao=Value},v2z:function(Value){gx.O.Z11387CaracteristicaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CARACTERISTICADESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A11387CaracteristicaDescricao,0)},c2v:function(){gx.O.A11387CaracteristicaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CARACTERISTICADESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICATIPO",gxz:"Z11319CaracteristicaTipo",gxold:"O11319CaracteristicaTipo",gxvar:"A11319CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11319CaracteristicaTipo=Value},v2z:function(Value){gx.O.Z11319CaracteristicaTipo=Value},v2c:function(row){gx.fn.setGridControlValue("CARACTERISTICATIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A11319CaracteristicaTipo,0)},c2v:function(){gx.O.A11319CaracteristicaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CARACTERISTICATIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV14Pagina",gxold:"OV14Pagina",gxvar:"AV14Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV14Pagina)},c2v:function(){gx.O.AV14Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV15PaginaAux",gxold:"OV15PaginaAux",gxvar:"AV15PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV15PaginaAux,0)},c2v:function(){gx.O.AV15PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV13Orderedby",gxold:"OV13Orderedby",gxvar:"AV13Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13Orderedby,0)},c2v:function(){gx.O.AV13Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20CaracteristicaTipo = "" ;
   this.ZV20CaracteristicaTipo = "" ;
   this.OV20CaracteristicaTipo = "" ;
   this.AV23CaracteristicaCodigo = "" ;
   this.ZV23CaracteristicaCodigo = "" ;
   this.OV23CaracteristicaCodigo = "" ;
   this.AV22CaracteristicaDescricao = "" ;
   this.ZV22CaracteristicaDescricao = "" ;
   this.OV22CaracteristicaDescricao = "" ;
   this.Z11320CaracteristicaCodigo = "" ;
   this.O11320CaracteristicaCodigo = "" ;
   this.Z11387CaracteristicaDescricao = "" ;
   this.O11387CaracteristicaDescricao = "" ;
   this.Z11319CaracteristicaTipo = "" ;
   this.O11319CaracteristicaTipo = "" ;
   this.AV14Pagina = 0 ;
   this.ZV14Pagina = 0 ;
   this.OV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.ZV15PaginaAux = 0 ;
   this.OV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.ZV13Orderedby = 0 ;
   this.OV13Orderedby = 0 ;
   this.AV20CaracteristicaTipo = "" ;
   this.AV23CaracteristicaCodigo = "" ;
   this.AV22CaracteristicaDescricao = "" ;
   this.AV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.AV24CaracteristicaCodigoOut = "" ;
   this.A11466CaracteristicaEmpresaId = "" ;
   this.A11320CaracteristicaCodigo = "" ;
   this.A11387CaracteristicaDescricao = "" ;
   this.A11319CaracteristicaTipo = "" ;
   this.AV7EmpresaPadrao = "" ;
   this.Events = {"e172e32_client": ["ENTER", true] ,"e112e32_client": ["'GXM_FIRST'", true] ,"e122e32_client": ["'GXM_PREVIOUS'", true] ,"e132e32_client": ["'GXM_NEXT'", true] ,"e142e32_client": ["'GXM_LAST'", true] ,"e152e32_client": ["'PROCURAR'", true] ,"e192e32_client": ["'ATUALIZAPAGINA'", true] ,"e212e31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true}],[{av:'AV15PaginaAux',fld:'vPAGINAAUX'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'}],[{av:'AV24CaracteristicaCodigoOut',fld:'vCARACTERISTICACODIGOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true},{av:'AV14Pagina',fld:'vPAGINA'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV22CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV7EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20CaracteristicaTipo',fld:'vCARACTERISTICATIPO',hsh:true}],[]];
   this.setVCMap("AV7EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24CaracteristicaCodigoOut", "vCARACTERISTICACODIGOOUT", 0, "char");
   this.setVCMap("AV7EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar({rfrVar:"AV7EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacaracteristica());
