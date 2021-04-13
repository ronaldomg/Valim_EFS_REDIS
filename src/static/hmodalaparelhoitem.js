/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:42.44
*/
gx.evt.autoSkip = false;
gx.define('hmodalaparelhoitem', false, function () {
   this.ServerClass =  "hmodalaparelhoitem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV5AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.AV6AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID") ;
      this.AV11AparelhoDescricao=gx.fn.getControlValue("vAPARELHODESCRICAO") ;
   };
   this.e111z72_client=function()
   {
      this.executeServerEvent("'PRIMEIRA'", true, null, false, false);
   };
   this.e121z72_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e131z72_client=function()
   {
      this.executeServerEvent("'PROXIMA'", true, null, false, false);
   };
   this.e141z72_client=function()
   {
      this.executeServerEvent("'ULTIMA'", true, null, false, false);
   };
   this.e151z72_client=function()
   {
      this.executeServerEvent("'ADICIONAR'", true, null, false, false);
   };
   this.e191z72_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e201z72_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e161z72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e221z72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e231z72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11,12,15,18,21,23,25,27];
   this.GXLastCtrlId =27;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalaparelhoitem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8880,6,"APARELHOITEMID","Cod.","","AparelhoItemId","int",0,"px",4,4,"right",null,[],8880,"AparelhoItemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8876,7,"APARELHOITEMDESCRICAO","Descrição","","AparelhoItemDescricao","svchar",260,"px",30,30,"left",null,[],8876,"AparelhoItemDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9714,8,"APARELHOITEMPRAZOMANUTENCAO","Prazo Man.","","AparelhoItemPrazoManutencao","int",0,"px",4,4,"right",null,[],9714,"AparelhoItemPrazoManutencao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(9245,9,"APARELHOITEMSITUACAO","Situação","AparelhoItemSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalterar","vBMPALTERAR",10,0,"px",17,"px","e191z72_client","","Alt","Image","");
   GridContainer.addBitmap("&Bmpexcluir","vBMPEXCLUIR",11,0,"px",17,"px","e201z72_client","","Exc","Image","");
   GridContainer.addSingleLineEdit(8879,12,"APARELHOITEMEMPRESAID","Código da Empresa","","AparelhoItemEmpresaId","char",0,"px",10,10,"left",null,[],8879,"AparelhoItemEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMID",gxz:"Z8880AparelhoItemId",gxold:"O8880AparelhoItemId",gxvar:"A8880AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8880AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8880AparelhoItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(5),gx.O.A8880AparelhoItemId,0)},c2v:function(){gx.O.A8880AparelhoItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMDESCRICAO",gxz:"Z8876AparelhoItemDescricao",gxold:"O8876AparelhoItemDescricao",gxvar:"A8876AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8876AparelhoItemDescricao=Value},v2z:function(Value){gx.O.Z8876AparelhoItemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A8876AparelhoItemDescricao,0)},c2v:function(){gx.O.A8876AparelhoItemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMPRAZOMANUTENCAO",gxz:"Z9714AparelhoItemPrazoManutencao",gxold:"O9714AparelhoItemPrazoManutencao",gxvar:"A9714AparelhoItemPrazoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9714AparelhoItemPrazoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9714AparelhoItemPrazoManutencao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMPRAZOMANUTENCAO",row || gx.fn.currentGridRowImpl(5),gx.O.A9714AparelhoItemPrazoManutencao,0)},c2v:function(){gx.O.A9714AparelhoItemPrazoManutencao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOITEMPRAZOMANUTENCAO",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMSITUACAO",gxz:"Z9245AparelhoItemSituacao",gxold:"O9245AparelhoItemSituacao",gxvar:"A9245AparelhoItemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A9245AparelhoItemSituacao=Value},v2z:function(Value){gx.O.Z9245AparelhoItemSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("APARELHOITEMSITUACAO",row || gx.fn.currentGridRowImpl(5),gx.O.A9245AparelhoItemSituacao)},c2v:function(){gx.O.A9245AparelhoItemSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOITEMSITUACAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALTERAR",gxz:"ZV7BmpAlterar",gxold:"OV7BmpAlterar",gxvar:"AV7BmpAlterar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BmpAlterar=Value},v2z:function(Value){gx.O.ZV7BmpAlterar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALTERAR",row || gx.fn.currentGridRowImpl(5),gx.O.AV7BmpAlterar,gx.O.AV14Bmpalterar_GXI)},c2v:function(){gx.O.AV14Bmpalterar_GXI=this.val_GXI();gx.O.AV7BmpAlterar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALTERAR",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALTERAR_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV14Bmpalterar_GXI',nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV8BmpExcluir",gxold:"OV8BmpExcluir",gxvar:"AV8BmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8BmpExcluir=Value},v2z:function(Value){gx.O.ZV8BmpExcluir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(5),gx.O.AV8BmpExcluir,gx.O.AV15Bmpexcluir_GXI)},c2v:function(){gx.O.AV15Bmpexcluir_GXI=this.val_GXI();gx.O.AV8BmpExcluir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV15Bmpexcluir_GXI',nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMEMPRESAID",gxz:"Z8879AparelhoItemEmpresaId",gxold:"O8879AparelhoItemEmpresaId",gxvar:"A8879AparelhoItemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8879AparelhoItemEmpresaId=Value},v2z:function(Value){gx.O.Z8879AparelhoItemEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMEMPRESAID",row || gx.fn.currentGridRowImpl(5),gx.O.A8879AparelhoItemEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8879AparelhoItemEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOITEMEMPRESAID",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLENAV",grid:0};
   GXValidFnc[18]={fld:"BTNINCLUIR",grid:0};
   GXValidFnc[21]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[23]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[25]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[27]={fld:"BTNULTIMO",grid:0};
   this.Z8880AparelhoItemId = 0 ;
   this.O8880AparelhoItemId = 0 ;
   this.Z8876AparelhoItemDescricao = "" ;
   this.O8876AparelhoItemDescricao = "" ;
   this.Z9714AparelhoItemPrazoManutencao = 0 ;
   this.O9714AparelhoItemPrazoManutencao = 0 ;
   this.Z9245AparelhoItemSituacao = "" ;
   this.O9245AparelhoItemSituacao = "" ;
   this.ZV7BmpAlterar = "" ;
   this.OV7BmpAlterar = "" ;
   this.ZV8BmpExcluir = "" ;
   this.OV8BmpExcluir = "" ;
   this.Z8879AparelhoItemEmpresaId = "" ;
   this.O8879AparelhoItemEmpresaId = "" ;
   this.AV5AparelhoId = 0 ;
   this.AV6AparelhoEmpresaId = "" ;
   this.AV11AparelhoDescricao = "" ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.A8880AparelhoItemId = 0 ;
   this.A8876AparelhoItemDescricao = "" ;
   this.A9714AparelhoItemPrazoManutencao = 0 ;
   this.A9245AparelhoItemSituacao = "" ;
   this.AV7BmpAlterar = "" ;
   this.AV8BmpExcluir = "" ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.Events = {"e111z72_client": ["'PRIMEIRA'", true] ,"e121z72_client": ["'ANTERIOR'", true] ,"e131z72_client": ["'PROXIMA'", true] ,"e141z72_client": ["'ULTIMA'", true] ,"e151z72_client": ["'ADICIONAR'", true] ,"e191z72_client": ["'ALTERAR'", true] ,"e201z72_client": ["'EXCLUIR'", true] ,"e161z72_client": ["'FECHAR'", true] ,"e221z72_client": ["ENTER", true] ,"e231z72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID.REFRESH"] = [[],[{av:'AV7BmpAlterar',fld:'vBMPALTERAR'},{av:'AV8BmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PRIMEIRA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'PROXIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'ULTIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'ADICIONAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true},{av:'AV11AparelhoDescricao',fld:'vAPARELHODESCRICAO',hsh:true}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV11AparelhoDescricao',fld:'vAPARELHODESCRICAO',hsh:true}],[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV6AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true},{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV11AparelhoDescricao',fld:'vAPARELHODESCRICAO',hsh:true}],[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV5AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV6AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV11AparelhoDescricao", "vAPARELHODESCRICAO", 0, "svchar");
   this.setVCMap("AV5AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV6AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV5AparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV6AparelhoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalaparelhoitem());
