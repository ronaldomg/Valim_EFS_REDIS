/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:18.38
*/
gx.evt.autoSkip = false;
gx.define('hvisualizarrelatorio', false, function () {
   this.ServerClass =  "hvisualizarrelatorio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23Relatorio=gx.fn.getControlValue("vRELATORIO") ;
   };
   this.e144e2_client=function()
   {
      this.executeServerEvent("'PREENCHER'", false, null, false, false);
   };
   this.e114e2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e124e2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e154e2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e134e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e204e2_client=function()
   {
      this.executeServerEvent("'EXCLUIRARQUIVO'", true, arguments[0], false, false);
   };
   this.e164e2_client=function()
   {
      this.executeServerEvent("'DELETATUDO'", true, null, false, false);
   };
   this.e214e2_client=function()
   {
      this.executeServerEvent("'VISUALIZAR'", true, arguments[0], false, false);
   };
   this.e224e2_client=function()
   {
      this.executeServerEvent("'ENVIAREMAIL'", true, arguments[0], false, false);
   };
   this.e234e2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e244e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,30,33,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,68,69,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hvisualizarrelatorio",[],false,1,false,true,0,false,false,false,"CollRelatorio.RelatorioItem",0,"px","Novo registro",true,false,false,null,null,false,"AV23Relatorio",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLRELATORIOID","Cód.","","RelatorioId","int",0,"px",4,4,"right",null,[],"GXV11I","GXV11I",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLRELATORIOARQUIVO","Relatorio Arquivo","","RelatorioArquivo","svchar",0,"px",50,50,"left",null,[],"GXV11J","GXV11J",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLRELATORIODATA","Data","","RelatorioData","dtime",0,"px",14,14,"right",null,[],"GXV11K","GXV11K",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLEXTENSAO","Extensão","","Extensao","char",0,"px",3,3,"left",null,[],"GXV11L","GXV11L",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpemail","vBMPEMAIL",58,0,"px",17,"px","e224e2_client","","E-mail","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvis","vBMPVIS",59,0,"px",17,"px","e214e2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e204e2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLRELATORIOLINK","Nome do Arquivo","","RelatorioLink","svchar",0,"px",400,80,"left",null,[],"GXV11P","GXV11P",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEARQUIVOAUX",gxz:"ZV26NomeArquivoAux",gxold:"OV26NomeArquivoAux",gxvar:"AV26NomeArquivoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26NomeArquivoAux=Value},v2z:function(Value){gx.O.ZV26NomeArquivoAux=Value},v2c:function(){gx.fn.setControlValue("vNOMEARQUIVOAUX",gx.O.AV26NomeArquivoAux,0)},c2v:function(){gx.O.AV26NomeArquivoAux=this.val()},val:function(){return gx.fn.getControlValue("vNOMEARQUIVOAUX")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE9",grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV34DataIni",gxold:"OV34DataIni",gxvar:"AV34DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV34DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[23]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV35DataFim",gxold:"OV35DataFim",gxvar:"AV35DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV35DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE1",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLRELATORIOID",gxz:"ZV60GXV11I",gxold:"OV60GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11I=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60GXV11I=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLRELATORIOID",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLRELATORIOID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLRELATORIOARQUIVO",gxz:"ZV61GXV11J",gxold:"OV61GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11J=Value},v2z:function(Value){gx.O.ZV61GXV11J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLRELATORIOARQUIVO",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLRELATORIOARQUIVO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"dtime",len:8,dec:5,sign:false,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLRELATORIODATA",gxz:"ZV62GXV11K",gxold:"OV62GXV11K",gxvar:"GXV11K",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11K=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV62GXV11K=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLRELATORIODATA",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLRELATORIODATA",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEXTENSAO",gxz:"ZV63GXV11L",gxold:"OV63GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11L=Value},v2z:function(Value){gx.O.ZV63GXV11L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEXTENSAO",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11L,0)},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEXTENSAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEMAIL",gxz:"ZV45bmpEmail",gxold:"OV45bmpEmail",gxvar:"AV45bmpEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV45bmpEmail=Value},v2z:function(Value){gx.O.ZV45bmpEmail=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEMAIL",row || gx.fn.currentGridRowImpl(53),gx.O.AV45bmpEmail,gx.O.AV68Bmpemail_GXI)},c2v:function(){gx.O.AV68Bmpemail_GXI=this.val_GXI();gx.O.AV45bmpEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEMAIL",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEMAIL_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV68Bmpemail_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVIS",gxz:"ZV16bmpVis",gxold:"OV16bmpVis",gxvar:"AV16bmpVis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpVis=Value},v2z:function(Value){gx.O.ZV16bmpVis=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVIS",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpVis,gx.O.AV67Bmpvis_GXI)},c2v:function(){gx.O.AV67Bmpvis_GXI=this.val_GXI();gx.O.AV16bmpVis=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVIS",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVIS_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV67Bmpvis_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV66Bmpexc_GXI)},c2v:function(){gx.O.AV66Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV66Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:400,dec:0,sign:false,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLRELATORIOLINK",gxz:"ZV64GXV11P",gxold:"OV64GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11P=Value},v2z:function(Value){gx.O.ZV64GXV11P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLRELATORIOLINK",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLRELATORIOLINK",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JSABR", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALPAGINAS",gxz:"ZV31TotalPaginas",gxold:"OV31TotalPaginas",gxvar:"AV31TotalPaginas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TotalPaginas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31TotalPaginas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTALPAGINAS",gx.O.AV31TotalPaginas,0)},c2v:function(){gx.O.AV31TotalPaginas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTALPAGINAS",'.')},nac:gx.falseFn};
   this.AV26NomeArquivoAux = "" ;
   this.ZV26NomeArquivoAux = "" ;
   this.OV26NomeArquivoAux = "" ;
   this.AV34DataIni = gx.date.nullDate() ;
   this.ZV34DataIni = gx.date.nullDate() ;
   this.OV34DataIni = gx.date.nullDate() ;
   this.AV35DataFim = gx.date.nullDate() ;
   this.ZV35DataFim = gx.date.nullDate() ;
   this.OV35DataFim = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV60GXV11I = 0 ;
   this.OV60GXV11I = 0 ;
   this.ZV61GXV11J = "" ;
   this.OV61GXV11J = "" ;
   this.ZV62GXV11K = gx.date.nullDate() ;
   this.OV62GXV11K = gx.date.nullDate() ;
   this.ZV63GXV11L = "" ;
   this.OV63GXV11L = "" ;
   this.ZV45bmpEmail = "" ;
   this.OV45bmpEmail = "" ;
   this.ZV16bmpVis = "" ;
   this.OV16bmpVis = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV64GXV11P = "" ;
   this.OV64GXV11P = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31TotalPaginas = 0 ;
   this.ZV31TotalPaginas = 0 ;
   this.OV31TotalPaginas = 0 ;
   this.AV26NomeArquivoAux = "" ;
   this.AV34DataIni = gx.date.nullDate() ;
   this.AV35DataFim = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV31TotalPaginas = 0 ;
   this.GXV11I = 0 ;
   this.GXV11J = "" ;
   this.GXV11K = gx.date.nullDate() ;
   this.GXV11L = "" ;
   this.AV45bmpEmail = "" ;
   this.AV16bmpVis = "" ;
   this.AV8bmpExc = "" ;
   this.GXV11P = "" ;
   this.A138EmpresaId = "" ;
   this.A202EmpresaCNPJ = "" ;
   this.AV23Relatorio = [ ] ;
   this.Events = {"e144e2_client": ["'PREENCHER'", true] ,"e114e2_client": ["'ANTERIOR'", true] ,"e124e2_client": ["'PROXIMO'", true] ,"e154e2_client": ["VPAGINA.CLICK", true] ,"e134e2_client": ["'FECHAR'", true] ,"e204e2_client": ["'EXCLUIRARQUIVO'", true] ,"e164e2_client": ["'DELETATUDO'", true] ,"e214e2_client": ["'VISUALIZAR'", true] ,"e224e2_client": ["'ENVIAREMAIL'", true] ,"e234e2_client": ["ENTER", true] ,"e244e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'PREENCHER'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34DataIni',fld:'vDATAINI'},{av:'AV35DataFim',fld:'vDATAFIM'},{av:'AV26NomeArquivoAux',fld:'vNOMEARQUIVOAUX'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV27RelatorioUmItem',fld:'vRELATORIOUMITEM'},{av:'AV24Ordem',fld:'vORDEM'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV43filtros',fld:'vFILTROS'},{av:'AV21DiretorioAux',fld:'vDIRETORIOAUX'},{av:'AV56EmpresaCNPJ',fld:'vEMPRESACNPJ'},{av:'AV70Partner',fld:'vPARTNER'},{av:'AV49ArquivoZip',fld:'vARQUIVOZIP'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV24Ordem',fld:'vORDEM'},{av:'AV72GXV3',fld:'vGXV3'},{av:'AV36DataAux',fld:'vDATAAUX'},{av:'AV27RelatorioUmItem',fld:'vRELATORIOUMITEM'},{av:'AV37PosicaoFim',fld:'vPOSICAOFIM'},{av:'AV74GXV5',fld:'vGXV5'},{av:'AV76GXV7',fld:'vGXV7'},{av:'AV78GXV9',fld:'vGXV9'},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV32i',fld:'vI'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV43filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NomeArquivoAux',fld:'vNOMEARQUIVOAUX'},{av:'AV34DataIni',fld:'vDATAINI'},{av:'AV35DataFim',fld:'vDATAFIM'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NomeArquivoAux',fld:'vNOMEARQUIVOAUX'},{av:'AV34DataIni',fld:'vDATAINI'},{av:'AV35DataFim',fld:'vDATAFIM'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV43filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NomeArquivoAux',fld:'vNOMEARQUIVOAUX'},{av:'AV34DataIni',fld:'vDATAINI'},{av:'AV35DataFim',fld:'vDATAFIM'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV43filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV23Relatorio',fld:'vRELATORIO',grid:53}],[{av:'AV28posicao',fld:'vPOSICAO'},{av:'AV27RelatorioUmItem',fld:'vRELATORIOUMITEM'},{av:'AV29NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV30PosicaoIni',fld:'vPOSICAOINI'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV45bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26NomeArquivoAux',fld:'vNOMEARQUIVOAUX'},{av:'AV34DataIni',fld:'vDATAINI'},{av:'AV35DataFim',fld:'vDATAFIM'}],[{av:'AV43filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'EXCLUIRARQUIVO'"] = [[{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV24Ordem',fld:'vORDEM'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28posicao',fld:'vPOSICAO'},{av:'AV27RelatorioUmItem',fld:'vRELATORIOUMITEM'},{av:'AV50tam',fld:'vTAM'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV29NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32i',fld:'vI'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'DELETATUDO'"] = [[{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV26NomeArquivoAux',fld:'vNOMEARQUIVOAUX'},{av:'AV34DataIni',fld:'vDATAINI'},{av:'AV35DataFim',fld:'vDATAFIM'},{av:'AV27RelatorioUmItem',fld:'vRELATORIOUMITEM'},{av:'AV24Ordem',fld:'vORDEM'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV41tot',fld:'vTOT'},{av:'AV40n',fld:'vN'},{av:'AV27RelatorioUmItem',fld:'vRELATORIOUMITEM'},{av:'AV50tam',fld:'vTAM'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV29NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV28posicao',fld:'vPOSICAO'},{av:'AV21DiretorioAux',fld:'vDIRETORIOAUX'},{av:'AV56EmpresaCNPJ',fld:'vEMPRESACNPJ'},{av:'AV70Partner',fld:'vPARTNER'},{av:'AV49ArquivoZip',fld:'vARQUIVOZIP'},{av:'AV24Ordem',fld:'vORDEM'},{av:'AV72GXV3',fld:'vGXV3'},{av:'AV36DataAux',fld:'vDATAAUX'},{av:'AV37PosicaoFim',fld:'vPOSICAOFIM'},{av:'AV74GXV5',fld:'vGXV5'},{av:'AV76GXV7',fld:'vGXV7'},{av:'AV78GXV9',fld:'vGXV9'},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32i',fld:'vI'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'VISUALIZAR'"] = [[{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV51SnBarraInvertida',fld:'vSNBARRAINVERTIDA'},{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV79Pgmdesc',fld:'vPGMDESC'}],[{av:'AV29NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV30PosicaoIni',fld:'vPOSICAOINI'},{av:'AV51SnBarraInvertida',fld:'vSNBARRAINVERTIDA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'}]];
   this.EvtParms["'ENVIAREMAIL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23Relatorio',fld:'vRELATORIO',grid:53},{av:'AV31TotalPaginas',fld:'vTOTALPAGINAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV55SdtParmEmail',fld:'vSDTPARMEMAIL'}],[{av:'AV29NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV55SdtParmEmail',fld:'vSDTPARMEMAIL'}]];
   this.setVCMap("AV23Relatorio", "vRELATORIO", 0, "CollRelatorio.RelatorioItem");
   this.setVCMap("AV23Relatorio", "vRELATORIO", 0, "CollRelatorio.RelatorioItem");
   GridContainer.addRefreshingVar({rfrVar:"AV23Relatorio"});
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   this.addGridBCProperty("Relatorio", ["RelatorioId"], this.GXValidFnc[54], "AV23Relatorio");
   this.addGridBCProperty("Relatorio", ["RelatorioArquivo"], this.GXValidFnc[55], "AV23Relatorio");
   this.addGridBCProperty("Relatorio", ["RelatorioData"], this.GXValidFnc[56], "AV23Relatorio");
   this.addGridBCProperty("Relatorio", ["Extensao"], this.GXValidFnc[57], "AV23Relatorio");
   this.addGridBCProperty("Relatorio", ["RelatorioLink"], this.GXValidFnc[61], "AV23Relatorio");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisualizarrelatorio());
