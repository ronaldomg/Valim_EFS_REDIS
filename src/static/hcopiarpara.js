/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:42.13
*/
gx.evt.autoSkip = false;
gx.define('hcopiarpara', false, function () {
   this.ServerClass =  "hcopiarpara" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e111r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,9,10,11,14];
   this.GXLastCtrlId =14;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",7,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcopiarpara",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Usuarioselecionado",8,"vUSUARIOSELECIONADO","","","UsuarioSelecionado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit(75,9,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(219,10,"USUARIONOME","Nome do Usuario","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],219,"UsuarioNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[8]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOSELECIONADO",gxz:"ZV22UsuarioSelecionado",gxold:"OV22UsuarioSelecionado",gxvar:"AV22UsuarioSelecionado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV22UsuarioSelecionado=Value},v2z:function(Value){gx.O.ZV22UsuarioSelecionado=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vUSUARIOSELECIONADO",row || gx.fn.currentGridRowImpl(7),gx.O.AV22UsuarioSelecionado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22UsuarioSelecionado=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIOSELECIONADO",row || gx.fn.currentGridRowImpl(7))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[9]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(7),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(7))},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(7),gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(7))},nac:gx.falseFn};
   GXValidFnc[11]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[14]={fld:"JS", format:2,grid:0};
   this.ZV22UsuarioSelecionado = "" ;
   this.OV22UsuarioSelecionado = "" ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.AV22UsuarioSelecionado = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.Events = {"e111r2_client": ["ENTER", true] ,"e141r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22UsuarioSelecionado',fld:'vUSUARIOSELECIONADO',grid:7},{av:'A75UsuarioId',fld:'USUARIOID',grid:7}],[{av:'AV24TxtAux',fld:'vTXTAUX'},{av:'AV23sdt',fld:'vSDT'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarpara());
