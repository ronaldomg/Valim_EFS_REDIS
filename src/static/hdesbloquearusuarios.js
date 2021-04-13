/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:17.85
*/
gx.evt.autoSkip = false;
gx.define('hdesbloquearusuarios', false, function () {
   this.ServerClass =  "hdesbloquearusuarios" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV24Retorno=gx.fn.getControlValue("vRETORNO") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.A3329UsuarioBloqueado=gx.fn.getControlValue("USUARIOBLOQUEADO") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
   };
   this.e11m02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12m02_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13m02_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e14m02_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e18m02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,20,22,23,24,25,35];
   this.GXLastCtrlId =35;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdesbloquearusuarios",[],false,1,false,true,0,true,false,false,"CollSdtDesbloqueiaUsuario.SdtDesbloqueiaUsuarioItem",0,"px","Novo registro",true,false,true,null,null,false,"AV21SdtDesbloqueiaUsuario",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10M",22,"CTLUSUARIOID","Código","","UsuarioId","char",0,"px",12,12,"left",null,[],"GXV10M","GXV10M",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10N",23,"CTLUSUARIONOME","Nome do Usuário","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],"GXV10N","GXV10N",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addCheckBox("GXV10O",24,"CTLSNDESBLOQUEAR","Desbloquear","","SnDesbloquear","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE1",grid:0};
   GXValidFnc[20]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[22]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUSUARIOID",gxz:"ZV28GXV10M",gxold:"OV28GXV10M",gxvar:"GXV10M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10M=Value},v2z:function(Value){gx.O.ZV28GXV10M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUSUARIOID",row || gx.fn.currentGridRowImpl(21),gx.O.GXV10M,0)},c2v:function(){gx.O.GXV10M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUSUARIOID",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUSUARIONOME",gxz:"ZV29GXV10N",gxold:"OV29GXV10N",gxvar:"GXV10N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10N=Value},v2z:function(Value){gx.O.ZV29GXV10N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUSUARIONOME",row || gx.fn.currentGridRowImpl(21),gx.O.GXV10N,0)},c2v:function(){gx.O.GXV10N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUSUARIONOME",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDESBLOQUEAR",gxz:"ZV30GXV10O",gxold:"OV30GXV10O",gxvar:"GXV10O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10O=Value},v2z:function(Value){gx.O.ZV30GXV10O=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNDESBLOQUEAR",row || gx.fn.currentGridRowImpl(21),gx.O.GXV10O,"S")},c2v:function(){gx.O.GXV10O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNDESBLOQUEAR",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[25]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   this.ZV28GXV10M = "" ;
   this.OV28GXV10M = "" ;
   this.ZV29GXV10N = "" ;
   this.OV29GXV10N = "" ;
   this.ZV30GXV10O = "" ;
   this.OV30GXV10O = "" ;
   this.GXV10M = "" ;
   this.GXV10N = "" ;
   this.GXV10O = "" ;
   this.A3329UsuarioBloqueado = "" ;
   this.A219UsuarioNome = "" ;
   this.A75UsuarioId = "" ;
   this.AV24Retorno = "" ;
   this.Events = {"e11m02_client": ["'FECHAR'", true] ,"e12m02_client": ["ENTER", true] ,"e13m02_client": ["'MARCARTODOS'", true] ,"e14m02_client": ["'DESMARCARTODOS'", true] ,"e18m02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'AV36GXLvl75',fld:'vGXLVL75'},{av:'AV22SdtDesbloqueiaUsuarioItem',fld:'vSDTDESBLOQUEIAUSUARIOITEM'},{ctrl:'BUTTON1',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}],[{av:'AV23tpErro',fld:'vTPERRO'},{av:'AV33GXV2',fld:'vGXV2'},{av:'AV22SdtDesbloqueiaUsuarioItem',fld:'vSDTDESBLOQUEIAUSUARIOITEM'},{av:'AV24Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'AV36GXLvl75',fld:'vGXLVL75'},{av:'AV22SdtDesbloqueiaUsuarioItem',fld:'vSDTDESBLOQUEIAUSUARIOITEM'},{ctrl:'BUTTON1',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'AV36GXLvl75',fld:'vGXLVL75'},{av:'AV22SdtDesbloqueiaUsuarioItem',fld:'vSDTDESBLOQUEIAUSUARIOITEM'},{ctrl:'BUTTON1',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'AV36GXLvl75',fld:'vGXLVL75'},{av:'AV22SdtDesbloqueiaUsuarioItem',fld:'vSDTDESBLOQUEIAUSUARIOITEM'},{ctrl:'BUTTON1',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24Retorno',fld:'vRETORNO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3329UsuarioBloqueado',fld:'USUARIOBLOQUEADO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21}],[{av:'AV21SdtDesbloqueiaUsuario',fld:'vSDTDESBLOQUEIAUSUARIO',grid:21},{av:'AV36GXLvl75',fld:'vGXLVL75'},{av:'AV22SdtDesbloqueiaUsuarioItem',fld:'vSDTDESBLOQUEIAUSUARIOITEM'},{ctrl:'BUTTON1',prop:'Enabled'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV24Retorno", "vRETORNO", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A3329UsuarioBloqueado", "USUARIOBLOQUEADO", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("AV24Retorno", "vRETORNO", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A3329UsuarioBloqueado", "USUARIOBLOQUEADO", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV24Retorno"});
   GridContainer.addRefreshingVar({rfrVar:"A75UsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"A3329UsuarioBloqueado"});
   GridContainer.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   this.addGridBCProperty("Sdtdesbloqueiausuario", ["UsuarioId"], this.GXValidFnc[22], "AV21SdtDesbloqueiaUsuario");
   this.addGridBCProperty("Sdtdesbloqueiausuario", ["UsuarioNome"], this.GXValidFnc[23], "AV21SdtDesbloqueiaUsuario");
   this.addGridBCProperty("Sdtdesbloqueiausuario", ["SnDesbloquear"], this.GXValidFnc[24], "AV21SdtDesbloqueiaUsuario");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdesbloquearusuarios());
