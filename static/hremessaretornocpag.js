/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:29:41.90
*/
gx.evt.autoSkip = false;
gx.define('hremessaretornocpag', false, function () {
   this.ServerClass =  "hremessaretornocpag" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e27w32_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e11w32_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12w32_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16w32_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13w32_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14w32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15w32_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e21w32_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22w32_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23w32_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17w32_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e24w32_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e25w32_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e26w32_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e28w32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e29w32_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,38,39,40,41,47,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hremessaretornocpag",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5463,31,"REMESSARETORNOCPAGID","","","RemessaRetornoCPagId","int",0,"px",4,4,"right",null,[],5463,"RemessaRetornoCPagId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5447,32,"REMESSARETORNOCPAGDESCRICAO","","","RemessaRetornoCPagDescricao","svchar",0,"px",40,40,"left",null,[],5447,"RemessaRetornoCPagDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5448,33,"REMESSARETORNOCPAGTAMANHO","","","RemessaRetornoCPagTamanho","int",0,"px",4,4,"right",null,[],5448,"RemessaRetornoCPagTamanho",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5451,34,"REMRETCPAGARBANCODESC","","","RemRetCPagarBancoDesc","svchar",0,"px",25,25,"left",null,[],5451,"RemRetCPagarBancoDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(5458,35,"REMESSARETORNOCPAGTIPO","","RemessaRetornoCPagTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmplay","vBMPLAY",36,0,"px",17,"px",null,"","Layout","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",37,0,"px",17,"px","e21w32_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",38,0,"px",17,"px","e22w32_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",39,0,"px",17,"px","e23w32_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsobe","vBMPSOBE",40,0,"px",17,"px","e24w32_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",41,0,"px",17,"px","e25w32_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGID",gxz:"Z5463RemessaRetornoCPagId",gxold:"O5463RemessaRetornoCPagId",gxvar:"A5463RemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5463RemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGID",row || gx.fn.currentGridRowImpl(30),gx.O.A5463RemessaRetornoCPagId,0)},c2v:function(){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOCPAGID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGDESCRICAO",gxz:"Z5447RemessaRetornoCPagDescricao",gxold:"O5447RemessaRetornoCPagDescricao",gxvar:"A5447RemessaRetornoCPagDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5447RemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.Z5447RemessaRetornoCPagDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGDESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A5447RemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.A5447RemessaRetornoCPagDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGDESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTAMANHO",gxz:"Z5448RemessaRetornoCPagTamanho",gxold:"O5448RemessaRetornoCPagTamanho",gxvar:"A5448RemessaRetornoCPagTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGTAMANHO",row || gx.fn.currentGridRowImpl(30),gx.O.A5448RemessaRetornoCPagTamanho,0)},c2v:function(){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOCPAGTAMANHO",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMRETCPAGARBANCODESC",gxz:"Z5451RemRetCPagarBancoDesc",gxold:"O5451RemRetCPagarBancoDesc",gxvar:"A5451RemRetCPagarBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5451RemRetCPagarBancoDesc=Value},v2z:function(Value){gx.O.Z5451RemRetCPagarBancoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("REMRETCPAGARBANCODESC",row || gx.fn.currentGridRowImpl(30),gx.O.A5451RemRetCPagarBancoDesc,0)},c2v:function(){gx.O.A5451RemRetCPagarBancoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("REMRETCPAGARBANCODESC",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTIPO",gxz:"Z5458RemessaRetornoCPagTipo",gxold:"O5458RemessaRetornoCPagTipo",gxvar:"A5458RemessaRetornoCPagTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5458RemessaRetornoCPagTipo=Value},v2z:function(Value){gx.O.Z5458RemessaRetornoCPagTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("REMESSARETORNOCPAGTIPO",row || gx.fn.currentGridRowImpl(30),gx.O.A5458RemessaRetornoCPagTipo)},c2v:function(){gx.O.A5458RemessaRetornoCPagTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGTIPO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLAY",gxz:"ZV27bmpLay",gxold:"OV27bmpLay",gxvar:"AV27bmpLay",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpLay=Value},v2z:function(Value){gx.O.ZV27bmpLay=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30),gx.O.AV27bmpLay,gx.O.AV42Bmplay_GXI)},c2v:function(){gx.O.AV42Bmplay_GXI=this.val_GXI();gx.O.AV27bmpLay=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLAY_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV42Bmplay_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV29bmpSobe",gxold:"OV29bmpSobe",gxvar:"AV29bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpSobe=Value},v2z:function(Value){gx.O.ZV29bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(30),gx.O.AV29bmpSobe,gx.O.AV39Bmpsobe_GXI)},c2v:function(){gx.O.AV39Bmpsobe_GXI=this.val_GXI();gx.O.AV29bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV39Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV30bmpDesc",gxold:"OV30bmpDesc",gxvar:"AV30bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpDesc=Value},v2z:function(Value){gx.O.ZV30bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(30),gx.O.AV30bmpDesc,gx.O.AV40Bmpdesc_GXI)},c2v:function(){gx.O.AV40Bmpdesc_GXI=this.val_GXI();gx.O.AV30bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV40Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"JS", format:2,grid:0};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5463RemessaRetornoCPagId = 0 ;
   this.O5463RemessaRetornoCPagId = 0 ;
   this.Z5447RemessaRetornoCPagDescricao = "" ;
   this.O5447RemessaRetornoCPagDescricao = "" ;
   this.Z5448RemessaRetornoCPagTamanho = 0 ;
   this.O5448RemessaRetornoCPagTamanho = 0 ;
   this.Z5451RemRetCPagarBancoDesc = "" ;
   this.O5451RemRetCPagarBancoDesc = "" ;
   this.Z5458RemessaRetornoCPagTipo = "" ;
   this.O5458RemessaRetornoCPagTipo = "" ;
   this.ZV27bmpLay = "" ;
   this.OV27bmpLay = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV29bmpSobe = "" ;
   this.OV29bmpSobe = "" ;
   this.ZV30bmpDesc = "" ;
   this.OV30bmpDesc = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.A5449RemRetCPagarBancoEmpId = "" ;
   this.A5450RemRetCPagarBancoId = 0 ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5447RemessaRetornoCPagDescricao = "" ;
   this.A5448RemessaRetornoCPagTamanho = 0 ;
   this.A5451RemRetCPagarBancoDesc = "" ;
   this.A5458RemessaRetornoCPagTipo = "" ;
   this.AV27bmpLay = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV29bmpSobe = "" ;
   this.AV30bmpDesc = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.Events = {"e11w32_client": ["'ANTERIOR'", true] ,"e12w32_client": ["'PROXIMO'", true] ,"e16w32_client": ["VPAGINA.CLICK", true] ,"e13w32_client": ["'NOVO'", true] ,"e14w32_client": ["'FECHAR'", true] ,"e15w32_client": ["'PROCURAR'", true] ,"e21w32_client": ["'ALTERAR'", true] ,"e22w32_client": ["'EXCLUIR'", true] ,"e23w32_client": ["'CONSULTAR'", true] ,"e17w32_client": ["'COPIAR'", true] ,"e24w32_client": ["'SUBIR'", true] ,"e25w32_client": ["'DESCER'", true] ,"e26w32_client": ["'ATUALIZAPAGINA'", true] ,"e28w32_client": ["ENTER", true] ,"e29w32_client": ["CANCEL", true] ,"e27w32_client": ["'OCORRENCIA'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[{ctrl:'REMESSARETORNOCPAGID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOCPAGID","Title")',ctrl:'REMESSARETORNOCPAGID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'REMESSARETORNOCPAGDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOCPAGDESCRICAO","Title")',ctrl:'REMESSARETORNOCPAGDESCRICAO',prop:'Title'},{ctrl:'REMESSARETORNOCPAGTAMANHO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOCPAGTAMANHO","Title")',ctrl:'REMESSARETORNOCPAGTAMANHO',prop:'Title'},{ctrl:'REMRETCPAGARBANCODESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMRETCPAGARBANCODESC","Title")',ctrl:'REMRETCPAGARBANCODESC',prop:'Title'},{ctrl:'REMESSARETORNOCPAGTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV27bmpLay',fld:'vBMPLAY'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Tooltiptext")',ctrl:'vBMPLAY',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Link")',ctrl:'vBMPLAY',prop:'Link'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[]];
   this.EvtParms["'SUBIR'"] = [[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV31MsgRetorno',fld:'vMSGRETORNO'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'}],[{av:'AV31MsgRetorno',fld:'vMSGRETORNO'}]];
   this.EvtParms["'OCORRENCIA'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'A5447RemessaRetornoCPagDescricao',fld:'REMESSARETORNOCPAGDESCRICAO'},{av:'A5448RemessaRetornoCPagTamanho',fld:'REMESSARETORNOCPAGTAMANHO'},{av:'A5458RemessaRetornoCPagTipo',fld:'REMESSARETORNOCPAGTIPO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpSobe", rfrProp:"Value", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpSobe", rfrProp:"Tooltiptext", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar({rfrVar:"A5463RemessaRetornoCPagId", rfrProp:"Value", gxAttId:"5463"});
   GridContainer.addRefreshingVar({rfrVar:"A5447RemessaRetornoCPagDescricao", rfrProp:"Value", gxAttId:"5447"});
   GridContainer.addRefreshingVar({rfrVar:"A5448RemessaRetornoCPagTamanho", rfrProp:"Value", gxAttId:"5448"});
   GridContainer.addRefreshingVar({rfrVar:"A5458RemessaRetornoCPagTipo", rfrProp:"Value", gxAttId:"5458"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hremessaretornocpag());
