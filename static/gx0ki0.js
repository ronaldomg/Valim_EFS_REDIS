/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:46.89
*/
gx.evt.autoSkip = false;
gx.define('gx0ki0', false, function () {
   this.ServerClass =  "gx0ki0" ;
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
      this.AV9pReferenciaProdutoEmpresaId=gx.fn.getControlValue("vPREFERENCIAPRODUTOEMPRESAID") ;
      this.AV10pReferenciaProdutoId=gx.fn.getIntegerValue("vPREFERENCIAPRODUTOID",'.') ;
      this.AV11pReferenciaProdutoRef=gx.fn.getControlValue("vPREFERENCIAPRODUTOREF") ;
   };
   this.e1323c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1423c1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ki0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9889,33,"REFERENCIAPRODUTOEMPRESAID","Empresa Id","","ReferenciaProdutoEmpresaId","char",0,"px",10,10,"left",null,[],9889,"ReferenciaProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9890,34,"REFERENCIAPRODUTOID","Produto Id","","ReferenciaProdutoId","int",0,"px",10,10,"right",null,[],9890,"ReferenciaProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9891,35,"REFERENCIAPRODUTOREF","Produto Ref","Selecionar","ReferenciaProdutoRef","svchar",0,"px",20,20,"left",null,[],9891,"ReferenciaProdutoRef",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKREFERENCIAPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREFERENCIAPRODUTOEMPRESAID",gxz:"ZV6cReferenciaProdutoEmpresaId",gxold:"OV6cReferenciaProdutoEmpresaId",gxvar:"AV6cReferenciaProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cReferenciaProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cReferenciaProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCREFERENCIAPRODUTOEMPRESAID",gx.O.AV6cReferenciaProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cReferenciaProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCREFERENCIAPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKREFERENCIAPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREFERENCIAPRODUTOID",gxz:"ZV7cReferenciaProdutoId",gxold:"OV7cReferenciaProdutoId",gxvar:"AV7cReferenciaProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cReferenciaProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cReferenciaProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREFERENCIAPRODUTOID",gx.O.AV7cReferenciaProdutoId,0)},c2v:function(){gx.O.AV7cReferenciaProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREFERENCIAPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKREFERENCIAPRODUTOREF", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREFERENCIAPRODUTOREF",gxz:"ZV8cReferenciaProdutoRef",gxold:"OV8cReferenciaProdutoRef",gxvar:"AV8cReferenciaProdutoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cReferenciaProdutoRef=Value},v2z:function(Value){gx.O.ZV8cReferenciaProdutoRef=Value},v2c:function(){gx.fn.setControlValue("vCREFERENCIAPRODUTOREF",gx.O.AV8cReferenciaProdutoRef,0)},c2v:function(){gx.O.AV8cReferenciaProdutoRef=this.val()},val:function(){return gx.fn.getControlValue("vCREFERENCIAPRODUTOREF")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIAPRODUTOEMPRESAID",gxz:"Z9889ReferenciaProdutoEmpresaId",gxold:"O9889ReferenciaProdutoEmpresaId",gxvar:"A9889ReferenciaProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9889ReferenciaProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z9889ReferenciaProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIAPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A9889ReferenciaProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9889ReferenciaProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIAPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIAPRODUTOID",gxz:"Z9890ReferenciaProdutoId",gxold:"O9890ReferenciaProdutoId",gxvar:"A9890ReferenciaProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9890ReferenciaProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9890ReferenciaProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REFERENCIAPRODUTOID",row || gx.fn.currentGridRowImpl(31),gx.O.A9890ReferenciaProdutoId,0)},c2v:function(){gx.O.A9890ReferenciaProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REFERENCIAPRODUTOID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIAPRODUTOREF",gxz:"Z9891ReferenciaProdutoRef",gxold:"O9891ReferenciaProdutoRef",gxvar:"A9891ReferenciaProdutoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9891ReferenciaProdutoRef=Value},v2z:function(Value){gx.O.Z9891ReferenciaProdutoRef=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIAPRODUTOREF",row || gx.fn.currentGridRowImpl(31),gx.O.A9891ReferenciaProdutoRef,0)},c2v:function(){gx.O.A9891ReferenciaProdutoRef=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIAPRODUTOREF",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cReferenciaProdutoEmpresaId = "" ;
   this.ZV6cReferenciaProdutoEmpresaId = "" ;
   this.OV6cReferenciaProdutoEmpresaId = "" ;
   this.AV7cReferenciaProdutoId = 0 ;
   this.ZV7cReferenciaProdutoId = 0 ;
   this.OV7cReferenciaProdutoId = 0 ;
   this.AV8cReferenciaProdutoRef = "" ;
   this.ZV8cReferenciaProdutoRef = "" ;
   this.OV8cReferenciaProdutoRef = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9889ReferenciaProdutoEmpresaId = "" ;
   this.O9889ReferenciaProdutoEmpresaId = "" ;
   this.Z9890ReferenciaProdutoId = 0 ;
   this.O9890ReferenciaProdutoId = 0 ;
   this.Z9891ReferenciaProdutoRef = "" ;
   this.O9891ReferenciaProdutoRef = "" ;
   this.AV6cReferenciaProdutoEmpresaId = "" ;
   this.AV7cReferenciaProdutoId = 0 ;
   this.AV8cReferenciaProdutoRef = "" ;
   this.AV9pReferenciaProdutoEmpresaId = "" ;
   this.AV10pReferenciaProdutoId = 0 ;
   this.AV11pReferenciaProdutoRef = "" ;
   this.AV5LinkSelection = "" ;
   this.A9889ReferenciaProdutoEmpresaId = "" ;
   this.A9890ReferenciaProdutoId = 0 ;
   this.A9891ReferenciaProdutoRef = "" ;
   this.Events = {"e1323c2_client": ["ENTER", true] ,"e1423c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cReferenciaProdutoEmpresaId',fld:'vCREFERENCIAPRODUTOEMPRESAID'},{av:'AV7cReferenciaProdutoId',fld:'vCREFERENCIAPRODUTOID'},{av:'AV8cReferenciaProdutoRef',fld:'vCREFERENCIAPRODUTOREF'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9889ReferenciaProdutoEmpresaId',fld:'REFERENCIAPRODUTOEMPRESAID'},{av:'A9890ReferenciaProdutoId',fld:'REFERENCIAPRODUTOID'},{av:'A9891ReferenciaProdutoRef',fld:'REFERENCIAPRODUTOREF'}],[{av:'AV9pReferenciaProdutoEmpresaId',fld:'vPREFERENCIAPRODUTOEMPRESAID'},{av:'AV10pReferenciaProdutoId',fld:'vPREFERENCIAPRODUTOID'},{av:'AV11pReferenciaProdutoRef',fld:'vPREFERENCIAPRODUTOREF'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cReferenciaProdutoEmpresaId',fld:'vCREFERENCIAPRODUTOEMPRESAID'},{av:'AV7cReferenciaProdutoId',fld:'vCREFERENCIAPRODUTOID'},{av:'AV8cReferenciaProdutoRef',fld:'vCREFERENCIAPRODUTOREF'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cReferenciaProdutoEmpresaId',fld:'vCREFERENCIAPRODUTOEMPRESAID'},{av:'AV7cReferenciaProdutoId',fld:'vCREFERENCIAPRODUTOID'},{av:'AV8cReferenciaProdutoRef',fld:'vCREFERENCIAPRODUTOREF'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cReferenciaProdutoEmpresaId',fld:'vCREFERENCIAPRODUTOEMPRESAID'},{av:'AV7cReferenciaProdutoId',fld:'vCREFERENCIAPRODUTOID'},{av:'AV8cReferenciaProdutoRef',fld:'vCREFERENCIAPRODUTOREF'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cReferenciaProdutoEmpresaId',fld:'vCREFERENCIAPRODUTOEMPRESAID'},{av:'AV7cReferenciaProdutoId',fld:'vCREFERENCIAPRODUTOID'},{av:'AV8cReferenciaProdutoRef',fld:'vCREFERENCIAPRODUTOREF'}],[]];
   this.setVCMap("AV9pReferenciaProdutoEmpresaId", "vPREFERENCIAPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV10pReferenciaProdutoId", "vPREFERENCIAPRODUTOID", 0, "int");
   this.setVCMap("AV11pReferenciaProdutoRef", "vPREFERENCIAPRODUTOREF", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ki0());
