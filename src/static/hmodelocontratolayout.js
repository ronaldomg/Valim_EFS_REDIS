/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:38.92
*/
gx.evt.autoSkip = false;
gx.define('hmodelocontratolayout', false, function () {
   this.ServerClass =  "hmodelocontratolayout" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV75SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11uj2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12uj2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e15uj2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13uj2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14uj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e19uj2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20uj2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21uj2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22uj2_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e23uj2_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e24uj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25uj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodelocontratolayout",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5340,47,"MODELOCONTRATOLAYOUTORDEM","Ordem","","ModeloContratoLayoutOrdem","int",0,"px",3,3,"right",null,[],5340,"ModeloContratoLayoutOrdem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tpcampo",48,"vTPCAMPO","Tipo de Campo","","TpCampo","svchar",0,"px",30,30,"left",null,[],"Tpcampo","TpCampo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5338,49,"MODELOCONTRATOLAYOUTTIPOCAMPO","Tipo de Campo","","ModeloContratoLayoutTipoCampo","int",0,"px",2,2,"right",null,[],5338,"ModeloContratoLayoutTipoCampo",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",50,0,"px",17,"px","e19uj2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",51,0,"px",17,"px","e20uj2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",52,0,"px",17,"px","e21uj2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsob","vBMPSOB",53,0,"px",17,"px","e23uj2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdes","vBMPDES",54,0,"px",17,"px","e22uj2_client","","Desce","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5336,55,"MODELOCONTRATOEMPRESAID","Empresa","","ModeloContratoEmpresaId","char",0,"px",10,10,"left",null,[],5336,"ModeloContratoEmpresaId",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit(5337,56,"MODELOCONTRATOID","Código do Modelo","","ModeloContratoId","int",0,"px",3,3,"right",null,[],5337,"ModeloContratoId",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit(5343,57,"MODELOCONTRATOLAYOUTSEQ","Sequência","","ModeloContratoLayoutSeq","int",0,"px",3,3,"right",null,[],5343,"ModeloContratoLayoutSeq",false,0,false,false,"ApenasLeitura",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOCONTRATOID",gxz:"ZV66ModeloContratoId",gxold:"OV66ModeloContratoId",gxvar:"AV66ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66ModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOCONTRATOID",gx.O.AV66ModeloContratoId,0)},c2v:function(){gx.O.AV66ModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOCONTRATODESCRICAO",gxz:"ZV67ModeloContratoDescricao",gxold:"OV67ModeloContratoDescricao",gxvar:"AV67ModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ModeloContratoDescricao=Value},v2z:function(Value){gx.O.ZV67ModeloContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOCONTRATODESCRICAO",gx.O.AV67ModeloContratoDescricao,0)},c2v:function(){gx.O.AV67ModeloContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTORDEM",gxz:"Z5340ModeloContratoLayoutOrdem",gxold:"O5340ModeloContratoLayoutOrdem",gxvar:"A5340ModeloContratoLayoutOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5340ModeloContratoLayoutOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5340ModeloContratoLayoutOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTORDEM",row || gx.fn.currentGridRowImpl(46),gx.O.A5340ModeloContratoLayoutOrdem,0)},c2v:function(){gx.O.A5340ModeloContratoLayoutOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOLAYOUTORDEM",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPCAMPO",gxz:"ZV73TpCampo",gxold:"OV73TpCampo",gxvar:"AV73TpCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV73TpCampo=Value},v2z:function(Value){gx.O.ZV73TpCampo=Value},v2c:function(row){gx.fn.setGridControlValue("vTPCAMPO",row || gx.fn.currentGridRowImpl(46),gx.O.AV73TpCampo,0)},c2v:function(){gx.O.AV73TpCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPCAMPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTTIPOCAMPO",gxz:"Z5338ModeloContratoLayoutTipoCampo",gxold:"O5338ModeloContratoLayoutTipoCampo",gxvar:"A5338ModeloContratoLayoutTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5338ModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5338ModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTTIPOCAMPO",row || gx.fn.currentGridRowImpl(46),gx.O.A5338ModeloContratoLayoutTipoCampo,0)},c2v:function(){gx.O.A5338ModeloContratoLayoutTipoCampo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOLAYOUTTIPOCAMPO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV80Bmpalt_GXI)},c2v:function(){gx.O.AV80Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV80Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV81Bmpexc_GXI)},c2v:function(){gx.O.AV81Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV81Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV82Bmpcon_GXI)},c2v:function(){gx.O.AV82Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV82Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOB",gxz:"ZV71BmpSob",gxold:"OV71BmpSob",gxvar:"AV71BmpSob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV71BmpSob=Value},v2z:function(Value){gx.O.ZV71BmpSob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOB",row || gx.fn.currentGridRowImpl(46),gx.O.AV71BmpSob,gx.O.AV83Bmpsob_GXI)},c2v:function(){gx.O.AV83Bmpsob_GXI=this.val_GXI();gx.O.AV71BmpSob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOB",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOB_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV83Bmpsob_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDES",gxz:"ZV72BmpDes",gxold:"OV72BmpDes",gxvar:"AV72BmpDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV72BmpDes=Value},v2z:function(Value){gx.O.ZV72BmpDes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDES",row || gx.fn.currentGridRowImpl(46),gx.O.AV72BmpDes,gx.O.AV84Bmpdes_GXI)},c2v:function(){gx.O.AV84Bmpdes_GXI=this.val_GXI();gx.O.AV72BmpDes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDES",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDES_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV84Bmpdes_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOEMPRESAID",gxz:"Z5336ModeloContratoEmpresaId",gxold:"O5336ModeloContratoEmpresaId",gxvar:"A5336ModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5336ModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5336ModeloContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A5336ModeloContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5336ModeloContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(46),gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTSEQ",gxz:"Z5343ModeloContratoLayoutSeq",gxold:"O5343ModeloContratoLayoutSeq",gxvar:"A5343ModeloContratoLayoutSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5343ModeloContratoLayoutSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5343ModeloContratoLayoutSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTSEQ",row || gx.fn.currentGridRowImpl(46),gx.O.A5343ModeloContratoLayoutSeq,0)},c2v:function(){gx.O.A5343ModeloContratoLayoutSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOLAYOUTSEQ",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOCONTRATOEMPRESAID",gxz:"ZV70ModeloContratoEmpresaId",gxold:"OV70ModeloContratoEmpresaId",gxvar:"AV70ModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.ZV70ModeloContratoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vMODELOCONTRATOEMPRESAID",gx.O.AV70ModeloContratoEmpresaId,0)},c2v:function(){gx.O.AV70ModeloContratoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vMODELOCONTRATOEMPRESAID")},nac:gx.falseFn};
   this.AV66ModeloContratoId = 0 ;
   this.ZV66ModeloContratoId = 0 ;
   this.OV66ModeloContratoId = 0 ;
   this.AV67ModeloContratoDescricao = "" ;
   this.ZV67ModeloContratoDescricao = "" ;
   this.OV67ModeloContratoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5340ModeloContratoLayoutOrdem = 0 ;
   this.O5340ModeloContratoLayoutOrdem = 0 ;
   this.ZV73TpCampo = "" ;
   this.OV73TpCampo = "" ;
   this.Z5338ModeloContratoLayoutTipoCampo = 0 ;
   this.O5338ModeloContratoLayoutTipoCampo = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV71BmpSob = "" ;
   this.OV71BmpSob = "" ;
   this.ZV72BmpDes = "" ;
   this.OV72BmpDes = "" ;
   this.Z5336ModeloContratoEmpresaId = "" ;
   this.O5336ModeloContratoEmpresaId = "" ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.Z5343ModeloContratoLayoutSeq = 0 ;
   this.O5343ModeloContratoLayoutSeq = 0 ;
   this.AV70ModeloContratoEmpresaId = "" ;
   this.ZV70ModeloContratoEmpresaId = "" ;
   this.OV70ModeloContratoEmpresaId = "" ;
   this.AV66ModeloContratoId = 0 ;
   this.AV67ModeloContratoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV70ModeloContratoEmpresaId = "" ;
   this.A5340ModeloContratoLayoutOrdem = 0 ;
   this.AV73TpCampo = "" ;
   this.A5338ModeloContratoLayoutTipoCampo = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV71BmpSob = "" ;
   this.AV72BmpDes = "" ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5343ModeloContratoLayoutSeq = 0 ;
   this.AV75SnRecuperaFiltro = "" ;
   this.Events = {"e11uj2_client": ["'ANTERIOR'", true] ,"e12uj2_client": ["'PROXIMO'", true] ,"e15uj2_client": ["VPAGINA.CLICK", true] ,"e13uj2_client": ["'NOVO'", true] ,"e14uj2_client": ["'FECHAR'", true] ,"e19uj2_client": ["'ALTERAR'", true] ,"e20uj2_client": ["'EXCLUIR'", true] ,"e21uj2_client": ["'CONSULTAR'", true] ,"e22uj2_client": ["'DESCER'", true] ,"e23uj2_client": ["'SUBIR'", true] ,"e24uj2_client": ["ENTER", true] ,"e25uj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70ModeloContratoEmpresaId',fld:'vMODELOCONTRATOEMPRESAID'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV71BmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV72BmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5338ModeloContratoLayoutTipoCampo',fld:'MODELOCONTRATOLAYOUTTIPOCAMPO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5338ModeloContratoLayoutTipoCampo',fld:'MODELOCONTRATOLAYOUTTIPOCAMPO'}],[{av:'AV74TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV73TpCampo',fld:'vTPCAMPO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70ModeloContratoEmpresaId',fld:'vMODELOCONTRATOEMPRESAID'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV71BmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV72BmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5338ModeloContratoLayoutTipoCampo',fld:'MODELOCONTRATOLAYOUTTIPOCAMPO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70ModeloContratoEmpresaId',fld:'vMODELOCONTRATOEMPRESAID'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV71BmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV72BmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5338ModeloContratoLayoutTipoCampo',fld:'MODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70ModeloContratoEmpresaId',fld:'vMODELOCONTRATOEMPRESAID'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV71BmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV72BmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5338ModeloContratoLayoutTipoCampo',fld:'MODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70ModeloContratoEmpresaId',fld:'vMODELOCONTRATOEMPRESAID'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV71BmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV72BmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'},{av:'AV75SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5338ModeloContratoLayoutTipoCampo',fld:'MODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV67ModeloContratoDescricao',fld:'vMODELOCONTRATODESCRICAO'}],[{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'AV66ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DESCER'"] = [[{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'A5340ModeloContratoLayoutOrdem',fld:'MODELOCONTRATOLAYOUTORDEM'}],[{av:'A5340ModeloContratoLayoutOrdem',fld:'MODELOCONTRATOLAYOUTORDEM'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'A5340ModeloContratoLayoutOrdem',fld:'MODELOCONTRATOLAYOUTORDEM'}],[{av:'A5340ModeloContratoLayoutOrdem',fld:'MODELOCONTRATOLAYOUTORDEM'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'}]];
   this.setVCMap("AV75SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV75SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV71BmpSob", rfrProp:"Value", gxAttId:"Bmpsob"});
   GridContainer.addRefreshingVar({rfrVar:"AV71BmpSob", rfrProp:"Tooltiptext", gxAttId:"Bmpsob"});
   GridContainer.addRefreshingVar({rfrVar:"AV72BmpDes", rfrProp:"Value", gxAttId:"Bmpdes"});
   GridContainer.addRefreshingVar({rfrVar:"AV72BmpDes", rfrProp:"Tooltiptext", gxAttId:"Bmpdes"});
   GridContainer.addRefreshingVar({rfrVar:"AV75SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A5338ModeloContratoLayoutTipoCampo", rfrProp:"Value", gxAttId:"5338"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodelocontratolayout());
