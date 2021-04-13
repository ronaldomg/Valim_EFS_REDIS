/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:25.88
*/
gx.evt.autoSkip = false;
gx.define('hmensagemusuario', false, function () {
   this.ServerClass =  "hmensagemusuario" ;
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
      this.AV25SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e112t2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122t2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202t2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212t2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222t2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162t2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132t2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152t2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e232t2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242t2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmensagemusuario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(364,59,"USUARIOENVIOUNOME","","","UsuarioEnviouNome","svchar",0,"px",35,35,"left",null,[],364,"UsuarioEnviouNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(356,60,"MENSAGEMUSUARIODATA","","","MensagemUsuarioData","dtime",0,"px",16,16,"right",null,[],356,"MensagemUsuarioData",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(357,61,"MENSAGEMUSUARIODATAAPRESENTACA","","","MensagemUsuarioDataApresentaca","dtime",0,"px",16,16,"right",null,[],357,"MensagemUsuarioDataApresentaca",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(358,62,"MENSAGEMUSUARIOASSUNTO","","","MensagemUsuarioAssunto","svchar",0,"px",80,80,"left",null,[],358,"MensagemUsuarioAssunto",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e202t2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e212t2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e222t2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(365,66,"MENSAGEMUSUARIOID","Número da Mensagem","","MensagemUsuarioId","int",0,"px",7,7,"right",null,[],365,"MensagemUsuarioId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV18UsuarioId",gxold:"OV18UsuarioId",gxvar:"AV18UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18UsuarioId=Value},v2z:function(Value){gx.O.ZV18UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV18UsuarioId,0)},c2v:function(){gx.O.AV18UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV19UsuarioNome",gxold:"OV19UsuarioNome",gxvar:"AV19UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19UsuarioNome=Value},v2z:function(Value){gx.O.ZV19UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV19UsuarioNome,0)},c2v:function(){gx.O.AV19UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSRDE",gxz:"ZV17UsrDe",gxold:"OV17UsrDe",gxvar:"AV17UsrDe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV17UsrDe=Value},v2z:function(Value){gx.O.ZV17UsrDe=Value},v2c:function(){gx.fn.setComboBoxValue("vUSRDE",gx.O.AV17UsrDe)},c2v:function(){gx.O.AV17UsrDe=this.val()},val:function(){return gx.fn.getControlValue("vUSRDE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAPRINI",gxz:"ZV20DataAprIni",gxold:"OV20DataAprIni",gxvar:"AV20DataAprIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataAprIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataAprIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAPRINI",gx.O.AV20DataAprIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataAprIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAAPRINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOENVIOUNOME",gxz:"Z364UsuarioEnviouNome",gxold:"O364UsuarioEnviouNome",gxvar:"A364UsuarioEnviouNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A364UsuarioEnviouNome=Value},v2z:function(Value){gx.O.Z364UsuarioEnviouNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOENVIOUNOME",row || gx.fn.currentGridRowImpl(58),gx.O.A364UsuarioEnviouNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A364UsuarioEnviouNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOENVIOUNOME",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATA",gxz:"Z356MensagemUsuarioData",gxold:"O356MensagemUsuarioData",gxvar:"A356MensagemUsuarioData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z356MensagemUsuarioData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATA",row || gx.fn.currentGridRowImpl(58),gx.O.A356MensagemUsuarioData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A356MensagemUsuarioData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIODATAAPRESENTACA",gxz:"Z357MensagemUsuarioDataApresentaca",gxold:"O357MensagemUsuarioDataApresentaca",gxvar:"A357MensagemUsuarioDataApresentaca",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(58),gx.O.A357MensagemUsuarioDataApresentaca,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A357MensagemUsuarioDataApresentaca=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MENSAGEMUSUARIODATAAPRESENTACA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOASSUNTO",gxz:"Z358MensagemUsuarioAssunto",gxold:"O358MensagemUsuarioAssunto",gxvar:"A358MensagemUsuarioAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A358MensagemUsuarioAssunto=Value},v2z:function(Value){gx.O.Z358MensagemUsuarioAssunto=Value},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIOASSUNTO",row || gx.fn.currentGridRowImpl(58),gx.O.A358MensagemUsuarioAssunto,0)},c2v:function(){gx.O.A358MensagemUsuarioAssunto=this.val()},val:function(row){return gx.fn.getGridControlValue("MENSAGEMUSUARIOASSUNTO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV31Bmpexc_GXI)},c2v:function(){gx.O.AV31Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV31Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV32Bmpcon_GXI)},c2v:function(){gx.O.AV32Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV32Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGEMUSUARIOID",gxz:"Z365MensagemUsuarioId",gxold:"O365MensagemUsuarioId",gxvar:"A365MensagemUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A365MensagemUsuarioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z365MensagemUsuarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(58),gx.O.A365MensagemUsuarioId,0)},c2v:function(){gx.O.A365MensagemUsuarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSAGEMUSUARIOID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18UsuarioId = "" ;
   this.ZV18UsuarioId = "" ;
   this.OV18UsuarioId = "" ;
   this.AV19UsuarioNome = "" ;
   this.ZV19UsuarioNome = "" ;
   this.OV19UsuarioNome = "" ;
   this.AV17UsrDe = "" ;
   this.ZV17UsrDe = "" ;
   this.OV17UsrDe = "" ;
   this.AV20DataAprIni = gx.date.nullDate() ;
   this.ZV20DataAprIni = gx.date.nullDate() ;
   this.OV20DataAprIni = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z364UsuarioEnviouNome = "" ;
   this.O364UsuarioEnviouNome = "" ;
   this.Z356MensagemUsuarioData = gx.date.nullDate() ;
   this.O356MensagemUsuarioData = gx.date.nullDate() ;
   this.Z357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.O357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.Z358MensagemUsuarioAssunto = "" ;
   this.O358MensagemUsuarioAssunto = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z365MensagemUsuarioId = 0 ;
   this.O365MensagemUsuarioId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV18UsuarioId = "" ;
   this.AV19UsuarioNome = "" ;
   this.AV17UsrDe = "" ;
   this.AV20DataAprIni = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A75UsuarioId = "" ;
   this.A363UsuarioEnviouId = "" ;
   this.A364UsuarioEnviouNome = "" ;
   this.A356MensagemUsuarioData = gx.date.nullDate() ;
   this.A357MensagemUsuarioDataApresentaca = gx.date.nullDate() ;
   this.A358MensagemUsuarioAssunto = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A365MensagemUsuarioId = 0 ;
   this.AV25SnRecuperaFiltro = "" ;
   this.Events = {"e112t2_client": ["'ANTERIOR'", true] ,"e122t2_client": ["'PROXIMO'", true] ,"e202t2_client": ["'ALTERAR'", true] ,"e212t2_client": ["'EXCLUIR'", true] ,"e222t2_client": ["'CONSULTAR'", true] ,"e162t2_client": ["VPAGINA.CLICK", true] ,"e132t2_client": ["'NOVO'", true] ,"e142t2_client": ["'FECHAR'", true] ,"e152t2_client": ["'PROCURAR'", true] ,"e232t2_client": ["'ATUALIZAPAGINA'", true] ,"e242t2_client": ["ENTER", true] ,"e252t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'USUARIOENVIOUNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOENVIOUNOME","Title")',ctrl:'USUARIOENVIOUNOME',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MENSAGEMUSUARIODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIODATA","Title")',ctrl:'MENSAGEMUSUARIODATA',prop:'Title'},{ctrl:'MENSAGEMUSUARIODATAAPRESENTACA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIODATAAPRESENTACA","Title")',ctrl:'MENSAGEMUSUARIODATAAPRESENTACA',prop:'Title'},{ctrl:'MENSAGEMUSUARIOASSUNTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENSAGEMUSUARIOASSUNTO","Title")',ctrl:'MENSAGEMUSUARIOASSUNTO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV24filtros',fld:'vFILTROS'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'A365MensagemUsuarioId',fld:'MENSAGEMUSUARIOID'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV19UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV19UsuarioNome',fld:'vUSUARIONOME'},{av:'AV18UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17UsrDe',fld:'vUSRDE'},{av:'AV20DataAprIni',fld:'vDATAAPRINI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV18UsuarioId',fld:'vUSUARIOID'},{av:'AV25SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV25SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV25SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagemusuario());
