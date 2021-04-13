/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:56.9
*/
gx.evt.autoSkip = false;
gx.define('hmodulo', false, function () {
   this.ServerClass =  "hmodulo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV44SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV48Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e111482_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121482_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171482_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131482_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141482_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151482_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161482_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201482_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211482_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221482_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e231482_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e241482_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e261482_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e271482_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodulo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8269,54,"MODULOID","Código","","ModuloId","int",0,"px",6,6,"right",null,[],8269,"ModuloId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8272,55,"MODULONOME","Nome","","ModuloNome","svchar",0,"px",40,40,"left",null,[],8272,"ModuloNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8271,56,"MODULOSIGLA","Sigla","","ModuloSigla","char",0,"px",3,3,"left",null,[],8271,"ModuloSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8273,57,"MODULOBONUS","Bônus","","ModuloBonus","int",0,"px",2,2,"right",null,[],8273,"ModuloBonus",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8274,58,"MODULOVALOR","Valor","","ModuloValor","decimal",0,"px",22,22,"right",null,[],8274,"ModuloValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e201482_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e211482_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e221482_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpasc","vBMPASC",62,0,"px",17,"px","e231482_client","","Subir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",63,0,"px",17,"px","e241482_client","","Descer","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8270,64,"MODULOORDEM","Modulo Ordem","","ModuloOrdem","int",0,"px",3,3,"right",null,[],8270,"ModuloOrdem",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"FILTROCODIGO", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIGOMODULO",gxz:"ZV30CodigoModulo",gxold:"OV30CodigoModulo",gxvar:"AV30CodigoModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CodigoModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30CodigoModulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOMODULO",gx.O.AV30CodigoModulo,0)},c2v:function(){gx.O.AV30CodigoModulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOMODULO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"FILTRONOME", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODULONOME",gxz:"ZV31ModuloNome",gxold:"OV31ModuloNome",gxvar:"AV31ModuloNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ModuloNome=Value},v2z:function(Value){gx.O.ZV31ModuloNome=Value},v2c:function(){gx.fn.setControlValue("vMODULONOME",gx.O.AV31ModuloNome,0)},c2v:function(){gx.O.AV31ModuloNome=this.val()},val:function(){return gx.fn.getControlValue("vMODULONOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"FILTROSIGLA", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODULOSIGLA",gxz:"ZV29ModuloSigla",gxold:"OV29ModuloSigla",gxvar:"AV29ModuloSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ModuloSigla=Value},v2z:function(Value){gx.O.ZV29ModuloSigla=Value},v2c:function(){gx.fn.setControlValue("vMODULOSIGLA",gx.O.AV29ModuloSigla,0)},c2v:function(){gx.O.AV29ModuloSigla=this.val()},val:function(){return gx.fn.getControlValue("vMODULOSIGLA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOID",gxz:"Z8269ModuloId",gxold:"O8269ModuloId",gxvar:"A8269ModuloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8269ModuloId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8269ModuloId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODULOID",row || gx.fn.currentGridRowImpl(53),gx.O.A8269ModuloId,0)},c2v:function(){gx.O.A8269ModuloId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODULOID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULONOME",gxz:"Z8272ModuloNome",gxold:"O8272ModuloNome",gxvar:"A8272ModuloNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8272ModuloNome=Value},v2z:function(Value){gx.O.Z8272ModuloNome=Value},v2c:function(row){gx.fn.setGridControlValue("MODULONOME",row || gx.fn.currentGridRowImpl(53),gx.O.A8272ModuloNome,0)},c2v:function(){gx.O.A8272ModuloNome=this.val()},val:function(row){return gx.fn.getGridControlValue("MODULONOME",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOSIGLA",gxz:"Z8271ModuloSigla",gxold:"O8271ModuloSigla",gxvar:"A8271ModuloSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8271ModuloSigla=Value},v2z:function(Value){gx.O.Z8271ModuloSigla=Value},v2c:function(row){gx.fn.setGridControlValue("MODULOSIGLA",row || gx.fn.currentGridRowImpl(53),gx.O.A8271ModuloSigla,0)},c2v:function(){gx.O.A8271ModuloSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("MODULOSIGLA",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOBONUS",gxz:"Z8273ModuloBonus",gxold:"O8273ModuloBonus",gxvar:"A8273ModuloBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8273ModuloBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8273ModuloBonus=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODULOBONUS",row || gx.fn.currentGridRowImpl(53),gx.O.A8273ModuloBonus,0)},c2v:function(){gx.O.A8273ModuloBonus=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODULOBONUS",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOVALOR",gxz:"Z8274ModuloValor",gxold:"O8274ModuloValor",gxvar:"A8274ModuloValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8274ModuloValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8274ModuloValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MODULOVALOR",row || gx.fn.currentGridRowImpl(53),gx.O.A8274ModuloValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8274ModuloValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MODULOVALOR",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV50Bmpalt_GXI)},c2v:function(){gx.O.AV50Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV50Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV51Bmpexc_GXI)},c2v:function(){gx.O.AV51Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV51Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV52Bmpcon_GXI)},c2v:function(){gx.O.AV52Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV52Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPASC",gxz:"ZV35bmpAsc",gxold:"OV35bmpAsc",gxvar:"AV35bmpAsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpAsc=Value},v2z:function(Value){gx.O.ZV35bmpAsc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPASC",row || gx.fn.currentGridRowImpl(53),gx.O.AV35bmpAsc,gx.O.AV53Bmpasc_GXI)},c2v:function(){gx.O.AV53Bmpasc_GXI=this.val_GXI();gx.O.AV35bmpAsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPASC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPASC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV53Bmpasc_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV36bmpDesc",gxold:"OV36bmpDesc",gxvar:"AV36bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpDesc=Value},v2z:function(Value){gx.O.ZV36bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(53),gx.O.AV36bmpDesc,gx.O.AV54Bmpdesc_GXI)},c2v:function(){gx.O.AV54Bmpdesc_GXI=this.val_GXI();gx.O.AV36bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV54Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODULOORDEM",gxz:"Z8270ModuloOrdem",gxold:"O8270ModuloOrdem",gxvar:"A8270ModuloOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8270ModuloOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8270ModuloOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODULOORDEM",row || gx.fn.currentGridRowImpl(53),gx.O.A8270ModuloOrdem,0)},c2v:function(){gx.O.A8270ModuloOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODULOORDEM",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   this.AV30CodigoModulo = 0 ;
   this.ZV30CodigoModulo = 0 ;
   this.OV30CodigoModulo = 0 ;
   this.AV31ModuloNome = "" ;
   this.ZV31ModuloNome = "" ;
   this.OV31ModuloNome = "" ;
   this.AV29ModuloSigla = "" ;
   this.ZV29ModuloSigla = "" ;
   this.OV29ModuloSigla = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8269ModuloId = 0 ;
   this.O8269ModuloId = 0 ;
   this.Z8272ModuloNome = "" ;
   this.O8272ModuloNome = "" ;
   this.Z8271ModuloSigla = "" ;
   this.O8271ModuloSigla = "" ;
   this.Z8273ModuloBonus = 0 ;
   this.O8273ModuloBonus = 0 ;
   this.Z8274ModuloValor = 0 ;
   this.O8274ModuloValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV35bmpAsc = "" ;
   this.OV35bmpAsc = "" ;
   this.ZV36bmpDesc = "" ;
   this.OV36bmpDesc = "" ;
   this.Z8270ModuloOrdem = 0 ;
   this.O8270ModuloOrdem = 0 ;
   this.AV30CodigoModulo = 0 ;
   this.AV31ModuloNome = "" ;
   this.AV29ModuloSigla = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A8269ModuloId = 0 ;
   this.A8272ModuloNome = "" ;
   this.A8271ModuloSigla = "" ;
   this.A8273ModuloBonus = 0 ;
   this.A8274ModuloValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV35bmpAsc = "" ;
   this.AV36bmpDesc = "" ;
   this.A8270ModuloOrdem = 0 ;
   this.AV44SnRecuperaFiltro = "" ;
   this.AV48Pgmname = "" ;
   this.Events = {"e111482_client": ["'ANTERIOR'", true] ,"e121482_client": ["'PROXIMO'", true] ,"e171482_client": ["VPAGINA.CLICK", true] ,"e131482_client": ["'NOVO'", true] ,"e141482_client": ["'FECHAR'", true] ,"e151482_client": ["'IMPRIMIR'", true] ,"e161482_client": ["'PROCURAR'", true] ,"e201482_client": ["'ALTERAR'", true] ,"e211482_client": ["'EXCLUIR'", true] ,"e221482_client": ["'CONSULTAR'", true] ,"e231482_client": ["'SUBIR'", true] ,"e241482_client": ["'DESCER'", true] ,"e261482_client": ["ENTER", true] ,"e271482_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV36bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV48Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV36bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV48Pgmname',fld:'vPGMNAME'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV36bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV36bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV36bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'},{av:'AV48Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV48Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV49Pgmdesc',fld:'vPGMDESC'}],[{av:'AV43DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV45QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV36bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8269ModuloId',fld:'MODULOID'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'},{av:'AV48Pgmname',fld:'vPGMNAME'}],[{av:'A8269ModuloId',fld:'MODULOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8269ModuloId',fld:'MODULOID'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'},{av:'AV48Pgmname',fld:'vPGMNAME'}],[{av:'A8269ModuloId',fld:'MODULOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8269ModuloId',fld:'MODULOID'},{av:'AV30CodigoModulo',fld:'vCODIGOMODULO'},{av:'AV29ModuloSigla',fld:'vMODULOSIGLA'},{av:'AV31ModuloNome',fld:'vMODULONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SistemaNome',fld:'vSISTEMANOME'},{av:'AV48Pgmname',fld:'vPGMNAME'}],[{av:'A8269ModuloId',fld:'MODULOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV27ModuloEmpresaId',fld:'vMODULOEMPRESAID'},{av:'A8270ModuloOrdem',fld:'MODULOORDEM'}],[{av:'A8270ModuloOrdem',fld:'MODULOORDEM'},{av:'AV27ModuloEmpresaId',fld:'vMODULOEMPRESAID'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV27ModuloEmpresaId',fld:'vMODULOEMPRESAID'},{av:'A8270ModuloOrdem',fld:'MODULOORDEM'}],[{av:'A8270ModuloOrdem',fld:'MODULOORDEM'},{av:'AV27ModuloEmpresaId',fld:'vMODULOEMPRESAID'}]];
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV48Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV48Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpAsc", rfrProp:"Value", gxAttId:"Bmpasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpAsc", rfrProp:"Tooltiptext", gxAttId:"Bmpasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV44SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV48Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodulo());
