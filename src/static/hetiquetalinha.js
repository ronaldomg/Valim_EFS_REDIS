/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:18.50
*/
gx.evt.autoSkip = false;
gx.define('hetiquetalinha', false, function () {
   this.ServerClass =  "hetiquetalinha" ;
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
      this.AV27EmpresaEtiquetaEmpresaId=gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV33EtiquetaTamFonte=gx.fn.getIntegerValue("vETIQUETATAMFONTE",'.') ;
   };
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11br2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12br2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16br2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13br2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14br2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15br2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e20br2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21br2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22br2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23br2_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e24br2_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e25br2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26br2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27br2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,20,23,25,27,29,31,34,36,37,41,42,43,44,45,46,47,48,49,50,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hetiquetalinha",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(242,41,"ETIQUETALINHACOD","","","EtiquetaLinhaCod","int",0,"px",4,4,"right",null,[],242,"EtiquetaLinhaCod",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricao",42,"vDESCRICAO","","","Descricao","svchar",0,"px",80,80,"left",null,[],"Descricao","Descricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",43,0,"px",17,"px","e20br2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",44,0,"px",17,"px","e21br2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",45,0,"px",17,"px","e22br2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsubir","vBMPSUBIR",46,0,"px",17,"px","e23br2_client","","Subir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdescer","vBMPDESCER",47,0,"px",17,"px","e24br2_client","","Descer","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(240,48,"EMPRESAETIQUETAEMPRESAID","Empresa Etiqueta Empresa Id","","EmpresaEtiquetaEmpresaId","char",0,"px",10,10,"left",null,[],240,"EmpresaEtiquetaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(241,49,"ETIQUETACODIGO","Código","","EtiquetaCodigo","int",0,"px",4,4,"right",null,[],241,"EtiquetaCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(239,50,"ETIQUETALINHACONTEUDO","Etiqueta Linha Conteudo","","EtiquetaLinhaConteudo","svchar",0,"px",2000,80,"left",null,[],239,"EtiquetaLinhaConteudo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETACODIGO",gxz:"ZV28EtiquetaCodigo",gxold:"OV28EtiquetaCodigo",gxvar:"AV28EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV28EtiquetaCodigo,0)},c2v:function(){gx.O.AV28EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETADESCRICAO",gxz:"ZV29EtiquetaDescricao",gxold:"OV29EtiquetaDescricao",gxvar:"AV29EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV29EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETADESCRICAO",gx.O.AV29EtiquetaDescricao,0)},c2v:function(){gx.O.AV29EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={fld:"TABLE1",grid:0};
   GXValidFnc[23]={fld:"IMAGE2",grid:0};
   GXValidFnc[25]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[27]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[29]={fld:"BTNHELP",grid:0};
   GXValidFnc[31]={fld:"TABLE5",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHACOD",gxz:"Z242EtiquetaLinhaCod",gxold:"O242EtiquetaLinhaCod",gxvar:"A242EtiquetaLinhaCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A242EtiquetaLinhaCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z242EtiquetaLinhaCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETALINHACOD",row || gx.fn.currentGridRowImpl(40),gx.O.A242EtiquetaLinhaCod,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A242EtiquetaLinhaCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETALINHACOD",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV30Descricao",gxold:"OV30Descricao",gxvar:"AV30Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30Descricao=Value},v2z:function(Value){gx.O.ZV30Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(40),gx.O.AV30Descricao,0)},c2v:function(){gx.O.AV30Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(40),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(40),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(40),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBIR",gxz:"ZV31bmpSubir",gxold:"OV31bmpSubir",gxvar:"AV31bmpSubir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpSubir=Value},v2z:function(Value){gx.O.ZV31bmpSubir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(40),gx.O.AV31bmpSubir,gx.O.AV42Bmpsubir_GXI)},c2v:function(){gx.O.AV42Bmpsubir_GXI=this.val_GXI();gx.O.AV31bmpSubir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUBIR_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV42Bmpsubir_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCER",gxz:"ZV32bmpDescer",gxold:"OV32bmpDescer",gxvar:"AV32bmpDescer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpDescer=Value},v2z:function(Value){gx.O.ZV32bmpDescer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(40),gx.O.AV32bmpDescer,gx.O.AV43Bmpdescer_GXI)},c2v:function(){gx.O.AV43Bmpdescer_GXI=this.val_GXI();gx.O.AV32bmpDescer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCER_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV43Bmpdescer_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAETIQUETAEMPRESAID",gxz:"Z240EmpresaEtiquetaEmpresaId",gxold:"O240EmpresaEtiquetaEmpresaId",gxvar:"A240EmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A240EmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.Z240EmpresaEtiquetaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAETIQUETAEMPRESAID",row || gx.fn.currentGridRowImpl(40),gx.O.A240EmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.A240EmpresaEtiquetaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAETIQUETAEMPRESAID",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETACODIGO",gxz:"Z241EtiquetaCodigo",gxold:"O241EtiquetaCodigo",gxvar:"A241EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A241EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z241EtiquetaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(40),gx.O.A241EtiquetaCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A241EtiquetaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:2000,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHACONTEUDO",gxz:"Z239EtiquetaLinhaConteudo",gxold:"O239EtiquetaLinhaConteudo",gxvar:"A239EtiquetaLinhaConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A239EtiquetaLinhaConteudo=Value},v2z:function(Value){gx.O.Z239EtiquetaLinhaConteudo=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETALINHACONTEUDO",row || gx.fn.currentGridRowImpl(40),gx.O.A239EtiquetaLinhaConteudo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A239EtiquetaLinhaConteudo=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETALINHACONTEUDO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28EtiquetaCodigo = 0 ;
   this.ZV28EtiquetaCodigo = 0 ;
   this.OV28EtiquetaCodigo = 0 ;
   this.AV29EtiquetaDescricao = "" ;
   this.ZV29EtiquetaDescricao = "" ;
   this.OV29EtiquetaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z242EtiquetaLinhaCod = 0 ;
   this.O242EtiquetaLinhaCod = 0 ;
   this.ZV30Descricao = "" ;
   this.OV30Descricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV31bmpSubir = "" ;
   this.OV31bmpSubir = "" ;
   this.ZV32bmpDescer = "" ;
   this.OV32bmpDescer = "" ;
   this.Z240EmpresaEtiquetaEmpresaId = "" ;
   this.O240EmpresaEtiquetaEmpresaId = "" ;
   this.Z241EtiquetaCodigo = 0 ;
   this.O241EtiquetaCodigo = 0 ;
   this.Z239EtiquetaLinhaConteudo = "" ;
   this.O239EtiquetaLinhaConteudo = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28EtiquetaCodigo = 0 ;
   this.AV29EtiquetaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV27EmpresaEtiquetaEmpresaId = "" ;
   this.AV33EtiquetaTamFonte = 0 ;
   this.A242EtiquetaLinhaCod = 0 ;
   this.AV30Descricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV31bmpSubir = "" ;
   this.AV32bmpDescer = "" ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A239EtiquetaLinhaConteudo = "" ;
   this.A235EtiquetaDescricao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV37Pgmname = "" ;
   this.Events = {"e11br2_client": ["'ANTERIOR'", true] ,"e12br2_client": ["'PROXIMO'", true] ,"e16br2_client": ["VPAGINA.CLICK", true] ,"e13br2_client": ["'NOVO'", true] ,"e14br2_client": ["'FECHAR'", true] ,"e15br2_client": ["'PROCURAR'", true] ,"e20br2_client": ["'ALTERAR'", true] ,"e21br2_client": ["'EXCLUIR'", true] ,"e22br2_client": ["'CONSULTAR'", true] ,"e23br2_client": ["'SUBIR'", true] ,"e24br2_client": ["'DESCER'", true] ,"e25br2_client": ["'ATUALIZAPAGINA'", true] ,"e26br2_client": ["ENTER", true] ,"e27br2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'}],[{av:'AV30Descricao',fld:'vDESCRICAO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'}],[{ctrl:'ETIQUETALINHACOD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETALINHACOD","Title")',ctrl:'ETIQUETALINHACOD',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Title")',ctrl:'vDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV33EtiquetaTamFonte',fld:'vETIQUETATAMFONTE',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'AV33EtiquetaTamFonte',fld:'vETIQUETATAMFONTE',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'AV33EtiquetaTamFonte',fld:'vETIQUETATAMFONTE',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'AV33EtiquetaTamFonte',fld:'vETIQUETATAMFONTE',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV28EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV32bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'}],[]];
   this.setVCMap("AV27EmpresaEtiquetaEmpresaId", "vEMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV33EtiquetaTamFonte", "vETIQUETATAMFONTE", 0, "int");
   this.setVCMap("AV27EmpresaEtiquetaEmpresaId", "vEMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV27EmpresaEtiquetaEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpSubir", rfrProp:"Value", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpSubir", rfrProp:"Tooltiptext", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpDescer", rfrProp:"Value", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpDescer", rfrProp:"Tooltiptext", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV37Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A239EtiquetaLinhaConteudo", rfrProp:"Value", gxAttId:"239"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hetiquetalinha());
