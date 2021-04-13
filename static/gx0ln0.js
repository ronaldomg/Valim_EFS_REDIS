/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:13.89
*/
gx.evt.autoSkip = false;
gx.define('gx0ln0', false, function () {
   this.ServerClass =  "gx0ln0" ;
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
      this.AV9pSequencia=gx.fn.getIntegerValue("vPSEQUENCIA",'.') ;
   };
   this.e132772_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142771_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ln0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10508,33,"SEQUENCIA","Sequencia","","Sequencia","int",0,"px",4,4,"right",null,[],10508,"Sequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10510,34,"CODIGO","Codigo","Selecionar","Codigo","int",0,"px",10,10,"right",null,[],10510,"Codigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10511,35,"QUANTIDADE","Quantidade","","Quantidade","decimal",0,"px",21,21,"right",null,[],10511,"Quantidade",true,4,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSEQUENCIA",gxz:"ZV6cSequencia",gxold:"OV6cSequencia",gxvar:"AV6cSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSEQUENCIA",gx.O.AV6cSequencia,0)},c2v:function(){gx.O.AV6cSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIGO",gxz:"ZV7cCodigo",gxold:"OV7cCodigo",gxvar:"AV7cCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCODIGO",gx.O.AV7cCodigo,0)},c2v:function(){gx.O.AV7cCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKQUANTIDADE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCQUANTIDADE",gxz:"ZV8cQuantidade",gxold:"OV8cQuantidade",gxvar:"AV8cQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCQUANTIDADE",gx.O.AV8cQuantidade,4,',')},c2v:function(){gx.O.AV8cQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("vCQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SEQUENCIA",gxz:"Z10508Sequencia",gxold:"O10508Sequencia",gxvar:"A10508Sequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10508Sequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10508Sequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SEQUENCIA",row || gx.fn.currentGridRowImpl(31),gx.O.A10508Sequencia,0)},c2v:function(){gx.O.A10508Sequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SEQUENCIA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIGO",gxz:"Z10510Codigo",gxold:"O10510Codigo",gxvar:"A10510Codigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10510Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10510Codigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODIGO",row || gx.fn.currentGridRowImpl(31),gx.O.A10510Codigo,0)},c2v:function(){gx.O.A10510Codigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODIGO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"QUANTIDADE",gxz:"Z10511Quantidade",gxold:"O10511Quantidade",gxvar:"A10511Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10511Quantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10511Quantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("QUANTIDADE",row || gx.fn.currentGridRowImpl(31),gx.O.A10511Quantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10511Quantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("QUANTIDADE",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cSequencia = 0 ;
   this.ZV6cSequencia = 0 ;
   this.OV6cSequencia = 0 ;
   this.AV7cCodigo = 0 ;
   this.ZV7cCodigo = 0 ;
   this.OV7cCodigo = 0 ;
   this.AV8cQuantidade = 0 ;
   this.ZV8cQuantidade = 0 ;
   this.OV8cQuantidade = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10508Sequencia = 0 ;
   this.O10508Sequencia = 0 ;
   this.Z10510Codigo = 0 ;
   this.O10510Codigo = 0 ;
   this.Z10511Quantidade = 0 ;
   this.O10511Quantidade = 0 ;
   this.AV6cSequencia = 0 ;
   this.AV7cCodigo = 0 ;
   this.AV8cQuantidade = 0 ;
   this.AV9pSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10508Sequencia = 0 ;
   this.A10510Codigo = 0 ;
   this.A10511Quantidade = 0 ;
   this.Events = {"e132772_client": ["ENTER", true] ,"e142771_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequencia',fld:'vCSEQUENCIA'},{av:'AV7cCodigo',fld:'vCCODIGO'},{av:'AV8cQuantidade',fld:'vCQUANTIDADE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10508Sequencia',fld:'SEQUENCIA'}],[{av:'AV9pSequencia',fld:'vPSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequencia',fld:'vCSEQUENCIA'},{av:'AV7cCodigo',fld:'vCCODIGO'},{av:'AV8cQuantidade',fld:'vCQUANTIDADE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequencia',fld:'vCSEQUENCIA'},{av:'AV7cCodigo',fld:'vCCODIGO'},{av:'AV8cQuantidade',fld:'vCQUANTIDADE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequencia',fld:'vCSEQUENCIA'},{av:'AV7cCodigo',fld:'vCCODIGO'},{av:'AV8cQuantidade',fld:'vCQUANTIDADE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSequencia',fld:'vCSEQUENCIA'},{av:'AV7cCodigo',fld:'vCCODIGO'},{av:'AV8cQuantidade',fld:'vCQUANTIDADE'}],[]];
   this.setVCMap("AV9pSequencia", "vPSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ln0());
