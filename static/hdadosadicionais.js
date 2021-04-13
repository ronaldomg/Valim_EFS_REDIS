/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:27:27.96
*/
gx.evt.autoSkip = false;
gx.define('hdadosadicionais', false, function () {
   this.ServerClass =  "hdadosadicionais" ;
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
      this.AV47SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV50Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Dadosadicionaistipocfo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDADOSADICIONAISTIPOCFO");
         this.AnyError  = 0;
         if ( ! ( this.AV32DadosAdicionaisTipoCFO == "0" || this.AV32DadosAdicionaisTipoCFO == "1" || this.AV32DadosAdicionaisTipoCFO == "2" || this.AV32DadosAdicionaisTipoCFO == "3" || this.AV32DadosAdicionaisTipoCFO == "4" || this.AV32DadosAdicionaisTipoCFO == "5" || this.AV32DadosAdicionaisTipoCFO == "6" || this.AV32DadosAdicionaisTipoCFO == "7" || this.AV32DadosAdicionaisTipoCFO == "8" || this.AV32DadosAdicionaisTipoCFO == "9" || this.AV32DadosAdicionaisTipoCFO == "10" || this.AV32DadosAdicionaisTipoCFO == "11" || this.AV32DadosAdicionaisTipoCFO == "12" || this.AV32DadosAdicionaisTipoCFO == "13" || (""==this.AV32DadosAdicionaisTipoCFO) ) )
         {
            try {
               gxballoon.setError("Campo DadosAdicionaisTipoCFO fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1111h2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1211h2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1611h2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1311h2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1411h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1511h2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1911h2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2011h2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2111h2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2211h2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e2311h2_client=function()
   {
      this.executeServerEvent("'ITENS'", true, arguments[0], false, false);
   };
   this.e2411h2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2611h2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2711h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,23,24,27,29,31,33,35,40,43,46,48,50,52,54,57,59,60,64,65,66,67,68,69,70,76,78,79,80,81,82,83,84,85,86];
   this.GXLastCtrlId =86;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",63,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdadosadicionais",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(7487,64,"DADOSADICIONAISCODIGO","","","DadosAdicionaisCodigo","int",0,"px",7,7,"right",null,[],7487,"DadosAdicionaisCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7432,65,"DADOSADICIONAISDESCRICAO","","","DadosAdicionaisDescricao","svchar",0,"px",30,30,"left",null,[],7432,"DadosAdicionaisDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcop","vBMPCOP",66,0,"px",17,"px","e2211h2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpitens","vBMPITENS",67,0,"px",17,"px","e2311h2_client","","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",68,0,"px",17,"px","e1911h2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",69,0,"px",17,"px","e2011h2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",70,0,"px",17,"px","e2111h2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISCODIGO",gxz:"ZV28DadosAdicionaisCodigo",gxold:"OV28DadosAdicionaisCodigo",gxvar:"AV28DadosAdicionaisCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DadosAdicionaisCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28DadosAdicionaisCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISCODIGO",gx.O.AV28DadosAdicionaisCodigo,0)},c2v:function(){gx.O.AV28DadosAdicionaisCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDADOSADICIONAISCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISDESCRICAO",gxz:"ZV30DadosAdicionaisDescricao",gxold:"OV30DadosAdicionaisDescricao",gxvar:"AV30DadosAdicionaisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DadosAdicionaisDescricao=Value},v2z:function(Value){gx.O.ZV30DadosAdicionaisDescricao=Value},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISDESCRICAO",gx.O.AV30DadosAdicionaisDescricao,0)},c2v:function(){gx.O.AV30DadosAdicionaisDescricao=this.val()},val:function(){return gx.fn.getControlValue("vDADOSADICIONAISDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISPRODUTO",gxz:"ZV29DadosAdicionaisProduto",gxold:"OV29DadosAdicionaisProduto",gxvar:"AV29DadosAdicionaisProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DadosAdicionaisProduto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29DadosAdicionaisProduto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISPRODUTO",gx.O.AV29DadosAdicionaisProduto,0)},c2v:function(){gx.O.AV29DadosAdicionaisProduto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDADOSADICIONAISPRODUTO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV43ProdutoDescricao",gxold:"OV43ProdutoDescricao",gxvar:"AV43ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV43ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV43ProdutoDescricao,0)},c2v:function(){gx.O.AV43ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Dadosadicionaistipocfo,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISTIPOCFO",gxz:"ZV32DadosAdicionaisTipoCFO",gxold:"OV32DadosAdicionaisTipoCFO",gxvar:"AV32DadosAdicionaisTipoCFO",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32DadosAdicionaisTipoCFO=Value},v2z:function(Value){gx.O.ZV32DadosAdicionaisTipoCFO=Value},v2c:function(){gx.fn.setComboBoxValue("vDADOSADICIONAISTIPOCFO",gx.O.AV32DadosAdicionaisTipoCFO)},c2v:function(){gx.O.AV32DadosAdicionaisTipoCFO=this.val()},val:function(){return gx.fn.getControlValue("vDADOSADICIONAISTIPOCFO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISCFOP",gxz:"ZV31DadosAdicionaisCFOP",gxold:"OV31DadosAdicionaisCFOP",gxvar:"AV31DadosAdicionaisCFOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DadosAdicionaisCFOP=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31DadosAdicionaisCFOP=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISCFOP",gx.O.AV31DadosAdicionaisCFOP,0)},c2v:function(){gx.O.AV31DadosAdicionaisCFOP=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDADOSADICIONAISCFOP",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:340,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPDESCRICAO",gxz:"ZV44CFOPDescricao",gxold:"OV44CFOPDescricao",gxvar:"AV44CFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44CFOPDescricao=Value},v2z:function(Value){gx.O.ZV44CFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("vCFOPDESCRICAO",gx.O.AV44CFOPDescricao,0)},c2v:function(){gx.O.AV44CFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   GXValidFnc[43]={fld:"TABLE1",grid:0};
   GXValidFnc[46]={fld:"IMAGE2",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCODIGO",gxz:"Z7487DadosAdicionaisCodigo",gxold:"O7487DadosAdicionaisCodigo",gxvar:"A7487DadosAdicionaisCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7487DadosAdicionaisCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7487DadosAdicionaisCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISCODIGO",row || gx.fn.currentGridRowImpl(63),gx.O.A7487DadosAdicionaisCodigo,0)},c2v:function(){gx.O.A7487DadosAdicionaisCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DADOSADICIONAISCODIGO",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISDESCRICAO",gxz:"Z7432DadosAdicionaisDescricao",gxold:"O7432DadosAdicionaisDescricao",gxvar:"A7432DadosAdicionaisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7432DadosAdicionaisDescricao=Value},v2z:function(Value){gx.O.Z7432DadosAdicionaisDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("DADOSADICIONAISDESCRICAO",row || gx.fn.currentGridRowImpl(63),gx.O.A7432DadosAdicionaisDescricao,0)},c2v:function(){gx.O.A7432DadosAdicionaisDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("DADOSADICIONAISDESCRICAO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOP",gxz:"ZV27bmpCop",gxold:"OV27bmpCop",gxvar:"AV27bmpCop",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpCop=Value},v2z:function(Value){gx.O.ZV27bmpCop=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOP",row || gx.fn.currentGridRowImpl(63),gx.O.AV27bmpCop,gx.O.AV55Bmpcop_GXI)},c2v:function(){gx.O.AV55Bmpcop_GXI=this.val_GXI();gx.O.AV27bmpCop=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOP",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOP_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV55Bmpcop_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITENS",gxz:"ZV35bmpItens",gxold:"OV35bmpItens",gxvar:"AV35bmpItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpItens=Value},v2z:function(Value){gx.O.ZV35bmpItens=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITENS",row || gx.fn.currentGridRowImpl(63),gx.O.AV35bmpItens,gx.O.AV56Bmpitens_GXI)},c2v:function(){gx.O.AV56Bmpitens_GXI=this.val_GXI();gx.O.AV35bmpItens=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITENS",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITENS_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV56Bmpitens_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(63),gx.O.AV7bmpAlt,gx.O.AV52Bmpalt_GXI)},c2v:function(){gx.O.AV52Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV52Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63),gx.O.AV8bmpExc,gx.O.AV53Bmpexc_GXI)},c2v:function(){gx.O.AV53Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV53Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(63),gx.O.AV16bmpCon,gx.O.AV54Bmpcon_GXI)},c2v:function(){gx.O.AV54Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV54Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"JS", format:2,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV38CharAux",gxold:"OV38CharAux",gxvar:"AV38CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38CharAux=Value},v2z:function(Value){gx.O.ZV38CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV38CharAux,0)},c2v:function(){gx.O.AV38CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV36IntAux",gxold:"OV36IntAux",gxvar:"AV36IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV36IntAux,0)},c2v:function(){gx.O.AV36IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV37Data",gxold:"OV37Data",gxvar:"AV37Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV37Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV37Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 81 , function() {
   });
   GXValidFnc[82]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISEMPRESAID",gxz:"ZV33DadosAdicionaisEmpresaId",gxold:"OV33DadosAdicionaisEmpresaId",gxvar:"AV33DadosAdicionaisEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DadosAdicionaisEmpresaId=Value},v2z:function(Value){gx.O.ZV33DadosAdicionaisEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISEMPRESAID",gx.O.AV33DadosAdicionaisEmpresaId,0)},c2v:function(){gx.O.AV33DadosAdicionaisEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vDADOSADICIONAISEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCFOP",gxz:"ZV40TipoCFOP",gxold:"OV40TipoCFOP",gxvar:"AV40TipoCFOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TipoCFOP=Value},v2z:function(Value){gx.O.ZV40TipoCFOP=Value},v2c:function(){gx.fn.setControlValue("vTIPOCFOP",gx.O.AV40TipoCFOP,0)},c2v:function(){gx.O.AV40TipoCFOP=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCFOP")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV46QtdeCaracter",gxold:"OV46QtdeCaracter",gxvar:"AV46QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV46QtdeCaracter,0)},c2v:function(){gx.O.AV46QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV45QtdeChar",gxold:"OV45QtdeChar",gxvar:"AV45QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV45QtdeChar,0)},c2v:function(){gx.O.AV45QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"PROMPT_DADOSADICIONAISCFOP",grid:0};
   this.AV28DadosAdicionaisCodigo = 0 ;
   this.ZV28DadosAdicionaisCodigo = 0 ;
   this.OV28DadosAdicionaisCodigo = 0 ;
   this.AV30DadosAdicionaisDescricao = "" ;
   this.ZV30DadosAdicionaisDescricao = "" ;
   this.OV30DadosAdicionaisDescricao = "" ;
   this.AV29DadosAdicionaisProduto = 0 ;
   this.ZV29DadosAdicionaisProduto = 0 ;
   this.OV29DadosAdicionaisProduto = 0 ;
   this.AV43ProdutoDescricao = "" ;
   this.ZV43ProdutoDescricao = "" ;
   this.OV43ProdutoDescricao = "" ;
   this.AV32DadosAdicionaisTipoCFO = "" ;
   this.ZV32DadosAdicionaisTipoCFO = "" ;
   this.OV32DadosAdicionaisTipoCFO = "" ;
   this.AV31DadosAdicionaisCFOP = 0 ;
   this.ZV31DadosAdicionaisCFOP = 0 ;
   this.OV31DadosAdicionaisCFOP = 0 ;
   this.AV44CFOPDescricao = "" ;
   this.ZV44CFOPDescricao = "" ;
   this.OV44CFOPDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z7487DadosAdicionaisCodigo = 0 ;
   this.O7487DadosAdicionaisCodigo = 0 ;
   this.Z7432DadosAdicionaisDescricao = "" ;
   this.O7432DadosAdicionaisDescricao = "" ;
   this.ZV27bmpCop = "" ;
   this.OV27bmpCop = "" ;
   this.ZV35bmpItens = "" ;
   this.OV35bmpItens = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV38CharAux = "" ;
   this.ZV38CharAux = "" ;
   this.OV38CharAux = "" ;
   this.AV36IntAux = 0 ;
   this.ZV36IntAux = 0 ;
   this.OV36IntAux = 0 ;
   this.AV37Data = gx.date.nullDate() ;
   this.ZV37Data = gx.date.nullDate() ;
   this.OV37Data = gx.date.nullDate() ;
   this.AV33DadosAdicionaisEmpresaId = "" ;
   this.ZV33DadosAdicionaisEmpresaId = "" ;
   this.OV33DadosAdicionaisEmpresaId = "" ;
   this.AV40TipoCFOP = "" ;
   this.ZV40TipoCFOP = "" ;
   this.OV40TipoCFOP = "" ;
   this.AV46QtdeCaracter = 0 ;
   this.ZV46QtdeCaracter = 0 ;
   this.OV46QtdeCaracter = 0 ;
   this.AV45QtdeChar = 0 ;
   this.ZV45QtdeChar = 0 ;
   this.OV45QtdeChar = 0 ;
   this.AV28DadosAdicionaisCodigo = 0 ;
   this.AV30DadosAdicionaisDescricao = "" ;
   this.AV29DadosAdicionaisProduto = 0 ;
   this.AV43ProdutoDescricao = "" ;
   this.AV32DadosAdicionaisTipoCFO = "" ;
   this.AV31DadosAdicionaisCFOP = 0 ;
   this.AV44CFOPDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV38CharAux = "" ;
   this.AV36IntAux = 0 ;
   this.AV37Data = gx.date.nullDate() ;
   this.AV33DadosAdicionaisEmpresaId = "" ;
   this.AV40TipoCFOP = "" ;
   this.AV46QtdeCaracter = 0 ;
   this.AV45QtdeChar = 0 ;
   this.A7443DadosAdicionaisCFOPFin5 = 0 ;
   this.A7438DadosAdicionaisCFOPIni5 = 0 ;
   this.A7442DadosAdicionaisCFOPFin4 = 0 ;
   this.A7437DadosAdicionaisCFOPIni4 = 0 ;
   this.A7441DadosAdicionaisCFOPFin3 = 0 ;
   this.A7436DadosAdicionaisCFOPIni3 = 0 ;
   this.A7440DadosAdicionaisCFOPFin2 = 0 ;
   this.A7435DadosAdicionaisCFOPIni2 = 0 ;
   this.A7439DadosAdicionaisCFOPFin1 = 0 ;
   this.A7434DadosAdicionaisCFOPIni1 = 0 ;
   this.A7453DadosAdicionaisProdutoFin5 = 0 ;
   this.A7448DadosAdicionaisProdutoIni5 = 0 ;
   this.A7452DadosAdicionaisProdutoFin4 = 0 ;
   this.A7447DadosAdicionaisProdutoIni4 = 0 ;
   this.A7451DadosAdicionaisProdutoFin3 = 0 ;
   this.A7446DadosAdicionaisProdutoIni3 = 0 ;
   this.A7450DadosAdicionaisProdutoFin2 = 0 ;
   this.A7445DadosAdicionaisProdutoIni2 = 0 ;
   this.A7449DadosAdicionaisProdutoFin1 = 0 ;
   this.A7444DadosAdicionaisProdutoIni1 = 0 ;
   this.A7433DadosAdicionaisTipoCFO = "" ;
   this.A7486DadosAdicionaisEmpresaId = "" ;
   this.A7487DadosAdicionaisCodigo = 0 ;
   this.A7432DadosAdicionaisDescricao = "" ;
   this.AV27bmpCop = "" ;
   this.AV35bmpItens = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV47SnRecuperaFiltro = "" ;
   this.AV50Pgmname = "" ;
   this.Events = {"e1111h2_client": ["'ANTERIOR'", true] ,"e1211h2_client": ["'PROXIMO'", true] ,"e1611h2_client": ["VPAGINA.CLICK", true] ,"e1311h2_client": ["'NOVO'", true] ,"e1411h2_client": ["'FECHAR'", true] ,"e1511h2_client": ["'PROCURAR'", true] ,"e1911h2_client": ["'ALTERAR'", true] ,"e2011h2_client": ["'EXCLUIR'", true] ,"e2111h2_client": ["'CONSULTAR'", true] ,"e2211h2_client": ["'DUPLICAR'", true] ,"e2311h2_client": ["'ITENS'", true] ,"e2411h2_client": ["'ATUALIZAPAGINA'", true] ,"e2611h2_client": ["ENTER", true] ,"e2711h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[{ctrl:'DADOSADICIONAISCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DADOSADICIONAISCODIGO","Title")',ctrl:'DADOSADICIONAISCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'DADOSADICIONAISDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DADOSADICIONAISDESCRICAO","Title")',ctrl:'DADOSADICIONAISDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV50Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'}],[{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'}]];
   this.EvtParms["'ITENS'"] = [[{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'},{av:'A7432DadosAdicionaisDescricao',fld:'DADOSADICIONAISDESCRICAO'}],[{av:'A7432DadosAdicionaisDescricao',fld:'DADOSADICIONAISDESCRICAO'},{av:'A7487DadosAdicionaisCodigo',fld:'DADOSADICIONAISCODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28DadosAdicionaisCodigo',fld:'vDADOSADICIONAISCODIGO'},{av:'AV30DadosAdicionaisDescricao',fld:'vDADOSADICIONAISDESCRICAO'},{av:'AV29DadosAdicionaisProduto',fld:'vDADOSADICIONAISPRODUTO'},{av:'AV32DadosAdicionaisTipoCFO',fld:'vDADOSADICIONAISTIPOCFO'},{av:'AV31DadosAdicionaisCFOP',fld:'vDADOSADICIONAISCFOP'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33DadosAdicionaisEmpresaId',fld:'vDADOSADICIONAISEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV35bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV47SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV50Pgmname',fld:'vPGMNAME'}],[]];
   this.setPrompt("PROMPTPROD", [22,80,80,80,79,79,80]);
   this.setPrompt("PROMPT_DADOSADICIONAISCFOP", [33]);
   this.setVCMap("AV47SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV50Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV47SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV50Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpCop", rfrProp:"Value", gxAttId:"Bmpcop"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpCop", rfrProp:"Tooltiptext", gxAttId:"Bmpcop"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpItens", rfrProp:"Value", gxAttId:"Bmpitens"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpItens", rfrProp:"Tooltiptext", gxAttId:"Bmpitens"});
   GridContainer.addRefreshingVar({rfrVar:"AV47SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV50Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdadosadicionais());
