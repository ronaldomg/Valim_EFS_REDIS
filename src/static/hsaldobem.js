/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:30:56.35
*/
gx.evt.autoSkip = false;
gx.define('hsaldobem', false, function () {
   this.ServerClass =  "hsaldobem" ;
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
      this.AV43Snaprocreicms=gx.fn.getControlValue("vSNAPROCREICMS") ;
      this.AV52SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2264BemDescricaoResumida=gx.fn.getControlValue("BEMDESCRICAORESUMIDA") ;
   };
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e24et1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmaprovcredito",[]), []);
      this.refreshOutputs([]);
   };
   this.e11et2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12et2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16et2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13et2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14et2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15et2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19et2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20et2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21et2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22et2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25et2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26et2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,26,29,31,36,39,42,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68,69,70,71,72,73,79,81,82,83,90];
   this.GXLastCtrlId =90;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaldobem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2261,62,"BEMEMPRESAID","Empresa do HistoricoBem","","BemEmpresaId","char",0,"px",10,10,"left",null,[],2261,"BemEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2262,63,"BEMCODIGO","Código do HistoricoBem","","BemCodigo","int",0,"px",7,7,"right",null,[],2262,"BemCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2318,64,"BEMSUBGRUPO","Subgrupo","","BemSubgrupo","int",0,"px",2,2,"right",null,[],2318,"BemSubgrupo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2415,65,"SALDOBEMANO","","","SaldoBemAno","int",0,"px",4,4,"right",null,[],2415,"SaldoBemAno",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2435,66,"SALDOBEMVLRBEM","","","SaldoBemVlrBem","decimal",0,"px",22,22,"right",null,[],2435,"SaldoBemVlrBem",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2439,67,"SALDOBEMVLRCORBEM","","","SaldoBemVlrCorBem","decimal",0,"px",22,22,"right",null,[],2439,"SaldoBemVlrCorBem",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2436,68,"SALDOBEMVLRREDUTORA","","","SaldoBemVlrRedutora","decimal",0,"px",22,22,"right",null,[],2436,"SaldoBemVlrRedutora",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2438,69,"SALDOBEMVLRCORREDUTORA","","","SaldoBemVlrCorRedutora","decimal",0,"px",22,22,"right",null,[],2438,"SaldoBemVlrCorRedutora",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2437,70,"SALDOBEMVLRICMS","","","SaldoBemVlrIcms","decimal",0,"px",22,22,"right",null,[],2437,"SaldoBemVlrIcms",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",71,0,"px",17,"px","e19et2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",72,0,"px",17,"px","e20et2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",73,0,"px",17,"px","e21et2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE10",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE11",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMCODIGO",gxz:"ZV27BemCodigo",gxold:"OV27BemCodigo",gxvar:"AV27BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV27BemCodigo,0)},c2v:function(){gx.O.AV27BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMSUBGRUPO",gxz:"ZV28BemSubgrupo",gxold:"OV28BemSubgrupo",gxvar:"AV28BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV28BemSubgrupo,0)},c2v:function(){gx.O.AV28BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV30BemDescricaoResumida",gxold:"OV30BemDescricaoResumida",gxvar:"AV30BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV30BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV30BemDescricaoResumida,0)},c2v:function(){gx.O.AV30BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSALDOBEMANO",gxz:"ZV49SaldoBemAno",gxold:"OV49SaldoBemAno",gxvar:"AV49SaldoBemAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SaldoBemAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49SaldoBemAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSALDOBEMANO",gx.O.AV49SaldoBemAno,0)},c2v:function(){gx.O.AV49SaldoBemAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSALDOBEMANO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"BTNPARM",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMEMPRESAID",gxz:"Z2261BemEmpresaId",gxold:"O2261BemEmpresaId",gxvar:"A2261BemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2261BemEmpresaId=Value},v2z:function(Value){gx.O.Z2261BemEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BEMEMPRESAID",row || gx.fn.currentGridRowImpl(61),gx.O.A2261BemEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2261BemEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMEMPRESAID",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(61),gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(61),gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMANO",gxz:"Z2415SaldoBemAno",gxold:"O2415SaldoBemAno",gxvar:"A2415SaldoBemAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2415SaldoBemAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2415SaldoBemAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SALDOBEMANO",row || gx.fn.currentGridRowImpl(61),gx.O.A2415SaldoBemAno,0)},c2v:function(){gx.O.A2415SaldoBemAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SALDOBEMANO",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMVLRBEM",gxz:"Z2435SaldoBemVlrBem",gxold:"O2435SaldoBemVlrBem",gxvar:"A2435SaldoBemVlrBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2435SaldoBemVlrBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2435SaldoBemVlrBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOBEMVLRBEM",row || gx.fn.currentGridRowImpl(61),gx.O.A2435SaldoBemVlrBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2435SaldoBemVlrBem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOBEMVLRBEM",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMVLRCORBEM",gxz:"Z2439SaldoBemVlrCorBem",gxold:"O2439SaldoBemVlrCorBem",gxvar:"A2439SaldoBemVlrCorBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2439SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2439SaldoBemVlrCorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOBEMVLRCORBEM",row || gx.fn.currentGridRowImpl(61),gx.O.A2439SaldoBemVlrCorBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2439SaldoBemVlrCorBem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOBEMVLRCORBEM",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMVLRREDUTORA",gxz:"Z2436SaldoBemVlrRedutora",gxold:"O2436SaldoBemVlrRedutora",gxvar:"A2436SaldoBemVlrRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2436SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2436SaldoBemVlrRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOBEMVLRREDUTORA",row || gx.fn.currentGridRowImpl(61),gx.O.A2436SaldoBemVlrRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2436SaldoBemVlrRedutora=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOBEMVLRREDUTORA",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMVLRCORREDUTORA",gxz:"Z2438SaldoBemVlrCorRedutora",gxold:"O2438SaldoBemVlrCorRedutora",gxvar:"A2438SaldoBemVlrCorRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2438SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2438SaldoBemVlrCorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOBEMVLRCORREDUTORA",row || gx.fn.currentGridRowImpl(61),gx.O.A2438SaldoBemVlrCorRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2438SaldoBemVlrCorRedutora=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOBEMVLRCORREDUTORA",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOBEMVLRICMS",gxz:"Z2437SaldoBemVlrIcms",gxold:"O2437SaldoBemVlrIcms",gxvar:"A2437SaldoBemVlrIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2437SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2437SaldoBemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOBEMVLRICMS",row || gx.fn.currentGridRowImpl(61),gx.O.A2437SaldoBemVlrIcms,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2437SaldoBemVlrIcms=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOBEMVLRICMS",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV59Bmpalt_GXI)},c2v:function(){gx.O.AV59Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV59Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV60Bmpexc_GXI)},c2v:function(){gx.O.AV60Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV60Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV61Bmpcon_GXI)},c2v:function(){gx.O.AV61Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV61Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV51QtCaracter",gxold:"OV51QtCaracter",gxvar:"AV51QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV51QtCaracter,0)},c2v:function(){gx.O.AV51QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   this.AV27BemCodigo = 0 ;
   this.ZV27BemCodigo = 0 ;
   this.OV27BemCodigo = 0 ;
   this.AV28BemSubgrupo = 0 ;
   this.ZV28BemSubgrupo = 0 ;
   this.OV28BemSubgrupo = 0 ;
   this.AV30BemDescricaoResumida = "" ;
   this.ZV30BemDescricaoResumida = "" ;
   this.OV30BemDescricaoResumida = "" ;
   this.AV49SaldoBemAno = 0 ;
   this.ZV49SaldoBemAno = 0 ;
   this.OV49SaldoBemAno = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2261BemEmpresaId = "" ;
   this.O2261BemEmpresaId = "" ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.Z2415SaldoBemAno = 0 ;
   this.O2415SaldoBemAno = 0 ;
   this.Z2435SaldoBemVlrBem = 0 ;
   this.O2435SaldoBemVlrBem = 0 ;
   this.Z2439SaldoBemVlrCorBem = 0 ;
   this.O2439SaldoBemVlrCorBem = 0 ;
   this.Z2436SaldoBemVlrRedutora = 0 ;
   this.O2436SaldoBemVlrRedutora = 0 ;
   this.Z2438SaldoBemVlrCorRedutora = 0 ;
   this.O2438SaldoBemVlrCorRedutora = 0 ;
   this.Z2437SaldoBemVlrIcms = 0 ;
   this.O2437SaldoBemVlrIcms = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV51QtCaracter = 0 ;
   this.ZV51QtCaracter = 0 ;
   this.OV51QtCaracter = 0 ;
   this.AV27BemCodigo = 0 ;
   this.AV28BemSubgrupo = 0 ;
   this.AV30BemDescricaoResumida = "" ;
   this.AV49SaldoBemAno = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV51QtCaracter = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2415SaldoBemAno = 0 ;
   this.A2435SaldoBemVlrBem = 0 ;
   this.A2439SaldoBemVlrCorBem = 0 ;
   this.A2436SaldoBemVlrRedutora = 0 ;
   this.A2438SaldoBemVlrCorRedutora = 0 ;
   this.A2437SaldoBemVlrIcms = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.AV43Snaprocreicms = "" ;
   this.AV52SnRecuperaFiltro = "" ;
   this.Events = {"e11et2_client": ["'ANTERIOR'", true] ,"e12et2_client": ["'PROXIMO'", true] ,"e16et2_client": ["VPAGINA.CLICK", true] ,"e13et2_client": ["'NOVO'", true] ,"e14et2_client": ["'FECHAR'", true] ,"e15et2_client": ["'PROCURAR'", true] ,"e19et2_client": ["'ALTERAR'", true] ,"e20et2_client": ["'EXCLUIR'", true] ,"e21et2_client": ["'CONSULTAR'", true] ,"e22et2_client": ["'ATUALIZAPAGINA'", true] ,"e25et2_client": ["ENTER", true] ,"e26et2_client": ["CANCEL", true] ,"e24et1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'}],[{ctrl:'SALDOBEMANO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOBEMANO","Title")',ctrl:'SALDOBEMANO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SALDOBEMVLRBEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOBEMVLRBEM","Title")',ctrl:'SALDOBEMVLRBEM',prop:'Title'},{ctrl:'SALDOBEMVLRCORBEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOBEMVLRCORBEM","Title")',ctrl:'SALDOBEMVLRCORBEM',prop:'Title'},{ctrl:'SALDOBEMVLRREDUTORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOBEMVLRREDUTORA","Title")',ctrl:'SALDOBEMVLRREDUTORA',prop:'Title'},{ctrl:'SALDOBEMVLRCORREDUTORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOBEMVLRCORREDUTORA","Title")',ctrl:'SALDOBEMVLRCORREDUTORA',prop:'Title'},{ctrl:'SALDOBEMVLRICMS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOBEMVLRICMS","Title")',ctrl:'SALDOBEMVLRICMS',prop:'Title'},{av:'gx.fn.getCtrlProperty("SALDOBEMVLRICMS","Visible")',ctrl:'SALDOBEMVLRICMS',prop:'Visible'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV30BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV42SnError',fld:'vSNERROR'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'}],[{av:'AV42SnError',fld:'vSNERROR'},{av:'AV63GXLvl280',fld:'vGXLVL280'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'},{av:'AV42SnError',fld:'vSNERROR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV42SnError',fld:'vSNERROR'},{av:'AV63GXLvl280',fld:'vGXLVL280'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2415SaldoBemAno',fld:'SALDOBEMANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2415SaldoBemAno',fld:'SALDOBEMANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2415SaldoBemAno',fld:'SALDOBEMANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV49SaldoBemAno',fld:'vSALDOBEMANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV51QtCaracter',fld:'vQTCARACTER'}],[]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [20,24]);
   this.setVCMap("AV43Snaprocreicms", "vSNAPROCREICMS", 0, "svchar");
   this.setVCMap("AV52SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2264BemDescricaoResumida", "BEMDESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("AV43Snaprocreicms", "vSNAPROCREICMS", 0, "svchar");
   this.setVCMap("AV52SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2264BemDescricaoResumida", "BEMDESCRICAORESUMIDA", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV43Snaprocreicms"});
   GridContainer.addRefreshingVar({rfrVar:"AV52SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2261BemEmpresaId", rfrProp:"Value", gxAttId:"2261"});
   GridContainer.addRefreshingVar({rfrVar:"A2262BemCodigo", rfrProp:"Value", gxAttId:"2262"});
   GridContainer.addRefreshingVar({rfrVar:"A2318BemSubgrupo", rfrProp:"Value", gxAttId:"2318"});
   GridContainer.addRefreshingVar({rfrVar:"A2264BemDescricaoResumida"});
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaldobem());
