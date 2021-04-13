/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:52.94
*/
gx.evt.autoSkip = false;
gx.define('hatributoesquema', false, function () {
   this.ServerClass =  "hatributoesquema" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV40SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2918AtributoEsquemaSnVencimento=gx.fn.getControlValue("ATRIBUTOESQUEMASNVENCIMENTO") ;
   };
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11mc2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12mc2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16mc2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13mc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14mc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e15mc2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20mc2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21mc2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22mc2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23mc2_client=function()
   {
      this.executeServerEvent("'CHAMAVALORATRIBUTO'", true, arguments[0], false, false);
   };
   this.e24mc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25mc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26mc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,73,74,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hatributoesquema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2921,59,"ATRIBUTOESQUEMACODIGO","","","AtributoEsquemaCodigo","int",0,"px",2,2,"right",null,[],2921,"AtributoEsquemaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2916,60,"ATRIBUTOESQUEMADESCRICAO","","","AtributoEsquemaDescricao","char",0,"px",15,15,"left",null,[],2916,"AtributoEsquemaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Snvalorcadastrado","vSNVALORCADASTRADO",61,0,"px",17,"px",null,"","Valor Cadastrado","Image","GridColumnImage");
   GridContainer.addBitmap("&Snatributovencimento","vSNATRIBUTOVENCIMENTO",62,0,"px",17,"px",null,"","Atributo Vencimento","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvalor","vBMPVALOR",63,0,"px",17,"px","e23mc2_client","","Valores","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e20mc2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e21mc2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e22mc2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"ORDEREDTEXT1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV31EsquemaCodigo",gxold:"OV31EsquemaCodigo",gxvar:"AV31EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV31EsquemaCodigo,0)},c2v:function(){gx.O.AV31EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTB", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV33EsquemaDescricao",gxold:"OV33EsquemaDescricao",gxvar:"AV33EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV33EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV33EsquemaDescricao,0)},c2v:function(){gx.O.AV33EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vATRIBUTOESQUEMACODIGO",gxz:"ZV29AtributoEsquemaCodigo",gxold:"OV29AtributoEsquemaCodigo",gxvar:"AV29AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMACODIGO",gx.O.AV29AtributoEsquemaCodigo,0)},c2v:function(){gx.O.AV29AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vATRIBUTOESQUEMADESCRICAO",gxz:"ZV30AtributoEsquemaDescricao",gxold:"OV30AtributoEsquemaDescricao",gxvar:"AV30AtributoEsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.ZV30AtributoEsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMADESCRICAO",gx.O.AV30AtributoEsquemaDescricao,0)},c2v:function(){gx.O.AV30AtributoEsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vATRIBUTOESQUEMADESCRICAO")},nac:gx.falseFn};
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
   GXValidFnc[59]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMACODIGO",gxz:"Z2921AtributoEsquemaCodigo",gxold:"O2921AtributoEsquemaCodigo",gxvar:"A2921AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATRIBUTOESQUEMACODIGO",row || gx.fn.currentGridRowImpl(58),gx.O.A2921AtributoEsquemaCodigo,0)},c2v:function(){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATRIBUTOESQUEMACODIGO",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMADESCRICAO",gxz:"Z2916AtributoEsquemaDescricao",gxold:"O2916AtributoEsquemaDescricao",gxvar:"A2916AtributoEsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2916AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.Z2916AtributoEsquemaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ATRIBUTOESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A2916AtributoEsquemaDescricao,0)},c2v:function(){gx.O.A2916AtributoEsquemaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ATRIBUTOESQUEMADESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALORCADASTRADO",gxz:"ZV27SnValorCadastrado",gxold:"OV27SnValorCadastrado",gxvar:"AV27SnValorCadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27SnValorCadastrado=Value},v2z:function(Value){gx.O.ZV27SnValorCadastrado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNVALORCADASTRADO",row || gx.fn.currentGridRowImpl(58),gx.O.AV27SnValorCadastrado,gx.O.AV50Snvalorcadastrado_GXI)},c2v:function(){gx.O.AV50Snvalorcadastrado_GXI=this.val_GXI();gx.O.AV27SnValorCadastrado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNVALORCADASTRADO",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNVALORCADASTRADO_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV50Snvalorcadastrado_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNATRIBUTOVENCIMENTO",gxz:"ZV28SnAtributoVencimento",gxold:"OV28SnAtributoVencimento",gxvar:"AV28SnAtributoVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28SnAtributoVencimento=Value},v2z:function(Value){gx.O.ZV28SnAtributoVencimento=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNATRIBUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(58),gx.O.AV28SnAtributoVencimento,gx.O.AV51Snatributovencimento_GXI)},c2v:function(){gx.O.AV51Snatributovencimento_GXI=this.val_GXI();gx.O.AV28SnAtributoVencimento=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNATRIBUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNATRIBUTOVENCIMENTO_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV51Snatributovencimento_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVALOR",gxz:"ZV32bmpValor",gxold:"OV32bmpValor",gxvar:"AV32bmpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpValor=Value},v2z:function(Value){gx.O.ZV32bmpValor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVALOR",row || gx.fn.currentGridRowImpl(58),gx.O.AV32bmpValor,gx.O.AV48Bmpvalor_GXI)},c2v:function(){gx.O.AV48Bmpvalor_GXI=this.val_GXI();gx.O.AV32bmpValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVALOR",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVALOR_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV48Bmpvalor_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNACHOUMOV",gxz:"ZV35SnAchouMov",gxold:"OV35SnAchouMov",gxvar:"AV35SnAchouMov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SnAchouMov=Value},v2z:function(Value){gx.O.ZV35SnAchouMov=Value},v2c:function(){gx.fn.setControlValue("vSNACHOUMOV",gx.O.AV35SnAchouMov,0)},c2v:function(){gx.O.AV35SnAchouMov=this.val()},val:function(){return gx.fn.getControlValue("vSNACHOUMOV")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNACHOUVENC",gxz:"ZV34SnAchouVenc",gxold:"OV34SnAchouVenc",gxvar:"AV34SnAchouVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SnAchouVenc=Value},v2z:function(Value){gx.O.ZV34SnAchouVenc=Value},v2c:function(){gx.fn.setControlValue("vSNACHOUVENC",gx.O.AV34SnAchouVenc,0)},c2v:function(){gx.O.AV34SnAchouVenc=this.val()},val:function(){return gx.fn.getControlValue("vSNACHOUVENC")},nac:gx.falseFn};
   this.AV31EsquemaCodigo = 0 ;
   this.ZV31EsquemaCodigo = 0 ;
   this.OV31EsquemaCodigo = 0 ;
   this.AV33EsquemaDescricao = "" ;
   this.ZV33EsquemaDescricao = "" ;
   this.OV33EsquemaDescricao = "" ;
   this.AV29AtributoEsquemaCodigo = 0 ;
   this.ZV29AtributoEsquemaCodigo = 0 ;
   this.OV29AtributoEsquemaCodigo = 0 ;
   this.AV30AtributoEsquemaDescricao = "" ;
   this.ZV30AtributoEsquemaDescricao = "" ;
   this.OV30AtributoEsquemaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2921AtributoEsquemaCodigo = 0 ;
   this.O2921AtributoEsquemaCodigo = 0 ;
   this.Z2916AtributoEsquemaDescricao = "" ;
   this.O2916AtributoEsquemaDescricao = "" ;
   this.ZV27SnValorCadastrado = "" ;
   this.OV27SnValorCadastrado = "" ;
   this.ZV28SnAtributoVencimento = "" ;
   this.OV28SnAtributoVencimento = "" ;
   this.ZV32bmpValor = "" ;
   this.OV32bmpValor = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV35SnAchouMov = "" ;
   this.ZV35SnAchouMov = "" ;
   this.OV35SnAchouMov = "" ;
   this.AV34SnAchouVenc = "" ;
   this.ZV34SnAchouVenc = "" ;
   this.OV34SnAchouVenc = "" ;
   this.AV31EsquemaCodigo = 0 ;
   this.AV33EsquemaDescricao = "" ;
   this.AV29AtributoEsquemaCodigo = 0 ;
   this.AV30AtributoEsquemaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV35SnAchouMov = "" ;
   this.AV34SnAchouVenc = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.AV27SnValorCadastrado = "" ;
   this.AV28SnAtributoVencimento = "" ;
   this.AV32bmpValor = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.AV40SnRecuperaFiltro = "" ;
   this.AV43Pgmname = "" ;
   this.Events = {"e11mc2_client": ["'ANTERIOR'", true] ,"e12mc2_client": ["'PROXIMO'", true] ,"e16mc2_client": ["VPAGINA.CLICK", true] ,"e13mc2_client": ["'FECHAR'", true] ,"e14mc2_client": ["'PROCURAR'", true] ,"e15mc2_client": ["'NOVO'", true] ,"e20mc2_client": ["'ALTERAR'", true] ,"e21mc2_client": ["'EXCLUIR'", true] ,"e22mc2_client": ["'CONSULTAR'", true] ,"e23mc2_client": ["'CHAMAVALORATRIBUTO'", true] ,"e24mc2_client": ["'ATUALIZAPAGINA'", true] ,"e25mc2_client": ["ENTER", true] ,"e26mc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[{av:'AV27SnValorCadastrado',fld:'vSNVALORCADASTRADO'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Enabled")',ctrl:'vBMPVALOR',prop:'Enabled'},{av:'AV28SnAtributoVencimento',fld:'vSNATRIBUTOVENCIMENTO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[{ctrl:'ATRIBUTOESQUEMACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ATRIBUTOESQUEMACODIGO","Title")',ctrl:'ATRIBUTOESQUEMACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ATRIBUTOESQUEMADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ATRIBUTOESQUEMADESCRICAO","Title")',ctrl:'ATRIBUTOESQUEMADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV43Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV43Pgmname',fld:'vPGMNAME'}],[{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV43Pgmname',fld:'vPGMNAME'}],[{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV43Pgmname',fld:'vPGMNAME'}],[{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV43Pgmname',fld:'vPGMNAME'}],[{av:'AV35SnAchouMov',fld:'vSNACHOUMOV'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CHAMAVALORATRIBUTO'"] = [[{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'}],[{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV30AtributoEsquemaDescricao',fld:'vATRIBUTOESQUEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV32bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'}],[]];
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV43Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2918AtributoEsquemaSnVencimento", "ATRIBUTOESQUEMASNVENCIMENTO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV43Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2918AtributoEsquemaSnVencimento", "ATRIBUTOESQUEMASNVENCIMENTO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpValor", rfrProp:"Value", gxAttId:"Bmpvalor"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpValor", rfrProp:"Tooltiptext", gxAttId:"Bmpvalor"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Visible", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV40SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV43Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   GridContainer.addRefreshingVar({rfrVar:"A2918AtributoEsquemaSnVencimento"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatributoesquema());
