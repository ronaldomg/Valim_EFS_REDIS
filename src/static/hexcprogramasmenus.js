/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:2.38
*/
gx.evt.autoSkip = false;
gx.define('hexcprogramasmenus', false, function () {
   this.ServerClass =  "hexcprogramasmenus" ;
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
   this.e11lu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12lu2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13lu2_client=function()
   {
      this.executeServerEvent("'MARCASNEXCLUI'", false, null, false, false);
   };
   this.e14lu2_client=function()
   {
      this.executeServerEvent("'DESMARCASNEXCLUI'", false, null, false, false);
   };
   this.e17lu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,13,15,16,17,18];
   this.GXLastCtrlId =18;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hexcprogramasmenus",[],false,1,false,true,0,true,false,false,"CollSdtExcProgramasMenus.SdtExcProgramasMenusItem",0,"px","Novo registro",true,false,true,null,null,false,"AV24SdtSistemas",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("GXV10F",15,"CTLSNEXCLUIR","","","SnExcluir","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV10G",16,"CTLSISTEMAID","Sistema","","SistemaId","char",0,"px",8,8,"left",null,[],"GXV10G","GXV10G",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10H",17,"CTLSISTEMANOME","Nome","","SistemaNome","svchar",0,"px",40,40,"left",null,[],"GXV10H","GXV10H",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNEXCLUIR",gxz:"ZV30GXV10F",gxold:"OV30GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10F=Value},v2z:function(Value){gx.O.ZV30GXV10F=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNEXCLUIR",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10F,"S")},c2v:function(){gx.O.GXV10F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNEXCLUIR",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSISTEMAID",gxz:"ZV31GXV10G",gxold:"OV31GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10G=Value},v2z:function(Value){gx.O.ZV31GXV10G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSISTEMAID",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSISTEMAID",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSISTEMANOME",gxz:"ZV32GXV10H",gxold:"OV32GXV10H",gxvar:"GXV10H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10H=Value},v2z:function(Value){gx.O.ZV32GXV10H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSISTEMANOME",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSISTEMANOME",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[18]={fld:"DIV2", format:2,grid:0};
   this.ZV30GXV10F = "" ;
   this.OV30GXV10F = "" ;
   this.ZV31GXV10G = "" ;
   this.OV31GXV10G = "" ;
   this.ZV32GXV10H = "" ;
   this.OV32GXV10H = "" ;
   this.AV21UsuarioId = "" ;
   this.GXV10F = "" ;
   this.GXV10G = "" ;
   this.GXV10H = "" ;
   this.A140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.A75UsuarioId = "" ;
   this.A509ProgramaUsuarioSnConsulta = "" ;
   this.Events = {"e11lu2_client": ["ENTER", true] ,"e12lu2_client": ["'CANCELAR'", true] ,"e13lu2_client": ["'MARCASNEXCLUI'", true] ,"e14lu2_client": ["'DESMARCASNEXCLUI'", true] ,"e17lu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14},{av:'subGrid_Rows'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14},{av:'AV21UsuarioId',fld:'vUSUARIOID',hsh:true}],[{av:'AV26tpErro',fld:'vTPERRO'},{av:'AV35GXV2',fld:'vGXV2'},{av:'AV23SdtSistemasItem',fld:'vSDTSISTEMASITEM'},{av:'AV25Retorno',fld:'vRETORNO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EvtParms["'MARCASNEXCLUI'"] = [[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14}]];
   this.EvtParms["'DESMARCASNEXCLUI'"] = [[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24SdtSistemas',fld:'vSDTSISTEMAS',grid:14}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV21UsuarioId", "vUSUARIOID", 0, "char");
   this.addGridBCProperty("Sdtsistemas", ["SnExcluir"], this.GXValidFnc[15], "AV24SdtSistemas");
   this.addGridBCProperty("Sdtsistemas", ["SistemaId"], this.GXValidFnc[16], "AV24SdtSistemas");
   this.addGridBCProperty("Sdtsistemas", ["SistemaNome"], this.GXValidFnc[17], "AV24SdtSistemas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcprogramasmenus());
