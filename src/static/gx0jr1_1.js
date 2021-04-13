/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:43:19.62
*/
gx.evt.autoSkip = false;
gx.define('gx0jr1_1', false, function () {
   this.ServerClass =  "gx0jr1_1" ;
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
      this.AV11pRelEstFinId=gx.fn.getIntegerValue("vPRELESTFINID",'.') ;
      this.AV10pRelEstFinEmpresaId=gx.fn.getControlValue("vPRELESTFINEMPRESAID") ;
   };
   this.e131wx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141wx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,45];
   this.GXLastCtrlId =45;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0jr1_1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9547,38,"RELESTFINEMPRESAID","Rel Est Fin Empresa Id","","RelEstFinEmpresaId","char",0,"px",10,10,"left",null,[],9547,"RelEstFinEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9549,39,"RELESTFINDESCRICAO","Rel Est Fin Descricao","Selecionar","RelEstFinDescricao","svchar",0,"px",40,40,"left",null,[],9549,"RelEstFinDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9550,40,"RELESTFINUSUARIOALT","Rel Est Fin Usuario Alt","","RelEstFinUsuarioAlt","char",0,"px",12,12,"left",null,[],9550,"RelEstFinUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9551,41,"RELESTFINDATAHORAALT","Rel Est Fin Data Hora Alt","","RelEstFinDataHoraAlt","dtime",0,"px",16,16,"right",null,[],9551,"RelEstFinDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9548,42,"RELESTFINID","Rel Est Fin Id","","RelEstFinId","int",0,"px",3,3,"right",null,[],9548,"RelEstFinId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKRELESTFINEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRELESTFINEMPRESAID",gxz:"ZV6cRelEstFinEmpresaId",gxold:"OV6cRelEstFinEmpresaId",gxvar:"AV6cRelEstFinEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRelEstFinEmpresaId=Value},v2z:function(Value){gx.O.ZV6cRelEstFinEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCRELESTFINEMPRESAID",gx.O.AV6cRelEstFinEmpresaId,0)},c2v:function(){gx.O.AV6cRelEstFinEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCRELESTFINEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKRELESTFINDESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRELESTFINDESCRICAO",gxz:"ZV7cRelEstFinDescricao",gxold:"OV7cRelEstFinDescricao",gxvar:"AV7cRelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRelEstFinDescricao=Value},v2z:function(Value){gx.O.ZV7cRelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vCRELESTFINDESCRICAO",gx.O.AV7cRelEstFinDescricao,0)},c2v:function(){gx.O.AV7cRelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCRELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKRELESTFINUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRELESTFINUSUARIOALT",gxz:"ZV8cRelEstFinUsuarioAlt",gxold:"OV8cRelEstFinUsuarioAlt",gxvar:"AV8cRelEstFinUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cRelEstFinUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cRelEstFinUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCRELESTFINUSUARIOALT",gx.O.AV8cRelEstFinUsuarioAlt,0)},c2v:function(){gx.O.AV8cRelEstFinUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCRELESTFINUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKRELESTFINDATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRELESTFINDATAHORAALT",gxz:"ZV9cRelEstFinDataHoraAlt",gxold:"OV9cRelEstFinDataHoraAlt",gxvar:"AV9cRelEstFinDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cRelEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cRelEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCRELESTFINDATAHORAALT",gx.O.AV9cRelEstFinDataHoraAlt,0)},c2v:function(){gx.O.AV9cRelEstFinDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCRELESTFINDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINEMPRESAID",gxz:"Z9547RelEstFinEmpresaId",gxold:"O9547RelEstFinEmpresaId",gxvar:"A9547RelEstFinEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9547RelEstFinEmpresaId=Value},v2z:function(Value){gx.O.Z9547RelEstFinEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("RELESTFINEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A9547RelEstFinEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9547RelEstFinEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("RELESTFINEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINDESCRICAO",gxz:"Z9549RelEstFinDescricao",gxold:"O9549RelEstFinDescricao",gxvar:"A9549RelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9549RelEstFinDescricao=Value},v2z:function(Value){gx.O.Z9549RelEstFinDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("RELESTFINDESCRICAO",row || gx.fn.currentGridRowImpl(36),gx.O.A9549RelEstFinDescricao,0)},c2v:function(){gx.O.A9549RelEstFinDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("RELESTFINDESCRICAO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINUSUARIOALT",gxz:"Z9550RelEstFinUsuarioAlt",gxold:"O9550RelEstFinUsuarioAlt",gxvar:"A9550RelEstFinUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9550RelEstFinUsuarioAlt=Value},v2z:function(Value){gx.O.Z9550RelEstFinUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("RELESTFINUSUARIOALT",row || gx.fn.currentGridRowImpl(36),gx.O.A9550RelEstFinUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9550RelEstFinUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("RELESTFINUSUARIOALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINDATAHORAALT",gxz:"Z9551RelEstFinDataHoraAlt",gxold:"O9551RelEstFinDataHoraAlt",gxvar:"A9551RelEstFinDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9551RelEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9551RelEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("RELESTFINDATAHORAALT",row || gx.fn.currentGridRowImpl(36),gx.O.A9551RelEstFinDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9551RelEstFinDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("RELESTFINDATAHORAALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINID",gxz:"Z9548RelEstFinId",gxold:"O9548RelEstFinId",gxvar:"A9548RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9548RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9548RelEstFinId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RELESTFINID",row || gx.fn.currentGridRowImpl(36),gx.O.A9548RelEstFinId,0)},c2v:function(){gx.O.A9548RelEstFinId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RELESTFINID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   this.AV6cRelEstFinEmpresaId = "" ;
   this.ZV6cRelEstFinEmpresaId = "" ;
   this.OV6cRelEstFinEmpresaId = "" ;
   this.AV7cRelEstFinDescricao = "" ;
   this.ZV7cRelEstFinDescricao = "" ;
   this.OV7cRelEstFinDescricao = "" ;
   this.AV8cRelEstFinUsuarioAlt = "" ;
   this.ZV8cRelEstFinUsuarioAlt = "" ;
   this.OV8cRelEstFinUsuarioAlt = "" ;
   this.AV9cRelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cRelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.OV9cRelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9547RelEstFinEmpresaId = "" ;
   this.O9547RelEstFinEmpresaId = "" ;
   this.Z9549RelEstFinDescricao = "" ;
   this.O9549RelEstFinDescricao = "" ;
   this.Z9550RelEstFinUsuarioAlt = "" ;
   this.O9550RelEstFinUsuarioAlt = "" ;
   this.Z9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.O9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.Z9548RelEstFinId = 0 ;
   this.O9548RelEstFinId = 0 ;
   this.AV6cRelEstFinEmpresaId = "" ;
   this.AV7cRelEstFinDescricao = "" ;
   this.AV8cRelEstFinUsuarioAlt = "" ;
   this.AV9cRelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.AV10pRelEstFinEmpresaId = "" ;
   this.AV11pRelEstFinId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9549RelEstFinDescricao = "" ;
   this.A9550RelEstFinUsuarioAlt = "" ;
   this.A9551RelEstFinDataHoraAlt = gx.date.nullDate() ;
   this.A9548RelEstFinId = 0 ;
   this.Events = {"e131wx2_client": ["ENTER", true] ,"e141wx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelEstFinEmpresaId',fld:'vCRELESTFINEMPRESAID'},{av:'AV7cRelEstFinDescricao',fld:'vCRELESTFINDESCRICAO'},{av:'AV8cRelEstFinUsuarioAlt',fld:'vCRELESTFINUSUARIOALT'},{av:'AV9cRelEstFinDataHoraAlt',fld:'vCRELESTFINDATAHORAALT'},{av:'AV11pRelEstFinId',fld:'vPRELESTFINID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9547RelEstFinEmpresaId',fld:'RELESTFINEMPRESAID'}],[{av:'AV10pRelEstFinEmpresaId',fld:'vPRELESTFINEMPRESAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelEstFinEmpresaId',fld:'vCRELESTFINEMPRESAID'},{av:'AV7cRelEstFinDescricao',fld:'vCRELESTFINDESCRICAO'},{av:'AV8cRelEstFinUsuarioAlt',fld:'vCRELESTFINUSUARIOALT'},{av:'AV9cRelEstFinDataHoraAlt',fld:'vCRELESTFINDATAHORAALT'},{av:'AV11pRelEstFinId',fld:'vPRELESTFINID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelEstFinEmpresaId',fld:'vCRELESTFINEMPRESAID'},{av:'AV7cRelEstFinDescricao',fld:'vCRELESTFINDESCRICAO'},{av:'AV8cRelEstFinUsuarioAlt',fld:'vCRELESTFINUSUARIOALT'},{av:'AV9cRelEstFinDataHoraAlt',fld:'vCRELESTFINDATAHORAALT'},{av:'AV11pRelEstFinId',fld:'vPRELESTFINID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelEstFinEmpresaId',fld:'vCRELESTFINEMPRESAID'},{av:'AV7cRelEstFinDescricao',fld:'vCRELESTFINDESCRICAO'},{av:'AV8cRelEstFinUsuarioAlt',fld:'vCRELESTFINUSUARIOALT'},{av:'AV9cRelEstFinDataHoraAlt',fld:'vCRELESTFINDATAHORAALT'},{av:'AV11pRelEstFinId',fld:'vPRELESTFINID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelEstFinEmpresaId',fld:'vCRELESTFINEMPRESAID'},{av:'AV7cRelEstFinDescricao',fld:'vCRELESTFINDESCRICAO'},{av:'AV8cRelEstFinUsuarioAlt',fld:'vCRELESTFINUSUARIOALT'},{av:'AV9cRelEstFinDataHoraAlt',fld:'vCRELESTFINDATAHORAALT'},{av:'AV11pRelEstFinId',fld:'vPRELESTFINID',hsh:true}],[]];
   this.setVCMap("AV11pRelEstFinId", "vPRELESTFINID", 0, "int");
   this.setVCMap("AV10pRelEstFinEmpresaId", "vPRELESTFINEMPRESAID", 0, "char");
   this.setVCMap("AV11pRelEstFinId", "vPRELESTFINID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pRelEstFinId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0jr1_1());