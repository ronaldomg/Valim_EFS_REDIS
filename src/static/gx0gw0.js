/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:22.48
*/
gx.evt.autoSkip = false;
gx.define('gx0gw0', false, function () {
   this.ServerClass =  "gx0gw0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV9pSintegraErroProdutoEmpresaId=gx.fn.getControlValue("vPSINTEGRAERROPRODUTOEMPRESAID") ;
      this.AV10pSintegraErroProdutoId=gx.fn.getIntegerValue("vPSINTEGRAERROPRODUTOID",'.') ;
   };
   this.e131uy2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141uy1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0gw0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8231,33,"SINTEGRAERROPRODUTOEMPRESAID","Sintegra Erro Produto Empresa Id","","SintegraErroProdutoEmpresaId","char",0,"px",10,10,"left",null,[],8231,"SintegraErroProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8232,34,"SINTEGRAERROPRODUTOID","Sintegra Erro Produto Id","","SintegraErroProdutoId","int",0,"px",10,10,"right",null,[],8232,"SintegraErroProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8230,35,"SINTEGRAERRODESCERRO","Sintegra Erro Desc Erro","Selecionar","SintegraErroDescErro","svchar",0,"px",40,40,"left",null,[],8230,"SintegraErroDescErro",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSINTEGRAERROPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRAERROPRODUTOEMPRESAID",gxz:"ZV6cSintegraErroProdutoEmpresaId",gxold:"OV6cSintegraErroProdutoEmpresaId",gxvar:"AV6cSintegraErroProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSintegraErroProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSintegraErroProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRAERROPRODUTOEMPRESAID",gx.O.AV6cSintegraErroProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cSintegraErroProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRAERROPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSINTEGRAERROPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRAERROPRODUTOID",gxz:"ZV7cSintegraErroProdutoId",gxold:"OV7cSintegraErroProdutoId",gxvar:"AV7cSintegraErroProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSintegraErroProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSintegraErroProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSINTEGRAERROPRODUTOID",gx.O.AV7cSintegraErroProdutoId,0)},c2v:function(){gx.O.AV7cSintegraErroProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSINTEGRAERROPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSINTEGRAERRODESCERRO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRAERRODESCERRO",gxz:"ZV8cSintegraErroDescErro",gxold:"OV8cSintegraErroDescErro",gxvar:"AV8cSintegraErroDescErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSintegraErroDescErro=Value},v2z:function(Value){gx.O.ZV8cSintegraErroDescErro=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRAERRODESCERRO",gx.O.AV8cSintegraErroDescErro,0)},c2v:function(){gx.O.AV8cSintegraErroDescErro=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRAERRODESCERRO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAERROPRODUTOEMPRESAID",gxz:"Z8231SintegraErroProdutoEmpresaId",gxold:"O8231SintegraErroProdutoEmpresaId",gxvar:"A8231SintegraErroProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8231SintegraErroProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z8231SintegraErroProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SINTEGRAERROPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A8231SintegraErroProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8231SintegraErroProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SINTEGRAERROPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAERROPRODUTOID",gxz:"Z8232SintegraErroProdutoId",gxold:"O8232SintegraErroProdutoId",gxvar:"A8232SintegraErroProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8232SintegraErroProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8232SintegraErroProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SINTEGRAERROPRODUTOID",row || gx.fn.currentGridRowImpl(31),gx.O.A8232SintegraErroProdutoId,0)},c2v:function(){gx.O.A8232SintegraErroProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SINTEGRAERROPRODUTOID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAERRODESCERRO",gxz:"Z8230SintegraErroDescErro",gxold:"O8230SintegraErroDescErro",gxvar:"A8230SintegraErroDescErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8230SintegraErroDescErro=Value},v2z:function(Value){gx.O.Z8230SintegraErroDescErro=Value},v2c:function(row){gx.fn.setGridControlValue("SINTEGRAERRODESCERRO",row || gx.fn.currentGridRowImpl(31),gx.O.A8230SintegraErroDescErro,0)},c2v:function(){gx.O.A8230SintegraErroDescErro=this.val()},val:function(row){return gx.fn.getGridControlValue("SINTEGRAERRODESCERRO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cSintegraErroProdutoEmpresaId = "" ;
   this.ZV6cSintegraErroProdutoEmpresaId = "" ;
   this.OV6cSintegraErroProdutoEmpresaId = "" ;
   this.AV7cSintegraErroProdutoId = 0 ;
   this.ZV7cSintegraErroProdutoId = 0 ;
   this.OV7cSintegraErroProdutoId = 0 ;
   this.AV8cSintegraErroDescErro = "" ;
   this.ZV8cSintegraErroDescErro = "" ;
   this.OV8cSintegraErroDescErro = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8231SintegraErroProdutoEmpresaId = "" ;
   this.O8231SintegraErroProdutoEmpresaId = "" ;
   this.Z8232SintegraErroProdutoId = 0 ;
   this.O8232SintegraErroProdutoId = 0 ;
   this.Z8230SintegraErroDescErro = "" ;
   this.O8230SintegraErroDescErro = "" ;
   this.AV6cSintegraErroProdutoEmpresaId = "" ;
   this.AV7cSintegraErroProdutoId = 0 ;
   this.AV8cSintegraErroDescErro = "" ;
   this.AV9pSintegraErroProdutoEmpresaId = "" ;
   this.AV10pSintegraErroProdutoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8231SintegraErroProdutoEmpresaId = "" ;
   this.A8232SintegraErroProdutoId = 0 ;
   this.A8230SintegraErroDescErro = "" ;
   this.Events = {"e131uy2_client": ["ENTER", true] ,"e141uy1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegraErroProdutoEmpresaId',fld:'vCSINTEGRAERROPRODUTOEMPRESAID'},{av:'AV7cSintegraErroProdutoId',fld:'vCSINTEGRAERROPRODUTOID'},{av:'AV8cSintegraErroDescErro',fld:'vCSINTEGRAERRODESCERRO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8231SintegraErroProdutoEmpresaId',fld:'SINTEGRAERROPRODUTOEMPRESAID'},{av:'A8232SintegraErroProdutoId',fld:'SINTEGRAERROPRODUTOID'}],[{av:'AV9pSintegraErroProdutoEmpresaId',fld:'vPSINTEGRAERROPRODUTOEMPRESAID'},{av:'AV10pSintegraErroProdutoId',fld:'vPSINTEGRAERROPRODUTOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegraErroProdutoEmpresaId',fld:'vCSINTEGRAERROPRODUTOEMPRESAID'},{av:'AV7cSintegraErroProdutoId',fld:'vCSINTEGRAERROPRODUTOID'},{av:'AV8cSintegraErroDescErro',fld:'vCSINTEGRAERRODESCERRO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegraErroProdutoEmpresaId',fld:'vCSINTEGRAERROPRODUTOEMPRESAID'},{av:'AV7cSintegraErroProdutoId',fld:'vCSINTEGRAERROPRODUTOID'},{av:'AV8cSintegraErroDescErro',fld:'vCSINTEGRAERRODESCERRO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegraErroProdutoEmpresaId',fld:'vCSINTEGRAERROPRODUTOEMPRESAID'},{av:'AV7cSintegraErroProdutoId',fld:'vCSINTEGRAERROPRODUTOID'},{av:'AV8cSintegraErroDescErro',fld:'vCSINTEGRAERRODESCERRO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegraErroProdutoEmpresaId',fld:'vCSINTEGRAERROPRODUTOEMPRESAID'},{av:'AV7cSintegraErroProdutoId',fld:'vCSINTEGRAERROPRODUTOID'},{av:'AV8cSintegraErroDescErro',fld:'vCSINTEGRAERRODESCERRO'}],[]];
   this.setVCMap("AV9pSintegraErroProdutoEmpresaId", "vPSINTEGRAERROPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV10pSintegraErroProdutoId", "vPSINTEGRAERROPRODUTOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0gw0());
