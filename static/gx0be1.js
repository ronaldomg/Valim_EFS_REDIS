/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:42:9.61
*/
gx.evt.autoSkip = false;
gx.define('gx0be1', false, function () {
   this.ServerClass =  "gx0be1" ;
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
      this.AV10pSetorEmpresaId=gx.fn.getControlValue("vPSETOREMPRESAID") ;
      this.AV11pSetorId=gx.fn.getControlValue("vPSETORID") ;
   };
   this.e131vo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141vo1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,45];
   this.GXLastCtrlId =45;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0be1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2953,38,"SETORID","Código do Setor","","SetorId","char",0,"px",15,15,"left",null,[],2953,"SetorId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2958,39,"SETORDESCRICAO","Descrição do Setor","Selecionar","SetorDescricao","svchar",0,"px",30,30,"left",null,[],2958,"SetorDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4007,40,"SETORUSUARIOALT","Usuário de Alteração","","SetorUsuarioAlt","char",0,"px",12,12,"left",null,[],4007,"SetorUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4008,41,"SETORDATAHORAALT","Data/Hora de Alteração","","SetorDataHoraAlt","dtime",0,"px",16,16,"right",null,[],4008,"SetorDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2952,42,"SETOREMPRESAID","Empresa Setor","","SetorEmpresaId","char",0,"px",10,10,"left",null,[],2952,"SetorEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSETORID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSETORID",gxz:"ZV6cSetorId",gxold:"OV6cSetorId",gxvar:"AV6cSetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSetorId=Value},v2z:function(Value){gx.O.ZV6cSetorId=Value},v2c:function(){gx.fn.setControlValue("vCSETORID",gx.O.AV6cSetorId,0)},c2v:function(){gx.O.AV6cSetorId=this.val()},val:function(){return gx.fn.getControlValue("vCSETORID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSETORDESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSETORDESCRICAO",gxz:"ZV7cSetorDescricao",gxold:"OV7cSetorDescricao",gxvar:"AV7cSetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSetorDescricao=Value},v2z:function(Value){gx.O.ZV7cSetorDescricao=Value},v2c:function(){gx.fn.setControlValue("vCSETORDESCRICAO",gx.O.AV7cSetorDescricao,0)},c2v:function(){gx.O.AV7cSetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCSETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSETORUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSETORUSUARIOALT",gxz:"ZV8cSetorUsuarioAlt",gxold:"OV8cSetorUsuarioAlt",gxvar:"AV8cSetorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSetorUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cSetorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCSETORUSUARIOALT",gx.O.AV8cSetorUsuarioAlt,0)},c2v:function(){gx.O.AV8cSetorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCSETORUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSETORDATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSETORDATAHORAALT",gxz:"ZV9cSetorDataHoraAlt",gxold:"OV9cSetorDataHoraAlt",gxvar:"AV9cSetorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSetorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cSetorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSETORDATAHORAALT",gx.O.AV9cSetorDataHoraAlt,0)},c2v:function(){gx.O.AV9cSetorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSETORDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(row){gx.fn.setGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(36),gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SETORDESCRICAO",gxz:"Z2958SetorDescricao",gxold:"O2958SetorDescricao",gxvar:"A2958SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2958SetorDescricao=Value},v2z:function(Value){gx.O.Z2958SetorDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(36),gx.O.A2958SetorDescricao,0)},c2v:function(){gx.O.A2958SetorDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SETORUSUARIOALT",gxz:"Z4007SetorUsuarioAlt",gxold:"O4007SetorUsuarioAlt",gxvar:"A4007SetorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4007SetorUsuarioAlt=Value},v2z:function(Value){gx.O.Z4007SetorUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SETORUSUARIOALT",row || gx.fn.currentGridRowImpl(36),gx.O.A4007SetorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4007SetorUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORUSUARIOALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SETORDATAHORAALT",gxz:"Z4008SetorDataHoraAlt",gxold:"O4008SetorDataHoraAlt",gxvar:"A4008SetorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4008SetorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4008SetorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SETORDATAHORAALT",row || gx.fn.currentGridRowImpl(36),gx.O.A4008SetorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4008SetorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SETORDATAHORAALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SETOREMPRESAID",gxz:"Z2952SetorEmpresaId",gxold:"O2952SetorEmpresaId",gxvar:"A2952SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2952SetorEmpresaId=Value},v2z:function(Value){gx.O.Z2952SetorEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SETOREMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A2952SetorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2952SetorEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETOREMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   this.AV6cSetorId = "" ;
   this.ZV6cSetorId = "" ;
   this.OV6cSetorId = "" ;
   this.AV7cSetorDescricao = "" ;
   this.ZV7cSetorDescricao = "" ;
   this.OV7cSetorDescricao = "" ;
   this.AV8cSetorUsuarioAlt = "" ;
   this.ZV8cSetorUsuarioAlt = "" ;
   this.OV8cSetorUsuarioAlt = "" ;
   this.AV9cSetorDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cSetorDataHoraAlt = gx.date.nullDate() ;
   this.OV9cSetorDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.Z2958SetorDescricao = "" ;
   this.O2958SetorDescricao = "" ;
   this.Z4007SetorUsuarioAlt = "" ;
   this.O4007SetorUsuarioAlt = "" ;
   this.Z4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.O4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.Z2952SetorEmpresaId = "" ;
   this.O2952SetorEmpresaId = "" ;
   this.AV6cSetorId = "" ;
   this.AV7cSetorDescricao = "" ;
   this.AV8cSetorUsuarioAlt = "" ;
   this.AV9cSetorDataHoraAlt = gx.date.nullDate() ;
   this.AV10pSetorEmpresaId = "" ;
   this.AV11pSetorId = "" ;
   this.AV5LinkSelection = "" ;
   this.A2953SetorId = "" ;
   this.A2958SetorDescricao = "" ;
   this.A4007SetorUsuarioAlt = "" ;
   this.A4008SetorDataHoraAlt = gx.date.nullDate() ;
   this.A2952SetorEmpresaId = "" ;
   this.Events = {"e131vo2_client": ["ENTER", true] ,"e141vo1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSetorId',fld:'vCSETORID'},{av:'AV7cSetorDescricao',fld:'vCSETORDESCRICAO'},{av:'AV8cSetorUsuarioAlt',fld:'vCSETORUSUARIOALT'},{av:'AV9cSetorDataHoraAlt',fld:'vCSETORDATAHORAALT'},{av:'AV10pSetorEmpresaId',fld:'vPSETOREMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2953SetorId',fld:'SETORID'}],[{av:'AV11pSetorId',fld:'vPSETORID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSetorId',fld:'vCSETORID'},{av:'AV7cSetorDescricao',fld:'vCSETORDESCRICAO'},{av:'AV8cSetorUsuarioAlt',fld:'vCSETORUSUARIOALT'},{av:'AV9cSetorDataHoraAlt',fld:'vCSETORDATAHORAALT'},{av:'AV10pSetorEmpresaId',fld:'vPSETOREMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSetorId',fld:'vCSETORID'},{av:'AV7cSetorDescricao',fld:'vCSETORDESCRICAO'},{av:'AV8cSetorUsuarioAlt',fld:'vCSETORUSUARIOALT'},{av:'AV9cSetorDataHoraAlt',fld:'vCSETORDATAHORAALT'},{av:'AV10pSetorEmpresaId',fld:'vPSETOREMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSetorId',fld:'vCSETORID'},{av:'AV7cSetorDescricao',fld:'vCSETORDESCRICAO'},{av:'AV8cSetorUsuarioAlt',fld:'vCSETORUSUARIOALT'},{av:'AV9cSetorDataHoraAlt',fld:'vCSETORDATAHORAALT'},{av:'AV10pSetorEmpresaId',fld:'vPSETOREMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSetorId',fld:'vCSETORID'},{av:'AV7cSetorDescricao',fld:'vCSETORDESCRICAO'},{av:'AV8cSetorUsuarioAlt',fld:'vCSETORUSUARIOALT'},{av:'AV9cSetorDataHoraAlt',fld:'vCSETORDATAHORAALT'},{av:'AV10pSetorEmpresaId',fld:'vPSETOREMPRESAID',hsh:true}],[]];
   this.setVCMap("AV10pSetorEmpresaId", "vPSETOREMPRESAID", 0, "char");
   this.setVCMap("AV11pSetorId", "vPSETORID", 0, "char");
   this.setVCMap("AV10pSetorEmpresaId", "vPSETOREMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pSetorEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0be1());
