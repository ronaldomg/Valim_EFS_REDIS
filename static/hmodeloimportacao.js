/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:52.40
*/
gx.evt.autoSkip = false;
gx.define('hmodeloimportacao', false, function () {
   this.ServerClass =  "hmodeloimportacao" ;
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
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11wy2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wy2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16wy2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wy2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14wy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wy2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19wy2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20wy2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21wy2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23wy2_client=function()
   {
      this.executeServerEvent("'LAYOUTIMPORTACAO'", true, arguments[0], false, false);
   };
   this.e24wy2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25wy2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e26wy2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27wy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,31,34,37,39,41,43,45,48,50,51,55,56,57,58,59,60,61,62,63,64,65,66,67,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodeloimportacao",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5916,55,"IMPORTACAOMODELO","","","ImportacaoModelo","int",0,"px",3,3,"right",null,[],5916,"ImportacaoModelo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5917,56,"IMPORTACAOMODELODESCRICAO","","","ImportacaoModeloDescricao","svchar",0,"px",40,40,"left",null,[],5917,"ImportacaoModeloDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipodelimitador",57,"vTIPODELIMITADOR","","","TipoDelimitador","svchar",0,"px",20,20,"left",null,[],"Tipodelimitador","TipoDelimitador",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tiposeparador",58,"vTIPOSEPARADOR","","","TipoSeparador","svchar",0,"px",20,20,"left",null,[],"Tiposeparador","TipoSeparador",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsnativo","vBMPSNATIVO",59,0,"px",17,"px",null,"","Ativo","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplayout","vBMPLAYOUT",60,0,"px",17,"px","e23wy2_client","","Layout","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdup","vBMPDUP",61,0,"px",17,"px","e25wy2_client","","Dup","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",62,0,"px",17,"px","e19wy2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",63,0,"px",17,"px","e20wy2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",64,0,"px",17,"px","e21wy2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5925,65,"IMPORTACAOTIPODELIMITADOR","Tipo Delimitador","","ImportacaoTipoDelimitador","char",0,"px",1,1,"left",null,[],5925,"ImportacaoTipoDelimitador",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5924,66,"IMPORTACAOTIPOSEPARADOR","Tipo Separador","","ImportacaoTipoSeparador","char",0,"px",1,1,"left",null,[],5924,"ImportacaoTipoSeparador",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5926,67,"IMPORTACAOATIVO","Importacao Ativo","","ImportacaoAtivo","char",0,"px",1,1,"left",null,[],5926,"ImportacaoAtivo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPORTACAOMODELO",gxz:"ZV27ImportacaoModelo",gxold:"OV27ImportacaoModelo",gxvar:"AV27ImportacaoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ImportacaoModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ImportacaoModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELO",gx.O.AV27ImportacaoModelo,0)},c2v:function(){gx.O.AV27ImportacaoModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIMPORTACAOMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPORTACAOTIPODELIMITADOR",gxz:"ZV29ImportacaoTipoDelimitador",gxold:"OV29ImportacaoTipoDelimitador",gxvar:"AV29ImportacaoTipoDelimitador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ImportacaoTipoDelimitador=Value},v2z:function(Value){gx.O.ZV29ImportacaoTipoDelimitador=Value},v2c:function(){gx.fn.setComboBoxValue("vIMPORTACAOTIPODELIMITADOR",gx.O.AV29ImportacaoTipoDelimitador)},c2v:function(){gx.O.AV29ImportacaoTipoDelimitador=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOTIPODELIMITADOR")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPORTACAOMODELODESCRICAO",gxz:"ZV34ImportacaoModeloDescricao",gxold:"OV34ImportacaoModeloDescricao",gxvar:"AV34ImportacaoModeloDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ImportacaoModeloDescricao=Value},v2z:function(Value){gx.O.ZV34ImportacaoModeloDescricao=Value},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELODESCRICAO",gx.O.AV34ImportacaoModeloDescricao,0)},c2v:function(){gx.O.AV34ImportacaoModeloDescricao=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOMODELODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPORTACAOTIPOSEPARADOR",gxz:"ZV28ImportacaoTipoSeparador",gxold:"OV28ImportacaoTipoSeparador",gxvar:"AV28ImportacaoTipoSeparador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28ImportacaoTipoSeparador=Value},v2z:function(Value){gx.O.ZV28ImportacaoTipoSeparador=Value},v2c:function(){gx.fn.setComboBoxValue("vIMPORTACAOTIPOSEPARADOR",gx.O.AV28ImportacaoTipoSeparador)},c2v:function(){gx.O.AV28ImportacaoTipoSeparador=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOTIPOSEPARADOR")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TABLE6",grid:0};
   GXValidFnc[37]={fld:"IMAGE2",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELO",gxz:"Z5916ImportacaoModelo",gxold:"O5916ImportacaoModelo",gxvar:"A5916ImportacaoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5916ImportacaoModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5916ImportacaoModelo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOMODELO",row || gx.fn.currentGridRowImpl(54),gx.O.A5916ImportacaoModelo,0)},c2v:function(){gx.O.A5916ImportacaoModelo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IMPORTACAOMODELO",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELODESCRICAO",gxz:"Z5917ImportacaoModeloDescricao",gxold:"O5917ImportacaoModeloDescricao",gxvar:"A5917ImportacaoModeloDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5917ImportacaoModeloDescricao=Value},v2z:function(Value){gx.O.Z5917ImportacaoModeloDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOMODELODESCRICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A5917ImportacaoModeloDescricao,0)},c2v:function(){gx.O.A5917ImportacaoModeloDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOMODELODESCRICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODELIMITADOR",gxz:"ZV30TipoDelimitador",gxold:"OV30TipoDelimitador",gxvar:"AV30TipoDelimitador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30TipoDelimitador=Value},v2z:function(Value){gx.O.ZV30TipoDelimitador=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(54),gx.O.AV30TipoDelimitador,0)},c2v:function(){gx.O.AV30TipoDelimitador=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSEPARADOR",gxz:"ZV31TipoSeparador",gxold:"OV31TipoSeparador",gxvar:"AV31TipoSeparador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31TipoSeparador=Value},v2z:function(Value){gx.O.ZV31TipoSeparador=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(54),gx.O.AV31TipoSeparador,0)},c2v:function(){gx.O.AV31TipoSeparador=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNATIVO",gxz:"ZV32bmpSnAtivo",gxold:"OV32bmpSnAtivo",gxvar:"AV32bmpSnAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpSnAtivo=Value},v2z:function(Value){gx.O.ZV32bmpSnAtivo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNATIVO",row || gx.fn.currentGridRowImpl(54),gx.O.AV32bmpSnAtivo,gx.O.AV46Bmpsnativo_GXI)},c2v:function(){gx.O.AV46Bmpsnativo_GXI=this.val_GXI();gx.O.AV32bmpSnAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNATIVO",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNATIVO_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV46Bmpsnativo_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLAYOUT",gxz:"ZV33bmpLayout",gxold:"OV33bmpLayout",gxvar:"AV33bmpLayout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpLayout=Value},v2z:function(Value){gx.O.ZV33bmpLayout=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLAYOUT",row || gx.fn.currentGridRowImpl(54),gx.O.AV33bmpLayout,gx.O.AV44Bmplayout_GXI)},c2v:function(){gx.O.AV44Bmplayout_GXI=this.val_GXI();gx.O.AV33bmpLayout=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLAYOUT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLAYOUT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV44Bmplayout_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUP",gxz:"ZV36bmpDup",gxold:"OV36bmpDup",gxvar:"AV36bmpDup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpDup=Value},v2z:function(Value){gx.O.ZV36bmpDup=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUP",row || gx.fn.currentGridRowImpl(54),gx.O.AV36bmpDup,gx.O.AV45Bmpdup_GXI)},c2v:function(){gx.O.AV45Bmpdup_GXI=this.val_GXI();gx.O.AV36bmpDup=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUP",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUP_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmpdup_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPODELIMITADOR",gxz:"Z5925ImportacaoTipoDelimitador",gxold:"O5925ImportacaoTipoDelimitador",gxvar:"A5925ImportacaoTipoDelimitador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5925ImportacaoTipoDelimitador=Value},v2z:function(Value){gx.O.Z5925ImportacaoTipoDelimitador=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(54),gx.O.A5925ImportacaoTipoDelimitador,0)},c2v:function(){gx.O.A5925ImportacaoTipoDelimitador=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPOSEPARADOR",gxz:"Z5924ImportacaoTipoSeparador",gxold:"O5924ImportacaoTipoSeparador",gxvar:"A5924ImportacaoTipoSeparador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5924ImportacaoTipoSeparador=Value},v2z:function(Value){gx.O.Z5924ImportacaoTipoSeparador=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(54),gx.O.A5924ImportacaoTipoSeparador,0)},c2v:function(){gx.O.A5924ImportacaoTipoSeparador=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOATIVO",gxz:"Z5926ImportacaoAtivo",gxold:"O5926ImportacaoAtivo",gxvar:"A5926ImportacaoAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5926ImportacaoAtivo=Value},v2z:function(Value){gx.O.Z5926ImportacaoAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOATIVO",row || gx.fn.currentGridRowImpl(54),gx.O.A5926ImportacaoAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5926ImportacaoAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOATIVO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ImportacaoModelo = 0 ;
   this.ZV27ImportacaoModelo = 0 ;
   this.OV27ImportacaoModelo = 0 ;
   this.AV29ImportacaoTipoDelimitador = "" ;
   this.ZV29ImportacaoTipoDelimitador = "" ;
   this.OV29ImportacaoTipoDelimitador = "" ;
   this.AV34ImportacaoModeloDescricao = "" ;
   this.ZV34ImportacaoModeloDescricao = "" ;
   this.OV34ImportacaoModeloDescricao = "" ;
   this.AV28ImportacaoTipoSeparador = "" ;
   this.ZV28ImportacaoTipoSeparador = "" ;
   this.OV28ImportacaoTipoSeparador = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5916ImportacaoModelo = 0 ;
   this.O5916ImportacaoModelo = 0 ;
   this.Z5917ImportacaoModeloDescricao = "" ;
   this.O5917ImportacaoModeloDescricao = "" ;
   this.ZV30TipoDelimitador = "" ;
   this.OV30TipoDelimitador = "" ;
   this.ZV31TipoSeparador = "" ;
   this.OV31TipoSeparador = "" ;
   this.ZV32bmpSnAtivo = "" ;
   this.OV32bmpSnAtivo = "" ;
   this.ZV33bmpLayout = "" ;
   this.OV33bmpLayout = "" ;
   this.ZV36bmpDup = "" ;
   this.OV36bmpDup = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5925ImportacaoTipoDelimitador = "" ;
   this.O5925ImportacaoTipoDelimitador = "" ;
   this.Z5924ImportacaoTipoSeparador = "" ;
   this.O5924ImportacaoTipoSeparador = "" ;
   this.Z5926ImportacaoAtivo = "" ;
   this.O5926ImportacaoAtivo = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ImportacaoModelo = 0 ;
   this.AV29ImportacaoTipoDelimitador = "" ;
   this.AV34ImportacaoModeloDescricao = "" ;
   this.AV28ImportacaoTipoSeparador = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A5915ImportacaoModeloEmpresaId = "" ;
   this.A5916ImportacaoModelo = 0 ;
   this.A5917ImportacaoModeloDescricao = "" ;
   this.AV30TipoDelimitador = "" ;
   this.AV31TipoSeparador = "" ;
   this.AV32bmpSnAtivo = "" ;
   this.AV33bmpLayout = "" ;
   this.AV36bmpDup = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5925ImportacaoTipoDelimitador = "" ;
   this.A5924ImportacaoTipoSeparador = "" ;
   this.A5926ImportacaoAtivo = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.AV39Pgmname = "" ;
   this.Events = {"e11wy2_client": ["'ANTERIOR'", true] ,"e12wy2_client": ["'PROXIMO'", true] ,"e16wy2_client": ["VPAGINA.CLICK", true] ,"e13wy2_client": ["'NOVO'", true] ,"e14wy2_client": ["'FECHAR'", true] ,"e15wy2_client": ["'PROCURAR'", true] ,"e19wy2_client": ["'ALTERAR'", true] ,"e20wy2_client": ["'EXCLUIR'", true] ,"e21wy2_client": ["'CONSULTAR'", true] ,"e23wy2_client": ["'LAYOUTIMPORTACAO'", true] ,"e24wy2_client": ["'ATUALIZAPAGINA'", true] ,"e25wy2_client": ["'DUPLICAR'", true] ,"e26wy2_client": ["ENTER", true] ,"e27wy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[{ctrl:'IMPORTACAOMODELO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPORTACAOMODELO","Title")',ctrl:'IMPORTACAOMODELO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'IMPORTACAOMODELODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPORTACAOMODELODESCRICAO","Title")',ctrl:'IMPORTACAOMODELODESCRICAO',prop:'Title'},{ctrl:'vTIPODELIMITADOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPODELIMITADOR","Title")',ctrl:'vTIPODELIMITADOR',prop:'Title'},{ctrl:'vTIPOSEPARADOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPOSEPARADOR","Title")',ctrl:'vTIPOSEPARADOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[{av:'AV30TipoDelimitador',fld:'vTIPODELIMITADOR'},{av:'AV31TipoSeparador',fld:'vTIPOSEPARADOR'},{av:'AV32bmpSnAtivo',fld:'vBMPSNATIVO'}]];
   this.EvtParms["'LAYOUTIMPORTACAO'"] = [[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV29ImportacaoTipoDelimitador',fld:'vIMPORTACAOTIPODELIMITADOR'},{av:'AV34ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV28ImportacaoTipoSeparador',fld:'vIMPORTACAOTIPOSEPARADOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpLayout',fld:'vBMPLAYOUT'},{av:'gx.fn.getCtrlProperty("vBMPLAYOUT","Tooltiptext")',ctrl:'vBMPLAYOUT',prop:'Tooltiptext'},{av:'AV36bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpLayout", rfrProp:"Value", gxAttId:"Bmplayout"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpLayout", rfrProp:"Tooltiptext", gxAttId:"Bmplayout"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDup", rfrProp:"Value", gxAttId:"Bmpdup"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDup", rfrProp:"Tooltiptext", gxAttId:"Bmpdup"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV39Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A5925ImportacaoTipoDelimitador", rfrProp:"Value", gxAttId:"5925"});
   GridContainer.addRefreshingVar({rfrVar:"A5924ImportacaoTipoSeparador", rfrProp:"Value", gxAttId:"5924"});
   GridContainer.addRefreshingVar({rfrVar:"A5926ImportacaoAtivo", rfrProp:"Value", gxAttId:"5926"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodeloimportacao());
