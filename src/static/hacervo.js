/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:53.31
*/
gx.evt.autoSkip = false;
gx.define('hacervo', false, function () {
   this.ServerClass =  "hacervo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11072_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12072_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20072_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21072_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22072_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16072_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13072_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14072_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15072_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e23072_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24072_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25072_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,38,40,41,45,46,47,48,49,50,51,52,53,54,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hacervo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(39,45,"ACERVOID","","","AcervoId","int",0,"px",7,7,"right",null,[],39,"AcervoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(40,46,"ACERVOTITULO","","","AcervoTitulo","svchar",0,"px",50,50,"left",null,[],40,"AcervoTitulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(112,47,"ACERVODATAAQUISICAO","","","AcervoDataAquisicao","date",0,"px",10,10,"right",null,[],112,"AcervoDataAquisicao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(44,48,"CLASSIFICACAOLITERARIADESCRICA","","","ClassificacaoLiterariaDescrica","svchar",0,"px",35,35,"left",null,[],44,"ClassificacaoLiterariaDescrica",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(43,49,"EDITORADESCRICAO","","","EditoraDescricao","svchar",0,"px",35,35,"left",null,[],43,"EditoraDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsit","vBMPSIT",50,0,"px",17,"px",null,"","Situação","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e20072_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e21072_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e22072_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(113,54,"ACERVODATABAIXA","Data Baixa","","AcervoDataBaixa","date",0,"px",10,10,"right",null,[],113,"AcervoDataBaixa",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vACERVOTITULO",gxz:"ZV28AcervoTitulo",gxold:"OV28AcervoTitulo",gxvar:"AV28AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AcervoTitulo=Value},v2z:function(Value){gx.O.ZV28AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOTITULO",gx.O.AV28AcervoTitulo,0)},c2v:function(){gx.O.AV28AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAO",gxz:"ZV29Situacao",gxold:"OV29Situacao",gxvar:"AV29Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29Situacao=Value},v2z:function(Value){gx.O.ZV29Situacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAO",gx.O.AV29Situacao)},c2v:function(){gx.O.AV29Situacao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE1",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOID",gxz:"Z39AcervoId",gxold:"O39AcervoId",gxvar:"A39AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A39AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z39AcervoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOID",row || gx.fn.currentGridRowImpl(44),gx.O.A39AcervoId,0)},c2v:function(){gx.O.A39AcervoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOTITULO",gxz:"Z40AcervoTitulo",gxold:"O40AcervoTitulo",gxvar:"A40AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A40AcervoTitulo=Value},v2z:function(Value){gx.O.Z40AcervoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(44),gx.O.A40AcervoTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A40AcervoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACERVODATAAQUISICAO",gxz:"Z112AcervoDataAquisicao",gxold:"O112AcervoDataAquisicao",gxvar:"A112AcervoDataAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A112AcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z112AcervoDataAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVODATAAQUISICAO",row || gx.fn.currentGridRowImpl(44),gx.O.A112AcervoDataAquisicao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A112AcervoDataAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERVODATAAQUISICAO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOLITERARIADESCRICA",gxz:"Z44ClassificacaoLiterariaDescrica",gxold:"O44ClassificacaoLiterariaDescrica",gxvar:"A44ClassificacaoLiterariaDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A44ClassificacaoLiterariaDescrica=Value},v2z:function(Value){gx.O.Z44ClassificacaoLiterariaDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOLITERARIADESCRICA",row || gx.fn.currentGridRowImpl(44),gx.O.A44ClassificacaoLiterariaDescrica,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A44ClassificacaoLiterariaDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOLITERARIADESCRICA",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EDITORADESCRICAO",gxz:"Z43EditoraDescricao",gxold:"O43EditoraDescricao",gxvar:"A43EditoraDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A43EditoraDescricao=Value},v2z:function(Value){gx.O.Z43EditoraDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("EDITORADESCRICAO",row || gx.fn.currentGridRowImpl(44),gx.O.A43EditoraDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A43EditoraDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("EDITORADESCRICAO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIT",gxz:"ZV34bmpSit",gxold:"OV34bmpSit",gxvar:"AV34bmpSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpSit=Value},v2z:function(Value){gx.O.ZV34bmpSit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIT",row || gx.fn.currentGridRowImpl(44),gx.O.AV34bmpSit,gx.O.AV40Bmpsit_GXI)},c2v:function(){gx.O.AV40Bmpsit_GXI=this.val_GXI();gx.O.AV34bmpSit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIT",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIT_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV40Bmpsit_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(44),gx.O.AV7bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(44),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACERVODATABAIXA",gxz:"Z113AcervoDataBaixa",gxold:"O113AcervoDataBaixa",gxvar:"A113AcervoDataBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A113AcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z113AcervoDataBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVODATABAIXA",row || gx.fn.currentGridRowImpl(44),gx.O.A113AcervoDataBaixa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A113AcervoDataBaixa=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERVODATABAIXA",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28AcervoTitulo = "" ;
   this.ZV28AcervoTitulo = "" ;
   this.OV28AcervoTitulo = "" ;
   this.AV29Situacao = "" ;
   this.ZV29Situacao = "" ;
   this.OV29Situacao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z39AcervoId = 0 ;
   this.O39AcervoId = 0 ;
   this.Z40AcervoTitulo = "" ;
   this.O40AcervoTitulo = "" ;
   this.Z112AcervoDataAquisicao = gx.date.nullDate() ;
   this.O112AcervoDataAquisicao = gx.date.nullDate() ;
   this.Z44ClassificacaoLiterariaDescrica = "" ;
   this.O44ClassificacaoLiterariaDescrica = "" ;
   this.Z43EditoraDescricao = "" ;
   this.O43EditoraDescricao = "" ;
   this.ZV34bmpSit = "" ;
   this.OV34bmpSit = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z113AcervoDataBaixa = gx.date.nullDate() ;
   this.O113AcervoDataBaixa = gx.date.nullDate() ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28AcervoTitulo = "" ;
   this.AV29Situacao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3082AcervoEmpresaId = "" ;
   this.A118EditoraId = 0 ;
   this.A119ClassificacaoLiterariaId = 0 ;
   this.A39AcervoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A112AcervoDataAquisicao = gx.date.nullDate() ;
   this.A44ClassificacaoLiterariaDescrica = "" ;
   this.A43EditoraDescricao = "" ;
   this.AV34bmpSit = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A113AcervoDataBaixa = gx.date.nullDate() ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.Events = {"e11072_client": ["'ANTERIOR'", true] ,"e12072_client": ["'PROXIMO'", true] ,"e20072_client": ["'ALTERAR'", true] ,"e21072_client": ["'EXCLUIR'", true] ,"e22072_client": ["'CONSULTAR'", true] ,"e16072_client": ["VPAGINA.CLICK", true] ,"e13072_client": ["'NOVO'", true] ,"e14072_client": ["'FECHAR'", true] ,"e15072_client": ["'PROCURAR'", true] ,"e23072_client": ["'ATUALIZAPAGINA'", true] ,"e24072_client": ["ENTER", true] ,"e25072_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'}],[{ctrl:'ACERVOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACERVOID","Title")',ctrl:'ACERVOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ACERVOTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACERVOTITULO","Title")',ctrl:'ACERVOTITULO',prop:'Title'},{ctrl:'ACERVODATAAQUISICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACERVODATAAQUISICAO","Title")',ctrl:'ACERVODATAAQUISICAO',prop:'Title'},{ctrl:'CLASSIFICACAOLITERARIADESCRICA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOLITERARIADESCRICA","Title")',ctrl:'CLASSIFICACAOLITERARIADESCRICA',prop:'Title'},{ctrl:'EDITORADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EDITORADESCRICAO","Title")',ctrl:'EDITORADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV32filtros',fld:'vFILTROS'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'}],[{av:'AV34bmpSit',fld:'vBMPSIT'},{av:'gx.fn.getCtrlProperty("vBMPSIT","Tooltiptext")',ctrl:'vBMPSIT',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A39AcervoId',fld:'ACERVOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'}],[{av:'A39AcervoId',fld:'ACERVOID'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A39AcervoId',fld:'ACERVOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'}],[{av:'A39AcervoId',fld:'ACERVOID'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A39AcervoId',fld:'ACERVOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'}],[{av:'A39AcervoId',fld:'ACERVOID'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV29Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A113AcervoDataBaixa',fld:'ACERVODATABAIXA'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A113AcervoDataBaixa", rfrProp:"Value", gxAttId:"113"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacervo());
