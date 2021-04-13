/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:23.11
*/
gx.evt.autoSkip = false;
gx.define('hocorrenciaportaria', false, function () {
   this.ServerClass =  "hocorrenciaportaria" ;
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
      this.AV30OcorrenciaPortariaEmpresaId=gx.fn.getControlValue("vOCORRENCIAPORTARIAEMPRESAID") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11gn2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12gn2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17gn2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13gn2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14gn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15gn2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16gn2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20gn2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21gn2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22gn2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23gn2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25gn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26gn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hocorrenciaportaria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2663,54,"OCORRENCIAPORTARIAID","","","OcorrenciaPortariaId","int",0,"px",4,4,"right",null,[],2663,"OcorrenciaPortariaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2675,55,"OCORRENCIAPORTARIADESCRICAO","","","OcorrenciaPortariaDescricao","svchar",0,"px",35,35,"left",null,[],2675,"OcorrenciaPortariaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2676,56,"OCORRENCIAPORTARIATIPOBLOQUEIO","Tipo Bloqueio Portaria","OcorrenciaPortariaTipoBloqueio","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2678,57,"OCORRENCIAPORTARIATIPO","Tipo","OcorrenciaPortariaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2677,58,"OCORRENCIAPORTARIAGERARDEBITO","Gerar Débito","OcorrenciaPortariaGerarDebito","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2680,59,"OCORRENCIAPORTARIAAPRDESCOCOPO","Portaria","OcorrenciaPortariaAprDescOcoPo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",60,0,"px",17,"px","e20gn2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e21gn2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",62,0,"px",17,"px","e22gn2_client","","Con","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIAID",gxz:"ZV27OcorrenciaPortariaId",gxold:"OV27OcorrenciaPortariaId",gxvar:"AV27OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAID",gx.O.AV27OcorrenciaPortariaId,0)},c2v:function(){gx.O.AV27OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAPORTARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIADESCRICAO",gxz:"ZV28OcorrenciaPortariaDescricao",gxold:"OV28OcorrenciaPortariaDescricao",gxvar:"AV28OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.ZV28OcorrenciaPortariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIADESCRICAO",gx.O.AV28OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.AV28OcorrenciaPortariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIATIPO",gxz:"ZV29OcorrenciaPortariaTipo",gxold:"OV29OcorrenciaPortariaTipo",gxvar:"AV29OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.ZV29OcorrenciaPortariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vOCORRENCIAPORTARIATIPO",gx.O.AV29OcorrenciaPortariaTipo)},c2v:function(){gx.O.AV29OcorrenciaPortariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIATIPO")},nac:gx.falseFn};
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
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAID",gxz:"Z2663OcorrenciaPortariaId",gxold:"O2663OcorrenciaPortariaId",gxvar:"A2663OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2663OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(53),gx.O.A2663OcorrenciaPortariaId,0)},c2v:function(){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADESCRICAO",gxz:"Z2675OcorrenciaPortariaDescricao",gxold:"O2675OcorrenciaPortariaDescricao",gxvar:"A2675OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2675OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.Z2675OcorrenciaPortariaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A2675OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.A2675OcorrenciaPortariaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPOBLOQUEIO",gxz:"Z2676OcorrenciaPortariaTipoBloqueio",gxold:"O2676OcorrenciaPortariaTipoBloqueio",gxvar:"A2676OcorrenciaPortariaTipoBloqueio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2676OcorrenciaPortariaTipoBloqueio=Value},v2z:function(Value){gx.O.Z2676OcorrenciaPortariaTipoBloqueio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPOBLOQUEIO",row || gx.fn.currentGridRowImpl(53),gx.O.A2676OcorrenciaPortariaTipoBloqueio)},c2v:function(){gx.O.A2676OcorrenciaPortariaTipoBloqueio=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPOBLOQUEIO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPO",gxz:"Z2678OcorrenciaPortariaTipo",gxold:"O2678OcorrenciaPortariaTipo",gxvar:"A2678OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2678OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.Z2678OcorrenciaPortariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A2678OcorrenciaPortariaTipo)},c2v:function(){gx.O.A2678OcorrenciaPortariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAGERARDEBITO",gxz:"Z2677OcorrenciaPortariaGerarDebito",gxold:"O2677OcorrenciaPortariaGerarDebito",gxvar:"A2677OcorrenciaPortariaGerarDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2677OcorrenciaPortariaGerarDebito=Value},v2z:function(Value){gx.O.Z2677OcorrenciaPortariaGerarDebito=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIAGERARDEBITO",row || gx.fn.currentGridRowImpl(53),gx.O.A2677OcorrenciaPortariaGerarDebito)},c2v:function(){gx.O.A2677OcorrenciaPortariaGerarDebito=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIAGERARDEBITO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAAPRDESCOCOPO",gxz:"Z2680OcorrenciaPortariaAprDescOcoPo",gxold:"O2680OcorrenciaPortariaAprDescOcoPo",gxvar:"A2680OcorrenciaPortariaAprDescOcoPo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2680OcorrenciaPortariaAprDescOcoPo=Value},v2z:function(Value){gx.O.Z2680OcorrenciaPortariaAprDescOcoPo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIAAPRDESCOCOPO",row || gx.fn.currentGridRowImpl(53),gx.O.A2680OcorrenciaPortariaAprDescOcoPo)},c2v:function(){gx.O.A2680OcorrenciaPortariaAprDescOcoPo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIAAPRDESCOCOPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27OcorrenciaPortariaId = 0 ;
   this.ZV27OcorrenciaPortariaId = 0 ;
   this.OV27OcorrenciaPortariaId = 0 ;
   this.AV28OcorrenciaPortariaDescricao = "" ;
   this.ZV28OcorrenciaPortariaDescricao = "" ;
   this.OV28OcorrenciaPortariaDescricao = "" ;
   this.AV29OcorrenciaPortariaTipo = "" ;
   this.ZV29OcorrenciaPortariaTipo = "" ;
   this.OV29OcorrenciaPortariaTipo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2663OcorrenciaPortariaId = 0 ;
   this.O2663OcorrenciaPortariaId = 0 ;
   this.Z2675OcorrenciaPortariaDescricao = "" ;
   this.O2675OcorrenciaPortariaDescricao = "" ;
   this.Z2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.O2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.Z2678OcorrenciaPortariaTipo = "" ;
   this.O2678OcorrenciaPortariaTipo = "" ;
   this.Z2677OcorrenciaPortariaGerarDebito = "" ;
   this.O2677OcorrenciaPortariaGerarDebito = "" ;
   this.Z2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.O2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27OcorrenciaPortariaId = 0 ;
   this.AV28OcorrenciaPortariaDescricao = "" ;
   this.AV29OcorrenciaPortariaTipo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.A2678OcorrenciaPortariaTipo = "" ;
   this.A2677OcorrenciaPortariaGerarDebito = "" ;
   this.A2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30OcorrenciaPortariaEmpresaId = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e11gn2_client": ["'ANTERIOR'", true] ,"e12gn2_client": ["'PROXIMO'", true] ,"e17gn2_client": ["VPAGINA.CLICK", true] ,"e13gn2_client": ["'NOVO'", true] ,"e14gn2_client": ["'FECHAR'", true] ,"e15gn2_client": ["'IMPRIMIR'", true] ,"e16gn2_client": ["'PROCURAR'", true] ,"e20gn2_client": ["'ALTERAR'", true] ,"e21gn2_client": ["'EXCLUIR'", true] ,"e22gn2_client": ["'CONSULTAR'", true] ,"e23gn2_client": ["'ATUALIZAPAGINA'", true] ,"e25gn2_client": ["ENTER", true] ,"e26gn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'OCORRENCIAPORTARIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPORTARIAID","Title")',ctrl:'OCORRENCIAPORTARIAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIAPORTARIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPORTARIADESCRICAO","Title")',ctrl:'OCORRENCIAPORTARIADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'}],[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'}],[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'}],[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV28OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV29OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV30OcorrenciaPortariaEmpresaId", "vOCORRENCIAPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV30OcorrenciaPortariaEmpresaId", "vOCORRENCIAPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"AV30OcorrenciaPortariaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hocorrenciaportaria());
