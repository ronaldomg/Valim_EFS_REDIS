/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:50.25
*/
gx.evt.autoSkip = false;
gx.define('gx03o1', false, function () {
   this.ServerClass =  "gx03o1" ;
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
      this.AV11pTipoRateioEmpresaId=gx.fn.getControlValue("vPTIPORATEIOEMPRESAID") ;
      this.AV12pTipoRateioId=gx.fn.getIntegerValue("vPTIPORATEIOID",'.') ;
   };
   this.e131kh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,51];
   this.GXLastCtrlId =51;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03o1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(978,43,"TIPORATEIOID","Código Tipo Rateio","","TipoRateioId","int",0,"px",3,3,"right",null,[],978,"TipoRateioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(980,44,"TIPORATEIODESCRICAO","Descrição","Selecionar","TipoRateioDescricao","svchar",0,"px",25,25,"left",null,[],980,"TipoRateioDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(981,45,"TIPORATEIOULTIMOITEM","Último Item","","TipoRateioUltimoItem","int",0,"px",2,2,"right",null,[],981,"TipoRateioUltimoItem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(982,46,"TIPORATEIOUSUARIOALT","Usuário Alteração","","TipoRateioUsuarioAlt","char",0,"px",12,12,"left",null,[],982,"TipoRateioUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(983,47,"TIPORATEIODATAHORAALT","Data/Hora Alteração","","TipoRateioDataHoraAlt","dtime",0,"px",16,16,"right",null,[],983,"TipoRateioDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(977,48,"TIPORATEIOEMPRESAID","Empresa","","TipoRateioEmpresaId","char",0,"px",10,10,"left",null,[],977,"TipoRateioEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPORATEIOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPORATEIOID",gxz:"ZV6cTipoRateioId",gxold:"OV6cTipoRateioId",gxvar:"AV6cTipoRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTipoRateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPORATEIOID",gx.O.AV6cTipoRateioId,0)},c2v:function(){gx.O.AV6cTipoRateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPORATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPORATEIODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPORATEIODESCRICAO",gxz:"ZV7cTipoRateioDescricao",gxold:"OV7cTipoRateioDescricao",gxvar:"AV7cTipoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoRateioDescricao=Value},v2z:function(Value){gx.O.ZV7cTipoRateioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPORATEIODESCRICAO",gx.O.AV7cTipoRateioDescricao,0)},c2v:function(){gx.O.AV7cTipoRateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPORATEIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPORATEIOULTIMOITEM", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPORATEIOULTIMOITEM",gxz:"ZV8cTipoRateioUltimoItem",gxold:"OV8cTipoRateioUltimoItem",gxvar:"AV8cTipoRateioUltimoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoRateioUltimoItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cTipoRateioUltimoItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPORATEIOULTIMOITEM",gx.O.AV8cTipoRateioUltimoItem,0)},c2v:function(){gx.O.AV8cTipoRateioUltimoItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPORATEIOULTIMOITEM",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPORATEIOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPORATEIOUSUARIOALT",gxz:"ZV9cTipoRateioUsuarioAlt",gxold:"OV9cTipoRateioUsuarioAlt",gxvar:"AV9cTipoRateioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoRateioUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cTipoRateioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTIPORATEIOUSUARIOALT",gx.O.AV9cTipoRateioUsuarioAlt,0)},c2v:function(){gx.O.AV9cTipoRateioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTIPORATEIOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPORATEIODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPORATEIODATAHORAALT",gxz:"ZV10cTipoRateioDataHoraAlt",gxold:"OV10cTipoRateioDataHoraAlt",gxvar:"AV10cTipoRateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cTipoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPORATEIODATAHORAALT",gx.O.AV10cTipoRateioDataHoraAlt,0)},c2v:function(){gx.O.AV10cTipoRateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPORATEIODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOID",gxz:"Z978TipoRateioId",gxold:"O978TipoRateioId",gxvar:"A978TipoRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A978TipoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z978TipoRateioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A978TipoRateioId,0)},c2v:function(){gx.O.A978TipoRateioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPORATEIOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIODESCRICAO",gxz:"Z980TipoRateioDescricao",gxold:"O980TipoRateioDescricao",gxvar:"A980TipoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A980TipoRateioDescricao=Value},v2z:function(Value){gx.O.Z980TipoRateioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A980TipoRateioDescricao,0)},c2v:function(){gx.O.A980TipoRateioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOULTIMOITEM",gxz:"Z981TipoRateioUltimoItem",gxold:"O981TipoRateioUltimoItem",gxvar:"A981TipoRateioUltimoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A981TipoRateioUltimoItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z981TipoRateioUltimoItem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOULTIMOITEM",row || gx.fn.currentGridRowImpl(41),gx.O.A981TipoRateioUltimoItem,0)},c2v:function(){gx.O.A981TipoRateioUltimoItem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPORATEIOULTIMOITEM",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOUSUARIOALT",gxz:"Z982TipoRateioUsuarioAlt",gxold:"O982TipoRateioUsuarioAlt",gxvar:"A982TipoRateioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A982TipoRateioUsuarioAlt=Value},v2z:function(Value){gx.O.Z982TipoRateioUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A982TipoRateioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A982TipoRateioUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIOUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIODATAHORAALT",gxz:"Z983TipoRateioDataHoraAlt",gxold:"O983TipoRateioDataHoraAlt",gxvar:"A983TipoRateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A983TipoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z983TipoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A983TipoRateioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A983TipoRateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPORATEIODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOEMPRESAID",gxz:"Z977TipoRateioEmpresaId",gxold:"O977TipoRateioEmpresaId",gxvar:"A977TipoRateioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A977TipoRateioEmpresaId=Value},v2z:function(Value){gx.O.Z977TipoRateioEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A977TipoRateioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A977TipoRateioEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   this.AV6cTipoRateioId = 0 ;
   this.ZV6cTipoRateioId = 0 ;
   this.OV6cTipoRateioId = 0 ;
   this.AV7cTipoRateioDescricao = "" ;
   this.ZV7cTipoRateioDescricao = "" ;
   this.OV7cTipoRateioDescricao = "" ;
   this.AV8cTipoRateioUltimoItem = 0 ;
   this.ZV8cTipoRateioUltimoItem = 0 ;
   this.OV8cTipoRateioUltimoItem = 0 ;
   this.AV9cTipoRateioUsuarioAlt = "" ;
   this.ZV9cTipoRateioUsuarioAlt = "" ;
   this.OV9cTipoRateioUsuarioAlt = "" ;
   this.AV10cTipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cTipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.OV10cTipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z978TipoRateioId = 0 ;
   this.O978TipoRateioId = 0 ;
   this.Z980TipoRateioDescricao = "" ;
   this.O980TipoRateioDescricao = "" ;
   this.Z981TipoRateioUltimoItem = 0 ;
   this.O981TipoRateioUltimoItem = 0 ;
   this.Z982TipoRateioUsuarioAlt = "" ;
   this.O982TipoRateioUsuarioAlt = "" ;
   this.Z983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.O983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.Z977TipoRateioEmpresaId = "" ;
   this.O977TipoRateioEmpresaId = "" ;
   this.AV6cTipoRateioId = 0 ;
   this.AV7cTipoRateioDescricao = "" ;
   this.AV8cTipoRateioUltimoItem = 0 ;
   this.AV9cTipoRateioUsuarioAlt = "" ;
   this.AV10cTipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV11pTipoRateioEmpresaId = "" ;
   this.AV12pTipoRateioId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A978TipoRateioId = 0 ;
   this.A980TipoRateioDescricao = "" ;
   this.A981TipoRateioUltimoItem = 0 ;
   this.A982TipoRateioUsuarioAlt = "" ;
   this.A983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.A977TipoRateioEmpresaId = "" ;
   this.Events = {"e131kh2_client": ["ENTER", true] ,"e141kh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoRateioId',fld:'vCTIPORATEIOID'},{av:'AV7cTipoRateioDescricao',fld:'vCTIPORATEIODESCRICAO'},{av:'AV8cTipoRateioUltimoItem',fld:'vCTIPORATEIOULTIMOITEM'},{av:'AV9cTipoRateioUsuarioAlt',fld:'vCTIPORATEIOUSUARIOALT'},{av:'AV10cTipoRateioDataHoraAlt',fld:'vCTIPORATEIODATAHORAALT'},{av:'AV11pTipoRateioEmpresaId',fld:'vPTIPORATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A978TipoRateioId',fld:'TIPORATEIOID'}],[{av:'AV12pTipoRateioId',fld:'vPTIPORATEIOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoRateioId',fld:'vCTIPORATEIOID'},{av:'AV7cTipoRateioDescricao',fld:'vCTIPORATEIODESCRICAO'},{av:'AV8cTipoRateioUltimoItem',fld:'vCTIPORATEIOULTIMOITEM'},{av:'AV9cTipoRateioUsuarioAlt',fld:'vCTIPORATEIOUSUARIOALT'},{av:'AV10cTipoRateioDataHoraAlt',fld:'vCTIPORATEIODATAHORAALT'},{av:'AV11pTipoRateioEmpresaId',fld:'vPTIPORATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoRateioId',fld:'vCTIPORATEIOID'},{av:'AV7cTipoRateioDescricao',fld:'vCTIPORATEIODESCRICAO'},{av:'AV8cTipoRateioUltimoItem',fld:'vCTIPORATEIOULTIMOITEM'},{av:'AV9cTipoRateioUsuarioAlt',fld:'vCTIPORATEIOUSUARIOALT'},{av:'AV10cTipoRateioDataHoraAlt',fld:'vCTIPORATEIODATAHORAALT'},{av:'AV11pTipoRateioEmpresaId',fld:'vPTIPORATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoRateioId',fld:'vCTIPORATEIOID'},{av:'AV7cTipoRateioDescricao',fld:'vCTIPORATEIODESCRICAO'},{av:'AV8cTipoRateioUltimoItem',fld:'vCTIPORATEIOULTIMOITEM'},{av:'AV9cTipoRateioUsuarioAlt',fld:'vCTIPORATEIOUSUARIOALT'},{av:'AV10cTipoRateioDataHoraAlt',fld:'vCTIPORATEIODATAHORAALT'},{av:'AV11pTipoRateioEmpresaId',fld:'vPTIPORATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoRateioId',fld:'vCTIPORATEIOID'},{av:'AV7cTipoRateioDescricao',fld:'vCTIPORATEIODESCRICAO'},{av:'AV8cTipoRateioUltimoItem',fld:'vCTIPORATEIOULTIMOITEM'},{av:'AV9cTipoRateioUsuarioAlt',fld:'vCTIPORATEIOUSUARIOALT'},{av:'AV10cTipoRateioDataHoraAlt',fld:'vCTIPORATEIODATAHORAALT'},{av:'AV11pTipoRateioEmpresaId',fld:'vPTIPORATEIOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV11pTipoRateioEmpresaId", "vPTIPORATEIOEMPRESAID", 0, "char");
   this.setVCMap("AV12pTipoRateioId", "vPTIPORATEIOID", 0, "int");
   this.setVCMap("AV11pTipoRateioEmpresaId", "vPTIPORATEIOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pTipoRateioEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03o1());