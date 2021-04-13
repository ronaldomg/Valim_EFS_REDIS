/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:32.63
*/
gx.evt.autoSkip = false;
gx.define('gx0f10', false, function () {
   this.ServerClass =  "gx0f10" ;
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
      this.AV11pCBD001PROCREFCbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001PROCREFCBDEMPCODIGO",'.') ;
      this.AV12pCBD001PROCREFCbdNtfSerie=gx.fn.getControlValue("vPCBD001PROCREFCBDNTFSERIE") ;
      this.AV13pCBD001PROCREFCbdNtfNumero=gx.fn.getIntegerValue("vPCBD001PROCREFCBDNTFNUMERO",'.') ;
      this.AV14pCBD001PROCREFCbdnProc=gx.fn.getControlValue("vPCBD001PROCREFCBDNPROC") ;
   };
   this.e131te2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141te1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0f10",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7157,43,"CBD001PROCREFCBDEMPCODIGO","Código da Empresa","","CBD001PROCREFCbdEmpCodigo","int",0,"px",4,4,"right",null,[],7157,"CBD001PROCREFCbdEmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7161,44,"CBD001PROCREFCBDNTFSERIE","Série do Documento Fiscal","","CBD001PROCREFCbdNtfSerie","char",0,"px",3,3,"left",null,[],7161,"CBD001PROCREFCbdNtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7160,45,"CBD001PROCREFCBDNTFNUMERO","Número do Documento Fiscal","","CBD001PROCREFCbdNtfNumero","int",0,"px",9,9,"right",null,[],7160,"CBD001PROCREFCbdNtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7158,46,"CBD001PROCREFCBDINDPROC","Indicador da origem do processo","Selecionar","CBD001PROCREFCbdindProc","int",0,"px",1,1,"right",null,[],7158,"CBD001PROCREFCbdindProc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7159,47,"CBD001PROCREFCBDNPROC","Identificador do processo ou ato concessório","","CBD001PROCREFCbdnProc","char",0,"px",60,60,"left",null,[],7159,"CBD001PROCREFCbdnProc",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001PROCREFCBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001PROCREFCBDEMPCODIGO",gxz:"ZV6cCBD001PROCREFCbdEmpCodigo",gxold:"OV6cCBD001PROCREFCbdEmpCodigo",gxvar:"AV6cCBD001PROCREFCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001PROCREFCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001PROCREFCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001PROCREFCBDEMPCODIGO",gx.O.AV6cCBD001PROCREFCbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001PROCREFCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001PROCREFCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001PROCREFCBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001PROCREFCBDNTFSERIE",gxz:"ZV7cCBD001PROCREFCbdNtfSerie",gxold:"OV7cCBD001PROCREFCbdNtfSerie",gxvar:"AV7cCBD001PROCREFCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001PROCREFCbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001PROCREFCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001PROCREFCBDNTFSERIE",gx.O.AV7cCBD001PROCREFCbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001PROCREFCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001PROCREFCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001PROCREFCBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001PROCREFCBDNTFNUMERO",gxz:"ZV8cCBD001PROCREFCbdNtfNumero",gxold:"OV8cCBD001PROCREFCbdNtfNumero",gxvar:"AV8cCBD001PROCREFCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001PROCREFCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001PROCREFCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001PROCREFCBDNTFNUMERO",gx.O.AV8cCBD001PROCREFCbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001PROCREFCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001PROCREFCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCBD001PROCREFCBDNPROC", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001PROCREFCBDNPROC",gxz:"ZV9cCBD001PROCREFCbdnProc",gxold:"OV9cCBD001PROCREFCbdnProc",gxvar:"AV9cCBD001PROCREFCbdnProc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCBD001PROCREFCbdnProc=Value},v2z:function(Value){gx.O.ZV9cCBD001PROCREFCbdnProc=Value},v2c:function(){gx.fn.setControlValue("vCCBD001PROCREFCBDNPROC",gx.O.AV9cCBD001PROCREFCbdnProc,0)},c2v:function(){gx.O.AV9cCBD001PROCREFCbdnProc=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001PROCREFCBDNPROC")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCBD001PROCREFCBDINDPROC", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001PROCREFCBDINDPROC",gxz:"ZV10cCBD001PROCREFCbdindProc",gxold:"OV10cCBD001PROCREFCbdindProc",gxvar:"AV10cCBD001PROCREFCbdindProc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCBD001PROCREFCbdindProc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cCBD001PROCREFCbdindProc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001PROCREFCBDINDPROC",gx.O.AV10cCBD001PROCREFCbdindProc,0)},c2v:function(){gx.O.AV10cCBD001PROCREFCbdindProc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001PROCREFCBDINDPROC",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDEMPCODIGO",gxz:"Z7157CBD001PROCREFCbdEmpCodigo",gxold:"O7157CBD001PROCREFCbdEmpCodigo",gxvar:"A7157CBD001PROCREFCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7157CBD001PROCREFCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7157CBD001PROCREFCbdEmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001PROCREFCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(41),gx.O.A7157CBD001PROCREFCbdEmpCodigo,0)},c2v:function(){gx.O.A7157CBD001PROCREFCbdEmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001PROCREFCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDNTFSERIE",gxz:"Z7161CBD001PROCREFCbdNtfSerie",gxold:"O7161CBD001PROCREFCbdNtfSerie",gxvar:"A7161CBD001PROCREFCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7161CBD001PROCREFCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7161CBD001PROCREFCbdNtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001PROCREFCBDNTFSERIE",row || gx.fn.currentGridRowImpl(41),gx.O.A7161CBD001PROCREFCbdNtfSerie,0)},c2v:function(){gx.O.A7161CBD001PROCREFCbdNtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001PROCREFCBDNTFSERIE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDNTFNUMERO",gxz:"Z7160CBD001PROCREFCbdNtfNumero",gxold:"O7160CBD001PROCREFCbdNtfNumero",gxvar:"A7160CBD001PROCREFCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7160CBD001PROCREFCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7160CBD001PROCREFCbdNtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001PROCREFCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A7160CBD001PROCREFCbdNtfNumero,0)},c2v:function(){gx.O.A7160CBD001PROCREFCbdNtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001PROCREFCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDINDPROC",gxz:"Z7158CBD001PROCREFCbdindProc",gxold:"O7158CBD001PROCREFCbdindProc",gxvar:"A7158CBD001PROCREFCbdindProc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7158CBD001PROCREFCbdindProc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7158CBD001PROCREFCbdindProc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001PROCREFCBDINDPROC",row || gx.fn.currentGridRowImpl(41),gx.O.A7158CBD001PROCREFCbdindProc,0)},c2v:function(){gx.O.A7158CBD001PROCREFCbdindProc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001PROCREFCBDINDPROC",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDNPROC",gxz:"Z7159CBD001PROCREFCbdnProc",gxold:"O7159CBD001PROCREFCbdnProc",gxvar:"A7159CBD001PROCREFCbdnProc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7159CBD001PROCREFCbdnProc=Value},v2z:function(Value){gx.O.Z7159CBD001PROCREFCbdnProc=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001PROCREFCBDNPROC",row || gx.fn.currentGridRowImpl(41),gx.O.A7159CBD001PROCREFCbdnProc,0)},c2v:function(){gx.O.A7159CBD001PROCREFCbdnProc=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001PROCREFCBDNPROC",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cCBD001PROCREFCbdEmpCodigo = 0 ;
   this.ZV6cCBD001PROCREFCbdEmpCodigo = 0 ;
   this.OV6cCBD001PROCREFCbdEmpCodigo = 0 ;
   this.AV7cCBD001PROCREFCbdNtfSerie = "" ;
   this.ZV7cCBD001PROCREFCbdNtfSerie = "" ;
   this.OV7cCBD001PROCREFCbdNtfSerie = "" ;
   this.AV8cCBD001PROCREFCbdNtfNumero = 0 ;
   this.ZV8cCBD001PROCREFCbdNtfNumero = 0 ;
   this.OV8cCBD001PROCREFCbdNtfNumero = 0 ;
   this.AV9cCBD001PROCREFCbdnProc = "" ;
   this.ZV9cCBD001PROCREFCbdnProc = "" ;
   this.OV9cCBD001PROCREFCbdnProc = "" ;
   this.AV10cCBD001PROCREFCbdindProc = 0 ;
   this.ZV10cCBD001PROCREFCbdindProc = 0 ;
   this.OV10cCBD001PROCREFCbdindProc = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.O7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.Z7161CBD001PROCREFCbdNtfSerie = "" ;
   this.O7161CBD001PROCREFCbdNtfSerie = "" ;
   this.Z7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.O7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.Z7158CBD001PROCREFCbdindProc = 0 ;
   this.O7158CBD001PROCREFCbdindProc = 0 ;
   this.Z7159CBD001PROCREFCbdnProc = "" ;
   this.O7159CBD001PROCREFCbdnProc = "" ;
   this.AV6cCBD001PROCREFCbdEmpCodigo = 0 ;
   this.AV7cCBD001PROCREFCbdNtfSerie = "" ;
   this.AV8cCBD001PROCREFCbdNtfNumero = 0 ;
   this.AV9cCBD001PROCREFCbdnProc = "" ;
   this.AV10cCBD001PROCREFCbdindProc = 0 ;
   this.AV11pCBD001PROCREFCbdEmpCodigo = 0 ;
   this.AV12pCBD001PROCREFCbdNtfSerie = "" ;
   this.AV13pCBD001PROCREFCbdNtfNumero = 0 ;
   this.AV14pCBD001PROCREFCbdnProc = "" ;
   this.AV5LinkSelection = "" ;
   this.A7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.A7161CBD001PROCREFCbdNtfSerie = "" ;
   this.A7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.A7158CBD001PROCREFCbdindProc = 0 ;
   this.A7159CBD001PROCREFCbdnProc = "" ;
   this.Events = {"e131te2_client": ["ENTER", true] ,"e141te1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001PROCREFCbdEmpCodigo',fld:'vCCBD001PROCREFCBDEMPCODIGO'},{av:'AV7cCBD001PROCREFCbdNtfSerie',fld:'vCCBD001PROCREFCBDNTFSERIE'},{av:'AV8cCBD001PROCREFCbdNtfNumero',fld:'vCCBD001PROCREFCBDNTFNUMERO'},{av:'AV9cCBD001PROCREFCbdnProc',fld:'vCCBD001PROCREFCBDNPROC'},{av:'AV10cCBD001PROCREFCbdindProc',fld:'vCCBD001PROCREFCBDINDPROC'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7157CBD001PROCREFCbdEmpCodigo',fld:'CBD001PROCREFCBDEMPCODIGO'},{av:'A7161CBD001PROCREFCbdNtfSerie',fld:'CBD001PROCREFCBDNTFSERIE'},{av:'A7160CBD001PROCREFCbdNtfNumero',fld:'CBD001PROCREFCBDNTFNUMERO'},{av:'A7159CBD001PROCREFCbdnProc',fld:'CBD001PROCREFCBDNPROC'}],[{av:'AV11pCBD001PROCREFCbdEmpCodigo',fld:'vPCBD001PROCREFCBDEMPCODIGO'},{av:'AV12pCBD001PROCREFCbdNtfSerie',fld:'vPCBD001PROCREFCBDNTFSERIE'},{av:'AV13pCBD001PROCREFCbdNtfNumero',fld:'vPCBD001PROCREFCBDNTFNUMERO'},{av:'AV14pCBD001PROCREFCbdnProc',fld:'vPCBD001PROCREFCBDNPROC'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001PROCREFCbdEmpCodigo',fld:'vCCBD001PROCREFCBDEMPCODIGO'},{av:'AV7cCBD001PROCREFCbdNtfSerie',fld:'vCCBD001PROCREFCBDNTFSERIE'},{av:'AV8cCBD001PROCREFCbdNtfNumero',fld:'vCCBD001PROCREFCBDNTFNUMERO'},{av:'AV9cCBD001PROCREFCbdnProc',fld:'vCCBD001PROCREFCBDNPROC'},{av:'AV10cCBD001PROCREFCbdindProc',fld:'vCCBD001PROCREFCBDINDPROC'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001PROCREFCbdEmpCodigo',fld:'vCCBD001PROCREFCBDEMPCODIGO'},{av:'AV7cCBD001PROCREFCbdNtfSerie',fld:'vCCBD001PROCREFCBDNTFSERIE'},{av:'AV8cCBD001PROCREFCbdNtfNumero',fld:'vCCBD001PROCREFCBDNTFNUMERO'},{av:'AV9cCBD001PROCREFCbdnProc',fld:'vCCBD001PROCREFCBDNPROC'},{av:'AV10cCBD001PROCREFCbdindProc',fld:'vCCBD001PROCREFCBDINDPROC'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001PROCREFCbdEmpCodigo',fld:'vCCBD001PROCREFCBDEMPCODIGO'},{av:'AV7cCBD001PROCREFCbdNtfSerie',fld:'vCCBD001PROCREFCBDNTFSERIE'},{av:'AV8cCBD001PROCREFCbdNtfNumero',fld:'vCCBD001PROCREFCBDNTFNUMERO'},{av:'AV9cCBD001PROCREFCbdnProc',fld:'vCCBD001PROCREFCBDNPROC'},{av:'AV10cCBD001PROCREFCbdindProc',fld:'vCCBD001PROCREFCBDINDPROC'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001PROCREFCbdEmpCodigo',fld:'vCCBD001PROCREFCBDEMPCODIGO'},{av:'AV7cCBD001PROCREFCbdNtfSerie',fld:'vCCBD001PROCREFCBDNTFSERIE'},{av:'AV8cCBD001PROCREFCbdNtfNumero',fld:'vCCBD001PROCREFCBDNTFNUMERO'},{av:'AV9cCBD001PROCREFCbdnProc',fld:'vCCBD001PROCREFCBDNPROC'},{av:'AV10cCBD001PROCREFCbdindProc',fld:'vCCBD001PROCREFCBDINDPROC'}],[]];
   this.setVCMap("AV11pCBD001PROCREFCbdEmpCodigo", "vPCBD001PROCREFCBDEMPCODIGO", 0, "int");
   this.setVCMap("AV12pCBD001PROCREFCbdNtfSerie", "vPCBD001PROCREFCBDNTFSERIE", 0, "char");
   this.setVCMap("AV13pCBD001PROCREFCbdNtfNumero", "vPCBD001PROCREFCBDNTFNUMERO", 0, "int");
   this.setVCMap("AV14pCBD001PROCREFCbdnProc", "vPCBD001PROCREFCBDNPROC", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0f10());