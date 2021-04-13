/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:3.61
*/
gx.evt.autoSkip = false;
gx.define('gx0fg0', false, function () {
   this.ServerClass =  "gx0fg0" ;
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
      this.AV9pCBD001ANEXOSCbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001ANEXOSCBDEMPCODIGO",'.') ;
      this.AV10pCBD001ANEXOSCbdNtfSerie=gx.fn.getControlValue("vPCBD001ANEXOSCBDNTFSERIE") ;
      this.AV11pCBD001ANEXOSCbdNtfNumero=gx.fn.getIntegerValue("vPCBD001ANEXOSCBDNTFNUMERO",'.') ;
      this.AV12pCBD001ANEXOSCbdAneSeq=gx.fn.getIntegerValue("vPCBD001ANEXOSCBDANESEQ",'.') ;
      this.AV13pCBD001ANEXOSCbdAneCaminho=gx.fn.getControlValue("vPCBD001ANEXOSCBDANECAMINHO") ;
   };
   this.e131xx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,36,37,40];
   this.GXLastCtrlId =40;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fg0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7190,33,"CBD001ANEXOSCBDEMPCODIGO","Informar o código da empresa","","CBD001ANEXOSCbdEmpCodigo","int",0,"px",4,4,"right",null,[],7190,"CBD001ANEXOSCbdEmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7192,34,"CBD001ANEXOSCBDNTFSERIE","Informar a série da NF-e","","CBD001ANEXOSCbdNtfSerie","char",0,"px",3,3,"left",null,[],7192,"CBD001ANEXOSCbdNtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7191,35,"CBD001ANEXOSCBDNTFNUMERO","Informar o número da NF-e","","CBD001ANEXOSCbdNtfNumero","int",0,"px",9,9,"right",null,[],7191,"CBD001ANEXOSCbdNtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7189,36,"CBD001ANEXOSCBDANESEQ","Informar número sequencial dos arquivos anexos. Obs: Podem ser informados no máximo 5 arquivos, não podendo ultrapassar o limite de 2MB","","CBD001ANEXOSCbdAneSeq","int",0,"px",1,1,"right",null,[],7189,"CBD001ANEXOSCbdAneSeq",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7188,37,"CBD001ANEXOSCBDANECAMINHO","Informar o caminho do arquivo a ser anexado no e-mail.","","CBD001ANEXOSCbdAneCaminho","svchar",0,"px",500,80,"left",null,[],7188,"CBD001ANEXOSCbdAneCaminho",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001ANEXOSCBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001ANEXOSCBDEMPCODIGO",gxz:"ZV6cCBD001ANEXOSCbdEmpCodigo",gxold:"OV6cCBD001ANEXOSCbdEmpCodigo",gxvar:"AV6cCBD001ANEXOSCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001ANEXOSCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001ANEXOSCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001ANEXOSCBDEMPCODIGO",gx.O.AV6cCBD001ANEXOSCbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001ANEXOSCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001ANEXOSCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001ANEXOSCBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001ANEXOSCBDNTFSERIE",gxz:"ZV7cCBD001ANEXOSCbdNtfSerie",gxold:"OV7cCBD001ANEXOSCbdNtfSerie",gxvar:"AV7cCBD001ANEXOSCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001ANEXOSCbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001ANEXOSCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001ANEXOSCBDNTFSERIE",gx.O.AV7cCBD001ANEXOSCbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001ANEXOSCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001ANEXOSCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001ANEXOSCBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001ANEXOSCBDNTFNUMERO",gxz:"ZV8cCBD001ANEXOSCbdNtfNumero",gxold:"OV8cCBD001ANEXOSCbdNtfNumero",gxvar:"AV8cCBD001ANEXOSCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001ANEXOSCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001ANEXOSCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001ANEXOSCBDNTFNUMERO",gx.O.AV8cCBD001ANEXOSCbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001ANEXOSCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001ANEXOSCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDEMPCODIGO",gxz:"Z7190CBD001ANEXOSCbdEmpCodigo",gxold:"O7190CBD001ANEXOSCbdEmpCodigo",gxvar:"A7190CBD001ANEXOSCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7190CBD001ANEXOSCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7190CBD001ANEXOSCbdEmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001ANEXOSCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(31),gx.O.A7190CBD001ANEXOSCbdEmpCodigo,0)},c2v:function(){gx.O.A7190CBD001ANEXOSCbdEmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001ANEXOSCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDNTFSERIE",gxz:"Z7192CBD001ANEXOSCbdNtfSerie",gxold:"O7192CBD001ANEXOSCbdNtfSerie",gxvar:"A7192CBD001ANEXOSCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7192CBD001ANEXOSCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7192CBD001ANEXOSCbdNtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001ANEXOSCBDNTFSERIE",row || gx.fn.currentGridRowImpl(31),gx.O.A7192CBD001ANEXOSCbdNtfSerie,0)},c2v:function(){gx.O.A7192CBD001ANEXOSCbdNtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001ANEXOSCBDNTFSERIE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDNTFNUMERO",gxz:"Z7191CBD001ANEXOSCbdNtfNumero",gxold:"O7191CBD001ANEXOSCbdNtfNumero",gxvar:"A7191CBD001ANEXOSCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7191CBD001ANEXOSCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7191CBD001ANEXOSCbdNtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001ANEXOSCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(31),gx.O.A7191CBD001ANEXOSCbdNtfNumero,0)},c2v:function(){gx.O.A7191CBD001ANEXOSCbdNtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001ANEXOSCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDANESEQ",gxz:"Z7189CBD001ANEXOSCbdAneSeq",gxold:"O7189CBD001ANEXOSCbdAneSeq",gxvar:"A7189CBD001ANEXOSCbdAneSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7189CBD001ANEXOSCbdAneSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7189CBD001ANEXOSCbdAneSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001ANEXOSCBDANESEQ",row || gx.fn.currentGridRowImpl(31),gx.O.A7189CBD001ANEXOSCbdAneSeq,0)},c2v:function(){gx.O.A7189CBD001ANEXOSCbdAneSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001ANEXOSCBDANESEQ",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:500,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDANECAMINHO",gxz:"Z7188CBD001ANEXOSCbdAneCaminho",gxold:"O7188CBD001ANEXOSCbdAneCaminho",gxvar:"A7188CBD001ANEXOSCbdAneCaminho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7188CBD001ANEXOSCbdAneCaminho=Value},v2z:function(Value){gx.O.Z7188CBD001ANEXOSCbdAneCaminho=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001ANEXOSCBDANECAMINHO",row || gx.fn.currentGridRowImpl(31),gx.O.A7188CBD001ANEXOSCbdAneCaminho,0)},c2v:function(){gx.O.A7188CBD001ANEXOSCbdAneCaminho=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001ANEXOSCBDANECAMINHO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   this.AV6cCBD001ANEXOSCbdEmpCodigo = 0 ;
   this.ZV6cCBD001ANEXOSCbdEmpCodigo = 0 ;
   this.OV6cCBD001ANEXOSCbdEmpCodigo = 0 ;
   this.AV7cCBD001ANEXOSCbdNtfSerie = "" ;
   this.ZV7cCBD001ANEXOSCbdNtfSerie = "" ;
   this.OV7cCBD001ANEXOSCbdNtfSerie = "" ;
   this.AV8cCBD001ANEXOSCbdNtfNumero = 0 ;
   this.ZV8cCBD001ANEXOSCbdNtfNumero = 0 ;
   this.OV8cCBD001ANEXOSCbdNtfNumero = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.O7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.Z7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.O7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.Z7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.O7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.Z7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.O7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.Z7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.O7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.AV6cCBD001ANEXOSCbdEmpCodigo = 0 ;
   this.AV7cCBD001ANEXOSCbdNtfSerie = "" ;
   this.AV8cCBD001ANEXOSCbdNtfNumero = 0 ;
   this.AV9pCBD001ANEXOSCbdEmpCodigo = 0 ;
   this.AV10pCBD001ANEXOSCbdNtfSerie = "" ;
   this.AV11pCBD001ANEXOSCbdNtfNumero = 0 ;
   this.AV12pCBD001ANEXOSCbdAneSeq = 0 ;
   this.AV13pCBD001ANEXOSCbdAneCaminho = "" ;
   this.AV5LinkSelection = "" ;
   this.A7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.A7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.A7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.A7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.A7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.Events = {"e131xx2_client": ["ENTER", true] ,"e141xx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001ANEXOSCbdEmpCodigo',fld:'vCCBD001ANEXOSCBDEMPCODIGO'},{av:'AV7cCBD001ANEXOSCbdNtfSerie',fld:'vCCBD001ANEXOSCBDNTFSERIE'},{av:'AV8cCBD001ANEXOSCbdNtfNumero',fld:'vCCBD001ANEXOSCBDNTFNUMERO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7190CBD001ANEXOSCbdEmpCodigo',fld:'CBD001ANEXOSCBDEMPCODIGO'},{av:'A7192CBD001ANEXOSCbdNtfSerie',fld:'CBD001ANEXOSCBDNTFSERIE'},{av:'A7191CBD001ANEXOSCbdNtfNumero',fld:'CBD001ANEXOSCBDNTFNUMERO'},{av:'A7189CBD001ANEXOSCbdAneSeq',fld:'CBD001ANEXOSCBDANESEQ'},{av:'A7188CBD001ANEXOSCbdAneCaminho',fld:'CBD001ANEXOSCBDANECAMINHO'}],[{av:'AV9pCBD001ANEXOSCbdEmpCodigo',fld:'vPCBD001ANEXOSCBDEMPCODIGO'},{av:'AV10pCBD001ANEXOSCbdNtfSerie',fld:'vPCBD001ANEXOSCBDNTFSERIE'},{av:'AV11pCBD001ANEXOSCbdNtfNumero',fld:'vPCBD001ANEXOSCBDNTFNUMERO'},{av:'AV12pCBD001ANEXOSCbdAneSeq',fld:'vPCBD001ANEXOSCBDANESEQ'},{av:'AV13pCBD001ANEXOSCbdAneCaminho',fld:'vPCBD001ANEXOSCBDANECAMINHO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001ANEXOSCbdEmpCodigo',fld:'vCCBD001ANEXOSCBDEMPCODIGO'},{av:'AV7cCBD001ANEXOSCbdNtfSerie',fld:'vCCBD001ANEXOSCBDNTFSERIE'},{av:'AV8cCBD001ANEXOSCbdNtfNumero',fld:'vCCBD001ANEXOSCBDNTFNUMERO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001ANEXOSCbdEmpCodigo',fld:'vCCBD001ANEXOSCBDEMPCODIGO'},{av:'AV7cCBD001ANEXOSCbdNtfSerie',fld:'vCCBD001ANEXOSCBDNTFSERIE'},{av:'AV8cCBD001ANEXOSCbdNtfNumero',fld:'vCCBD001ANEXOSCBDNTFNUMERO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001ANEXOSCbdEmpCodigo',fld:'vCCBD001ANEXOSCBDEMPCODIGO'},{av:'AV7cCBD001ANEXOSCbdNtfSerie',fld:'vCCBD001ANEXOSCBDNTFSERIE'},{av:'AV8cCBD001ANEXOSCbdNtfNumero',fld:'vCCBD001ANEXOSCBDNTFNUMERO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001ANEXOSCbdEmpCodigo',fld:'vCCBD001ANEXOSCBDEMPCODIGO'},{av:'AV7cCBD001ANEXOSCbdNtfSerie',fld:'vCCBD001ANEXOSCBDNTFSERIE'},{av:'AV8cCBD001ANEXOSCbdNtfNumero',fld:'vCCBD001ANEXOSCBDNTFNUMERO'}],[]];
   this.setVCMap("AV9pCBD001ANEXOSCbdEmpCodigo", "vPCBD001ANEXOSCBDEMPCODIGO", 0, "int");
   this.setVCMap("AV10pCBD001ANEXOSCbdNtfSerie", "vPCBD001ANEXOSCBDNTFSERIE", 0, "char");
   this.setVCMap("AV11pCBD001ANEXOSCbdNtfNumero", "vPCBD001ANEXOSCBDNTFNUMERO", 0, "int");
   this.setVCMap("AV12pCBD001ANEXOSCbdAneSeq", "vPCBD001ANEXOSCBDANESEQ", 0, "int");
   this.setVCMap("AV13pCBD001ANEXOSCbdAneCaminho", "vPCBD001ANEXOSCBDANECAMINHO", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fg0());