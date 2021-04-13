/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:57.50
*/
gx.evt.autoSkip = false;
gx.define('hdefinicaocodbar', false, function () {
   this.ServerClass =  "hdefinicaocodbar" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A2943DefinicaoCodBarTipo=gx.fn.getControlValue("DEFINICAOCODBARTIPO") ;
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
   this.e11o02_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12o02_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16o02_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13o02_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14o02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15o02_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e20o02_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21o02_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22o02_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23o02_client=function()
   {
      this.executeServerEvent("'ALTERARORDEMSUBIR'", true, arguments[0], false, false);
   };
   this.e24o02_client=function()
   {
      this.executeServerEvent("'ALTEARORDEMDESCER'", true, arguments[0], false, false);
   };
   this.e25o02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26o02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdefinicaocodbar",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2950,47,"DEFINICAOCODBARID","Código da Definição","","DefinicaoCodBarId","int",0,"px",4,4,"right",null,[],2950,"DefinicaoCodBarId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2942,48,"DEFINICAOCODBARORDEM","Ordem da Definição","","DefinicaoCodBarOrdem","int",0,"px",2,2,"right",null,[],2942,"DefinicaoCodBarOrdem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Defcodbardesctipo",49,"vDEFCODBARDESCTIPO","Tipo","","DefCodBarDescTipo","svchar",0,"px",40,40,"left",null,[],"Defcodbardesctipo","DefCodBarDescTipo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2946,50,"DEFINICAOCODBARPOSINI","Posição Inicial","","DefinicaoCodBarPosIni","int",0,"px",2,2,"right",null,[],2946,"DefinicaoCodBarPosIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2947,51,"DEFINICAOCODBARPOSFIN","Posição Final","","DefinicaoCodBarPosFin","int",0,"px",2,2,"right",null,[],2947,"DefinicaoCodBarPosFin",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2937,52,"CODIFICACAOESTID","Código da Codificação","","CodificacaoEstId","char",0,"px",15,15,"left",null,[],2937,"CodificacaoEstId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e20o02_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e21o02_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e22o02_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsubir","vBMPSUBIR",56,0,"px",17,"px","e23o02_client","","Subir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdescer","vBMPDESCER",57,0,"px",17,"px","e24o02_client","","Descer","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vESQUEMACODIGO",gxz:"ZV27EsquemaCodigo",gxold:"OV27EsquemaCodigo",gxvar:"AV27EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV27EsquemaCodigo,0)},c2v:function(){gx.O.AV27EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV28EsquemaDescricao",gxold:"OV28EsquemaDescricao",gxvar:"AV28EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV28EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV28EsquemaDescricao,0)},c2v:function(){gx.O.AV28EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE1",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARID",gxz:"Z2950DefinicaoCodBarId",gxold:"O2950DefinicaoCodBarId",gxvar:"A2950DefinicaoCodBarId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2950DefinicaoCodBarId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2950DefinicaoCodBarId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARID",row || gx.fn.currentGridRowImpl(46),gx.O.A2950DefinicaoCodBarId,0)},c2v:function(){gx.O.A2950DefinicaoCodBarId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARORDEM",gxz:"Z2942DefinicaoCodBarOrdem",gxold:"O2942DefinicaoCodBarOrdem",gxvar:"A2942DefinicaoCodBarOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2942DefinicaoCodBarOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2942DefinicaoCodBarOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARORDEM",row || gx.fn.currentGridRowImpl(46),gx.O.A2942DefinicaoCodBarOrdem,0)},c2v:function(){gx.O.A2942DefinicaoCodBarOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARORDEM",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDEFCODBARDESCTIPO",gxz:"ZV29DefCodBarDescTipo",gxold:"OV29DefCodBarDescTipo",gxvar:"AV29DefCodBarDescTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29DefCodBarDescTipo=Value},v2z:function(Value){gx.O.ZV29DefCodBarDescTipo=Value},v2c:function(row){gx.fn.setGridControlValue("vDEFCODBARDESCTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.AV29DefCodBarDescTipo,0)},c2v:function(){gx.O.AV29DefCodBarDescTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEFCODBARDESCTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARPOSINI",gxz:"Z2946DefinicaoCodBarPosIni",gxold:"O2946DefinicaoCodBarPosIni",gxvar:"A2946DefinicaoCodBarPosIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2946DefinicaoCodBarPosIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2946DefinicaoCodBarPosIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARPOSINI",row || gx.fn.currentGridRowImpl(46),gx.O.A2946DefinicaoCodBarPosIni,0)},c2v:function(){gx.O.A2946DefinicaoCodBarPosIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARPOSINI",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARPOSFIN",gxz:"Z2947DefinicaoCodBarPosFin",gxold:"O2947DefinicaoCodBarPosFin",gxvar:"A2947DefinicaoCodBarPosFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2947DefinicaoCodBarPosFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2947DefinicaoCodBarPosFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEFINICAOCODBARPOSFIN",row || gx.fn.currentGridRowImpl(46),gx.O.A2947DefinicaoCodBarPosFin,0)},c2v:function(){gx.O.A2947DefinicaoCodBarPosFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEFINICAOCODBARPOSFIN",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTID",gxz:"Z2937CodificacaoEstId",gxold:"O2937CodificacaoEstId",gxvar:"A2937CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2937CodificacaoEstId=Value},v2z:function(Value){gx.O.Z2937CodificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOESTID",row || gx.fn.currentGridRowImpl(46),gx.O.A2937CodificacaoEstId,0)},c2v:function(){gx.O.A2937CodificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOESTID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBIR",gxz:"ZV30bmpSubir",gxold:"OV30bmpSubir",gxvar:"AV30bmpSubir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpSubir=Value},v2z:function(Value){gx.O.ZV30bmpSubir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(46),gx.O.AV30bmpSubir,gx.O.AV40Bmpsubir_GXI)},c2v:function(){gx.O.AV40Bmpsubir_GXI=this.val_GXI();gx.O.AV30bmpSubir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUBIR_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpsubir_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCER",gxz:"ZV31bmpDescer",gxold:"OV31bmpDescer",gxvar:"AV31bmpDescer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpDescer=Value},v2z:function(Value){gx.O.ZV31bmpDescer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(46),gx.O.AV31bmpDescer,gx.O.AV41Bmpdescer_GXI)},c2v:function(){gx.O.AV41Bmpdescer_GXI=this.val_GXI();gx.O.AV31bmpDescer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCER_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV41Bmpdescer_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27EsquemaCodigo = 0 ;
   this.ZV27EsquemaCodigo = 0 ;
   this.OV27EsquemaCodigo = 0 ;
   this.AV28EsquemaDescricao = "" ;
   this.ZV28EsquemaDescricao = "" ;
   this.OV28EsquemaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2950DefinicaoCodBarId = 0 ;
   this.O2950DefinicaoCodBarId = 0 ;
   this.Z2942DefinicaoCodBarOrdem = 0 ;
   this.O2942DefinicaoCodBarOrdem = 0 ;
   this.ZV29DefCodBarDescTipo = "" ;
   this.OV29DefCodBarDescTipo = "" ;
   this.Z2946DefinicaoCodBarPosIni = 0 ;
   this.O2946DefinicaoCodBarPosIni = 0 ;
   this.Z2947DefinicaoCodBarPosFin = 0 ;
   this.O2947DefinicaoCodBarPosFin = 0 ;
   this.Z2937CodificacaoEstId = "" ;
   this.O2937CodificacaoEstId = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV30bmpSubir = "" ;
   this.OV30bmpSubir = "" ;
   this.ZV31bmpDescer = "" ;
   this.OV31bmpDescer = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27EsquemaCodigo = 0 ;
   this.AV28EsquemaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2943DefinicaoCodBarTipo = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2950DefinicaoCodBarId = 0 ;
   this.A2942DefinicaoCodBarOrdem = 0 ;
   this.AV29DefCodBarDescTipo = "" ;
   this.A2946DefinicaoCodBarPosIni = 0 ;
   this.A2947DefinicaoCodBarPosFin = 0 ;
   this.A2937CodificacaoEstId = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30bmpSubir = "" ;
   this.AV31bmpDescer = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11o02_client": ["'ANTERIOR'", true] ,"e12o02_client": ["'PROXIMO'", true] ,"e16o02_client": ["VPAGINA.CLICK", true] ,"e13o02_client": ["'NOVO'", true] ,"e14o02_client": ["'FECHAR'", true] ,"e15o02_client": ["'PROCURAR'", true] ,"e20o02_client": ["'ALTERAR'", true] ,"e21o02_client": ["'EXCLUIR'", true] ,"e22o02_client": ["'CONSULTAR'", true] ,"e23o02_client": ["'ALTERARORDEMSUBIR'", true] ,"e24o02_client": ["'ALTEARORDEMDESCER'", true] ,"e25o02_client": ["ENTER", true] ,"e26o02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV31bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'}],[{av:'AV29DefCodBarDescTipo',fld:'vDEFCODBARDESCTIPO'},{av:'gx.fn.getCtrlProperty("vDEFCODBARDESCTIPO","Enabled")',ctrl:'vDEFCODBARDESCTIPO',prop:'Enabled'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV31bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV31bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV31bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV31bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV31bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2943DefinicaoCodBarTipo',fld:'DEFINICAOCODBARTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERARORDEMSUBIR'"] = [[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'A2942DefinicaoCodBarOrdem',fld:'DEFINICAOCODBARORDEM'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A2942DefinicaoCodBarOrdem',fld:'DEFINICAOCODBARORDEM'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTEARORDEMDESCER'"] = [[{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'A2942DefinicaoCodBarOrdem',fld:'DEFINICAOCODBARORDEM'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A2942DefinicaoCodBarOrdem',fld:'DEFINICAOCODBARORDEM'},{av:'A2950DefinicaoCodBarId',fld:'DEFINICAOCODBARID'},{av:'AV27EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2943DefinicaoCodBarTipo", "DEFINICAOCODBARTIPO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2943DefinicaoCodBarTipo", "DEFINICAOCODBARTIPO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpSubir", rfrProp:"Value", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpSubir", rfrProp:"Tooltiptext", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDescer", rfrProp:"Value", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDescer", rfrProp:"Tooltiptext", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A2943DefinicaoCodBarTipo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdefinicaocodbar());
