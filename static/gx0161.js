/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:12.7
*/
gx.evt.autoSkip = false;
gx.define('gx0161', false, function () {
   this.ServerClass =  "gx0161" ;
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
      this.AV12pEmpresaNaturezaEmpresaId=gx.fn.getControlValue("vPEMPRESANATUREZAEMPRESAID") ;
      this.AV13pNaturezaId=gx.fn.getControlValue("vPNATUREZAID") ;
   };
   this.e131hn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hn1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0161",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(172,48,"NATUREZAID","Código da Natureza","","NaturezaId","svchar",0,"px",30,30,"left",null,[],172,"NaturezaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(154,49,"NATUREZADESCRICAO","Descrição da Natureza","Selecionar","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],154,"NaturezaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(393,50,"NATUREZASUPERIOR","Natureza Superior","","NaturezaSuperior","svchar",0,"px",30,30,"left",null,[],393,"NaturezaSuperior",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(395,51,"TIPONATUREZAID","Tipo de Natureza","","TipoNaturezaId","int",0,"px",7,7,"right",null,[],395,"TipoNaturezaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(397,52,"NATUREZANIVEL","Nível","","NaturezaNivel","int",0,"px",4,4,"right",null,[],397,"NaturezaNivel",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(171,53,"EMPRESANATUREZAEMPRESAID","Empresa Natureza Empresa Id","","EmpresaNaturezaEmpresaId","char",0,"px",10,10,"left",null,[],171,"EmpresaNaturezaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNATUREZAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZAID",gxz:"ZV6cNaturezaId",gxold:"OV6cNaturezaId",gxvar:"AV6cNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNaturezaId=Value},v2z:function(Value){gx.O.ZV6cNaturezaId=Value},v2c:function(){gx.fn.setControlValue("vCNATUREZAID",gx.O.AV6cNaturezaId,0)},c2v:function(){gx.O.AV6cNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vCNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNATUREZADESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZADESCRICAO",gxz:"ZV7cNaturezaDescricao",gxold:"OV7cNaturezaDescricao",gxvar:"AV7cNaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNaturezaDescricao=Value},v2z:function(Value){gx.O.ZV7cNaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCNATUREZADESCRICAO",gx.O.AV7cNaturezaDescricao,0)},c2v:function(){gx.O.AV7cNaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCNATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNATUREZASUPERIOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZASUPERIOR",gxz:"ZV8cNaturezaSuperior",gxold:"OV8cNaturezaSuperior",gxvar:"AV8cNaturezaSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNaturezaSuperior=Value},v2z:function(Value){gx.O.ZV8cNaturezaSuperior=Value},v2c:function(){gx.fn.setControlValue("vCNATUREZASUPERIOR",gx.O.AV8cNaturezaSuperior,0)},c2v:function(){gx.O.AV8cNaturezaSuperior=this.val()},val:function(){return gx.fn.getControlValue("vCNATUREZASUPERIOR")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKEMPRESATIPONATUREZAEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESATIPONATUREZAEMPRESAID",gxz:"ZV9cEmpresaTipoNaturezaEmpresaId",gxold:"OV9cEmpresaTipoNaturezaEmpresaId",gxvar:"AV9cEmpresaTipoNaturezaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEmpresaTipoNaturezaEmpresaId=Value},v2z:function(Value){gx.O.ZV9cEmpresaTipoNaturezaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESATIPONATUREZAEMPRESAID",gx.O.AV9cEmpresaTipoNaturezaEmpresaId,0)},c2v:function(){gx.O.AV9cEmpresaTipoNaturezaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESATIPONATUREZAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPONATUREZAID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPONATUREZAID",gxz:"ZV10cTipoNaturezaId",gxold:"OV10cTipoNaturezaId",gxvar:"AV10cTipoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cTipoNaturezaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPONATUREZAID",gx.O.AV10cTipoNaturezaId,0)},c2v:function(){gx.O.AV10cTipoNaturezaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPONATUREZAID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKNATUREZAFINAL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNATUREZAFINAL",gxz:"ZV11cNaturezaFinal",gxold:"OV11cNaturezaFinal",gxvar:"AV11cNaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cNaturezaFinal=Value},v2z:function(Value){gx.O.ZV11cNaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("vCNATUREZAFINAL",gx.O.AV11cNaturezaFinal,0)},c2v:function(){gx.O.AV11cNaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("vCNATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZAID",gxz:"Z172NaturezaId",gxold:"O172NaturezaId",gxvar:"A172NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A172NaturezaId=Value},v2z:function(Value){gx.O.Z172NaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(46),gx.O.A172NaturezaId,0)},c2v:function(){gx.O.A172NaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESCRICAO",gxz:"Z154NaturezaDescricao",gxold:"O154NaturezaDescricao",gxvar:"A154NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A154NaturezaDescricao=Value},v2z:function(Value){gx.O.Z154NaturezaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A154NaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A154NaturezaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZASUPERIOR",gxz:"Z393NaturezaSuperior",gxold:"O393NaturezaSuperior",gxvar:"A393NaturezaSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A393NaturezaSuperior=Value},v2z:function(Value){gx.O.Z393NaturezaSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZASUPERIOR",row || gx.fn.currentGridRowImpl(46),gx.O.A393NaturezaSuperior,0)},c2v:function(){gx.O.A393NaturezaSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZASUPERIOR",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPONATUREZAID",gxz:"Z395TipoNaturezaId",gxold:"O395TipoNaturezaId",gxvar:"A395TipoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A395TipoNaturezaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z395TipoNaturezaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPONATUREZAID",row || gx.fn.currentGridRowImpl(46),gx.O.A395TipoNaturezaId,0)},c2v:function(){gx.O.A395TipoNaturezaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPONATUREZAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZANIVEL",gxz:"Z397NaturezaNivel",gxold:"O397NaturezaNivel",gxvar:"A397NaturezaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A397NaturezaNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z397NaturezaNivel=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZANIVEL",row || gx.fn.currentGridRowImpl(46),gx.O.A397NaturezaNivel,0)},c2v:function(){gx.O.A397NaturezaNivel=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NATUREZANIVEL",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANATUREZAEMPRESAID",gxz:"Z171EmpresaNaturezaEmpresaId",gxold:"O171EmpresaNaturezaEmpresaId",gxvar:"A171EmpresaNaturezaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A171EmpresaNaturezaEmpresaId=Value},v2z:function(Value){gx.O.Z171EmpresaNaturezaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESANATUREZAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A171EmpresaNaturezaEmpresaId,0)},c2v:function(){gx.O.A171EmpresaNaturezaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESANATUREZAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cNaturezaId = "" ;
   this.ZV6cNaturezaId = "" ;
   this.OV6cNaturezaId = "" ;
   this.AV7cNaturezaDescricao = "" ;
   this.ZV7cNaturezaDescricao = "" ;
   this.OV7cNaturezaDescricao = "" ;
   this.AV8cNaturezaSuperior = "" ;
   this.ZV8cNaturezaSuperior = "" ;
   this.OV8cNaturezaSuperior = "" ;
   this.AV9cEmpresaTipoNaturezaEmpresaId = "" ;
   this.ZV9cEmpresaTipoNaturezaEmpresaId = "" ;
   this.OV9cEmpresaTipoNaturezaEmpresaId = "" ;
   this.AV10cTipoNaturezaId = 0 ;
   this.ZV10cTipoNaturezaId = 0 ;
   this.OV10cTipoNaturezaId = 0 ;
   this.AV11cNaturezaFinal = "" ;
   this.ZV11cNaturezaFinal = "" ;
   this.OV11cNaturezaFinal = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z172NaturezaId = "" ;
   this.O172NaturezaId = "" ;
   this.Z154NaturezaDescricao = "" ;
   this.O154NaturezaDescricao = "" ;
   this.Z393NaturezaSuperior = "" ;
   this.O393NaturezaSuperior = "" ;
   this.Z395TipoNaturezaId = 0 ;
   this.O395TipoNaturezaId = 0 ;
   this.Z397NaturezaNivel = 0 ;
   this.O397NaturezaNivel = 0 ;
   this.Z171EmpresaNaturezaEmpresaId = "" ;
   this.O171EmpresaNaturezaEmpresaId = "" ;
   this.AV6cNaturezaId = "" ;
   this.AV7cNaturezaDescricao = "" ;
   this.AV8cNaturezaSuperior = "" ;
   this.AV9cEmpresaTipoNaturezaEmpresaId = "" ;
   this.AV10cTipoNaturezaId = 0 ;
   this.AV11cNaturezaFinal = "" ;
   this.AV12pEmpresaNaturezaEmpresaId = "" ;
   this.AV13pNaturezaId = "" ;
   this.A396NaturezaFinal = "" ;
   this.A394EmpresaTipoNaturezaEmpresaId = "" ;
   this.AV5LinkSelection = "" ;
   this.A172NaturezaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.A393NaturezaSuperior = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.A397NaturezaNivel = 0 ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.Events = {"e131hn2_client": ["ENTER", true] ,"e141hn1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaId',fld:'vCNATUREZAID'},{av:'AV7cNaturezaDescricao',fld:'vCNATUREZADESCRICAO'},{av:'AV8cNaturezaSuperior',fld:'vCNATUREZASUPERIOR'},{av:'AV9cEmpresaTipoNaturezaEmpresaId',fld:'vCEMPRESATIPONATUREZAEMPRESAID'},{av:'AV10cTipoNaturezaId',fld:'vCTIPONATUREZAID'},{av:'AV11cNaturezaFinal',fld:'vCNATUREZAFINAL'},{av:'AV12pEmpresaNaturezaEmpresaId',fld:'vPEMPRESANATUREZAEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A172NaturezaId',fld:'NATUREZAID'}],[{av:'AV13pNaturezaId',fld:'vPNATUREZAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaId',fld:'vCNATUREZAID'},{av:'AV7cNaturezaDescricao',fld:'vCNATUREZADESCRICAO'},{av:'AV8cNaturezaSuperior',fld:'vCNATUREZASUPERIOR'},{av:'AV9cEmpresaTipoNaturezaEmpresaId',fld:'vCEMPRESATIPONATUREZAEMPRESAID'},{av:'AV10cTipoNaturezaId',fld:'vCTIPONATUREZAID'},{av:'AV11cNaturezaFinal',fld:'vCNATUREZAFINAL'},{av:'AV12pEmpresaNaturezaEmpresaId',fld:'vPEMPRESANATUREZAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaId',fld:'vCNATUREZAID'},{av:'AV7cNaturezaDescricao',fld:'vCNATUREZADESCRICAO'},{av:'AV8cNaturezaSuperior',fld:'vCNATUREZASUPERIOR'},{av:'AV9cEmpresaTipoNaturezaEmpresaId',fld:'vCEMPRESATIPONATUREZAEMPRESAID'},{av:'AV10cTipoNaturezaId',fld:'vCTIPONATUREZAID'},{av:'AV11cNaturezaFinal',fld:'vCNATUREZAFINAL'},{av:'AV12pEmpresaNaturezaEmpresaId',fld:'vPEMPRESANATUREZAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaId',fld:'vCNATUREZAID'},{av:'AV7cNaturezaDescricao',fld:'vCNATUREZADESCRICAO'},{av:'AV8cNaturezaSuperior',fld:'vCNATUREZASUPERIOR'},{av:'AV9cEmpresaTipoNaturezaEmpresaId',fld:'vCEMPRESATIPONATUREZAEMPRESAID'},{av:'AV10cTipoNaturezaId',fld:'vCTIPONATUREZAID'},{av:'AV11cNaturezaFinal',fld:'vCNATUREZAFINAL'},{av:'AV12pEmpresaNaturezaEmpresaId',fld:'vPEMPRESANATUREZAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNaturezaId',fld:'vCNATUREZAID'},{av:'AV7cNaturezaDescricao',fld:'vCNATUREZADESCRICAO'},{av:'AV8cNaturezaSuperior',fld:'vCNATUREZASUPERIOR'},{av:'AV9cEmpresaTipoNaturezaEmpresaId',fld:'vCEMPRESATIPONATUREZAEMPRESAID'},{av:'AV10cTipoNaturezaId',fld:'vCTIPONATUREZAID'},{av:'AV11cNaturezaFinal',fld:'vCNATUREZAFINAL'},{av:'AV12pEmpresaNaturezaEmpresaId',fld:'vPEMPRESANATUREZAEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pEmpresaNaturezaEmpresaId", "vPEMPRESANATUREZAEMPRESAID", 0, "char");
   this.setVCMap("AV13pNaturezaId", "vPNATUREZAID", 0, "svchar");
   this.setVCMap("AV12pEmpresaNaturezaEmpresaId", "vPEMPRESANATUREZAEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pEmpresaNaturezaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0161());