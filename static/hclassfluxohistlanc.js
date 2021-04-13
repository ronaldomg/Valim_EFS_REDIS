/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:4:34.57
*/
gx.evt.autoSkip = false;
gx.define('hclassfluxohistlanc', false, function () {
   this.ServerClass =  "hclassfluxohistlanc" ;
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
      this.AV36TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.AV34ClassFluxoSelecaoTipo=gx.fn.getControlValue("vCLASSFLUXOSELECAOTIPO") ;
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
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
   this.Validv_Classfluxoselecaoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSFLUXOSELECAOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxohistoricoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(72) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOHISTORICOID", gx.fn.currentGridRowImpl(72));
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
   this.Valid_Classfluxolancmtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(72) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOLANCMTOID", gx.fn.currentGridRowImpl(72));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11rq2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12rq2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16rq2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13rq2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14rq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15rq2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e20rq2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21rq2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22rq2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24rq2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e17rq2_client=function()
   {
      this.executeServerEvent("'COPIARCODIGOS'", true, null, false, false);
   };
   this.e26rq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27rq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,40,42,44,47,50,53,55,57,59,61,63,66,68,69,73,74,75,76,77,78,79,80,81,82,89];
   this.GXLastCtrlId =89;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",72,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hclassfluxohistlanc",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3324,73,"CLASSFLUXOHISTLANCSEQ","","","ClassFluxoHistLancSeq","int",0,"px",4,4,"right",null,[],3324,"ClassFluxoHistLancSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3322,74,"CLASSFLUXOHISTORICOID","","","ClassFluxoHistoricoId","int",0,"px",4,4,"right",null,[],3322,"ClassFluxoHistoricoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3323,75,"CLASSFLUXOHISTORICODESCRICAO","","","ClassFluxoHistoricoDescricao","svchar",0,"px",25,25,"left",null,[],3323,"ClassFluxoHistoricoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3319,76,"CLASSFLUXOLANCMTOID","","","ClassFluxoLancmtoId","int",0,"px",4,4,"right",null,[],3319,"ClassFluxoLancmtoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3320,77,"CLASSFLUXOLANCMTODESCRICAO","","","ClassFluxoLancmtoDescricao","svchar",0,"px",25,25,"left",null,[],3320,"ClassFluxoLancmtoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3288,78,"CLASSFLUXOID","Classificação","","ClassFluxoId","svchar",0,"px",10,10,"left",null,[],3288,"ClassFluxoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3293,79,"CLASSFLUXOSELECAOSEQ","Sequência Seleção","","ClassFluxoSelecaoSeq","int",0,"px",4,4,"right",null,[],3293,"ClassFluxoSelecaoSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",80,0,"px",17,"px","e20rq2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",81,0,"px",17,"px","e21rq2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",82,0,"px",17,"px","e22rq2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOID",gxz:"ZV37TipoClassFluxoId",gxold:"OV37TipoClassFluxoId",gxvar:"AV37TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV37TipoClassFluxoId,0)},c2v:function(){gx.O.AV37TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV38TipoClassFluxoDescricao",gxold:"OV38TipoClassFluxoDescricao",gxvar:"AV38TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV38TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV38TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV38TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE11",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOID",gxz:"ZV27ClassFluxoId",gxold:"OV27ClassFluxoId",gxvar:"AV27ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassFluxoId=Value},v2z:function(Value){gx.O.ZV27ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOID",gx.O.AV27ClassFluxoId,0)},c2v:function(){gx.O.AV27ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV28ClassFluxoDescricao",gxold:"OV28ClassFluxoDescricao",gxvar:"AV28ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV28ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV28ClassFluxoDescricao,0)},c2v:function(){gx.O.AV28ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE12",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classfluxoselecaoseq,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOSELECAOSEQ",gxz:"ZV29ClassFluxoSelecaoSeq",gxold:"OV29ClassFluxoSelecaoSeq",gxvar:"AV29ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAOSEQ",gx.O.AV29ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.AV29ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXOSELECAODESCRICAO",gxz:"ZV30ClassFluxoSelecaoDescricao",gxold:"OV30ClassFluxoSelecaoDescricao",gxvar:"AV30ClassFluxoSelecaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.ZV30ClassFluxoSelecaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAODESCRICAO",gx.O.AV30ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.AV30ClassFluxoSelecaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOSELECAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[53]={fld:"IMAGE2",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"IMAGE3",grid:0};
   GXValidFnc[63]={fld:"TABLE5",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTLANCSEQ",gxz:"Z3324ClassFluxoHistLancSeq",gxold:"O3324ClassFluxoHistLancSeq",gxvar:"A3324ClassFluxoHistLancSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3324ClassFluxoHistLancSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3324ClassFluxoHistLancSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOHISTLANCSEQ",row || gx.fn.currentGridRowImpl(72),gx.O.A3324ClassFluxoHistLancSeq,0)},c2v:function(){gx.O.A3324ClassFluxoHistLancSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOHISTLANCSEQ",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Valid_Classfluxohistoricoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTORICOID",gxz:"Z3322ClassFluxoHistoricoId",gxold:"O3322ClassFluxoHistoricoId",gxvar:"A3322ClassFluxoHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3322ClassFluxoHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3322ClassFluxoHistoricoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOHISTORICOID",row || gx.fn.currentGridRowImpl(72),gx.O.A3322ClassFluxoHistoricoId,0)},c2v:function(){gx.O.A3322ClassFluxoHistoricoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOHISTORICOID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOHISTORICODESCRICAO",gxz:"Z3323ClassFluxoHistoricoDescricao",gxold:"O3323ClassFluxoHistoricoDescricao",gxvar:"A3323ClassFluxoHistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3323ClassFluxoHistoricoDescricao=Value},v2z:function(Value){gx.O.Z3323ClassFluxoHistoricoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(72),gx.O.A3323ClassFluxoHistoricoDescricao,0)},c2v:function(){gx.O.A3323ClassFluxoHistoricoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOHISTORICODESCRICAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:this.Valid_Classfluxolancmtoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOLANCMTOID",gxz:"Z3319ClassFluxoLancmtoId",gxold:"O3319ClassFluxoLancmtoId",gxvar:"A3319ClassFluxoLancmtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3319ClassFluxoLancmtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3319ClassFluxoLancmtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOLANCMTOID",row || gx.fn.currentGridRowImpl(72),gx.O.A3319ClassFluxoLancmtoId,0)},c2v:function(){gx.O.A3319ClassFluxoLancmtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOLANCMTOID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOLANCMTODESCRICAO",gxz:"Z3320ClassFluxoLancmtoDescricao",gxold:"O3320ClassFluxoLancmtoDescricao",gxvar:"A3320ClassFluxoLancmtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3320ClassFluxoLancmtoDescricao=Value},v2z:function(Value){gx.O.Z3320ClassFluxoLancmtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOLANCMTODESCRICAO",row || gx.fn.currentGridRowImpl(72),gx.O.A3320ClassFluxoLancmtoDescricao,0)},c2v:function(){gx.O.A3320ClassFluxoLancmtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOLANCMTODESCRICAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOID",row || gx.fn.currentGridRowImpl(72),gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOID",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOSEQ",gxz:"Z3293ClassFluxoSelecaoSeq",gxold:"O3293ClassFluxoSelecaoSeq",gxvar:"A3293ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELECAOSEQ",row || gx.fn.currentGridRowImpl(72),gx.O.A3293ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELECAOSEQ",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(72),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(72),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV37TipoClassFluxoId = 0 ;
   this.ZV37TipoClassFluxoId = 0 ;
   this.OV37TipoClassFluxoId = 0 ;
   this.AV38TipoClassFluxoDescricao = "" ;
   this.ZV38TipoClassFluxoDescricao = "" ;
   this.OV38TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.ZV27ClassFluxoId = "" ;
   this.OV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.ZV28ClassFluxoDescricao = "" ;
   this.OV28ClassFluxoDescricao = "" ;
   this.AV29ClassFluxoSelecaoSeq = 0 ;
   this.ZV29ClassFluxoSelecaoSeq = 0 ;
   this.OV29ClassFluxoSelecaoSeq = 0 ;
   this.AV30ClassFluxoSelecaoDescricao = "" ;
   this.ZV30ClassFluxoSelecaoDescricao = "" ;
   this.OV30ClassFluxoSelecaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3324ClassFluxoHistLancSeq = 0 ;
   this.O3324ClassFluxoHistLancSeq = 0 ;
   this.Z3322ClassFluxoHistoricoId = 0 ;
   this.O3322ClassFluxoHistoricoId = 0 ;
   this.Z3323ClassFluxoHistoricoDescricao = "" ;
   this.O3323ClassFluxoHistoricoDescricao = "" ;
   this.Z3319ClassFluxoLancmtoId = 0 ;
   this.O3319ClassFluxoLancmtoId = 0 ;
   this.Z3320ClassFluxoLancmtoDescricao = "" ;
   this.O3320ClassFluxoLancmtoDescricao = "" ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.Z3293ClassFluxoSelecaoSeq = 0 ;
   this.O3293ClassFluxoSelecaoSeq = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV37TipoClassFluxoId = 0 ;
   this.AV38TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.AV29ClassFluxoSelecaoSeq = 0 ;
   this.AV30ClassFluxoSelecaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV36TipoClassFluxoEmpresaId = "" ;
   this.AV34ClassFluxoSelecaoTipo = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A3321ClassFluxoHistoricoEmpId = "" ;
   this.A3318ClassFluxoLancmtoEmpId = "" ;
   this.A3324ClassFluxoHistLancSeq = 0 ;
   this.A3322ClassFluxoHistoricoId = 0 ;
   this.A3323ClassFluxoHistoricoDescricao = "" ;
   this.A3319ClassFluxoLancmtoId = 0 ;
   this.A3320ClassFluxoLancmtoDescricao = "" ;
   this.A3288ClassFluxoId = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.AV41Pgmname = "" ;
   this.Events = {"e11rq2_client": ["'ANTERIOR'", true] ,"e12rq2_client": ["'PROXIMO'", true] ,"e16rq2_client": ["VPAGINA.CLICK", true] ,"e13rq2_client": ["'NOVO'", true] ,"e14rq2_client": ["'FECHAR'", true] ,"e15rq2_client": ["'PROCURAR'", true] ,"e20rq2_client": ["'ALTERAR'", true] ,"e21rq2_client": ["'EXCLUIR'", true] ,"e22rq2_client": ["'CONSULTAR'", true] ,"e24rq2_client": ["'ATUALIZAPAGINA'", true] ,"e17rq2_client": ["'COPIARCODIGOS'", true] ,"e26rq2_client": ["ENTER", true] ,"e27rq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'}],[{av:'gx.fn.getCtrlProperty("CLASSFLUXOHISTORICOID","Visible")',ctrl:'CLASSFLUXOHISTORICOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOHISTORICODESCRICAO","Visible")',ctrl:'CLASSFLUXOHISTORICODESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOLANCMTOID","Visible")',ctrl:'CLASSFLUXOLANCMTOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOLANCMTODESCRICAO","Visible")',ctrl:'CLASSFLUXOLANCMTODESCRICAO',prop:'Visible'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{ctrl:'CLASSFLUXOHISTLANCSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOHISTLANCSEQ","Title")',ctrl:'CLASSFLUXOHISTLANCSEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CLASSFLUXOHISTORICOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOHISTORICOID","Title")',ctrl:'CLASSFLUXOHISTORICOID',prop:'Title'},{ctrl:'CLASSFLUXOHISTORICODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOHISTORICODESCRICAO","Title")',ctrl:'CLASSFLUXOHISTORICODESCRICAO',prop:'Title'},{ctrl:'CLASSFLUXOLANCMTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOLANCMTOID","Title")',ctrl:'CLASSFLUXOLANCMTOID',prop:'Title'},{ctrl:'CLASSFLUXOLANCMTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOLANCMTODESCRICAO","Title")',ctrl:'CLASSFLUXOLANCMTODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'}],[{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'A3324ClassFluxoHistLancSeq',fld:'CLASSFLUXOHISTLANCSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A3324ClassFluxoHistLancSeq',fld:'CLASSFLUXOHISTLANCSEQ'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'A3324ClassFluxoHistLancSeq',fld:'CLASSFLUXOHISTLANCSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A3324ClassFluxoHistLancSeq',fld:'CLASSFLUXOHISTLANCSEQ'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'A3324ClassFluxoHistLancSeq',fld:'CLASSFLUXOHISTLANCSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A3324ClassFluxoHistLancSeq',fld:'CLASSFLUXOHISTLANCSEQ'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV30ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'COPIARCODIGOS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV36TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV34ClassFluxoSelecaoTipo", "vCLASSFLUXOSELECAOTIPO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV36TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV34ClassFluxoSelecaoTipo", "vCLASSFLUXOSELECAOTIPO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar({rfrVar:"AV36TipoClassFluxoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34ClassFluxoSelecaoTipo"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassfluxohistlanc());
