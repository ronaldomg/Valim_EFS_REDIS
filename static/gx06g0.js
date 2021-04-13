/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:15.34
*/
gx.evt.autoSkip = false;
gx.define('gx06g0', false, function () {
   this.ServerClass =  "gx06g0" ;
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
      this.AV13pProcessoRotina=gx.fn.getControlValue("vPPROCESSOROTINA") ;
      this.AV14pProcessoId=gx.fn.getIntegerValue("vPPROCESSOID",'.') ;
   };
   this.e131kr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kr1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06g0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addComboBox(1543,53,"PROCESSOROTINA","Rotina","ProcessoRotina","svchar",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1544,54,"PROCESSOID","Número do Processo","","ProcessoId","int",0,"px",6,6,"right",null,[],1544,"ProcessoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1545,55,"PROCESSODTINICIO","Data Inicial do Processo","Selecionar","ProcessoDtInicio","dtime",0,"px",16,16,"right",null,[],1545,"ProcessoDtInicio",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1546,56,"PROCESSODTTERMINO","Data Término do Processo","","ProcessoDtTermino","dtime",0,"px",16,16,"right",null,[],1546,"ProcessoDtTermino",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1541,57,"PROCESSOUSUARIOID","Usuário do Processo","","ProcessoUsuarioId","char",0,"px",12,12,"left",null,[],1541,"ProcessoUsuarioId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPROCESSOROTINA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSOROTINA",gxz:"ZV6cProcessoRotina",gxold:"OV6cProcessoRotina",gxvar:"AV6cProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6cProcessoRotina=Value},v2z:function(Value){gx.O.ZV6cProcessoRotina=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROCESSOROTINA",gx.O.AV6cProcessoRotina)},c2v:function(){gx.O.AV6cProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("vCPROCESSOROTINA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPROCESSOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSOID",gxz:"ZV7cProcessoId",gxold:"OV7cProcessoId",gxvar:"AV7cProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROCESSOID",gx.O.AV7cProcessoId,0)},c2v:function(){gx.O.AV7cProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPROCESSODTINICIO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSODTINICIO",gxz:"ZV8cProcessoDtInicio",gxold:"OV8cProcessoDtInicio",gxvar:"AV8cProcessoDtInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPROCESSODTINICIO",gx.O.AV8cProcessoDtInicio,0)},c2v:function(){gx.O.AV8cProcessoDtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPROCESSODTINICIO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPROCESSODTTERMINO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSODTTERMINO",gxz:"ZV9cProcessoDtTermino",gxold:"OV9cProcessoDtTermino",gxvar:"AV9cProcessoDtTermino",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPROCESSODTTERMINO",gx.O.AV9cProcessoDtTermino,0)},c2v:function(){gx.O.AV9cProcessoDtTermino=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPROCESSODTTERMINO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPROCESSOUSUARIOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSOUSUARIOID",gxz:"ZV10cProcessoUsuarioId",gxold:"OV10cProcessoUsuarioId",gxvar:"AV10cProcessoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cProcessoUsuarioId=Value},v2z:function(Value){gx.O.ZV10cProcessoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCPROCESSOUSUARIOID",gx.O.AV10cProcessoUsuarioId,0)},c2v:function(){gx.O.AV10cProcessoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCPROCESSOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPROCESSODATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSODATAHORAALT",gxz:"ZV11cProcessoDataHoraAlt",gxold:"OV11cProcessoDataHoraAlt",gxvar:"AV11cProcessoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPROCESSODATAHORAALT",gx.O.AV11cProcessoDataHoraAlt,0)},c2v:function(){gx.O.AV11cProcessoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPROCESSODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPROCESSOUSUARIOALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSOUSUARIOALT",gxz:"ZV12cProcessoUsuarioAlt",gxold:"OV12cProcessoUsuarioAlt",gxvar:"AV12cProcessoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cProcessoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV12cProcessoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPROCESSOUSUARIOALT",gx.O.AV12cProcessoUsuarioAlt,0)},c2v:function(){gx.O.AV12cProcessoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPROCESSOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOROTINA",gxz:"Z1543ProcessoRotina",gxold:"O1543ProcessoRotina",gxvar:"A1543ProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1543ProcessoRotina=Value},v2z:function(Value){gx.O.Z1543ProcessoRotina=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(51),gx.O.A1543ProcessoRotina)},c2v:function(){gx.O.A1543ProcessoRotina=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOID",gxz:"Z1544ProcessoId",gxold:"O1544ProcessoId",gxvar:"A1544ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1544ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1544ProcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1544ProcessoId,0)},c2v:function(){gx.O.A1544ProcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSODTINICIO",gxz:"Z1545ProcessoDtInicio",gxold:"O1545ProcessoDtInicio",gxvar:"A1545ProcessoDtInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1545ProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1545ProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSODTINICIO",row || gx.fn.currentGridRowImpl(51),gx.O.A1545ProcessoDtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1545ProcessoDtInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSODTINICIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSODTTERMINO",gxz:"Z1546ProcessoDtTermino",gxold:"O1546ProcessoDtTermino",gxvar:"A1546ProcessoDtTermino",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1546ProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1546ProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSODTTERMINO",row || gx.fn.currentGridRowImpl(51),gx.O.A1546ProcessoDtTermino,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1546ProcessoDtTermino=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSODTTERMINO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOUSUARIOID",gxz:"Z1541ProcessoUsuarioId",gxold:"O1541ProcessoUsuarioId",gxvar:"A1541ProcessoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1541ProcessoUsuarioId=Value},v2z:function(Value){gx.O.Z1541ProcessoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1541ProcessoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1541ProcessoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cProcessoRotina = "" ;
   this.ZV6cProcessoRotina = "" ;
   this.OV6cProcessoRotina = "" ;
   this.AV7cProcessoId = 0 ;
   this.ZV7cProcessoId = 0 ;
   this.OV7cProcessoId = 0 ;
   this.AV8cProcessoDtInicio = gx.date.nullDate() ;
   this.ZV8cProcessoDtInicio = gx.date.nullDate() ;
   this.OV8cProcessoDtInicio = gx.date.nullDate() ;
   this.AV9cProcessoDtTermino = gx.date.nullDate() ;
   this.ZV9cProcessoDtTermino = gx.date.nullDate() ;
   this.OV9cProcessoDtTermino = gx.date.nullDate() ;
   this.AV10cProcessoUsuarioId = "" ;
   this.ZV10cProcessoUsuarioId = "" ;
   this.OV10cProcessoUsuarioId = "" ;
   this.AV11cProcessoDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cProcessoDataHoraAlt = gx.date.nullDate() ;
   this.OV11cProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV12cProcessoUsuarioAlt = "" ;
   this.ZV12cProcessoUsuarioAlt = "" ;
   this.OV12cProcessoUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1543ProcessoRotina = "" ;
   this.O1543ProcessoRotina = "" ;
   this.Z1544ProcessoId = 0 ;
   this.O1544ProcessoId = 0 ;
   this.Z1545ProcessoDtInicio = gx.date.nullDate() ;
   this.O1545ProcessoDtInicio = gx.date.nullDate() ;
   this.Z1546ProcessoDtTermino = gx.date.nullDate() ;
   this.O1546ProcessoDtTermino = gx.date.nullDate() ;
   this.Z1541ProcessoUsuarioId = "" ;
   this.O1541ProcessoUsuarioId = "" ;
   this.AV6cProcessoRotina = "" ;
   this.AV7cProcessoId = 0 ;
   this.AV8cProcessoDtInicio = gx.date.nullDate() ;
   this.AV9cProcessoDtTermino = gx.date.nullDate() ;
   this.AV10cProcessoUsuarioId = "" ;
   this.AV11cProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV12cProcessoUsuarioAlt = "" ;
   this.AV13pProcessoRotina = "" ;
   this.AV14pProcessoId = 0 ;
   this.A1548ProcessoUsuarioAlt = "" ;
   this.A1547ProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A1543ProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1545ProcessoDtInicio = gx.date.nullDate() ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1541ProcessoUsuarioId = "" ;
   this.Events = {"e131kr2_client": ["ENTER", true] ,"e141kr1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cProcessoDtInicio',fld:'vCPROCESSODTINICIO'},{av:'AV9cProcessoDtTermino',fld:'vCPROCESSODTTERMINO'},{av:'AV10cProcessoUsuarioId',fld:'vCPROCESSOUSUARIOID'},{av:'AV11cProcessoDataHoraAlt',fld:'vCPROCESSODATAHORAALT'},{av:'AV12cProcessoUsuarioAlt',fld:'vCPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'}],[{av:'AV13pProcessoRotina',fld:'vPPROCESSOROTINA'},{av:'AV14pProcessoId',fld:'vPPROCESSOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cProcessoDtInicio',fld:'vCPROCESSODTINICIO'},{av:'AV9cProcessoDtTermino',fld:'vCPROCESSODTTERMINO'},{av:'AV10cProcessoUsuarioId',fld:'vCPROCESSOUSUARIOID'},{av:'AV11cProcessoDataHoraAlt',fld:'vCPROCESSODATAHORAALT'},{av:'AV12cProcessoUsuarioAlt',fld:'vCPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cProcessoDtInicio',fld:'vCPROCESSODTINICIO'},{av:'AV9cProcessoDtTermino',fld:'vCPROCESSODTTERMINO'},{av:'AV10cProcessoUsuarioId',fld:'vCPROCESSOUSUARIOID'},{av:'AV11cProcessoDataHoraAlt',fld:'vCPROCESSODATAHORAALT'},{av:'AV12cProcessoUsuarioAlt',fld:'vCPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cProcessoDtInicio',fld:'vCPROCESSODTINICIO'},{av:'AV9cProcessoDtTermino',fld:'vCPROCESSODTTERMINO'},{av:'AV10cProcessoUsuarioId',fld:'vCPROCESSOUSUARIOID'},{av:'AV11cProcessoDataHoraAlt',fld:'vCPROCESSODATAHORAALT'},{av:'AV12cProcessoUsuarioAlt',fld:'vCPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cProcessoDtInicio',fld:'vCPROCESSODTINICIO'},{av:'AV9cProcessoDtTermino',fld:'vCPROCESSODTTERMINO'},{av:'AV10cProcessoUsuarioId',fld:'vCPROCESSOUSUARIOID'},{av:'AV11cProcessoDataHoraAlt',fld:'vCPROCESSODATAHORAALT'},{av:'AV12cProcessoUsuarioAlt',fld:'vCPROCESSOUSUARIOALT'}],[]];
   this.setVCMap("AV13pProcessoRotina", "vPPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV14pProcessoId", "vPPROCESSOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06g0());