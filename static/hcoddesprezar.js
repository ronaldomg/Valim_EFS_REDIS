/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:43:16.30
*/
gx.evt.autoSkip = false;
gx.define('hcoddesprezar', false, function () {
   this.ServerClass =  "hcoddesprezar" ;
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
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
      this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Filialidfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALIDFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Coddesphistoricoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CODDESPHISTORICOID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Coddesplancmtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CODDESPLANCMTOID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Coddespfilialempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCODDESPFILIALEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11lv2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12lv2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16lv2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13lv2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14lv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15lv2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20lv2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21lv2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22lv2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24lv2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25lv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26lv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,24,27,28,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,66,68,69,70,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcoddesprezar",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3277,49,"CODDESPREZARSEQUENCIA","","","CodDesprezarSequencia","int",0,"px",4,4,"right",null,[],3277,"CodDesprezarSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3278,50,"CODDESPREZARTIPO","","CodDesprezarTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Coddesphistlancid",51,"vCODDESPHISTLANCID","Código","","CodDespHistLancId","int",0,"px",4,4,"right",null,[],"Coddesphistlancid","CodDespHistLancId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Coddesphistlancdesc",52,"vCODDESPHISTLANCDESC","Descrição","","CodDespHistLancDesc","char",0,"px",25,25,"left",null,[],"Coddesphistlancdesc","CodDespHistLancDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e20lv2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e21lv2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e22lv2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3272,56,"CODDESPHISTORICODESCRICAO","Descrição Histórico","","CodDespHistoricoDescricao","svchar",0,"px",25,25,"left",null,[],3272,"CodDespHistoricoDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3271,57,"CODDESPHISTORICOID","Código Histórico","","CodDespHistoricoId","int",0,"px",4,4,"right",null,[],3271,"CodDespHistoricoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3275,58,"CODDESPLANCMTODESCRICAO","Descrição Lançamento","","CodDespLancmtoDescricao","svchar",0,"px",25,25,"left",null,[],3275,"CodDespLancmtoDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3274,59,"CODDESPLANCMTOID","Código Lançamento","","CodDespLancmtoId","int",0,"px",4,4,"right",null,[],3274,"CodDespLancmtoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3268,60,"CODDESPFILIALID","Código Filial","","CodDespFilialId","int",0,"px",7,7,"right",null,[],3268,"CodDespFilialId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialidfiltro,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALIDFILTRO",gxz:"ZV29FilialIdFiltro",gxold:"OV29FilialIdFiltro",gxvar:"AV29FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV29FilialIdFiltro,0)},c2v:function(){gx.O.AV29FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV30FilialNome",gxold:"OV30FilialNome",gxvar:"AV30FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialNome=Value},v2z:function(Value){gx.O.ZV30FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV30FilialNome,0)},c2v:function(){gx.O.AV30FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODDESPREZARTIPO",gxz:"ZV34CodDesprezarTipo",gxold:"OV34CodDesprezarTipo",gxvar:"AV34CodDesprezarTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34CodDesprezarTipo=Value},v2z:function(Value){gx.O.ZV34CodDesprezarTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCODDESPREZARTIPO",gx.O.AV34CodDesprezarTipo)},c2v:function(){gx.O.AV34CodDesprezarTipo=this.val()},val:function(){return gx.fn.getControlValue("vCODDESPREZARTIPO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={fld:"TABLE8",grid:0};
   GXValidFnc[28]={fld:"TABLE9",grid:0};
   GXValidFnc[31]={fld:"IMAGE2",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODDESPREZARSEQUENCIA",gxz:"Z3277CodDesprezarSequencia",gxold:"O3277CodDesprezarSequencia",gxvar:"A3277CodDesprezarSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3277CodDesprezarSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3277CodDesprezarSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODDESPREZARSEQUENCIA",row || gx.fn.currentGridRowImpl(48),gx.O.A3277CodDesprezarSequencia,0)},c2v:function(){gx.O.A3277CodDesprezarSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODDESPREZARSEQUENCIA",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODDESPREZARTIPO",gxz:"Z3278CodDesprezarTipo",gxold:"O3278CodDesprezarTipo",gxvar:"A3278CodDesprezarTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3278CodDesprezarTipo=Value},v2z:function(Value){gx.O.Z3278CodDesprezarTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CODDESPREZARTIPO",row || gx.fn.currentGridRowImpl(48),gx.O.A3278CodDesprezarTipo)},c2v:function(){gx.O.A3278CodDesprezarTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CODDESPREZARTIPO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODDESPHISTLANCID",gxz:"ZV27CodDespHistLancId",gxold:"OV27CodDespHistLancId",gxvar:"AV27CodDespHistLancId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27CodDespHistLancId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CodDespHistLancId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCODDESPHISTLANCID",row || gx.fn.currentGridRowImpl(48),gx.O.AV27CodDespHistLancId,0)},c2v:function(){gx.O.AV27CodDespHistLancId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCODDESPHISTLANCID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:25,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODDESPHISTLANCDESC",gxz:"ZV28CodDespHistLancDesc",gxold:"OV28CodDespHistLancDesc",gxvar:"AV28CodDespHistLancDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28CodDespHistLancDesc=Value},v2z:function(Value){gx.O.ZV28CodDespHistLancDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vCODDESPHISTLANCDESC",row || gx.fn.currentGridRowImpl(48),gx.O.AV28CodDespHistLancDesc,0)},c2v:function(){gx.O.AV28CodDespHistLancDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODDESPHISTLANCDESC",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODDESPHISTORICODESCRICAO",gxz:"Z3272CodDespHistoricoDescricao",gxold:"O3272CodDespHistoricoDescricao",gxvar:"A3272CodDespHistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3272CodDespHistoricoDescricao=Value},v2z:function(Value){gx.O.Z3272CodDespHistoricoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CODDESPHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A3272CodDespHistoricoDescricao,0)},c2v:function(){gx.O.A3272CodDespHistoricoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CODDESPHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Coddesphistoricoid,isvalid:null,rgrid:[],fld:"CODDESPHISTORICOID",gxz:"Z3271CodDespHistoricoId",gxold:"O3271CodDespHistoricoId",gxvar:"A3271CodDespHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3271CodDespHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3271CodDespHistoricoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODDESPHISTORICOID",row || gx.fn.currentGridRowImpl(48),gx.O.A3271CodDespHistoricoId,0)},c2v:function(){gx.O.A3271CodDespHistoricoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODDESPHISTORICOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODDESPLANCMTODESCRICAO",gxz:"Z3275CodDespLancmtoDescricao",gxold:"O3275CodDespLancmtoDescricao",gxvar:"A3275CodDespLancmtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3275CodDespLancmtoDescricao=Value},v2z:function(Value){gx.O.Z3275CodDespLancmtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CODDESPLANCMTODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A3275CodDespLancmtoDescricao,0)},c2v:function(){gx.O.A3275CodDespLancmtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CODDESPLANCMTODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Coddesplancmtoid,isvalid:null,rgrid:[],fld:"CODDESPLANCMTOID",gxz:"Z3274CodDespLancmtoId",gxold:"O3274CodDespLancmtoId",gxvar:"A3274CodDespLancmtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3274CodDespLancmtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3274CodDespLancmtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODDESPLANCMTOID",row || gx.fn.currentGridRowImpl(48),gx.O.A3274CodDespLancmtoId,0)},c2v:function(){gx.O.A3274CodDespLancmtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODDESPLANCMTOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODDESPFILIALID",gxz:"Z3268CodDespFilialId",gxold:"O3268CodDespFilialId",gxvar:"A3268CodDespFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3268CodDespFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3268CodDespFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODDESPFILIALID",row || gx.fn.currentGridRowImpl(48),gx.O.A3268CodDespFilialId,0)},c2v:function(){gx.O.A3268CodDespFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODDESPFILIALID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"JS", format:2,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Coddespfilialempid,isvalid:null,rgrid:[this.GridContainer],fld:"vCODDESPFILIALEMPID",gxz:"ZV31CodDespFilialEmpId",gxold:"OV31CodDespFilialEmpId",gxvar:"AV31CodDespFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CodDespFilialEmpId=Value},v2z:function(Value){gx.O.ZV31CodDespFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("vCODDESPFILIALEMPID",gx.O.AV31CodDespFilialEmpId,0)},c2v:function(){gx.O.AV31CodDespFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCODDESPFILIALEMPID")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV38Qtde",gxold:"OV38Qtde",gxvar:"AV38Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV38Qtde,0)},c2v:function(){gx.O.AV38Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"PROMPT_FILIALIDFILTRO",grid:0};
   this.AV29FilialIdFiltro = 0 ;
   this.ZV29FilialIdFiltro = 0 ;
   this.OV29FilialIdFiltro = 0 ;
   this.AV30FilialNome = "" ;
   this.ZV30FilialNome = "" ;
   this.OV30FilialNome = "" ;
   this.AV34CodDesprezarTipo = "" ;
   this.ZV34CodDesprezarTipo = "" ;
   this.OV34CodDesprezarTipo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3277CodDesprezarSequencia = 0 ;
   this.O3277CodDesprezarSequencia = 0 ;
   this.Z3278CodDesprezarTipo = "" ;
   this.O3278CodDesprezarTipo = "" ;
   this.ZV27CodDespHistLancId = 0 ;
   this.OV27CodDespHistLancId = 0 ;
   this.ZV28CodDespHistLancDesc = "" ;
   this.OV28CodDespHistLancDesc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3272CodDespHistoricoDescricao = "" ;
   this.O3272CodDespHistoricoDescricao = "" ;
   this.Z3271CodDespHistoricoId = 0 ;
   this.O3271CodDespHistoricoId = 0 ;
   this.Z3275CodDespLancmtoDescricao = "" ;
   this.O3275CodDespLancmtoDescricao = "" ;
   this.Z3274CodDespLancmtoId = 0 ;
   this.O3274CodDespLancmtoId = 0 ;
   this.Z3268CodDespFilialId = 0 ;
   this.O3268CodDespFilialId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31CodDespFilialEmpId = "" ;
   this.ZV31CodDespFilialEmpId = "" ;
   this.OV31CodDespFilialEmpId = "" ;
   this.AV38Qtde = 0 ;
   this.ZV38Qtde = 0 ;
   this.OV38Qtde = 0 ;
   this.AV29FilialIdFiltro = 0 ;
   this.AV30FilialNome = "" ;
   this.AV34CodDesprezarTipo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV31CodDespFilialEmpId = "" ;
   this.AV38Qtde = 0 ;
   this.A3267CodDespFilialEmpId = "" ;
   this.A3270CodDespHistoricoEmpId = "" ;
   this.A3273CodDespLancmtoEmpId = "" ;
   this.A3277CodDesprezarSequencia = 0 ;
   this.A3278CodDesprezarTipo = "" ;
   this.AV27CodDespHistLancId = 0 ;
   this.AV28CodDespHistLancDesc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3272CodDespHistoricoDescricao = "" ;
   this.A3271CodDespHistoricoId = 0 ;
   this.A3275CodDespLancmtoDescricao = "" ;
   this.A3274CodDespLancmtoId = 0 ;
   this.A3268CodDespFilialId = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.AV36SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.Events = {"e11lv2_client": ["'ANTERIOR'", true] ,"e12lv2_client": ["'PROXIMO'", true] ,"e16lv2_client": ["VPAGINA.CLICK", true] ,"e13lv2_client": ["'NOVO'", true] ,"e14lv2_client": ["'FECHAR'", true] ,"e15lv2_client": ["'PROCURAR'", true] ,"e20lv2_client": ["'ALTERAR'", true] ,"e21lv2_client": ["'EXCLUIR'", true] ,"e22lv2_client": ["'CONSULTAR'", true] ,"e24lv2_client": ["'ATUALIZAPAGINA'", true] ,"e25lv2_client": ["ENTER", true] ,"e26lv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'gx.fn.getCtrlProperty("vFILIALIDFILTRO","Enabled")',ctrl:'vFILIALIDFILTRO',prop:'Enabled'},{av:'AV37FilialUnica',fld:'vFILIALUNICA'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'}],[{av:'AV27CodDespHistLancId',fld:'vCODDESPHISTLANCID'},{av:'AV28CodDespHistLancDesc',fld:'vCODDESPHISTLANCDESC'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'}],[{ctrl:'CODDESPREZARSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODDESPREZARSEQUENCIA","Title")',ctrl:'CODDESPREZARSEQUENCIA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CODDESPREZARTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30FilialNome',fld:'vFILIALNOME'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30FilialNome',fld:'vFILIALNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV30FilialNome',fld:'vFILIALNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30FilialNome',fld:'vFILIALNOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30FilialNome',fld:'vFILIALNOME'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV37FilialUnica',fld:'vFILIALUNICA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30FilialNome',fld:'vFILIALNOME'}],[{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV47GXLvl186',fld:'vGXLVL186'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3268CodDespFilialId',fld:'CODDESPFILIALID'},{av:'A3277CodDesprezarSequencia',fld:'CODDESPREZARSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30FilialNome',fld:'vFILIALNOME'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3277CodDesprezarSequencia',fld:'CODDESPREZARSEQUENCIA'},{av:'A3268CodDespFilialId',fld:'CODDESPFILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3268CodDespFilialId',fld:'CODDESPFILIALID'},{av:'A3277CodDesprezarSequencia',fld:'CODDESPREZARSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30FilialNome',fld:'vFILIALNOME'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3277CodDesprezarSequencia',fld:'CODDESPREZARSEQUENCIA'},{av:'A3268CodDespFilialId',fld:'CODDESPFILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3268CodDespFilialId',fld:'CODDESPFILIALID'},{av:'A3277CodDesprezarSequencia',fld:'CODDESPREZARSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV30FilialNome',fld:'vFILIALNOME'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3277CodDesprezarSequencia',fld:'CODDESPREZARSEQUENCIA'},{av:'A3268CodDespFilialId',fld:'CODDESPFILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29FilialIdFiltro',fld:'vFILIALIDFILTRO'},{av:'AV34CodDesprezarTipo',fld:'vCODDESPREZARTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CodDespFilialEmpId',fld:'vCODDESPFILIALEMPID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3278CodDesprezarTipo',fld:'CODDESPREZARTIPO'},{av:'A3271CodDespHistoricoId',fld:'CODDESPHISTORICOID'},{av:'A3272CodDespHistoricoDescricao',fld:'CODDESPHISTORICODESCRICAO'},{av:'A3274CodDespLancmtoId',fld:'CODDESPLANCMTOID'},{av:'A3275CodDespLancmtoDescricao',fld:'CODDESPLANCMTODESCRICAO'}],[]];
   this.setPrompt("PROMPT_FILIALIDFILTRO", [13]);
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3278CodDesprezarTipo", rfrProp:"Value", gxAttId:"3278"});
   GridContainer.addRefreshingVar({rfrVar:"A3271CodDespHistoricoId", rfrProp:"Value", gxAttId:"3271"});
   GridContainer.addRefreshingVar({rfrVar:"A3272CodDespHistoricoDescricao", rfrProp:"Value", gxAttId:"3272"});
   GridContainer.addRefreshingVar({rfrVar:"A3274CodDespLancmtoId", rfrProp:"Value", gxAttId:"3274"});
   GridContainer.addRefreshingVar({rfrVar:"A3275CodDespLancmtoDescricao", rfrProp:"Value", gxAttId:"3275"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcoddesprezar());
