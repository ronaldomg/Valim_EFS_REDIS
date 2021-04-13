/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:44.36
*/
gx.evt.autoSkip = false;
gx.define('himportatermooutorga', false, function () {
   this.ServerClass =  "himportatermooutorga" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV33TermoOutorga=gx.fn.getControlValue("vTERMOOUTORGA") ;
   };
   this.e1113q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1313q2_client=function()
   {
      this.executeServerEvent("'IMPORTAR'", true, arguments[0], false, false);
   };
   this.e1513q2_client=function()
   {
      this.executeServerEvent("'DETALHAR'", true, arguments[0], false, false);
   };
   this.e1713q2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1813q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,9,10,11,12,13,14,15,16,17,23,28,29,30,31,33];
   this.GXLastCtrlId =33;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"himportatermooutorga",[],false,1,true,true,0,true,false,false,"CollSdtTermoOutorga.SdtTermoOutorgaItem",0,"px","Novo registro",true,false,false,null,null,false,"AV33TermoOutorga",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV107",7,"CTLEDITAL","Edital","","Edital","svchar",110,"px",20,20,"left",null,[],"GXV107","GXV107",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV108",8,"CTLNOPROCESSO","Nº Processo","","NoProcesso","svchar",110,"px",20,20,"left",null,[],"GXV108","GXV108",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV109",9,"CTLTITULO","Título","","Titulo","svchar",410,"px",150,80,"left",null,[],"GXV109","GXV109",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Titulo",10,"vTITULO","Titulo","","Titulo","svchar",360,"px",70,70,"left",null,[],"Titulo","Titulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",11,41,"px",17,"px","e1513q2_client","","","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV10C",12,"CTLDATAINICIO","Início","","DataInicio","date",72,"px",10,10,"right",null,[],"GXV10C","GXV10C",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10D",13,"CTLDATAFINAL","Término","","DataFinal","date",72,"px",10,10,"right",null,[],"GXV10D","GXV10D",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10E",14,"CTLVALORTO","Valor","","ValorTO","decimal",164,"px",22,22,"right",null,[],"GXV10E","GXV10E",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10F",15,"CTLARQUIVO","Arquivo","","Arquivo","svchar",410,"px",300,80,"left",null,[],"GXV10F","GXV10F",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",16,46,"px",17,"px","e1313q2_client","","Importar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEDITAL",gxz:"ZV49GXV107",gxold:"OV49GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV49GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEDITAL",row || gx.fn.currentGridRowImpl(6),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEDITAL",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOPROCESSO",gxz:"ZV50GXV108",gxold:"OV50GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV108=Value},v2z:function(Value){gx.O.ZV50GXV108=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOPROCESSO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOPROCESSO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTITULO",gxz:"ZV51GXV109",gxold:"OV51GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV109=Value},v2z:function(Value){gx.O.ZV51GXV109=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTITULO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTITULO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTITULO",gxz:"ZV36Titulo",gxold:"OV36Titulo",gxvar:"AV36Titulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36Titulo=Value},v2z:function(Value){gx.O.ZV36Titulo=Value},v2c:function(row){gx.fn.setGridControlValue("vTITULO",row || gx.fn.currentGridRowImpl(6),gx.O.AV36Titulo,0)},c2v:function(){gx.O.AV36Titulo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTITULO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV37bmpDesc",gxold:"OV37bmpDesc",gxvar:"AV37bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37bmpDesc=Value},v2z:function(Value){gx.O.ZV37bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(6),gx.O.AV37bmpDesc,gx.O.AV59Bmpdesc_GXI)},c2v:function(){gx.O.AV59Bmpdesc_GXI=this.val_GXI();gx.O.AV37bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(6))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(6))}, gxvar_GXI:'AV59Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAINICIO",gxz:"ZV52GXV10C",gxold:"OV52GXV10C",gxvar:"GXV10C",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10C=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV52GXV10C=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAINICIO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10C,0)},c2v:function(){gx.O.GXV10C=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAINICIO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAFINAL",gxz:"ZV53GXV10D",gxold:"OV53GXV10D",gxvar:"GXV10D",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10D=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV53GXV10D=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAFINAL",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAFINAL",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORTO",gxz:"ZV54GXV10E",gxold:"OV54GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV54GXV10E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORTO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10E,2,',')},c2v:function(){gx.O.GXV10E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORTO",row || gx.fn.currentGridRowImpl(6),'.',',')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"svchar",len:300,dec:0,sign:false,ro:0,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLARQUIVO",gxz:"ZV55GXV10F",gxold:"OV55GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10F=Value},v2z:function(Value){gx.O.ZV55GXV10F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLARQUIVO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLARQUIVO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV35bmpImp",gxold:"OV35bmpImp",gxvar:"AV35bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpImp=Value},v2z:function(Value){gx.O.ZV35bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(6),gx.O.AV35bmpImp,gx.O.AV58Bmpimp_GXI)},c2v:function(){gx.O.AV58Bmpimp_GXI=this.val_GXI();gx.O.AV35bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(6))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(6))}, gxvar_GXI:'AV58Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[17]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[23]={fld:"TABLE5",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINDICELINHA",gxz:"ZV44IndiceLinha",gxold:"OV44IndiceLinha",gxvar:"AV44IndiceLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44IndiceLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44IndiceLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINDICELINHA",gx.O.AV44IndiceLinha,0)},c2v:function(){gx.O.AV44IndiceLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINDICELINHA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPORTXML",gxz:"ZV45SnImportXml",gxold:"OV45SnImportXml",gxvar:"AV45SnImportXml",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45SnImportXml=Value},v2z:function(Value){gx.O.ZV45SnImportXml=Value},v2c:function(){gx.fn.setControlValue("vSNIMPORTXML",gx.O.AV45SnImportXml,0)},c2v:function(){gx.O.AV45SnImportXml=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPORTXML")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQJAIMP",gxz:"ZV42ArqJaImp",gxold:"OV42ArqJaImp",gxvar:"AV42ArqJaImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ArqJaImp=Value},v2z:function(Value){gx.O.ZV42ArqJaImp=Value},v2c:function(){gx.fn.setControlValue("vARQJAIMP",gx.O.AV42ArqJaImp,0)},c2v:function(){gx.O.AV42ArqJaImp=this.val()},val:function(){return gx.fn.getControlValue("vARQJAIMP")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQIMP",gxz:"ZV40ArqImp",gxold:"OV40ArqImp",gxvar:"AV40ArqImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ArqImp=Value},v2z:function(Value){gx.O.ZV40ArqImp=Value},v2c:function(){gx.fn.setControlValue("vARQIMP",gx.O.AV40ArqImp,0)},c2v:function(){gx.O.AV40ArqImp=this.val()},val:function(){return gx.fn.getControlValue("vARQIMP")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"BTNHELP",grid:0};
   this.ZV49GXV107 = "" ;
   this.OV49GXV107 = "" ;
   this.ZV50GXV108 = "" ;
   this.OV50GXV108 = "" ;
   this.ZV51GXV109 = "" ;
   this.OV51GXV109 = "" ;
   this.ZV36Titulo = "" ;
   this.OV36Titulo = "" ;
   this.ZV37bmpDesc = "" ;
   this.OV37bmpDesc = "" ;
   this.ZV52GXV10C = gx.date.nullDate() ;
   this.OV52GXV10C = gx.date.nullDate() ;
   this.ZV53GXV10D = gx.date.nullDate() ;
   this.OV53GXV10D = gx.date.nullDate() ;
   this.ZV54GXV10E = 0 ;
   this.OV54GXV10E = 0 ;
   this.ZV55GXV10F = "" ;
   this.OV55GXV10F = "" ;
   this.ZV35bmpImp = "" ;
   this.OV35bmpImp = "" ;
   this.AV44IndiceLinha = 0 ;
   this.ZV44IndiceLinha = 0 ;
   this.OV44IndiceLinha = 0 ;
   this.AV45SnImportXml = "" ;
   this.ZV45SnImportXml = "" ;
   this.OV45SnImportXml = "" ;
   this.AV42ArqJaImp = "" ;
   this.ZV42ArqJaImp = "" ;
   this.OV42ArqJaImp = "" ;
   this.AV40ArqImp = "" ;
   this.ZV40ArqImp = "" ;
   this.OV40ArqImp = "" ;
   this.AV44IndiceLinha = 0 ;
   this.AV45SnImportXml = "" ;
   this.AV42ArqJaImp = "" ;
   this.AV40ArqImp = "" ;
   this.GXV107 = "" ;
   this.GXV108 = "" ;
   this.GXV109 = "" ;
   this.AV36Titulo = "" ;
   this.AV37bmpDesc = "" ;
   this.GXV10C = gx.date.nullDate() ;
   this.GXV10D = gx.date.nullDate() ;
   this.GXV10E = 0 ;
   this.GXV10F = "" ;
   this.AV35bmpImp = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.AV33TermoOutorga = [ ] ;
   this.Events = {"e1113q2_client": ["'FECHAR'", true] ,"e1313q2_client": ["'IMPORTAR'", true] ,"e1513q2_client": ["'DETALHAR'", true] ,"e1713q2_client": ["ENTER", true] ,"e1813q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35bmpImp',fld:'vBMPIMP'},{av:'AV37bmpDesc',fld:'vBMPDESC'},{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'}],[{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV43Index',fld:'vINDEX'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPORTAR'"] = [[{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'A8111TermoOutorgaEmpresaId',fld:'TERMOOUTORGAEMPRESAID'},{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35bmpImp',fld:'vBMPIMP'},{av:'AV37bmpDesc',fld:'vBMPDESC'},{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'}],[{av:'AV39TermoOutorgaEmpresaId',fld:'vTERMOOUTORGAEMPRESAID'},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV62GXLvl87',fld:'vGXLVL87'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6}],[{av:'AV36Titulo',fld:'vTITULO'}]];
   this.EvtParms["'DETALHAR'"] = [[{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6}],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35bmpImp',fld:'vBMPIMP'},{av:'AV37bmpDesc',fld:'vBMPDESC'},{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'}],[{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV43Index',fld:'vINDEX'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35bmpImp',fld:'vBMPIMP'},{av:'AV37bmpDesc',fld:'vBMPDESC'},{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'}],[{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV43Index',fld:'vINDEX'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35bmpImp',fld:'vBMPIMP'},{av:'AV37bmpDesc',fld:'vBMPDESC'},{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'}],[{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV43Index',fld:'vINDEX'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35bmpImp',fld:'vBMPIMP'},{av:'AV37bmpDesc',fld:'vBMPDESC'},{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV44IndiceLinha',fld:'vINDICELINHA'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV40ArqImp',fld:'vARQIMP'},{av:'AV42ArqJaImp',fld:'vARQJAIMP'}],[{av:'AV45SnImportXml',fld:'vSNIMPORTXML'},{av:'AV33TermoOutorga',fld:'vTERMOOUTORGA',grid:6},{av:'AV43Index',fld:'vINDEX'}]];
   this.setVCMap("AV33TermoOutorga", "vTERMOOUTORGA", 0, "CollSdtTermoOutorga.SdtTermoOutorgaItem");
   this.setVCMap("AV33TermoOutorga", "vTERMOOUTORGA", 0, "CollSdtTermoOutorga.SdtTermoOutorgaItem");
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV37bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV33TermoOutorga"});
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   this.addGridBCProperty("Termooutorga", ["Edital"], this.GXValidFnc[7], "AV33TermoOutorga");
   this.addGridBCProperty("Termooutorga", ["NoProcesso"], this.GXValidFnc[8], "AV33TermoOutorga");
   this.addGridBCProperty("Termooutorga", ["Titulo"], this.GXValidFnc[9], "AV33TermoOutorga");
   this.addGridBCProperty("Termooutorga", ["DataInicio"], this.GXValidFnc[12], "AV33TermoOutorga");
   this.addGridBCProperty("Termooutorga", ["DataFinal"], this.GXValidFnc[13], "AV33TermoOutorga");
   this.addGridBCProperty("Termooutorga", ["ValorTO"], this.GXValidFnc[14], "AV33TermoOutorga");
   this.addGridBCProperty("Termooutorga", ["Arquivo"], this.GXValidFnc[15], "AV33TermoOutorga");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportatermooutorga());
