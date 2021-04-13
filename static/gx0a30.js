/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:33:22.64
*/
gx.evt.autoSkip = false;
gx.define('gx0a30', false, function () {
   this.ServerClass =  "gx0a30" ;
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
      this.AV10pPDVCodigo=gx.fn.getIntegerValue("vPPDVCODIGO",'.') ;
      this.AV11pAliquotaPDV=gx.fn.getControlValue("vPALIQUOTAPDV") ;
   };
   this.e131oh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141oh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,44];
   this.GXLastCtrlId =44;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0a30",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3434,38,"PDVCODIGO","Código do PDV","","PDVCodigo","int",0,"px",10,10,"right",null,[],3434,"PDVCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3435,39,"ALIQUOTAPDV","Alíquota do PDV","","AliquotaPDV","svchar",0,"px",10,10,"left",null,[],3435,"AliquotaPDV",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3432,40,"ALIQUOTAPDVDATAHORAALT","Data/Hora de Alteração","Selecionar","AliquotaPDVDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3432,"AliquotaPDVDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3433,41,"ALIQUOTAPDVUSUARIOALT","Usuário de Alteração","","AliquotaPDVUsuarioAlt","char",0,"px",12,12,"left",null,[],3433,"AliquotaPDVUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPDVCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPDVCODIGO",gxz:"ZV6cPDVCodigo",gxold:"OV6cPDVCodigo",gxvar:"AV6cPDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPDVCODIGO",gx.O.AV6cPDVCodigo,0)},c2v:function(){gx.O.AV6cPDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPDVCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKALIQUOTAPDV", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCALIQUOTAPDV",gxz:"ZV7cAliquotaPDV",gxold:"OV7cAliquotaPDV",gxvar:"AV7cAliquotaPDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAliquotaPDV=Value},v2z:function(Value){gx.O.ZV7cAliquotaPDV=Value},v2c:function(){gx.fn.setControlValue("vCALIQUOTAPDV",gx.O.AV7cAliquotaPDV,0)},c2v:function(){gx.O.AV7cAliquotaPDV=this.val()},val:function(){return gx.fn.getControlValue("vCALIQUOTAPDV")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKALIQUOTAPDVDATAHORAALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCALIQUOTAPDVDATAHORAALT",gxz:"ZV8cAliquotaPDVDataHoraAlt",gxold:"OV8cAliquotaPDVDataHoraAlt",gxvar:"AV8cAliquotaPDVDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cAliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCALIQUOTAPDVDATAHORAALT",gx.O.AV8cAliquotaPDVDataHoraAlt,0)},c2v:function(){gx.O.AV8cAliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCALIQUOTAPDVDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKALIQUOTAPDVUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCALIQUOTAPDVUSUARIOALT",gxz:"ZV9cAliquotaPDVUsuarioAlt",gxold:"OV9cAliquotaPDVUsuarioAlt",gxvar:"AV9cAliquotaPDVUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAliquotaPDVUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cAliquotaPDVUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCALIQUOTAPDVUSUARIOALT",gx.O.AV9cAliquotaPDVUsuarioAlt,0)},c2v:function(){gx.O.AV9cAliquotaPDVUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCALIQUOTAPDVUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(36),gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAPDV",gxz:"Z3435AliquotaPDV",gxold:"O3435AliquotaPDV",gxvar:"A3435AliquotaPDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3435AliquotaPDV=Value},v2z:function(Value){gx.O.Z3435AliquotaPDV=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAPDV",row || gx.fn.currentGridRowImpl(36),gx.O.A3435AliquotaPDV,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3435AliquotaPDV=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAPDV",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAPDVDATAHORAALT",gxz:"Z3432AliquotaPDVDataHoraAlt",gxold:"O3432AliquotaPDVDataHoraAlt",gxvar:"A3432AliquotaPDVDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3432AliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3432AliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAPDVDATAHORAALT",row || gx.fn.currentGridRowImpl(36),gx.O.A3432AliquotaPDVDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3432AliquotaPDVDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ALIQUOTAPDVDATAHORAALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAPDVUSUARIOALT",gxz:"Z3433AliquotaPDVUsuarioAlt",gxold:"O3433AliquotaPDVUsuarioAlt",gxvar:"A3433AliquotaPDVUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3433AliquotaPDVUsuarioAlt=Value},v2z:function(Value){gx.O.Z3433AliquotaPDVUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAPDVUSUARIOALT",row || gx.fn.currentGridRowImpl(36),gx.O.A3433AliquotaPDVUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3433AliquotaPDVUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAPDVUSUARIOALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   this.AV6cPDVCodigo = 0 ;
   this.ZV6cPDVCodigo = 0 ;
   this.OV6cPDVCodigo = 0 ;
   this.AV7cAliquotaPDV = "" ;
   this.ZV7cAliquotaPDV = "" ;
   this.OV7cAliquotaPDV = "" ;
   this.AV8cAliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.ZV8cAliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.OV8cAliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.AV9cAliquotaPDVUsuarioAlt = "" ;
   this.ZV9cAliquotaPDVUsuarioAlt = "" ;
   this.OV9cAliquotaPDVUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.Z3435AliquotaPDV = "" ;
   this.O3435AliquotaPDV = "" ;
   this.Z3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.O3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.Z3433AliquotaPDVUsuarioAlt = "" ;
   this.O3433AliquotaPDVUsuarioAlt = "" ;
   this.AV6cPDVCodigo = 0 ;
   this.AV7cAliquotaPDV = "" ;
   this.AV8cAliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.AV9cAliquotaPDVUsuarioAlt = "" ;
   this.AV10pPDVCodigo = 0 ;
   this.AV11pAliquotaPDV = "" ;
   this.AV5LinkSelection = "" ;
   this.A3434PDVCodigo = 0 ;
   this.A3435AliquotaPDV = "" ;
   this.A3432AliquotaPDVDataHoraAlt = gx.date.nullDate() ;
   this.A3433AliquotaPDVUsuarioAlt = "" ;
   this.Events = {"e131oh2_client": ["ENTER", true] ,"e141oh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPDVCodigo',fld:'vCPDVCODIGO'},{av:'AV7cAliquotaPDV',fld:'vCALIQUOTAPDV'},{av:'AV8cAliquotaPDVDataHoraAlt',fld:'vCALIQUOTAPDVDATAHORAALT'},{av:'AV9cAliquotaPDVUsuarioAlt',fld:'vCALIQUOTAPDVUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'}],[{av:'AV10pPDVCodigo',fld:'vPPDVCODIGO'},{av:'AV11pAliquotaPDV',fld:'vPALIQUOTAPDV'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPDVCodigo',fld:'vCPDVCODIGO'},{av:'AV7cAliquotaPDV',fld:'vCALIQUOTAPDV'},{av:'AV8cAliquotaPDVDataHoraAlt',fld:'vCALIQUOTAPDVDATAHORAALT'},{av:'AV9cAliquotaPDVUsuarioAlt',fld:'vCALIQUOTAPDVUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPDVCodigo',fld:'vCPDVCODIGO'},{av:'AV7cAliquotaPDV',fld:'vCALIQUOTAPDV'},{av:'AV8cAliquotaPDVDataHoraAlt',fld:'vCALIQUOTAPDVDATAHORAALT'},{av:'AV9cAliquotaPDVUsuarioAlt',fld:'vCALIQUOTAPDVUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPDVCodigo',fld:'vCPDVCODIGO'},{av:'AV7cAliquotaPDV',fld:'vCALIQUOTAPDV'},{av:'AV8cAliquotaPDVDataHoraAlt',fld:'vCALIQUOTAPDVDATAHORAALT'},{av:'AV9cAliquotaPDVUsuarioAlt',fld:'vCALIQUOTAPDVUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPDVCodigo',fld:'vCPDVCODIGO'},{av:'AV7cAliquotaPDV',fld:'vCALIQUOTAPDV'},{av:'AV8cAliquotaPDVDataHoraAlt',fld:'vCALIQUOTAPDVDATAHORAALT'},{av:'AV9cAliquotaPDVUsuarioAlt',fld:'vCALIQUOTAPDVUSUARIOALT'}],[]];
   this.setVCMap("AV10pPDVCodigo", "vPPDVCODIGO", 0, "int");
   this.setVCMap("AV11pAliquotaPDV", "vPALIQUOTAPDV", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0a30());
