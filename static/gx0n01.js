/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:49.95
*/
gx.evt.autoSkip = false;
gx.define('gx0n01', false, function () {
   this.ServerClass =  "gx0n01" ;
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
      this.AV10pBetoneiraEmpresaId=gx.fn.getControlValue("vPBETONEIRAEMPRESAID") ;
      this.AV11pBetoneiraCodigo=gx.fn.getIntegerValue("vPBETONEIRACODIGO",'.') ;
   };
   this.e132ek2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142ek1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,51];
   this.GXLastCtrlId =51;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0n01",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11288,43,"BETONEIRACODIGO","Codigo","","BetoneiraCodigo","int",0,"px",8,8,"right",null,[],11288,"BetoneiraCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11292,44,"BETONEIRAPLACA","Placa","Selecionar","BetoneiraPlaca","svchar",0,"px",15,15,"left",null,[],11292,"BetoneiraPlaca",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11293,45,"BETONEIRAUSUARIOALT","Usuario Alt","","BetoneiraUsuarioAlt","char",0,"px",12,12,"left",null,[],11293,"BetoneiraUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11294,46,"BETONEIRADATAHORAALT","Hora Alt","","BetoneiraDataHoraAlt","dtime",0,"px",16,16,"right",null,[],11294,"BetoneiraDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11571,47,"BETONEIRAPESOCAMINHAO","Peso Caminhao","","BetoneiraPesoCaminhao","decimal",0,"px",7,7,"right",null,[],11571,"BetoneiraPesoCaminhao",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11287,48,"BETONEIRAEMPRESAID","Betoneira Empresa Id","","BetoneiraEmpresaId","char",0,"px",10,10,"left",null,[],11287,"BetoneiraEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBETONEIRACODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBETONEIRACODIGO",gxz:"ZV6cBetoneiraCodigo",gxold:"OV6cBetoneiraCodigo",gxvar:"AV6cBetoneiraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cBetoneiraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBETONEIRACODIGO",gx.O.AV6cBetoneiraCodigo,0)},c2v:function(){gx.O.AV6cBetoneiraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBETONEIRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBETONEIRAPLACA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBETONEIRAPLACA",gxz:"ZV7cBetoneiraPlaca",gxold:"OV7cBetoneiraPlaca",gxvar:"AV7cBetoneiraPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBetoneiraPlaca=Value},v2z:function(Value){gx.O.ZV7cBetoneiraPlaca=Value},v2c:function(){gx.fn.setControlValue("vCBETONEIRAPLACA",gx.O.AV7cBetoneiraPlaca,0)},c2v:function(){gx.O.AV7cBetoneiraPlaca=this.val()},val:function(){return gx.fn.getControlValue("vCBETONEIRAPLACA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKBETONEIRAUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBETONEIRAUSUARIOALT",gxz:"ZV8cBetoneiraUsuarioAlt",gxold:"OV8cBetoneiraUsuarioAlt",gxvar:"AV8cBetoneiraUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBetoneiraUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cBetoneiraUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCBETONEIRAUSUARIOALT",gx.O.AV8cBetoneiraUsuarioAlt,0)},c2v:function(){gx.O.AV8cBetoneiraUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCBETONEIRAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKBETONEIRADATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBETONEIRADATAHORAALT",gxz:"ZV9cBetoneiraDataHoraAlt",gxold:"OV9cBetoneiraDataHoraAlt",gxvar:"AV9cBetoneiraDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cBetoneiraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cBetoneiraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCBETONEIRADATAHORAALT",gx.O.AV9cBetoneiraDataHoraAlt,0)},c2v:function(){gx.O.AV9cBetoneiraDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCBETONEIRADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKBETONEIRAPESOCAMINHAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:7,dec:2,sign:false,pic:"ZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBETONEIRAPESOCAMINHAO",gxz:"ZV12cBetoneiraPesoCaminhao",gxold:"OV12cBetoneiraPesoCaminhao",gxvar:"AV12cBetoneiraPesoCaminhao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cBetoneiraPesoCaminhao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cBetoneiraPesoCaminhao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCBETONEIRAPESOCAMINHAO",gx.O.AV12cBetoneiraPesoCaminhao,2,',')},c2v:function(){gx.O.AV12cBetoneiraPesoCaminhao=this.val()},val:function(){return gx.fn.getDecimalValue("vCBETONEIRAPESOCAMINHAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRACODIGO",gxz:"Z11288BetoneiraCodigo",gxold:"O11288BetoneiraCodigo",gxvar:"A11288BetoneiraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11288BetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11288BetoneiraCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BETONEIRACODIGO",row || gx.fn.currentGridRowImpl(41),gx.O.A11288BetoneiraCodigo,0)},c2v:function(){gx.O.A11288BetoneiraCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BETONEIRACODIGO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAPLACA",gxz:"Z11292BetoneiraPlaca",gxold:"O11292BetoneiraPlaca",gxvar:"A11292BetoneiraPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11292BetoneiraPlaca=Value},v2z:function(Value){gx.O.Z11292BetoneiraPlaca=Value},v2c:function(row){gx.fn.setGridControlValue("BETONEIRAPLACA",row || gx.fn.currentGridRowImpl(41),gx.O.A11292BetoneiraPlaca,0)},c2v:function(){gx.O.A11292BetoneiraPlaca=this.val()},val:function(row){return gx.fn.getGridControlValue("BETONEIRAPLACA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAUSUARIOALT",gxz:"Z11293BetoneiraUsuarioAlt",gxold:"O11293BetoneiraUsuarioAlt",gxvar:"A11293BetoneiraUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11293BetoneiraUsuarioAlt=Value},v2z:function(Value){gx.O.Z11293BetoneiraUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("BETONEIRAUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A11293BetoneiraUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11293BetoneiraUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("BETONEIRAUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRADATAHORAALT",gxz:"Z11294BetoneiraDataHoraAlt",gxold:"O11294BetoneiraDataHoraAlt",gxvar:"A11294BetoneiraDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11294BetoneiraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11294BetoneiraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BETONEIRADATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A11294BetoneiraDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11294BetoneiraDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BETONEIRADATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:7,dec:2,sign:false,pic:"ZZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAPESOCAMINHAO",gxz:"Z11571BetoneiraPesoCaminhao",gxold:"O11571BetoneiraPesoCaminhao",gxvar:"A11571BetoneiraPesoCaminhao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11571BetoneiraPesoCaminhao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11571BetoneiraPesoCaminhao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("BETONEIRAPESOCAMINHAO",row || gx.fn.currentGridRowImpl(41),gx.O.A11571BetoneiraPesoCaminhao,2,',')},c2v:function(){gx.O.A11571BetoneiraPesoCaminhao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("BETONEIRAPESOCAMINHAO",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BETONEIRAEMPRESAID",gxz:"Z11287BetoneiraEmpresaId",gxold:"O11287BetoneiraEmpresaId",gxvar:"A11287BetoneiraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11287BetoneiraEmpresaId=Value},v2z:function(Value){gx.O.Z11287BetoneiraEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BETONEIRAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A11287BetoneiraEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11287BetoneiraEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BETONEIRAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   this.AV6cBetoneiraCodigo = 0 ;
   this.ZV6cBetoneiraCodigo = 0 ;
   this.OV6cBetoneiraCodigo = 0 ;
   this.AV7cBetoneiraPlaca = "" ;
   this.ZV7cBetoneiraPlaca = "" ;
   this.OV7cBetoneiraPlaca = "" ;
   this.AV8cBetoneiraUsuarioAlt = "" ;
   this.ZV8cBetoneiraUsuarioAlt = "" ;
   this.OV8cBetoneiraUsuarioAlt = "" ;
   this.AV9cBetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cBetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.OV9cBetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.AV12cBetoneiraPesoCaminhao = 0 ;
   this.ZV12cBetoneiraPesoCaminhao = 0 ;
   this.OV12cBetoneiraPesoCaminhao = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11288BetoneiraCodigo = 0 ;
   this.O11288BetoneiraCodigo = 0 ;
   this.Z11292BetoneiraPlaca = "" ;
   this.O11292BetoneiraPlaca = "" ;
   this.Z11293BetoneiraUsuarioAlt = "" ;
   this.O11293BetoneiraUsuarioAlt = "" ;
   this.Z11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.O11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.Z11571BetoneiraPesoCaminhao = 0 ;
   this.O11571BetoneiraPesoCaminhao = 0 ;
   this.Z11287BetoneiraEmpresaId = "" ;
   this.O11287BetoneiraEmpresaId = "" ;
   this.AV6cBetoneiraCodigo = 0 ;
   this.AV7cBetoneiraPlaca = "" ;
   this.AV8cBetoneiraUsuarioAlt = "" ;
   this.AV9cBetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.AV12cBetoneiraPesoCaminhao = 0 ;
   this.AV10pBetoneiraEmpresaId = "" ;
   this.AV11pBetoneiraCodigo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11288BetoneiraCodigo = 0 ;
   this.A11292BetoneiraPlaca = "" ;
   this.A11293BetoneiraUsuarioAlt = "" ;
   this.A11294BetoneiraDataHoraAlt = gx.date.nullDate() ;
   this.A11571BetoneiraPesoCaminhao = 0 ;
   this.A11287BetoneiraEmpresaId = "" ;
   this.Events = {"e132ek2_client": ["ENTER", true] ,"e142ek1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBetoneiraCodigo',fld:'vCBETONEIRACODIGO'},{av:'AV7cBetoneiraPlaca',fld:'vCBETONEIRAPLACA'},{av:'AV8cBetoneiraUsuarioAlt',fld:'vCBETONEIRAUSUARIOALT'},{av:'AV9cBetoneiraDataHoraAlt',fld:'vCBETONEIRADATAHORAALT'},{av:'AV12cBetoneiraPesoCaminhao',fld:'vCBETONEIRAPESOCAMINHAO'},{av:'AV10pBetoneiraEmpresaId',fld:'vPBETONEIRAEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11288BetoneiraCodigo',fld:'BETONEIRACODIGO'}],[{av:'AV11pBetoneiraCodigo',fld:'vPBETONEIRACODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBetoneiraCodigo',fld:'vCBETONEIRACODIGO'},{av:'AV7cBetoneiraPlaca',fld:'vCBETONEIRAPLACA'},{av:'AV8cBetoneiraUsuarioAlt',fld:'vCBETONEIRAUSUARIOALT'},{av:'AV9cBetoneiraDataHoraAlt',fld:'vCBETONEIRADATAHORAALT'},{av:'AV12cBetoneiraPesoCaminhao',fld:'vCBETONEIRAPESOCAMINHAO'},{av:'AV10pBetoneiraEmpresaId',fld:'vPBETONEIRAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBetoneiraCodigo',fld:'vCBETONEIRACODIGO'},{av:'AV7cBetoneiraPlaca',fld:'vCBETONEIRAPLACA'},{av:'AV8cBetoneiraUsuarioAlt',fld:'vCBETONEIRAUSUARIOALT'},{av:'AV9cBetoneiraDataHoraAlt',fld:'vCBETONEIRADATAHORAALT'},{av:'AV12cBetoneiraPesoCaminhao',fld:'vCBETONEIRAPESOCAMINHAO'},{av:'AV10pBetoneiraEmpresaId',fld:'vPBETONEIRAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBetoneiraCodigo',fld:'vCBETONEIRACODIGO'},{av:'AV7cBetoneiraPlaca',fld:'vCBETONEIRAPLACA'},{av:'AV8cBetoneiraUsuarioAlt',fld:'vCBETONEIRAUSUARIOALT'},{av:'AV9cBetoneiraDataHoraAlt',fld:'vCBETONEIRADATAHORAALT'},{av:'AV12cBetoneiraPesoCaminhao',fld:'vCBETONEIRAPESOCAMINHAO'},{av:'AV10pBetoneiraEmpresaId',fld:'vPBETONEIRAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBetoneiraCodigo',fld:'vCBETONEIRACODIGO'},{av:'AV7cBetoneiraPlaca',fld:'vCBETONEIRAPLACA'},{av:'AV8cBetoneiraUsuarioAlt',fld:'vCBETONEIRAUSUARIOALT'},{av:'AV9cBetoneiraDataHoraAlt',fld:'vCBETONEIRADATAHORAALT'},{av:'AV12cBetoneiraPesoCaminhao',fld:'vCBETONEIRAPESOCAMINHAO'},{av:'AV10pBetoneiraEmpresaId',fld:'vPBETONEIRAEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV10pBetoneiraEmpresaId", "vPBETONEIRAEMPRESAID", 0, "char");
   this.setVCMap("AV11pBetoneiraCodigo", "vPBETONEIRACODIGO", 0, "int");
   this.setVCMap("AV10pBetoneiraEmpresaId", "vPBETONEIRAEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pBetoneiraEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0n01());
