/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:58.85
*/
gx.evt.autoSkip = false;
gx.define('hmodelodocumento', false, function () {
   this.ServerClass =  "hmodelodocumento" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e118s2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e128s2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e168s2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e138s2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e228s2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e238s2_client=function()
   {
      this.executeServerEvent("'LAYOUTDOCUMENTO'", true, arguments[0], false, false);
   };
   this.e248s2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e148s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, arguments[0], false, false);
   };
   this.e158s2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e178s2_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e258s2_client=function()
   {
      this.executeServerEvent("'FONTE'", true, arguments[0], false, false);
   };
   this.e268s2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e278s2_client=function()
   {
      this.executeServerEvent("'VISUALIZAR'", true, arguments[0], false, false);
   };
   this.e188s2_client=function()
   {
      this.executeServerEvent("'CLOSE'", false, null, false, false);
   };
   this.e288s2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e298s2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e308s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,38,39,40,41,42,43,44,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodelodocumento",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1024,31,"MODELODOCUMENTOID","","","ModeloDocumentoId","int",0,"px",3,3,"right",null,[],1024,"ModeloDocumentoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1025,32,"MODELODOCUMENTODESCRICAO","","","ModeloDocumentoDescricao","svchar",0,"px",40,40,"left",null,[],1025,"ModeloDocumentoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(1028,33,"MODELODOCUMENTOTIPO","","ModeloDocumentoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2017,34,"MODELODOCUMENTOTIPOIMPRESSAO","Tipo Impressão","ModeloDocumentoTipoImpressao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmplay","vBMPLAY",35,0,"px",17,"px","e238s2_client","","Layout","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpfon","vBMPFON",36,0,"px",17,"px","e258s2_client","","Fonte","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvis","vBMPVIS",37,0,"px",17,"px","e278s2_client","","Visualizar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",38,0,"px",17,"px","e228s2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",39,0,"px",17,"px","e268s2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",40,0,"px",17,"px","e248s2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1023,41,"MODELODOCUMENTOEMPRESAID","Empresa","","ModeloDocumentoEmpresaId","char",0,"px",10,10,"left",null,[],1023,"ModeloDocumentoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3131,42,"MODELODOCUMENTOIMAGEM1","Imagem","","ModeloDocumentoImagem1","svchar",0,"px",100,80,"left",null,[],3131,"ModeloDocumentoImagem1",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3132,43,"MODELODOCUMENTOIMAGEM2","Imagem","","ModeloDocumentoImagem2","svchar",0,"px",100,80,"left",null,[],3132,"ModeloDocumentoImagem2",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3133,44,"MODELODOCUMENTOIMAGEM3","Imagem","","ModeloDocumentoImagem3","svchar",0,"px",100,80,"left",null,[],3133,"ModeloDocumentoImagem3",false,0,false,false,"Attribute",1,"");
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
   GXValidFnc[31]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOID",gxz:"Z1024ModeloDocumentoId",gxold:"O1024ModeloDocumentoId",gxvar:"A1024ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1024ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1024ModeloDocumentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOID",row || gx.fn.currentGridRowImpl(30),gx.O.A1024ModeloDocumentoId,0)},c2v:function(){gx.O.A1024ModeloDocumentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELODOCUMENTOID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTODESCRICAO",gxz:"Z1025ModeloDocumentoDescricao",gxold:"O1025ModeloDocumentoDescricao",gxvar:"A1025ModeloDocumentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1025ModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.Z1025ModeloDocumentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTODESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A1025ModeloDocumentoDescricao,0)},c2v:function(){gx.O.A1025ModeloDocumentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTODESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOTIPO",gxz:"Z1028ModeloDocumentoTipo",gxold:"O1028ModeloDocumentoTipo",gxvar:"A1028ModeloDocumentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1028ModeloDocumentoTipo=Value},v2z:function(Value){gx.O.Z1028ModeloDocumentoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELODOCUMENTOTIPO",row || gx.fn.currentGridRowImpl(30),gx.O.A1028ModeloDocumentoTipo)},c2v:function(){gx.O.A1028ModeloDocumentoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOTIPO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOTIPOIMPRESSAO",gxz:"Z2017ModeloDocumentoTipoImpressao",gxold:"O2017ModeloDocumentoTipoImpressao",gxvar:"A2017ModeloDocumentoTipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2017ModeloDocumentoTipoImpressao=Value},v2z:function(Value){gx.O.Z2017ModeloDocumentoTipoImpressao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELODOCUMENTOTIPOIMPRESSAO",row || gx.fn.currentGridRowImpl(30),gx.O.A2017ModeloDocumentoTipoImpressao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2017ModeloDocumentoTipoImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOTIPOIMPRESSAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLAY",gxz:"ZV27bmpLay",gxold:"OV27bmpLay",gxvar:"AV27bmpLay",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpLay=Value},v2z:function(Value){gx.O.ZV27bmpLay=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30),gx.O.AV27bmpLay,gx.O.AV43Bmplay_GXI)},c2v:function(){gx.O.AV43Bmplay_GXI=this.val_GXI();gx.O.AV27bmpLay=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLAY_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV43Bmplay_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFON",gxz:"ZV28bmpFon",gxold:"OV28bmpFon",gxvar:"AV28bmpFon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpFon=Value},v2z:function(Value){gx.O.ZV28bmpFon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFON",row || gx.fn.currentGridRowImpl(30),gx.O.AV28bmpFon,gx.O.AV42Bmpfon_GXI)},c2v:function(){gx.O.AV42Bmpfon_GXI=this.val_GXI();gx.O.AV28bmpFon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV42Bmpfon_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVIS",gxz:"ZV31bmpVis",gxold:"OV31bmpVis",gxvar:"AV31bmpVis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpVis=Value},v2z:function(Value){gx.O.ZV31bmpVis=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVIS",row || gx.fn.currentGridRowImpl(30),gx.O.AV31bmpVis,gx.O.AV38Bmpvis_GXI)},c2v:function(){gx.O.AV38Bmpvis_GXI=this.val_GXI();gx.O.AV31bmpVis=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVIS",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVIS_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV38Bmpvis_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOEMPRESAID",gxz:"Z1023ModeloDocumentoEmpresaId",gxold:"O1023ModeloDocumentoEmpresaId",gxvar:"A1023ModeloDocumentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1023ModeloDocumentoEmpresaId=Value},v2z:function(Value){gx.O.Z1023ModeloDocumentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(30),gx.O.A1023ModeloDocumentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1023ModeloDocumentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOIMAGEM1",gxz:"Z3131ModeloDocumentoImagem1",gxold:"O3131ModeloDocumentoImagem1",gxvar:"A3131ModeloDocumentoImagem1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3131ModeloDocumentoImagem1=Value},v2z:function(Value){gx.O.Z3131ModeloDocumentoImagem1=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOIMAGEM1",row || gx.fn.currentGridRowImpl(30),gx.O.A3131ModeloDocumentoImagem1,0)},c2v:function(){gx.O.A3131ModeloDocumentoImagem1=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOIMAGEM1",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOIMAGEM2",gxz:"Z3132ModeloDocumentoImagem2",gxold:"O3132ModeloDocumentoImagem2",gxvar:"A3132ModeloDocumentoImagem2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3132ModeloDocumentoImagem2=Value},v2z:function(Value){gx.O.Z3132ModeloDocumentoImagem2=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOIMAGEM2",row || gx.fn.currentGridRowImpl(30),gx.O.A3132ModeloDocumentoImagem2,0)},c2v:function(){gx.O.A3132ModeloDocumentoImagem2=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOIMAGEM2",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOIMAGEM3",gxz:"Z3133ModeloDocumentoImagem3",gxold:"O3133ModeloDocumentoImagem3",gxvar:"A3133ModeloDocumentoImagem3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3133ModeloDocumentoImagem3=Value},v2z:function(Value){gx.O.Z3133ModeloDocumentoImagem3=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOIMAGEM3",row || gx.fn.currentGridRowImpl(30),gx.O.A3133ModeloDocumentoImagem3,0)},c2v:function(){gx.O.A3133ModeloDocumentoImagem3=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOIMAGEM3",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1024ModeloDocumentoId = 0 ;
   this.O1024ModeloDocumentoId = 0 ;
   this.Z1025ModeloDocumentoDescricao = "" ;
   this.O1025ModeloDocumentoDescricao = "" ;
   this.Z1028ModeloDocumentoTipo = "" ;
   this.O1028ModeloDocumentoTipo = "" ;
   this.Z2017ModeloDocumentoTipoImpressao = "" ;
   this.O2017ModeloDocumentoTipoImpressao = "" ;
   this.ZV27bmpLay = "" ;
   this.OV27bmpLay = "" ;
   this.ZV28bmpFon = "" ;
   this.OV28bmpFon = "" ;
   this.ZV31bmpVis = "" ;
   this.OV31bmpVis = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1023ModeloDocumentoEmpresaId = "" ;
   this.O1023ModeloDocumentoEmpresaId = "" ;
   this.Z3131ModeloDocumentoImagem1 = "" ;
   this.O3131ModeloDocumentoImagem1 = "" ;
   this.Z3132ModeloDocumentoImagem2 = "" ;
   this.O3132ModeloDocumentoImagem2 = "" ;
   this.Z3133ModeloDocumentoImagem3 = "" ;
   this.O3133ModeloDocumentoImagem3 = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.A1028ModeloDocumentoTipo = "" ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.AV27bmpLay = "" ;
   this.AV28bmpFon = "" ;
   this.AV31bmpVis = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A3131ModeloDocumentoImagem1 = "" ;
   this.A3132ModeloDocumentoImagem2 = "" ;
   this.A3133ModeloDocumentoImagem3 = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV36Pgmname = "" ;
   this.Events = {"e118s2_client": ["'ANTERIOR'", true] ,"e128s2_client": ["'PROXIMO'", true] ,"e168s2_client": ["VPAGINA.CLICK", true] ,"e138s2_client": ["'NOVO'", true] ,"e228s2_client": ["'ALTERAR'", true] ,"e238s2_client": ["'LAYOUTDOCUMENTO'", true] ,"e248s2_client": ["'CONSULTAR'", true] ,"e148s2_client": ["'FECHAR'", true] ,"e158s2_client": ["'PROCURAR'", true] ,"e178s2_client": ["'COPIAR'", true] ,"e258s2_client": ["'FONTE'", true] ,"e268s2_client": ["'EXCLUIR'", true] ,"e278s2_client": ["'VISUALIZAR'", true] ,"e188s2_client": ["'CLOSE'", true] ,"e288s2_client": ["'ATUALIZAPAGINA'", true] ,"e298s2_client": ["ENTER", true] ,"e308s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{ctrl:'MODELODOCUMENTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCUMENTOID","Title")',ctrl:'MODELODOCUMENTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MODELODOCUMENTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELODOCUMENTODESCRICAO","Title")',ctrl:'MODELODOCUMENTODESCRICAO',prop:'Title'},{ctrl:'MODELODOCUMENTOTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpFon',fld:'vBMPFON'},{av:'gx.fn.getCtrlProperty("vBMPFON","Tooltiptext")',ctrl:'vBMPFON',prop:'Tooltiptext'},{av:'AV27bmpLay',fld:'vBMPLAY'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Tooltiptext")',ctrl:'vBMPLAY',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'A3131ModeloDocumentoImagem1',fld:'MODELODOCUMENTOIMAGEM1'},{av:'A3132ModeloDocumentoImagem2',fld:'MODELODOCUMENTOIMAGEM2'},{av:'A3133ModeloDocumentoImagem3',fld:'MODELODOCUMENTOIMAGEM3'}],[{av:'A3133ModeloDocumentoImagem3',fld:'MODELODOCUMENTOIMAGEM3'},{av:'A3132ModeloDocumentoImagem2',fld:'MODELODOCUMENTOIMAGEM2'},{av:'A3131ModeloDocumentoImagem1',fld:'MODELODOCUMENTOIMAGEM1'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'}]];
   this.EvtParms["'LAYOUTDOCUMENTO'"] = [[{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'}],[]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'A3131ModeloDocumentoImagem1',fld:'MODELODOCUMENTOIMAGEM1'},{av:'A3132ModeloDocumentoImagem2',fld:'MODELODOCUMENTOIMAGEM2'},{av:'A3133ModeloDocumentoImagem3',fld:'MODELODOCUMENTOIMAGEM3'}],[{av:'A3133ModeloDocumentoImagem3',fld:'MODELODOCUMENTOIMAGEM3'},{av:'A3132ModeloDocumentoImagem2',fld:'MODELODOCUMENTOIMAGEM2'},{av:'A3131ModeloDocumentoImagem1',fld:'MODELODOCUMENTOIMAGEM1'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'FONTE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'A3131ModeloDocumentoImagem1',fld:'MODELODOCUMENTOIMAGEM1'},{av:'A3132ModeloDocumentoImagem2',fld:'MODELODOCUMENTOIMAGEM2'},{av:'A3133ModeloDocumentoImagem3',fld:'MODELODOCUMENTOIMAGEM3'},{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'}],[{av:'A3133ModeloDocumentoImagem3',fld:'MODELODOCUMENTOIMAGEM3'},{av:'A3132ModeloDocumentoImagem2',fld:'MODELODOCUMENTOIMAGEM2'},{av:'A3131ModeloDocumentoImagem1',fld:'MODELODOCUMENTOIMAGEM1'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'}]];
   this.EvtParms["'VISUALIZAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'CLOSE'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpVis", rfrProp:"Value", gxAttId:"Bmpvis"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpVis", rfrProp:"Tooltiptext", gxAttId:"Bmpvis"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV36Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodelodocumento());
