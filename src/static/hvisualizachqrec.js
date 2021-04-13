/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:27:25.28
*/
gx.evt.autoSkip = false;
gx.define('hvisualizachqrec', false, function () {
   this.ServerClass =  "hvisualizachqrec" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV16TipoVisual=gx.fn.getControlValue("vTIPOVISUAL") ;
      this.AV44TipoRelat=gx.fn.getControlValue("vTIPORELAT") ;
      this.AV42NomeRelatorio=gx.fn.getControlValue("vNOMERELATORIO") ;
      this.AV49NomeTela=gx.fn.getControlValue("vNOMETELA") ;
   };
   this.e11e62_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e12e62_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e13e62_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e14e62_client=function()
   {
      this.executeServerEvent("VLSTRECIBO.CLICK", true, null, false, true);
   };
   this.e15e62_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e16e62_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e17e62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e21e62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,23,26,28,30,32,34,37,39,42,51,54,56,58,60,62,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hvisualizachqrec",[],false,1,false,true,0,false,false,false,"CollSdtPagImp.SdtPagImpItem",0,"px","Novo registro",false,false,false,null,null,false,"AV52SdtPagImp",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV11Q",62,"CTLPAGINA","Pagina","","Pagina","int",0,"px",4,4,"right",null,[],"GXV11Q","GXV11Q",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11R",63,"CTLTEXTO","Texto","","Texto","vchar",0,"px",2097152,80,"left",null,[],"GXV11R","GXV11R",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"IMGIMP",grid:0};
   GXValidFnc[13]={fld:"IMGPRI",grid:0};
   GXValidFnc[15]={fld:"IMGANT",grid:0};
   GXValidFnc[17]={fld:"IMGPRO",grid:0};
   GXValidFnc[19]={fld:"IMGULT",grid:0};
   GXValidFnc[21]={fld:"IMGFECH",grid:0};
   GXValidFnc[23]={fld:"TABLE5",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOPAGINI",gxz:"ZV31NoPagIni",gxold:"OV31NoPagIni",gxvar:"AV31NoPagIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31NoPagIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31NoPagIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOPAGINI",gx.O.AV31NoPagIni,0)},c2v:function(){gx.O.AV31NoPagIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOPAGINI",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOPAGFIN",gxz:"ZV32NoPagFin",gxold:"OV32NoPagFin",gxvar:"AV32NoPagFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32NoPagFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32NoPagFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOPAGFIN",gx.O.AV32NoPagFin,0)},c2v:function(){gx.O.AV32NoPagFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOPAGFIN",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE10",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLSTRECIBO",gxz:"ZV20LstRecibo",gxold:"OV20LstRecibo",gxvar:"AV20LstRecibo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20LstRecibo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20LstRecibo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vLSTRECIBO",gx.O.AV20LstRecibo)},c2v:function(){gx.O.AV20LstRecibo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLSTRECIBO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[51]={fld:"TABLE9",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOPAGINA",gxz:"ZV22NoPagina",gxold:"OV22NoPagina",gxvar:"AV22NoPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22NoPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22NoPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOPAGINA",gx.O.AV22NoPagina,0)},c2v:function(){gx.O.AV22NoPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTPAG",gxz:"ZV23QtPag",gxold:"OV23QtPag",gxvar:"AV23QtPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23QtPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23QtPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTPAG",gx.O.AV23QtPag,0)},c2v:function(){gx.O.AV23QtPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTPAG",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPAGINA",gxz:"ZV58GXV11Q",gxold:"OV58GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58GXV11Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPAGINA",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPAGINA",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"vchar",len:2097152,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTEXTO",gxz:"ZV59GXV11R",gxold:"OV59GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV59GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTEXTO",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTEXTO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   this.AV31NoPagIni = 0 ;
   this.ZV31NoPagIni = 0 ;
   this.OV31NoPagIni = 0 ;
   this.AV32NoPagFin = 0 ;
   this.ZV32NoPagFin = 0 ;
   this.OV32NoPagFin = 0 ;
   this.AV20LstRecibo = 0 ;
   this.ZV20LstRecibo = 0 ;
   this.OV20LstRecibo = 0 ;
   this.AV22NoPagina = 0 ;
   this.ZV22NoPagina = 0 ;
   this.OV22NoPagina = 0 ;
   this.AV23QtPag = 0 ;
   this.ZV23QtPag = 0 ;
   this.OV23QtPag = 0 ;
   this.ZV58GXV11Q = 0 ;
   this.OV58GXV11Q = 0 ;
   this.ZV59GXV11R = "" ;
   this.OV59GXV11R = "" ;
   this.AV31NoPagIni = 0 ;
   this.AV32NoPagFin = 0 ;
   this.AV20LstRecibo = 0 ;
   this.AV22NoPagina = 0 ;
   this.AV23QtPag = 0 ;
   this.AV16TipoVisual = "" ;
   this.AV44TipoRelat = "" ;
   this.AV42NomeRelatorio = "" ;
   this.AV49NomeTela = "" ;
   this.GXV11Q = 0 ;
   this.GXV11R = "" ;
   this.Events = {"e11e62_client": ["'FECHAR'", true] ,"e12e62_client": ["'ANTERIOR'", true] ,"e13e62_client": ["'PROXIMO'", true] ,"e14e62_client": ["VLSTRECIBO.CLICK", true] ,"e15e62_client": ["'PRIMEIRO'", true] ,"e16e62_client": ["'ULTIMO'", true] ,"e17e62_client": ["ENTER", true] ,"e21e62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV52SdtPagImp',fld:'vSDTPAGIMP',grid:61},{av:'AV16TipoVisual',fld:'vTIPOVISUAL',hsh:true},{av:'AV22NoPagina',fld:'vNOPAGINA'},{av:'AV23QtPag',fld:'vQTPAG'}],[{av:'AV17Sdt',fld:'vSDT'},{av:'AV23QtPag',fld:'vQTPAG'},{av:'AV62GXV2',fld:'vGXV2'},{av:'AV18SdtItem',fld:'vSDTITEM'},{av:'AV20LstRecibo',fld:'vLSTRECIBO'},{av:'gx.fn.getCtrlProperty("IMGANT","Enabled")',ctrl:'IMGANT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMGPRI","Enabled")',ctrl:'IMGPRI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMGPRO","Enabled")',ctrl:'IMGPRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMGULT","Enabled")',ctrl:'IMGULT',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42NomeRelatorio',fld:'vNOMERELATORIO'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'AV22NoPagina',fld:'vNOPAGINA'},{av:'AV52SdtPagImp',fld:'vSDTPAGIMP',grid:61}],[{av:'AV22NoPagina',fld:'vNOPAGINA'},{ctrl:'EMBPAGE1',prop:'Source'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'AV23QtPag',fld:'vQTPAG'},{av:'AV22NoPagina',fld:'vNOPAGINA'},{av:'AV52SdtPagImp',fld:'vSDTPAGIMP',grid:61}],[{av:'AV22NoPagina',fld:'vNOPAGINA'},{ctrl:'EMBPAGE1',prop:'Source'}]];
   this.EvtParms["VLSTRECIBO.CLICK"] = [[{av:'AV20LstRecibo',fld:'vLSTRECIBO'},{av:'AV52SdtPagImp',fld:'vSDTPAGIMP',grid:61}],[{av:'AV22NoPagina',fld:'vNOPAGINA'},{ctrl:'EMBPAGE1',prop:'Source'}]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'AV52SdtPagImp',fld:'vSDTPAGIMP',grid:61}],[{av:'AV22NoPagina',fld:'vNOPAGINA'},{ctrl:'EMBPAGE1',prop:'Source'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'AV23QtPag',fld:'vQTPAG'},{av:'AV52SdtPagImp',fld:'vSDTPAGIMP',grid:61}],[{av:'AV22NoPagina',fld:'vNOPAGINA'},{ctrl:'EMBPAGE1',prop:'Source'}]];
   this.EvtParms["ENTER"] = [[{av:'AV31NoPagIni',fld:'vNOPAGINI'},{av:'AV32NoPagFin',fld:'vNOPAGFIN'},{av:'AV23QtPag',fld:'vQTPAG'},{av:'AV16TipoVisual',fld:'vTIPOVISUAL',hsh:true},{av:'AV42NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV44TipoRelat',fld:'vTIPORELAT',hsh:true},{av:'AV45ParmRelat',fld:'vPARMRELAT'},{av:'AV48NomeProc',fld:'vNOMEPROC'}],[{av:'AV41SnErro',fld:'vSNERRO'},{av:'AV32NoPagFin',fld:'vNOPAGFIN'},{av:'AV31NoPagIni',fld:'vNOPAGINI'},{av:'AV43PosicaoIni',fld:'vPOSICAOINI'},{av:'AV17Sdt',fld:'vSDT'},{av:'AV25SdtImp',fld:'vSDTIMP'},{av:'AV65GXV5',fld:'vGXV5'},{av:'AV18SdtItem',fld:'vSDTITEM'},{av:'AV26SdtImpItem',fld:'vSDTIMPITEM'},{av:'AV66GXV6',fld:'vGXV6'},{av:'AV24SdtLinha',fld:'vSDTLINHA'},{av:'AV45ParmRelat',fld:'vPARMRELAT'},{av:'AV48NomeProc',fld:'vNOMEPROC'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV46Random',fld:'vRANDOM'},{av:'AV47NomeSessao',fld:'vNOMESESSAO'}]];
   this.EnterCtrl = ["IMGIMP"];
   this.setVCMap("AV16TipoVisual", "vTIPOVISUAL", 0, "char");
   this.setVCMap("AV44TipoRelat", "vTIPORELAT", 0, "char");
   this.setVCMap("AV42NomeRelatorio", "vNOMERELATORIO", 0, "svchar");
   this.setVCMap("AV49NomeTela", "vNOMETELA", 0, "svchar");
   this.setVCMap("AV16TipoVisual", "vTIPOVISUAL", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV16TipoVisual"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[60]);
   this.addGridBCProperty("Sdtpagimp", ["Pagina"], this.GXValidFnc[62], "AV52SdtPagImp");
   this.addGridBCProperty("Sdtpagimp", ["Texto"], this.GXValidFnc[63], "AV52SdtPagImp");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisualizachqrec());
