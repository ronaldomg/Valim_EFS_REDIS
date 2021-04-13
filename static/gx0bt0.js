/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:41.92
*/
gx.evt.autoSkip = false;
gx.define('gx0bt0', false, function () {
   this.ServerClass =  "gx0bt0" ;
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
      this.AV11pUtilizacaoEmpresaId=gx.fn.getControlValue("vPUTILIZACAOEMPRESAID") ;
      this.AV12pUtilizacaoId=gx.fn.getIntegerValue("vPUTILIZACAOID",'.') ;
   };
   this.e131q72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141q71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0bt0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4025,43,"UTILIZACAOEMPRESAID","Empresa Utilizacao","","UtilizacaoEmpresaId","char",0,"px",10,10,"left",null,[],4025,"UtilizacaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4026,44,"UTILIZACAOID","Código Utilizacao","","UtilizacaoId","int",0,"px",3,3,"right",null,[],4026,"UtilizacaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4059,45,"UTILIZACAODESCRICAO","Descrição Utilizacao","Selecionar","UtilizacaoDescricao","svchar",0,"px",30,30,"left",null,[],4059,"UtilizacaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4180,46,"UTILIZACAOUSUARIOALT","Usuário Alteração","","UtilizacaoUsuarioAlt","char",0,"px",12,12,"left",null,[],4180,"UtilizacaoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4181,47,"UTILIZACAODATAHORAALT","Data/Hora Alteração","","UtilizacaoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],4181,"UtilizacaoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKUTILIZACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUTILIZACAOEMPRESAID",gxz:"ZV6cUtilizacaoEmpresaId",gxold:"OV6cUtilizacaoEmpresaId",gxvar:"AV6cUtilizacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cUtilizacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cUtilizacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCUTILIZACAOEMPRESAID",gx.O.AV6cUtilizacaoEmpresaId,0)},c2v:function(){gx.O.AV6cUtilizacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCUTILIZACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKUTILIZACAOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUTILIZACAOID",gxz:"ZV7cUtilizacaoId",gxold:"OV7cUtilizacaoId",gxvar:"AV7cUtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cUtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cUtilizacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCUTILIZACAOID",gx.O.AV7cUtilizacaoId,0)},c2v:function(){gx.O.AV7cUtilizacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUTILIZACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKUTILIZACAODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUTILIZACAODESCRICAO",gxz:"ZV8cUtilizacaoDescricao",gxold:"OV8cUtilizacaoDescricao",gxvar:"AV8cUtilizacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cUtilizacaoDescricao=Value},v2z:function(Value){gx.O.ZV8cUtilizacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCUTILIZACAODESCRICAO",gx.O.AV8cUtilizacaoDescricao,0)},c2v:function(){gx.O.AV8cUtilizacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCUTILIZACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKUTILIZACAOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUTILIZACAOUSUARIOALT",gxz:"ZV9cUtilizacaoUsuarioAlt",gxold:"OV9cUtilizacaoUsuarioAlt",gxvar:"AV9cUtilizacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cUtilizacaoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cUtilizacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCUTILIZACAOUSUARIOALT",gx.O.AV9cUtilizacaoUsuarioAlt,0)},c2v:function(){gx.O.AV9cUtilizacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCUTILIZACAOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKUTILIZACAODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUTILIZACAODATAHORAALT",gxz:"ZV10cUtilizacaoDataHoraAlt",gxold:"OV10cUtilizacaoDataHoraAlt",gxvar:"AV10cUtilizacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cUtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cUtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCUTILIZACAODATAHORAALT",gx.O.AV10cUtilizacaoDataHoraAlt,0)},c2v:function(){gx.O.AV10cUtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCUTILIZACAODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAOEMPRESAID",gxz:"Z4025UtilizacaoEmpresaId",gxold:"O4025UtilizacaoEmpresaId",gxvar:"A4025UtilizacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4025UtilizacaoEmpresaId=Value},v2z:function(Value){gx.O.Z4025UtilizacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4025UtilizacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4025UtilizacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("UTILIZACAOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAOID",gxz:"Z4026UtilizacaoId",gxold:"O4026UtilizacaoId",gxvar:"A4026UtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4026UtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4026UtilizacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAOID",row || gx.fn.currentGridRowImpl(41),gx.O.A4026UtilizacaoId,0)},c2v:function(){gx.O.A4026UtilizacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("UTILIZACAOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAODESCRICAO",gxz:"Z4059UtilizacaoDescricao",gxold:"O4059UtilizacaoDescricao",gxvar:"A4059UtilizacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4059UtilizacaoDescricao=Value},v2z:function(Value){gx.O.Z4059UtilizacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A4059UtilizacaoDescricao,0)},c2v:function(){gx.O.A4059UtilizacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("UTILIZACAODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAOUSUARIOALT",gxz:"Z4180UtilizacaoUsuarioAlt",gxold:"O4180UtilizacaoUsuarioAlt",gxvar:"A4180UtilizacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4180UtilizacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4180UtilizacaoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A4180UtilizacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4180UtilizacaoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("UTILIZACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAODATAHORAALT",gxz:"Z4181UtilizacaoDataHoraAlt",gxold:"O4181UtilizacaoDataHoraAlt",gxvar:"A4181UtilizacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4181UtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4181UtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A4181UtilizacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4181UtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("UTILIZACAODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cUtilizacaoEmpresaId = "" ;
   this.ZV6cUtilizacaoEmpresaId = "" ;
   this.OV6cUtilizacaoEmpresaId = "" ;
   this.AV7cUtilizacaoId = 0 ;
   this.ZV7cUtilizacaoId = 0 ;
   this.OV7cUtilizacaoId = 0 ;
   this.AV8cUtilizacaoDescricao = "" ;
   this.ZV8cUtilizacaoDescricao = "" ;
   this.OV8cUtilizacaoDescricao = "" ;
   this.AV9cUtilizacaoUsuarioAlt = "" ;
   this.ZV9cUtilizacaoUsuarioAlt = "" ;
   this.OV9cUtilizacaoUsuarioAlt = "" ;
   this.AV10cUtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cUtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cUtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4025UtilizacaoEmpresaId = "" ;
   this.O4025UtilizacaoEmpresaId = "" ;
   this.Z4026UtilizacaoId = 0 ;
   this.O4026UtilizacaoId = 0 ;
   this.Z4059UtilizacaoDescricao = "" ;
   this.O4059UtilizacaoDescricao = "" ;
   this.Z4180UtilizacaoUsuarioAlt = "" ;
   this.O4180UtilizacaoUsuarioAlt = "" ;
   this.Z4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.O4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cUtilizacaoEmpresaId = "" ;
   this.AV7cUtilizacaoId = 0 ;
   this.AV8cUtilizacaoDescricao = "" ;
   this.AV9cUtilizacaoUsuarioAlt = "" ;
   this.AV10cUtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV11pUtilizacaoEmpresaId = "" ;
   this.AV12pUtilizacaoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4025UtilizacaoEmpresaId = "" ;
   this.A4026UtilizacaoId = 0 ;
   this.A4059UtilizacaoDescricao = "" ;
   this.A4180UtilizacaoUsuarioAlt = "" ;
   this.A4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131q72_client": ["ENTER", true] ,"e141q71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUtilizacaoEmpresaId',fld:'vCUTILIZACAOEMPRESAID'},{av:'AV7cUtilizacaoId',fld:'vCUTILIZACAOID'},{av:'AV8cUtilizacaoDescricao',fld:'vCUTILIZACAODESCRICAO'},{av:'AV9cUtilizacaoUsuarioAlt',fld:'vCUTILIZACAOUSUARIOALT'},{av:'AV10cUtilizacaoDataHoraAlt',fld:'vCUTILIZACAODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4025UtilizacaoEmpresaId',fld:'UTILIZACAOEMPRESAID'},{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'}],[{av:'AV11pUtilizacaoEmpresaId',fld:'vPUTILIZACAOEMPRESAID'},{av:'AV12pUtilizacaoId',fld:'vPUTILIZACAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUtilizacaoEmpresaId',fld:'vCUTILIZACAOEMPRESAID'},{av:'AV7cUtilizacaoId',fld:'vCUTILIZACAOID'},{av:'AV8cUtilizacaoDescricao',fld:'vCUTILIZACAODESCRICAO'},{av:'AV9cUtilizacaoUsuarioAlt',fld:'vCUTILIZACAOUSUARIOALT'},{av:'AV10cUtilizacaoDataHoraAlt',fld:'vCUTILIZACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUtilizacaoEmpresaId',fld:'vCUTILIZACAOEMPRESAID'},{av:'AV7cUtilizacaoId',fld:'vCUTILIZACAOID'},{av:'AV8cUtilizacaoDescricao',fld:'vCUTILIZACAODESCRICAO'},{av:'AV9cUtilizacaoUsuarioAlt',fld:'vCUTILIZACAOUSUARIOALT'},{av:'AV10cUtilizacaoDataHoraAlt',fld:'vCUTILIZACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUtilizacaoEmpresaId',fld:'vCUTILIZACAOEMPRESAID'},{av:'AV7cUtilizacaoId',fld:'vCUTILIZACAOID'},{av:'AV8cUtilizacaoDescricao',fld:'vCUTILIZACAODESCRICAO'},{av:'AV9cUtilizacaoUsuarioAlt',fld:'vCUTILIZACAOUSUARIOALT'},{av:'AV10cUtilizacaoDataHoraAlt',fld:'vCUTILIZACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUtilizacaoEmpresaId',fld:'vCUTILIZACAOEMPRESAID'},{av:'AV7cUtilizacaoId',fld:'vCUTILIZACAOID'},{av:'AV8cUtilizacaoDescricao',fld:'vCUTILIZACAODESCRICAO'},{av:'AV9cUtilizacaoUsuarioAlt',fld:'vCUTILIZACAOUSUARIOALT'},{av:'AV10cUtilizacaoDataHoraAlt',fld:'vCUTILIZACAODATAHORAALT'}],[]];
   this.setVCMap("AV11pUtilizacaoEmpresaId", "vPUTILIZACAOEMPRESAID", 0, "char");
   this.setVCMap("AV12pUtilizacaoId", "vPUTILIZACAOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0bt0());