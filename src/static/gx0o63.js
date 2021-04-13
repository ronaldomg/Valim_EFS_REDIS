/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:42.25
*/
gx.evt.autoSkip = false;
gx.define('gx0o63', false, function () {
   this.ServerClass =  "gx0o63" ;
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
      this.AV9pNFeCNPJ=gx.fn.getControlValue("vPNFECNPJ") ;
      this.AV10pNFeSerie=gx.fn.getIntegerValue("vPNFESERIE",'.') ;
      this.AV11pNFeNumero=gx.fn.getIntegerValue("vPNFENUMERO",'.') ;
      this.AV12pNfeEventoSequencia=gx.fn.getIntegerValue("vPNFEEVENTOSEQUENCIA",'.') ;
      this.AV13pNfeEventoCodigo=gx.fn.getIntegerValue("vPNFEEVENTOCODIGO",'.') ;
   };
   this.e132h92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142h91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,36,37,38,41];
   this.GXLastCtrlId =41;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0o63",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11678,33,"NFEEVENTOSEQUENCIA","Sequência","","NfeEventoSequencia","int",0,"px",2,2,"right",null,[],11678,"NfeEventoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11686,34,"NFEEVENTOCODIGO","Evento","","NfeEventoCodigo","int",0,"px",6,6,"right",null,[],11686,"NfeEventoCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11687,35,"NFEEVENTODATA","Data","Selecionar","NfeEventoData","dtime",0,"px",16,16,"right",null,[],11687,"NfeEventoData",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11675,36,"NFECNPJ","CNPJ","","NFeCNPJ","char",0,"px",18,18,"left",null,[],11675,"NFeCNPJ",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11676,37,"NFESERIE","Série","","NFeSerie","int",0,"px",4,4,"right",null,[],11676,"NFeSerie",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11677,38,"NFENUMERO","Documento","","NFeNumero","int",0,"px",10,10,"right",null,[],11677,"NFeNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNFEEVENTOSEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFEEVENTOSEQUENCIA",gxz:"ZV6cNfeEventoSequencia",gxold:"OV6cNfeEventoSequencia",gxvar:"AV6cNfeEventoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNfeEventoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cNfeEventoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFEEVENTOSEQUENCIA",gx.O.AV6cNfeEventoSequencia,0)},c2v:function(){gx.O.AV6cNfeEventoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFEEVENTOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNFEEVENTOCODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFEEVENTOCODIGO",gxz:"ZV7cNfeEventoCodigo",gxold:"OV7cNfeEventoCodigo",gxvar:"AV7cNfeEventoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNfeEventoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cNfeEventoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFEEVENTOCODIGO",gx.O.AV7cNfeEventoCodigo,0)},c2v:function(){gx.O.AV7cNfeEventoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFEEVENTOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNFEEVENTODATA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFEEVENTODATA",gxz:"ZV8cNfeEventoData",gxold:"OV8cNfeEventoData",gxvar:"AV8cNfeEventoData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNfeEventoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cNfeEventoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCNFEEVENTODATA",gx.O.AV8cNfeEventoData,0)},c2v:function(){gx.O.AV8cNfeEventoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCNFEEVENTODATA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFEEVENTOSEQUENCIA",gxz:"Z11678NfeEventoSequencia",gxold:"O11678NfeEventoSequencia",gxvar:"A11678NfeEventoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11678NfeEventoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11678NfeEventoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTOSEQUENCIA",row || gx.fn.currentGridRowImpl(31),gx.O.A11678NfeEventoSequencia,0)},c2v:function(){gx.O.A11678NfeEventoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFEEVENTOSEQUENCIA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFEEVENTOCODIGO",gxz:"Z11686NfeEventoCodigo",gxold:"O11686NfeEventoCodigo",gxvar:"A11686NfeEventoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11686NfeEventoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11686NfeEventoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTOCODIGO",row || gx.fn.currentGridRowImpl(31),gx.O.A11686NfeEventoCodigo,0)},c2v:function(){gx.O.A11686NfeEventoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFEEVENTOCODIGO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFEEVENTODATA",gxz:"Z11687NfeEventoData",gxold:"O11687NfeEventoData",gxvar:"A11687NfeEventoData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11687NfeEventoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11687NfeEventoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NFEEVENTODATA",row || gx.fn.currentGridRowImpl(31),gx.O.A11687NfeEventoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11687NfeEventoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NFEEVENTODATA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFECNPJ",gxz:"Z11675NFeCNPJ",gxold:"O11675NFeCNPJ",gxvar:"A11675NFeCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11675NFeCNPJ=Value},v2z:function(Value){gx.O.Z11675NFeCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("NFECNPJ",row || gx.fn.currentGridRowImpl(31),gx.O.A11675NFeCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11675NFeCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("NFECNPJ",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFESERIE",gxz:"Z11676NFeSerie",gxold:"O11676NFeSerie",gxvar:"A11676NFeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11676NFeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11676NFeSerie=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFESERIE",row || gx.fn.currentGridRowImpl(31),gx.O.A11676NFeSerie,0)},c2v:function(){gx.O.A11676NFeSerie=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFESERIE",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFENUMERO",gxz:"Z11677NFeNumero",gxold:"O11677NFeNumero",gxvar:"A11677NFeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11677NFeNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11677NFeNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFENUMERO",row || gx.fn.currentGridRowImpl(31),gx.O.A11677NFeNumero,0)},c2v:function(){gx.O.A11677NFeNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFENUMERO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE4",grid:0};
   this.AV6cNfeEventoSequencia = 0 ;
   this.ZV6cNfeEventoSequencia = 0 ;
   this.OV6cNfeEventoSequencia = 0 ;
   this.AV7cNfeEventoCodigo = 0 ;
   this.ZV7cNfeEventoCodigo = 0 ;
   this.OV7cNfeEventoCodigo = 0 ;
   this.AV8cNfeEventoData = gx.date.nullDate() ;
   this.ZV8cNfeEventoData = gx.date.nullDate() ;
   this.OV8cNfeEventoData = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11678NfeEventoSequencia = 0 ;
   this.O11678NfeEventoSequencia = 0 ;
   this.Z11686NfeEventoCodigo = 0 ;
   this.O11686NfeEventoCodigo = 0 ;
   this.Z11687NfeEventoData = gx.date.nullDate() ;
   this.O11687NfeEventoData = gx.date.nullDate() ;
   this.Z11675NFeCNPJ = "" ;
   this.O11675NFeCNPJ = "" ;
   this.Z11676NFeSerie = 0 ;
   this.O11676NFeSerie = 0 ;
   this.Z11677NFeNumero = 0 ;
   this.O11677NFeNumero = 0 ;
   this.AV6cNfeEventoSequencia = 0 ;
   this.AV7cNfeEventoCodigo = 0 ;
   this.AV8cNfeEventoData = gx.date.nullDate() ;
   this.AV9pNFeCNPJ = "" ;
   this.AV10pNFeSerie = 0 ;
   this.AV11pNFeNumero = 0 ;
   this.AV12pNfeEventoSequencia = 0 ;
   this.AV13pNfeEventoCodigo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11678NfeEventoSequencia = 0 ;
   this.A11686NfeEventoCodigo = 0 ;
   this.A11687NfeEventoData = gx.date.nullDate() ;
   this.A11675NFeCNPJ = "" ;
   this.A11676NFeSerie = 0 ;
   this.A11677NFeNumero = 0 ;
   this.Events = {"e132h92_client": ["ENTER", true] ,"e142h91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNfeEventoSequencia',fld:'vCNFEEVENTOSEQUENCIA'},{av:'AV7cNfeEventoCodigo',fld:'vCNFEEVENTOCODIGO'},{av:'AV8cNfeEventoData',fld:'vCNFEEVENTODATA'},{av:'AV9pNFeCNPJ',fld:'vPNFECNPJ',hsh:true},{av:'AV10pNFeSerie',fld:'vPNFESERIE',hsh:true},{av:'AV11pNFeNumero',fld:'vPNFENUMERO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11678NfeEventoSequencia',fld:'NFEEVENTOSEQUENCIA'},{av:'A11686NfeEventoCodigo',fld:'NFEEVENTOCODIGO'}],[{av:'AV12pNfeEventoSequencia',fld:'vPNFEEVENTOSEQUENCIA'},{av:'AV13pNfeEventoCodigo',fld:'vPNFEEVENTOCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNfeEventoSequencia',fld:'vCNFEEVENTOSEQUENCIA'},{av:'AV7cNfeEventoCodigo',fld:'vCNFEEVENTOCODIGO'},{av:'AV8cNfeEventoData',fld:'vCNFEEVENTODATA'},{av:'AV9pNFeCNPJ',fld:'vPNFECNPJ',hsh:true},{av:'AV10pNFeSerie',fld:'vPNFESERIE',hsh:true},{av:'AV11pNFeNumero',fld:'vPNFENUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNfeEventoSequencia',fld:'vCNFEEVENTOSEQUENCIA'},{av:'AV7cNfeEventoCodigo',fld:'vCNFEEVENTOCODIGO'},{av:'AV8cNfeEventoData',fld:'vCNFEEVENTODATA'},{av:'AV9pNFeCNPJ',fld:'vPNFECNPJ',hsh:true},{av:'AV10pNFeSerie',fld:'vPNFESERIE',hsh:true},{av:'AV11pNFeNumero',fld:'vPNFENUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNfeEventoSequencia',fld:'vCNFEEVENTOSEQUENCIA'},{av:'AV7cNfeEventoCodigo',fld:'vCNFEEVENTOCODIGO'},{av:'AV8cNfeEventoData',fld:'vCNFEEVENTODATA'},{av:'AV9pNFeCNPJ',fld:'vPNFECNPJ',hsh:true},{av:'AV10pNFeSerie',fld:'vPNFESERIE',hsh:true},{av:'AV11pNFeNumero',fld:'vPNFENUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNfeEventoSequencia',fld:'vCNFEEVENTOSEQUENCIA'},{av:'AV7cNfeEventoCodigo',fld:'vCNFEEVENTOCODIGO'},{av:'AV8cNfeEventoData',fld:'vCNFEEVENTODATA'},{av:'AV9pNFeCNPJ',fld:'vPNFECNPJ',hsh:true},{av:'AV10pNFeSerie',fld:'vPNFESERIE',hsh:true},{av:'AV11pNFeNumero',fld:'vPNFENUMERO',hsh:true}],[]];
   this.setVCMap("AV9pNFeCNPJ", "vPNFECNPJ", 0, "char");
   this.setVCMap("AV10pNFeSerie", "vPNFESERIE", 0, "int");
   this.setVCMap("AV11pNFeNumero", "vPNFENUMERO", 0, "int");
   this.setVCMap("AV12pNfeEventoSequencia", "vPNFEEVENTOSEQUENCIA", 0, "int");
   this.setVCMap("AV13pNfeEventoCodigo", "vPNFEEVENTOCODIGO", 0, "int");
   this.setVCMap("AV9pNFeCNPJ", "vPNFECNPJ", 0, "char");
   this.setVCMap("AV10pNFeSerie", "vPNFESERIE", 0, "int");
   this.setVCMap("AV11pNFeNumero", "vPNFENUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar({rfrVar:"AV9pNFeCNPJ"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10pNFeSerie"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pNFeNumero"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0o63());