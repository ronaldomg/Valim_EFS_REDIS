/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:37.59
*/
gx.evt.autoSkip = false;
gx.define('htipodispendio', false, function () {
   this.ServerClass =  "htipodispendio" ;
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
   };
   this.e1113o2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1213o2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1613o2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1313o2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1413o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1513o2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1913o2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2013o2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2113o2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2313o2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2413o2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2513o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,58,59,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipodispendio",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8153,47,"TIPODISPENDIOCODIGO","","","TipoDispendioCodigo","int",0,"px",4,4,"right",null,[],8153,"TipoDispendioCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8145,48,"TIPODISPENDIODESCRICAO","","","TipoDispendioDescricao","svchar",0,"px",70,70,"left",null,[],8145,"TipoDispendioDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8146,49,"TIPODISPENDIOCLASSIFICACAO","Classifição","","TipoDispendioClassificacao","char",0,"px",1,1,"left",null,[],8146,"TipoDispendioClassificacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Classificacao",50,"vCLASSIFICACAO","","","Classificacao","svchar",0,"px",10,10,"left",null,[],"Classificacao","Classificacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpstatus","vBMPSTATUS",51,0,"px",17,"px",null,"","Status","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpmat","vBMPMAT",52,0,"px",17,"px",null,"","Material","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpope","vBMPOPE",53,0,"px",17,"px",null,"","Despesa","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e1913o2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e2013o2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e2113o2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8149,57,"TIPODISPENDIOSNDESPOPERACIONAL","Despesas Operacionais","","TipoDispendioSnDespOperacional","char",0,"px",1,1,"left",null,[],8149,"TipoDispendioSnDespOperacional",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8148,58,"TIPODISPENDIOSNMATERIALCONSUMO","Material de Consumo","","TipoDispendioSnMaterialConsumo","char",0,"px",1,1,"left",null,[],8148,"TipoDispendioSnMaterialConsumo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8147,59,"TIPODISPENDIOSTATUS","Status","","TipoDispendioStatus","char",0,"px",1,1,"left",null,[],8147,"TipoDispendioStatus",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODISPENDIOCODIGO",gxz:"ZV27TipoDispendioCodigo",gxold:"OV27TipoDispendioCodigo",gxvar:"AV27TipoDispendioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoDispendioCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoDispendioCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIOCODIGO",gx.O.AV27TipoDispendioCodigo,0)},c2v:function(){gx.O.AV27TipoDispendioCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODISPENDIOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODISPENDIODESCRICAO",gxz:"ZV28TipoDispendioDescricao",gxold:"OV28TipoDispendioDescricao",gxvar:"AV28TipoDispendioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoDispendioDescricao=Value},v2z:function(Value){gx.O.ZV28TipoDispendioDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIODESCRICAO",gx.O.AV28TipoDispendioDescricao,0)},c2v:function(){gx.O.AV28TipoDispendioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPODISPENDIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCODIGO",gxz:"Z8153TipoDispendioCodigo",gxold:"O8153TipoDispendioCodigo",gxvar:"A8153TipoDispendioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8153TipoDispendioCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8153TipoDispendioCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A8153TipoDispendioCodigo,0)},c2v:function(){gx.O.A8153TipoDispendioCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODISPENDIOCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIODESCRICAO",gxz:"Z8145TipoDispendioDescricao",gxold:"O8145TipoDispendioDescricao",gxvar:"A8145TipoDispendioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8145TipoDispendioDescricao=Value},v2z:function(Value){gx.O.Z8145TipoDispendioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A8145TipoDispendioDescricao,0)},c2v:function(){gx.O.A8145TipoDispendioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCLASSIFICACAO",gxz:"Z8146TipoDispendioClassificacao",gxold:"O8146TipoDispendioClassificacao",gxvar:"A8146TipoDispendioClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8146TipoDispendioClassificacao=Value},v2z:function(Value){gx.O.Z8146TipoDispendioClassificacao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOCLASSIFICACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A8146TipoDispendioClassificacao,0)},c2v:function(){gx.O.A8146TipoDispendioClassificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIOCLASSIFICACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAO",gxz:"ZV32Classificacao",gxold:"OV32Classificacao",gxvar:"AV32Classificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32Classificacao=Value},v2z:function(Value){gx.O.ZV32Classificacao=Value},v2c:function(row){gx.fn.setGridControlValue("vCLASSIFICACAO",row || gx.fn.currentGridRowImpl(46),gx.O.AV32Classificacao,0)},c2v:function(){gx.O.AV32Classificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSTATUS",gxz:"ZV31bmpStatus",gxold:"OV31bmpStatus",gxvar:"AV31bmpStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpStatus=Value},v2z:function(Value){gx.O.ZV31bmpStatus=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSTATUS",row || gx.fn.currentGridRowImpl(46),gx.O.AV31bmpStatus,gx.O.AV41Bmpstatus_GXI)},c2v:function(){gx.O.AV41Bmpstatus_GXI=this.val_GXI();gx.O.AV31bmpStatus=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSTATUS",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSTATUS_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV41Bmpstatus_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMAT",gxz:"ZV30bmpMat",gxold:"OV30bmpMat",gxvar:"AV30bmpMat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpMat=Value},v2z:function(Value){gx.O.ZV30bmpMat=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMAT",row || gx.fn.currentGridRowImpl(46),gx.O.AV30bmpMat,gx.O.AV43Bmpmat_GXI)},c2v:function(){gx.O.AV43Bmpmat_GXI=this.val_GXI();gx.O.AV30bmpMat=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMAT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMAT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV43Bmpmat_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOPE",gxz:"ZV29bmpOpe",gxold:"OV29bmpOpe",gxvar:"AV29bmpOpe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpOpe=Value},v2z:function(Value){gx.O.ZV29bmpOpe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOPE",row || gx.fn.currentGridRowImpl(46),gx.O.AV29bmpOpe,gx.O.AV42Bmpope_GXI)},c2v:function(){gx.O.AV42Bmpope_GXI=this.val_GXI();gx.O.AV29bmpOpe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOPE",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOPE_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV42Bmpope_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOSNDESPOPERACIONAL",gxz:"Z8149TipoDispendioSnDespOperacional",gxold:"O8149TipoDispendioSnDespOperacional",gxvar:"A8149TipoDispendioSnDespOperacional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8149TipoDispendioSnDespOperacional=Value},v2z:function(Value){gx.O.Z8149TipoDispendioSnDespOperacional=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOSNDESPOPERACIONAL",row || gx.fn.currentGridRowImpl(46),gx.O.A8149TipoDispendioSnDespOperacional,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8149TipoDispendioSnDespOperacional=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIOSNDESPOPERACIONAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOSNMATERIALCONSUMO",gxz:"Z8148TipoDispendioSnMaterialConsumo",gxold:"O8148TipoDispendioSnMaterialConsumo",gxvar:"A8148TipoDispendioSnMaterialConsumo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8148TipoDispendioSnMaterialConsumo=Value},v2z:function(Value){gx.O.Z8148TipoDispendioSnMaterialConsumo=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOSNMATERIALCONSUMO",row || gx.fn.currentGridRowImpl(46),gx.O.A8148TipoDispendioSnMaterialConsumo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8148TipoDispendioSnMaterialConsumo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIOSNMATERIALCONSUMO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOSTATUS",gxz:"Z8147TipoDispendioStatus",gxold:"O8147TipoDispendioStatus",gxvar:"A8147TipoDispendioStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8147TipoDispendioStatus=Value},v2z:function(Value){gx.O.Z8147TipoDispendioStatus=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOSTATUS",row || gx.fn.currentGridRowImpl(46),gx.O.A8147TipoDispendioStatus,0)},c2v:function(){gx.O.A8147TipoDispendioStatus=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIOSTATUS",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoDispendioCodigo = 0 ;
   this.ZV27TipoDispendioCodigo = 0 ;
   this.OV27TipoDispendioCodigo = 0 ;
   this.AV28TipoDispendioDescricao = "" ;
   this.ZV28TipoDispendioDescricao = "" ;
   this.OV28TipoDispendioDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8153TipoDispendioCodigo = 0 ;
   this.O8153TipoDispendioCodigo = 0 ;
   this.Z8145TipoDispendioDescricao = "" ;
   this.O8145TipoDispendioDescricao = "" ;
   this.Z8146TipoDispendioClassificacao = "" ;
   this.O8146TipoDispendioClassificacao = "" ;
   this.ZV32Classificacao = "" ;
   this.OV32Classificacao = "" ;
   this.ZV31bmpStatus = "" ;
   this.OV31bmpStatus = "" ;
   this.ZV30bmpMat = "" ;
   this.OV30bmpMat = "" ;
   this.ZV29bmpOpe = "" ;
   this.OV29bmpOpe = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8149TipoDispendioSnDespOperacional = "" ;
   this.O8149TipoDispendioSnDespOperacional = "" ;
   this.Z8148TipoDispendioSnMaterialConsumo = "" ;
   this.O8148TipoDispendioSnMaterialConsumo = "" ;
   this.Z8147TipoDispendioStatus = "" ;
   this.O8147TipoDispendioStatus = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoDispendioCodigo = 0 ;
   this.AV28TipoDispendioDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8152TipoDispendioEmpresaId = "" ;
   this.A8153TipoDispendioCodigo = 0 ;
   this.A8145TipoDispendioDescricao = "" ;
   this.A8146TipoDispendioClassificacao = "" ;
   this.AV32Classificacao = "" ;
   this.AV31bmpStatus = "" ;
   this.AV30bmpMat = "" ;
   this.AV29bmpOpe = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8149TipoDispendioSnDespOperacional = "" ;
   this.A8148TipoDispendioSnMaterialConsumo = "" ;
   this.A8147TipoDispendioStatus = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e1113o2_client": ["'ANTERIOR'", true] ,"e1213o2_client": ["'PROXIMO'", true] ,"e1613o2_client": ["VPAGINA.CLICK", true] ,"e1313o2_client": ["'NOVO'", true] ,"e1413o2_client": ["'FECHAR'", true] ,"e1513o2_client": ["'PROCURAR'", true] ,"e1913o2_client": ["'ALTERAR'", true] ,"e2013o2_client": ["'EXCLUIR'", true] ,"e2113o2_client": ["'CONSULTAR'", true] ,"e2313o2_client": ["'ATUALIZAPAGINA'", true] ,"e2413o2_client": ["ENTER", true] ,"e2513o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'}],[{ctrl:'TIPODISPENDIOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODISPENDIOCODIGO","Title")',ctrl:'TIPODISPENDIOCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPODISPENDIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODISPENDIODESCRICAO","Title")',ctrl:'TIPODISPENDIODESCRICAO',prop:'Title'},{ctrl:'vCLASSIFICACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAO","Title")',ctrl:'vCLASSIFICACAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'}],[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'}],[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'}],[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'}],[{av:'AV32Classificacao',fld:'vCLASSIFICACAO'},{av:'AV31bmpStatus',fld:'vBMPSTATUS'},{av:'gx.fn.getCtrlProperty("vBMPSTATUS","Tooltiptext")',ctrl:'vBMPSTATUS',prop:'Tooltiptext'},{av:'AV29bmpOpe',fld:'vBMPOPE'},{av:'AV30bmpMat',fld:'vBMPMAT'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV28TipoDispendioDescricao',fld:'vTIPODISPENDIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'A8147TipoDispendioStatus',fld:'TIPODISPENDIOSTATUS'},{av:'A8149TipoDispendioSnDespOperacional',fld:'TIPODISPENDIOSNDESPOPERACIONAL'},{av:'A8148TipoDispendioSnMaterialConsumo',fld:'TIPODISPENDIOSNMATERIALCONSUMO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A8146TipoDispendioClassificacao", rfrProp:"Value", gxAttId:"8146"});
   GridContainer.addRefreshingVar({rfrVar:"A8147TipoDispendioStatus", rfrProp:"Value", gxAttId:"8147"});
   GridContainer.addRefreshingVar({rfrVar:"A8149TipoDispendioSnDespOperacional", rfrProp:"Value", gxAttId:"8149"});
   GridContainer.addRefreshingVar({rfrVar:"A8148TipoDispendioSnMaterialConsumo", rfrProp:"Value", gxAttId:"8148"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipodispendio());
