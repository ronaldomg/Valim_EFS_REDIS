/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:58.96
*/
gx.evt.autoSkip = false;
gx.define('hclassfluxoselecao', false, function () {
   this.ServerClass =  "hclassfluxoselecao" ;
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
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV35TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
   };
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11rr2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12rr2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16rr2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13rr2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14rr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15rr2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20rr2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21rr2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22rr2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23rr2_client=function()
   {
      this.executeServerEvent("'HISTORICO'", true, arguments[0], false, false);
   };
   this.e24rr2_client=function()
   {
      this.executeServerEvent("'ITEM'", true, arguments[0], false, false);
   };
   this.e25rr2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26rr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27rr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,40,42,47,50,53,55,57,59,61,64,66,67,71,72,73,74,75,76,77,78,79,86];
   this.GXLastCtrlId =86;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",70,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hclassfluxoselecao",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3293,71,"CLASSFLUXOSELECAOSEQ","","","ClassFluxoSelecaoSeq","int",0,"px",4,4,"right",null,[],3293,"ClassFluxoSelecaoSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3294,72,"CLASSFLUXOSELECAODESCRICAO","","","ClassFluxoSelecaoDescricao","svchar",0,"px",40,40,"left",null,[],3294,"ClassFluxoSelecaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Classificacao",73,"vCLASSIFICACAO","","","Classificacao","char",0,"px",15,15,"left",null,[],"Classificacao","Classificacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3292,74,"CLASSFLUXOSELECAOTIPO","Tipo","ClassFluxoSelecaoTipo","char",null,0,false,false,0,"px","");
   GridContainer.addBitmap("&Bmpitem","vBMPITEM",75,0,"px",17,"px","e24rr2_client","","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmphistorico","vBMPHISTORICO",76,0,"px",17,"px","e23rr2_client","","His/Lan","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",77,0,"px",17,"px","e20rr2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",78,0,"px",17,"px","e21rr2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",79,0,"px",17,"px","e22rr2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOID",gxz:"ZV36TipoClassFluxoId",gxold:"OV36TipoClassFluxoId",gxvar:"AV36TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV36TipoClassFluxoId,0)},c2v:function(){gx.O.AV36TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV37TipoClassFluxoDescricao",gxold:"OV37TipoClassFluxoDescricao",gxvar:"AV37TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV37TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV37TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV37TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE3",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOID",gxz:"ZV27ClassFluxoId",gxold:"OV27ClassFluxoId",gxvar:"AV27ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassFluxoId=Value},v2z:function(Value){gx.O.ZV27ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOID",gx.O.AV27ClassFluxoId,0)},c2v:function(){gx.O.AV27ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV28ClassFluxoDescricao",gxold:"OV28ClassFluxoDescricao",gxvar:"AV28ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV28ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV28ClassFluxoDescricao,0)},c2v:function(){gx.O.AV28ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOSELECAOSEQ",gxz:"ZV30ClassFluxoSelecaoSeq",gxold:"OV30ClassFluxoSelecaoSeq",gxvar:"AV30ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAOSEQ",gx.O.AV30ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.AV30ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOSELECAODESCRICAO",gxz:"ZV31ClassFluxoSelecaoDescricao",gxold:"OV31ClassFluxoSelecaoDescricao",gxvar:"AV31ClassFluxoSelecaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.ZV31ClassFluxoSelecaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAODESCRICAO",gx.O.AV31ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.AV31ClassFluxoSelecaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOSELECAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[53]={fld:"IMAGE2",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"TABLE5",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOSEQ",gxz:"Z3293ClassFluxoSelecaoSeq",gxold:"O3293ClassFluxoSelecaoSeq",gxvar:"A3293ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELECAOSEQ",row || gx.fn.currentGridRowImpl(70),gx.O.A3293ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELECAOSEQ",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAODESCRICAO",gxz:"Z3294ClassFluxoSelecaoDescricao",gxold:"O3294ClassFluxoSelecaoDescricao",gxvar:"A3294ClassFluxoSelecaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3294ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.Z3294ClassFluxoSelecaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELECAODESCRICAO",row || gx.fn.currentGridRowImpl(70),gx.O.A3294ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.A3294ClassFluxoSelecaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOSELECAODESCRICAO",row || gx.fn.currentGridRowImpl(70))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAO",gxz:"ZV29Classificacao",gxold:"OV29Classificacao",gxvar:"AV29Classificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29Classificacao=Value},v2z:function(Value){gx.O.ZV29Classificacao=Value},v2c:function(row){gx.fn.setGridControlValue("vCLASSIFICACAO",row || gx.fn.currentGridRowImpl(70),gx.O.AV29Classificacao,0)},c2v:function(){gx.O.AV29Classificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAO",row || gx.fn.currentGridRowImpl(70))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOTIPO",gxz:"Z3292ClassFluxoSelecaoTipo",gxold:"O3292ClassFluxoSelecaoTipo",gxvar:"A3292ClassFluxoSelecaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3292ClassFluxoSelecaoTipo=Value},v2z:function(Value){gx.O.Z3292ClassFluxoSelecaoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CLASSFLUXOSELECAOTIPO",row || gx.fn.currentGridRowImpl(70),gx.O.A3292ClassFluxoSelecaoTipo)},c2v:function(){gx.O.A3292ClassFluxoSelecaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOSELECAOTIPO",row || gx.fn.currentGridRowImpl(70))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITEM",gxz:"ZV32bmpItem",gxold:"OV32bmpItem",gxvar:"AV32bmpItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpItem=Value},v2z:function(Value){gx.O.ZV32bmpItem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITEM",row || gx.fn.currentGridRowImpl(70),gx.O.AV32bmpItem,gx.O.AV46Bmpitem_GXI)},c2v:function(){gx.O.AV46Bmpitem_GXI=this.val_GXI();gx.O.AV32bmpItem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITEM",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITEM_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV46Bmpitem_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPHISTORICO",gxz:"ZV33bmpHistorico",gxold:"OV33bmpHistorico",gxvar:"AV33bmpHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpHistorico=Value},v2z:function(Value){gx.O.ZV33bmpHistorico=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPHISTORICO",row || gx.fn.currentGridRowImpl(70),gx.O.AV33bmpHistorico,gx.O.AV47Bmphistorico_GXI)},c2v:function(){gx.O.AV47Bmphistorico_GXI=this.val_GXI();gx.O.AV33bmpHistorico=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPHISTORICO",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPHISTORICO_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV47Bmphistorico_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(70),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(70),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(70),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV36TipoClassFluxoId = 0 ;
   this.ZV36TipoClassFluxoId = 0 ;
   this.OV36TipoClassFluxoId = 0 ;
   this.AV37TipoClassFluxoDescricao = "" ;
   this.ZV37TipoClassFluxoDescricao = "" ;
   this.OV37TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.ZV27ClassFluxoId = "" ;
   this.OV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.ZV28ClassFluxoDescricao = "" ;
   this.OV28ClassFluxoDescricao = "" ;
   this.AV30ClassFluxoSelecaoSeq = 0 ;
   this.ZV30ClassFluxoSelecaoSeq = 0 ;
   this.OV30ClassFluxoSelecaoSeq = 0 ;
   this.AV31ClassFluxoSelecaoDescricao = "" ;
   this.ZV31ClassFluxoSelecaoDescricao = "" ;
   this.OV31ClassFluxoSelecaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3293ClassFluxoSelecaoSeq = 0 ;
   this.O3293ClassFluxoSelecaoSeq = 0 ;
   this.Z3294ClassFluxoSelecaoDescricao = "" ;
   this.O3294ClassFluxoSelecaoDescricao = "" ;
   this.ZV29Classificacao = "" ;
   this.OV29Classificacao = "" ;
   this.Z3292ClassFluxoSelecaoTipo = "" ;
   this.O3292ClassFluxoSelecaoTipo = "" ;
   this.ZV32bmpItem = "" ;
   this.OV32bmpItem = "" ;
   this.ZV33bmpHistorico = "" ;
   this.OV33bmpHistorico = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV36TipoClassFluxoId = 0 ;
   this.AV37TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.AV30ClassFluxoSelecaoSeq = 0 ;
   this.AV31ClassFluxoSelecaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV35TipoClassFluxoEmpresaId = "" ;
   this.A3288ClassFluxoId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.AV29Classificacao = "" ;
   this.A3292ClassFluxoSelecaoTipo = "" ;
   this.AV32bmpItem = "" ;
   this.AV33bmpHistorico = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.A3282ClassFluxoTpImpressao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV41Pgmname = "" ;
   this.Events = {"e11rr2_client": ["'ANTERIOR'", true] ,"e12rr2_client": ["'PROXIMO'", true] ,"e16rr2_client": ["VPAGINA.CLICK", true] ,"e13rr2_client": ["'NOVO'", true] ,"e14rr2_client": ["'FECHAR'", true] ,"e15rr2_client": ["'PROCURAR'", true] ,"e20rr2_client": ["'ALTERAR'", true] ,"e21rr2_client": ["'EXCLUIR'", true] ,"e22rr2_client": ["'CONSULTAR'", true] ,"e23rr2_client": ["'HISTORICO'", true] ,"e24rr2_client": ["'ITEM'", true] ,"e25rr2_client": ["'ATUALIZAPAGINA'", true] ,"e26rr2_client": ["ENTER", true] ,"e27rr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'}],[{ctrl:'CLASSFLUXOSELECAOSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOSELECAOSEQ","Title")',ctrl:'CLASSFLUXOSELECAOSEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CLASSFLUXOSELECAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOSELECAODESCRICAO","Title")',ctrl:'CLASSFLUXOSELECAODESCRICAO',prop:'Title'},{ctrl:'vCLASSIFICACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAO","Title")',ctrl:'vCLASSIFICACAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'}],[{av:'AV29Classificacao',fld:'vCLASSIFICACAO'},{av:'gx.fn.getCtrlProperty("vBMPHISTORICO","Enabled")',ctrl:'vBMPHISTORICO',prop:'Enabled'},{av:'AV33bmpHistorico',fld:'vBMPHISTORICO'},{av:'gx.fn.getCtrlProperty("vBMPHISTORICO","Tooltiptext")',ctrl:'vBMPHISTORICO',prop:'Tooltiptext'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'HISTORICO'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'}],[{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["'ITEM'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'}],[{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpItem',fld:'vBMPITEM'},{av:'gx.fn.getCtrlProperty("vBMPITEM","Tooltiptext")',ctrl:'vBMPITEM',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A3292ClassFluxoSelecaoTipo',fld:'CLASSFLUXOSELECAOTIPO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV35TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpItem", rfrProp:"Value", gxAttId:"Bmpitem"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpItem", rfrProp:"Tooltiptext", gxAttId:"Bmpitem"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3292ClassFluxoSelecaoTipo", rfrProp:"Value", gxAttId:"3292"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassfluxoselecao());
