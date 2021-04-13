/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:46.47
*/
gx.evt.autoSkip = false;
gx.define('gx0h90', false, function () {
   this.ServerClass =  "gx0h90" ;
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
      this.AV9pNaturezaReceitaId=gx.fn.getIntegerValue("vPNATUREZARECEITAID",'.') ;
   };
   this.e131v92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141v91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0h90",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8441,33,"NATUREZARECEITAID","Código","","NaturezaReceitaId","int",0,"px",3,3,"right",null,[],8441,"NaturezaReceitaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8439,34,"NATUREZARECEITAUSUARIOALT","Usuário Alteração","","NaturezaReceitaUsuarioAlt","char",0,"px",12,12,"left",null,[],8439,"NaturezaReceitaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8440,35,"NATUREZARECEITADATAHORAALT","Data/Hora Alteração","","NaturezaReceitaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],8440,"NaturezaReceitaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNATUREZARECEITAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZARECEITAID",gxz:"ZV6cNaturezaReceitaId",gxold:"OV6cNaturezaReceitaId",gxvar:"AV6cNaturezaReceitaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNaturezaReceitaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cNaturezaReceitaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNATUREZARECEITAID",gx.O.AV6cNaturezaReceitaId,0)},c2v:function(){gx.O.AV6cNaturezaReceitaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNATUREZARECEITAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNATUREZARECEITAUSUARIOALT", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZARECEITAUSUARIOALT",gxz:"ZV7cNaturezaReceitaUsuarioAlt",gxold:"OV7cNaturezaReceitaUsuarioAlt",gxvar:"AV7cNaturezaReceitaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNaturezaReceitaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV7cNaturezaReceitaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCNATUREZARECEITAUSUARIOALT",gx.O.AV7cNaturezaReceitaUsuarioAlt,0)},c2v:function(){gx.O.AV7cNaturezaReceitaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCNATUREZARECEITAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNATUREZARECEITADATAHORAALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZARECEITADATAHORAALT",gxz:"ZV8cNaturezaReceitaDataHoraAlt",gxold:"OV8cNaturezaReceitaDataHoraAlt",gxvar:"AV8cNaturezaReceitaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cNaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCNATUREZARECEITADATAHORAALT",gx.O.AV8cNaturezaReceitaDataHoraAlt,0)},c2v:function(){gx.O.AV8cNaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCNATUREZARECEITADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITAID",gxz:"Z8441NaturezaReceitaId",gxold:"O8441NaturezaReceitaId",gxvar:"A8441NaturezaReceitaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8441NaturezaReceitaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8441NaturezaReceitaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZARECEITAID",row || gx.fn.currentGridRowImpl(31),gx.O.A8441NaturezaReceitaId,0)},c2v:function(){gx.O.A8441NaturezaReceitaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NATUREZARECEITAID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITAUSUARIOALT",gxz:"Z8439NaturezaReceitaUsuarioAlt",gxold:"O8439NaturezaReceitaUsuarioAlt",gxvar:"A8439NaturezaReceitaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8439NaturezaReceitaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8439NaturezaReceitaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZARECEITAUSUARIOALT",row || gx.fn.currentGridRowImpl(31),gx.O.A8439NaturezaReceitaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8439NaturezaReceitaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZARECEITAUSUARIOALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITADATAHORAALT",gxz:"Z8440NaturezaReceitaDataHoraAlt",gxold:"O8440NaturezaReceitaDataHoraAlt",gxvar:"A8440NaturezaReceitaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8440NaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8440NaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZARECEITADATAHORAALT",row || gx.fn.currentGridRowImpl(31),gx.O.A8440NaturezaReceitaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8440NaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NATUREZARECEITADATAHORAALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cNaturezaReceitaId = 0 ;
   this.ZV6cNaturezaReceitaId = 0 ;
   this.OV6cNaturezaReceitaId = 0 ;
   this.AV7cNaturezaReceitaUsuarioAlt = "" ;
   this.ZV7cNaturezaReceitaUsuarioAlt = "" ;
   this.OV7cNaturezaReceitaUsuarioAlt = "" ;
   this.AV8cNaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.ZV8cNaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.OV8cNaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8441NaturezaReceitaId = 0 ;
   this.O8441NaturezaReceitaId = 0 ;
   this.Z8439NaturezaReceitaUsuarioAlt = "" ;
   this.O8439NaturezaReceitaUsuarioAlt = "" ;
   this.Z8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.O8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.AV6cNaturezaReceitaId = 0 ;
   this.AV7cNaturezaReceitaUsuarioAlt = "" ;
   this.AV8cNaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.AV9pNaturezaReceitaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8441NaturezaReceitaId = 0 ;
   this.A8439NaturezaReceitaUsuarioAlt = "" ;
   this.A8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131v92_client": ["ENTER", true] ,"e141v91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaReceitaId',fld:'vCNATUREZARECEITAID'},{av:'AV7cNaturezaReceitaUsuarioAlt',fld:'vCNATUREZARECEITAUSUARIOALT'},{av:'AV8cNaturezaReceitaDataHoraAlt',fld:'vCNATUREZARECEITADATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8441NaturezaReceitaId',fld:'NATUREZARECEITAID'}],[{av:'AV9pNaturezaReceitaId',fld:'vPNATUREZARECEITAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaReceitaId',fld:'vCNATUREZARECEITAID'},{av:'AV7cNaturezaReceitaUsuarioAlt',fld:'vCNATUREZARECEITAUSUARIOALT'},{av:'AV8cNaturezaReceitaDataHoraAlt',fld:'vCNATUREZARECEITADATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaReceitaId',fld:'vCNATUREZARECEITAID'},{av:'AV7cNaturezaReceitaUsuarioAlt',fld:'vCNATUREZARECEITAUSUARIOALT'},{av:'AV8cNaturezaReceitaDataHoraAlt',fld:'vCNATUREZARECEITADATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaReceitaId',fld:'vCNATUREZARECEITAID'},{av:'AV7cNaturezaReceitaUsuarioAlt',fld:'vCNATUREZARECEITAUSUARIOALT'},{av:'AV8cNaturezaReceitaDataHoraAlt',fld:'vCNATUREZARECEITADATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaReceitaId',fld:'vCNATUREZARECEITAID'},{av:'AV7cNaturezaReceitaUsuarioAlt',fld:'vCNATUREZARECEITAUSUARIOALT'},{av:'AV8cNaturezaReceitaDataHoraAlt',fld:'vCNATUREZARECEITADATAHORAALT'}],[]];
   this.setVCMap("AV9pNaturezaReceitaId", "vPNATUREZARECEITAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0h90());
