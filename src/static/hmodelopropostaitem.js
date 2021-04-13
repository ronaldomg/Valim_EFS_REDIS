/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:52.33
*/
gx.evt.autoSkip = false;
gx.define('hmodelopropostaitem', false, function () {
   this.ServerClass =  "hmodelopropostaitem" ;
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
      this.AV40ModeloPropostaEmpresaId=gx.fn.getControlValue("vMODELOPROPOSTAEMPRESAID") ;
      this.AV41SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e111472_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121472_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171472_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131472_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141472_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151472_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161472_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201472_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211472_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221472_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e231472_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e241472_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e261472_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e271472_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,33,35,40,43,46,48,50,52,54,56,59,61,62,66,67,68,69,70,71,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",65,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodelopropostaitem",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8307,66,"MODELOPROPOSTAITEMID","Código","","ModeloPropostaItemId","int",0,"px",6,6,"right",null,[],8307,"ModeloPropostaItemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(8300,67,"MODELOPROPOSTAITEMTIPO","Tipo","ModeloPropostaItemTipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(8302,68,"MODELOPROPOSTAITEMCAMPO","Campo","ModeloPropostaItemCampo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",69,0,"px",17,"px","e201472_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e211472_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e221472_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpasc","vBMPASC",72,0,"px",17,"px","e231472_client","","Subir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",73,0,"px",17,"px","e241472_client","","Descer","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8299,74,"MODELOPROPOSTAITEMORDEM","Ordem","","ModeloPropostaItemOrdem","int",0,"px",2,2,"right",null,[],8299,"ModeloPropostaItemOrdem",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTAID",gxz:"ZV36ModeloPropostaId",gxold:"OV36ModeloPropostaId",gxvar:"AV36ModeloPropostaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ModeloPropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTAID",gx.O.AV36ModeloPropostaId,0)},c2v:function(){gx.O.AV36ModeloPropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPROPOSTADESCRICAO",gxz:"ZV38ModeloPropostaDescricao",gxold:"OV38ModeloPropostaDescricao",gxvar:"AV38ModeloPropostaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.ZV38ModeloPropostaDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTADESCRICAO",gx.O.AV38ModeloPropostaDescricao,0)},c2v:function(){gx.O.AV38ModeloPropostaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPROPOSTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTAITEMID",gxz:"ZV28ModeloPropostaItemId",gxold:"OV28ModeloPropostaItemId",gxvar:"AV28ModeloPropostaItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ModeloPropostaItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ModeloPropostaItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPROPOSTAITEMID",gx.O.AV28ModeloPropostaItemId,0)},c2v:function(){gx.O.AV28ModeloPropostaItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPROPOSTAITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTAITEMTIPO",gxz:"ZV29ModeloPropostaItemTipo",gxold:"OV29ModeloPropostaItemTipo",gxvar:"AV29ModeloPropostaItemTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ModeloPropostaItemTipo=Value},v2z:function(Value){gx.O.ZV29ModeloPropostaItemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOPROPOSTAITEMTIPO",gx.O.AV29ModeloPropostaItemTipo)},c2v:function(){gx.O.AV29ModeloPropostaItemTipo=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPROPOSTAITEMTIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPROPOSTAITEMCAMPO",gxz:"ZV30ModeloPropostaItemCampo",gxold:"OV30ModeloPropostaItemCampo",gxvar:"AV30ModeloPropostaItemCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30ModeloPropostaItemCampo=Value},v2z:function(Value){gx.O.ZV30ModeloPropostaItemCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOPROPOSTAITEMCAMPO",gx.O.AV30ModeloPropostaItemCampo)},c2v:function(){gx.O.AV30ModeloPropostaItemCampo=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPROPOSTAITEMCAMPO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   GXValidFnc[43]={fld:"TABLE6",grid:0};
   GXValidFnc[46]={fld:"IMAGE2",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"IMAGE1",grid:0};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   GXValidFnc[56]={fld:"TABLE5",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMID",gxz:"Z8307ModeloPropostaItemId",gxold:"O8307ModeloPropostaItemId",gxvar:"A8307ModeloPropostaItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8307ModeloPropostaItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8307ModeloPropostaItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOPROPOSTAITEMID",row || gx.fn.currentGridRowImpl(65),gx.O.A8307ModeloPropostaItemId,0)},c2v:function(){gx.O.A8307ModeloPropostaItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOPROPOSTAITEMID",row || gx.fn.currentGridRowImpl(65),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMTIPO",gxz:"Z8300ModeloPropostaItemTipo",gxold:"O8300ModeloPropostaItemTipo",gxvar:"A8300ModeloPropostaItemTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A8300ModeloPropostaItemTipo=Value},v2z:function(Value){gx.O.Z8300ModeloPropostaItemTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELOPROPOSTAITEMTIPO",row || gx.fn.currentGridRowImpl(65),gx.O.A8300ModeloPropostaItemTipo)},c2v:function(){gx.O.A8300ModeloPropostaItemTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPROPOSTAITEMTIPO",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMCAMPO",gxz:"Z8302ModeloPropostaItemCampo",gxold:"O8302ModeloPropostaItemCampo",gxvar:"A8302ModeloPropostaItemCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A8302ModeloPropostaItemCampo=Value},v2z:function(Value){gx.O.Z8302ModeloPropostaItemCampo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELOPROPOSTAITEMCAMPO",row || gx.fn.currentGridRowImpl(65),gx.O.A8302ModeloPropostaItemCampo)},c2v:function(){gx.O.A8302ModeloPropostaItemCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPROPOSTAITEMCAMPO",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(65),gx.O.AV7bmpAlt,gx.O.AV47Bmpalt_GXI)},c2v:function(){gx.O.AV47Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV47Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(65),gx.O.AV8bmpExc,gx.O.AV48Bmpexc_GXI)},c2v:function(){gx.O.AV48Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV48Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(65),gx.O.AV16bmpCon,gx.O.AV49Bmpcon_GXI)},c2v:function(){gx.O.AV49Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV49Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPASC",gxz:"ZV33bmpAsc",gxold:"OV33bmpAsc",gxvar:"AV33bmpAsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpAsc=Value},v2z:function(Value){gx.O.ZV33bmpAsc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPASC",row || gx.fn.currentGridRowImpl(65),gx.O.AV33bmpAsc,gx.O.AV50Bmpasc_GXI)},c2v:function(){gx.O.AV50Bmpasc_GXI=this.val_GXI();gx.O.AV33bmpAsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPASC",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPASC_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV50Bmpasc_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV34bmpDesc",gxold:"OV34bmpDesc",gxvar:"AV34bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpDesc=Value},v2z:function(Value){gx.O.ZV34bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(65),gx.O.AV34bmpDesc,gx.O.AV51Bmpdesc_GXI)},c2v:function(){gx.O.AV51Bmpdesc_GXI=this.val_GXI();gx.O.AV34bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV51Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMORDEM",gxz:"Z8299ModeloPropostaItemOrdem",gxold:"O8299ModeloPropostaItemOrdem",gxvar:"A8299ModeloPropostaItemOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8299ModeloPropostaItemOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8299ModeloPropostaItemOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOPROPOSTAITEMORDEM",row || gx.fn.currentGridRowImpl(65),gx.O.A8299ModeloPropostaItemOrdem,0)},c2v:function(){gx.O.A8299ModeloPropostaItemOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOPROPOSTAITEMORDEM",row || gx.fn.currentGridRowImpl(65),'.')},nac:gx.falseFn};
   this.AV36ModeloPropostaId = 0 ;
   this.ZV36ModeloPropostaId = 0 ;
   this.OV36ModeloPropostaId = 0 ;
   this.AV38ModeloPropostaDescricao = "" ;
   this.ZV38ModeloPropostaDescricao = "" ;
   this.OV38ModeloPropostaDescricao = "" ;
   this.AV28ModeloPropostaItemId = 0 ;
   this.ZV28ModeloPropostaItemId = 0 ;
   this.OV28ModeloPropostaItemId = 0 ;
   this.AV29ModeloPropostaItemTipo = "" ;
   this.ZV29ModeloPropostaItemTipo = "" ;
   this.OV29ModeloPropostaItemTipo = "" ;
   this.AV30ModeloPropostaItemCampo = "" ;
   this.ZV30ModeloPropostaItemCampo = "" ;
   this.OV30ModeloPropostaItemCampo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8307ModeloPropostaItemId = 0 ;
   this.O8307ModeloPropostaItemId = 0 ;
   this.Z8300ModeloPropostaItemTipo = "" ;
   this.O8300ModeloPropostaItemTipo = "" ;
   this.Z8302ModeloPropostaItemCampo = "" ;
   this.O8302ModeloPropostaItemCampo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV33bmpAsc = "" ;
   this.OV33bmpAsc = "" ;
   this.ZV34bmpDesc = "" ;
   this.OV34bmpDesc = "" ;
   this.Z8299ModeloPropostaItemOrdem = 0 ;
   this.O8299ModeloPropostaItemOrdem = 0 ;
   this.AV36ModeloPropostaId = 0 ;
   this.AV38ModeloPropostaDescricao = "" ;
   this.AV28ModeloPropostaItemId = 0 ;
   this.AV29ModeloPropostaItemTipo = "" ;
   this.AV30ModeloPropostaItemCampo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV40ModeloPropostaEmpresaId = "" ;
   this.A8297ModeloPropostaId = 0 ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.A8307ModeloPropostaItemId = 0 ;
   this.A8300ModeloPropostaItemTipo = "" ;
   this.A8302ModeloPropostaItemCampo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV33bmpAsc = "" ;
   this.AV34bmpDesc = "" ;
   this.A8299ModeloPropostaItemOrdem = 0 ;
   this.AV41SnRecuperaFiltro = "" ;
   this.Events = {"e111472_client": ["'ANTERIOR'", true] ,"e121472_client": ["'PROXIMO'", true] ,"e171472_client": ["VPAGINA.CLICK", true] ,"e131472_client": ["'NOVO'", true] ,"e141472_client": ["'FECHAR'", true] ,"e151472_client": ["'IMPRIMIR'", true] ,"e161472_client": ["'PROCURAR'", true] ,"e201472_client": ["'ALTERAR'", true] ,"e211472_client": ["'EXCLUIR'", true] ,"e221472_client": ["'CONSULTAR'", true] ,"e231472_client": ["'SUBIR'", true] ,"e241472_client": ["'DESCER'", true] ,"e261472_client": ["ENTER", true] ,"e271472_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV34bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV34bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV34bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV34bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV34bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV46Pgmdesc',fld:'vPGMDESC'}],[{av:'AV39DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV42QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV34bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8307ModeloPropostaItemId',fld:'MODELOPROPOSTAITEMID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'A8307ModeloPropostaItemId',fld:'MODELOPROPOSTAITEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8307ModeloPropostaItemId',fld:'MODELOPROPOSTAITEMID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'A8307ModeloPropostaItemId',fld:'MODELOPROPOSTAITEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8307ModeloPropostaItemId',fld:'MODELOPROPOSTAITEMID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV29ModeloPropostaItemTipo',fld:'vMODELOPROPOSTAITEMTIPO'},{av:'AV30ModeloPropostaItemCampo',fld:'vMODELOPROPOSTAITEMCAMPO'},{av:'AV38ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'A8307ModeloPropostaItemId',fld:'MODELOPROPOSTAITEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'A8299ModeloPropostaItemOrdem',fld:'MODELOPROPOSTAITEMORDEM'}],[{av:'A8299ModeloPropostaItemOrdem',fld:'MODELOPROPOSTAITEMORDEM'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV40ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV36ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'A8299ModeloPropostaItemOrdem',fld:'MODELOPROPOSTAITEMORDEM'}],[{av:'A8299ModeloPropostaItemOrdem',fld:'MODELOPROPOSTAITEMORDEM'}]];
   this.setVCMap("AV40ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV40ModeloPropostaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpAsc", rfrProp:"Value", gxAttId:"Bmpasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpAsc", rfrProp:"Tooltiptext", gxAttId:"Bmpasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV41SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodelopropostaitem());
