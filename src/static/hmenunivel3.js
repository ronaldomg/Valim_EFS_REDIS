/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:37.78
*/
gx.evt.autoSkip = false;
gx.define('hmenunivel3', false, function () {
   this.ServerClass =  "hmenunivel3" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Sistemanivel3=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMANIVEL3", gx.fn.currentGridRowImpl(58));
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
   this.Valid_Programanivel3=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMANIVEL3", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e262w2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hcadastrarmenu",[this.A76MenuNivel1Id, this.A77MenuNivel2Id, this.A78MenuNivel3Id]), []);
      this.refreshOutputs([]);
   };
   this.e112w2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122w2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202w2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212w2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162w2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132w2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152w2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e222w2_client=function()
   {
      this.executeServerEvent("'SOBE'", true, arguments[0], false, false);
   };
   this.e232w2_client=function()
   {
      this.executeServerEvent("'DESCE'", true, arguments[0], false, false);
   };
   this.e242w2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e252w2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e272w2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e282w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,23,25,28,30,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,79,81,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmenunivel3",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(382,59,"MENUNIVEL3ORDEM","","","MenuNivel3Ordem","int",0,"px",4,4,"right",null,[],382,"MenuNivel3Ordem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(81,60,"MENUNIVEL3DESCRICAO","","","MenuNivel3Descricao","svchar",0,"px",40,40,"left",null,[],81,"MenuNivel3Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(383,61,"SISTEMANIVEL3","","","SistemaNivel3","char",0,"px",8,8,"left",null,[],383,"SistemaNivel3",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(384,62,"PROGRAMANIVEL3","","","ProgramaNivel3","int",0,"px",4,4,"right",null,[],384,"ProgramaNivel3",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(387,63,"PROGRAMANOMENIVEL3","","","ProgramaNomeNivel3","svchar",0,"px",40,40,"left",null,[],387,"ProgramaNomeNivel3",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(385,64,"PROGRAMALINKNIVEL3","Link","","ProgramaLinkNivel3","svchar",0,"px",40,40,"left",null,[],385,"ProgramaLinkNivel3",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",65,0,"px",17,"px","e202w2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",66,0,"px",17,"px","e242w2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",67,0,"px",17,"px","e212w2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(76,68,"MENUNIVEL1ID","Código Nível 1","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(77,69,"MENUNIVEL2ID","Código Nível 2","","MenuNivel2Id","int",0,"px",7,7,"right",null,[],77,"MenuNivel2Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(78,70,"MENUNIVEL3ID","Código Nível 3","","MenuNivel3Id","int",0,"px",7,7,"right",null,[],78,"MenuNivel3Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcadmenu","vBMPCADMENU",71,0,"px",17,"px","e262w2_client","","Cadastrar Menu","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsob","vBMPSOB",72,0,"px",17,"px","e222w2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdes","vBMPDES",73,0,"px",17,"px","e232w2_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMENUNIVEL1ID",gxz:"ZV17MenuNivel1Id",gxold:"OV17MenuNivel1Id",gxvar:"AV17MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17MenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1ID",gx.O.AV17MenuNivel1Id,0)},c2v:function(){gx.O.AV17MenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL1NOME",gxz:"ZV21MenuNivel1Nome",gxold:"OV21MenuNivel1Nome",gxvar:"AV21MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21MenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV21MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1NOME",gx.O.AV21MenuNivel1Nome,0)},c2v:function(){gx.O.AV21MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMENUNIVEL2ID",gxz:"ZV18MenuNivel2Id",gxold:"OV18MenuNivel2Id",gxvar:"AV18MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18MenuNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMENUNIVEL2ID",gx.O.AV18MenuNivel2Id,0)},c2v:function(){gx.O.AV18MenuNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMENUNIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL2DESCRICAO",gxz:"ZV22MenuNivel2Descricao",gxold:"OV22MenuNivel2Descricao",gxvar:"AV22MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22MenuNivel2Descricao=Value},v2z:function(Value){gx.O.ZV22MenuNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL2DESCRICAO",gx.O.AV22MenuNivel2Descricao,0)},c2v:function(){gx.O.AV22MenuNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL2DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSISTEMAID",gxz:"ZV19SistemaId",gxold:"OV19SistemaId",gxvar:"AV19SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SistemaId=Value},v2z:function(Value){gx.O.ZV19SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV19SistemaId,0)},c2v:function(){gx.O.AV19SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMAID",gxz:"ZV20ProgramaId",gxold:"OV20ProgramaId",gxvar:"AV20ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROGRAMAID",gx.O.AV20ProgramaId,0)},c2v:function(){gx.O.AV20ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3ORDEM",gxz:"Z382MenuNivel3Ordem",gxold:"O382MenuNivel3Ordem",gxvar:"A382MenuNivel3Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A382MenuNivel3Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z382MenuNivel3Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3ORDEM",row || gx.fn.currentGridRowImpl(58),gx.O.A382MenuNivel3Ordem,0)},c2v:function(){gx.O.A382MenuNivel3Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL3ORDEM",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3DESCRICAO",gxz:"Z81MenuNivel3Descricao",gxold:"O81MenuNivel3Descricao",gxvar:"A81MenuNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A81MenuNivel3Descricao=Value},v2z:function(Value){gx.O.Z81MenuNivel3Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A81MenuNivel3Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A81MenuNivel3Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:this.Valid_Sistemanivel3,isvalid:null,rgrid:[],fld:"SISTEMANIVEL3",gxz:"Z383SistemaNivel3",gxold:"O383SistemaNivel3",gxvar:"A383SistemaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A383SistemaNivel3=Value},v2z:function(Value){gx.O.Z383SistemaNivel3=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANIVEL3",row || gx.fn.currentGridRowImpl(58),gx.O.A383SistemaNivel3,0)},c2v:function(){gx.O.A383SistemaNivel3=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANIVEL3",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:this.Valid_Programanivel3,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL3",gxz:"Z384ProgramaNivel3",gxold:"O384ProgramaNivel3",gxvar:"A384ProgramaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A384ProgramaNivel3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z384ProgramaNivel3=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANIVEL3",row || gx.fn.currentGridRowImpl(58),gx.O.A384ProgramaNivel3,0)},c2v:function(){gx.O.A384ProgramaNivel3=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMANIVEL3",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOMENIVEL3",gxz:"Z387ProgramaNomeNivel3",gxold:"O387ProgramaNomeNivel3",gxvar:"A387ProgramaNomeNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A387ProgramaNomeNivel3=Value},v2z:function(Value){gx.O.Z387ProgramaNomeNivel3=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOMENIVEL3",row || gx.fn.currentGridRowImpl(58),gx.O.A387ProgramaNomeNivel3,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A387ProgramaNomeNivel3=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOMENIVEL3",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINKNIVEL3",gxz:"Z385ProgramaLinkNivel3",gxold:"O385ProgramaLinkNivel3",gxvar:"A385ProgramaLinkNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A385ProgramaLinkNivel3=Value},v2z:function(Value){gx.O.Z385ProgramaLinkNivel3=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINKNIVEL3",row || gx.fn.currentGridRowImpl(58),gx.O.A385ProgramaLinkNivel3,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A385ProgramaLinkNivel3=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINKNIVEL3",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(58),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(58),gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3ID",gxz:"Z78MenuNivel3Id",gxold:"O78MenuNivel3Id",gxvar:"A78MenuNivel3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A78MenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z78MenuNivel3Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(58),gx.O.A78MenuNivel3Id,0)},c2v:function(){gx.O.A78MenuNivel3Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCADMENU",gxz:"ZV34bmpCadMenu",gxold:"OV34bmpCadMenu",gxvar:"AV34bmpCadMenu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpCadMenu=Value},v2z:function(Value){gx.O.ZV34bmpCadMenu=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCADMENU",row || gx.fn.currentGridRowImpl(58),gx.O.AV34bmpCadMenu,gx.O.AV42Bmpcadmenu_GXI)},c2v:function(){gx.O.AV42Bmpcadmenu_GXI=this.val_GXI();gx.O.AV34bmpCadMenu=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCADMENU",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCADMENU_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV42Bmpcadmenu_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOB",gxz:"ZV23bmpSob",gxold:"OV23bmpSob",gxvar:"AV23bmpSob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpSob=Value},v2z:function(Value){gx.O.ZV23bmpSob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOB",row || gx.fn.currentGridRowImpl(58),gx.O.AV23bmpSob,gx.O.AV43Bmpsob_GXI)},c2v:function(){gx.O.AV43Bmpsob_GXI=this.val_GXI();gx.O.AV23bmpSob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOB",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOB_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV43Bmpsob_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDES",gxz:"ZV24bmpDes",gxold:"OV24bmpDes",gxvar:"AV24bmpDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24bmpDes=Value},v2z:function(Value){gx.O.ZV24bmpDes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDES",row || gx.fn.currentGridRowImpl(58),gx.O.AV24bmpDes,gx.O.AV44Bmpdes_GXI)},c2v:function(){gx.O.AV44Bmpdes_GXI=this.val_GXI();gx.O.AV24bmpDes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDES",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDES_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpdes_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"PROMPT_SISTEMAID",grid:0};
   GXValidFnc[82]={fld:"PROMPT_PROGRAMAID",grid:0};
   this.AV17MenuNivel1Id = 0 ;
   this.ZV17MenuNivel1Id = 0 ;
   this.OV17MenuNivel1Id = 0 ;
   this.AV21MenuNivel1Nome = "" ;
   this.ZV21MenuNivel1Nome = "" ;
   this.OV21MenuNivel1Nome = "" ;
   this.AV18MenuNivel2Id = 0 ;
   this.ZV18MenuNivel2Id = 0 ;
   this.OV18MenuNivel2Id = 0 ;
   this.AV22MenuNivel2Descricao = "" ;
   this.ZV22MenuNivel2Descricao = "" ;
   this.OV22MenuNivel2Descricao = "" ;
   this.AV19SistemaId = "" ;
   this.ZV19SistemaId = "" ;
   this.OV19SistemaId = "" ;
   this.AV20ProgramaId = 0 ;
   this.ZV20ProgramaId = 0 ;
   this.OV20ProgramaId = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z382MenuNivel3Ordem = 0 ;
   this.O382MenuNivel3Ordem = 0 ;
   this.Z81MenuNivel3Descricao = "" ;
   this.O81MenuNivel3Descricao = "" ;
   this.Z383SistemaNivel3 = "" ;
   this.O383SistemaNivel3 = "" ;
   this.Z384ProgramaNivel3 = 0 ;
   this.O384ProgramaNivel3 = 0 ;
   this.Z387ProgramaNomeNivel3 = "" ;
   this.O387ProgramaNomeNivel3 = "" ;
   this.Z385ProgramaLinkNivel3 = "" ;
   this.O385ProgramaLinkNivel3 = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.Z78MenuNivel3Id = 0 ;
   this.O78MenuNivel3Id = 0 ;
   this.ZV34bmpCadMenu = "" ;
   this.OV34bmpCadMenu = "" ;
   this.ZV23bmpSob = "" ;
   this.OV23bmpSob = "" ;
   this.ZV24bmpDes = "" ;
   this.OV24bmpDes = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17MenuNivel1Id = 0 ;
   this.AV21MenuNivel1Nome = "" ;
   this.AV18MenuNivel2Id = 0 ;
   this.AV22MenuNivel2Descricao = "" ;
   this.AV19SistemaId = "" ;
   this.AV20ProgramaId = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A382MenuNivel3Ordem = 0 ;
   this.A81MenuNivel3Descricao = "" ;
   this.A383SistemaNivel3 = "" ;
   this.A384ProgramaNivel3 = 0 ;
   this.A387ProgramaNomeNivel3 = "" ;
   this.A385ProgramaLinkNivel3 = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A78MenuNivel3Id = 0 ;
   this.AV34bmpCadMenu = "" ;
   this.AV23bmpSob = "" ;
   this.AV24bmpDes = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e112w2_client": ["'ANTERIOR'", true] ,"e122w2_client": ["'PROXIMO'", true] ,"e202w2_client": ["'ALTERAR'", true] ,"e212w2_client": ["'CONSULTAR'", true] ,"e162w2_client": ["VPAGINA.CLICK", true] ,"e132w2_client": ["'NOVO'", true] ,"e142w2_client": ["'FECHAR'", true] ,"e152w2_client": ["'PROCURAR'", true] ,"e222w2_client": ["'SOBE'", true] ,"e232w2_client": ["'DESCE'", true] ,"e242w2_client": ["'EXCLUIR'", true] ,"e252w2_client": ["'ATUALIZAPAGINA'", true] ,"e272w2_client": ["ENTER", true] ,"e282w2_client": ["CANCEL", true] ,"e262w2_client": ["'CADASTRARMENU'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'MENUNIVEL3DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3DESCRICAO","Title")',ctrl:'MENUNIVEL3DESCRICAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SISTEMANIVEL3',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANIVEL3","Title")',ctrl:'SISTEMANIVEL3',prop:'Title'},{ctrl:'PROGRAMANIVEL3',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANIVEL3","Title")',ctrl:'PROGRAMANIVEL3',prop:'Title'},{ctrl:'PROGRAMANOMENIVEL3',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOMENIVEL3","Title")',ctrl:'PROGRAMANOMENIVEL3',prop:'Title'},{ctrl:'MENUNIVEL3ORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3ORDEM","Title")',ctrl:'MENUNIVEL3ORDEM',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV31filtros',fld:'vFILTROS'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpCadMenu',fld:'vBMPCADMENU'},{av:'gx.fn.getCtrlProperty("vBMPCADMENU","Tooltiptext")',ctrl:'vBMPCADMENU',prop:'Tooltiptext'},{av:'AV23bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV24bmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'AV22MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV22MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO',hsh:true},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'AV22MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV22MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO',hsh:true},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'AV22MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO',hsh:true}],[{av:'AV22MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO',hsh:true},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true}],[{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME',hsh:true},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SOBE'"] = [[{av:'A382MenuNivel3Ordem',fld:'MENUNIVEL3ORDEM'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'}],[{av:'A382MenuNivel3Ordem',fld:'MENUNIVEL3ORDEM'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'DESCE'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'A382MenuNivel3Ordem',fld:'MENUNIVEL3ORDEM'}],[{av:'A382MenuNivel3Ordem',fld:'MENUNIVEL3ORDEM'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'AV32Diretorio',fld:'vDIRETORIO'}],[{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true}]];
   this.EvtParms["'CADASTRARMENU'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID',hsh:true},{av:'AV18MenuNivel2Id',fld:'vMENUNIVEL2ID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_SISTEMAID", [25]);
   this.setPrompt("PROMPT_PROGRAMAID", [30]);
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmenunivel3());
