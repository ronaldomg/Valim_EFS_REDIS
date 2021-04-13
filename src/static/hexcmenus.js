/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:23.19
*/
gx.evt.autoSkip = false;
gx.define('hexcmenus', false, function () {
   this.ServerClass =  "hexcmenus" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV21UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
   };
   this.e11m32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12m32_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13m32_client=function()
   {
      this.executeServerEvent("'MARCASNEXCLUI'", false, null, false, false);
   };
   this.e14m32_client=function()
   {
      this.executeServerEvent("'DESMARCASNEXCLUI'", false, null, false, false);
   };
   this.e17m32_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,9,12,14,15,16,17];
   this.GXLastCtrlId =17;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",13,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hexcmenus",[],false,1,false,true,0,true,false,false,"CollSdtExcProgramasMenus.SdtExcProgramasMenusItem",0,"px","Novo registro",true,false,true,null,null,false,"AV24SdtSistemas",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("GXV10E",14,"CTLSNEXCLUIR","","","SnExcluir","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV10F",15,"CTLSISTEMAID","Código","","SistemaId","char",0,"px",8,8,"left",null,[],"GXV10F","GXV10F",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10G",16,"CTLSISTEMANOME","Nome","","SistemaNome","svchar",0,"px",40,40,"left",null,[],"GXV10G","GXV10G",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[14]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNEXCLUIR",gxz:"ZV31GXV10E",gxold:"OV31GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10E=Value},v2z:function(Value){gx.O.ZV31GXV10E=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNEXCLUIR",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10E,"S")},c2v:function(){gx.O.GXV10E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNEXCLUIR",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[15]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSISTEMAID",gxz:"ZV32GXV10F",gxold:"OV32GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10F=Value},v2z:function(Value){gx.O.ZV32GXV10F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSISTEMAID",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSISTEMAID",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:13,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSISTEMANOME",gxz:"ZV33GXV10G",gxold:"OV33GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10G=Value},v2z:function(Value){gx.O.ZV33GXV10G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSISTEMANOME",row || gx.fn.currentGridRowImpl(13),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSISTEMANOME",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[17]={fld:"DIV2", format:2,grid:0};
   this.ZV31GXV10E = "" ;
   this.OV31GXV10E = "" ;
   this.ZV32GXV10F = "" ;
   this.OV32GXV10F = "" ;
   this.ZV33GXV10G = "" ;
   this.OV33GXV10G = "" ;
   this.AV21UsuarioId = "" ;
   this.GXV10E = "" ;
   this.GXV10F = "" ;
   this.GXV10G = "" ;
   this.A75UsuarioId = "" ;
   this.A74PermissaoUsuarioMenuId = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.Events = {"e11m32_client": ["ENTER", true] ,"e12m32_client": ["'CANCELAR'", true] ,"e13m32_client": ["'MARCASNEXCLUI'", true] ,"e14m32_client": ["'DESMARCASNEXCLUI'", true] ,"e17m32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13},{av:'subGrid_Rows'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13},{av:'AV21UsuarioId',fld:'vUSUARIOID',hsh:true}],[{av:'AV26tpErro',fld:'vTPERRO'},{av:'AV36GXV2',fld:'vGXV2'},{av:'AV23SdtSistemasItem',fld:'vSDTSISTEMASITEM'},{av:'AV25Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EvtParms["'MARCASNEXCLUI'"] = [[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13}]];
   this.EvtParms["'DESMARCASNEXCLUI'"] = [[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:13}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV21UsuarioId", "vUSUARIOID", 0, "char");
   this.addGridBCProperty("Sdtsistemas", ["SnExcluir"], this.GXValidFnc[14], "AV24SdtSistemas");
   this.addGridBCProperty("Sdtsistemas", ["SistemaId"], this.GXValidFnc[15], "AV24SdtSistemas");
   this.addGridBCProperty("Sdtsistemas", ["SistemaNome"], this.GXValidFnc[16], "AV24SdtSistemas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcmenus());
