/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:33.74
*/
gx.evt.autoSkip = false;
gx.define('hmenunivel2', false, function () {
   this.ServerClass =  "hmenunivel2" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A374MenuNivel2UltimoNivel3=gx.fn.getIntegerValue("MENUNIVEL2ULTIMONIVEL3",'.') ;
   };
   this.Valid_Sistemanivel2=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMANIVEL2", gx.fn.currentGridRowImpl(58));
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
   this.Valid_Programanivel2=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMANIVEL2", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e262v2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hcadastrarmenu",[this.A76MenuNivel1Id, this.A77MenuNivel2Id, 0]), []);
      this.refreshOutputs([]);
   };
   this.e112v2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122v2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202v2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212v2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162v2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132v2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152v2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e222v2_client=function()
   {
      this.executeServerEvent("'SOBE'", true, arguments[0], false, false);
   };
   this.e232v2_client=function()
   {
      this.executeServerEvent("'DESCE'", true, arguments[0], false, false);
   };
   this.e242v2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e252v2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e272v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e282v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,80,81,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmenunivel2",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(375,59,"MENUNIVEL2ORDEM","","","MenuNivel2Ordem","int",0,"px",4,4,"right",null,[],375,"MenuNivel2Ordem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(80,60,"MENUNIVEL2DESCRICAO","","","MenuNivel2Descricao","svchar",0,"px",40,40,"left",null,[],80,"MenuNivel2Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(376,61,"SISTEMANIVEL2","","","SistemaNivel2","char",0,"px",8,8,"left",null,[],376,"SistemaNivel2",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(377,62,"PROGRAMANIVEL2","","","ProgramaNivel2","int",0,"px",4,4,"right",null,[],377,"ProgramaNivel2",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(380,63,"PROGRAMANOMENIVEL2","","","ProgramaNomeNivel2","svchar",0,"px",40,40,"left",null,[],380,"ProgramaNomeNivel2",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(378,64,"PROGRAMALINKNIVEL2","Link","","ProgramaLinkNivel2","svchar",0,"px",40,40,"left",null,[],378,"ProgramaLinkNivel2",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpmen3","vBMPMEN3",65,0,"px",17,"px",null,"","Nível","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e202v2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e242v2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e212v2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcadmenu","vBMPCADMENU",69,0,"px",17,"px","e262v2_client","","Cadastrar Menu","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(76,70,"MENUNIVEL1ID","Código Nível 1","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(77,71,"MENUNIVEL2ID","Código Nível 2","","MenuNivel2Id","int",0,"px",7,7,"right",null,[],77,"MenuNivel2Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsob","vBMPSOB",72,0,"px",17,"px","e222v2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdes","vBMPDES",73,0,"px",17,"px","e232v2_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMENUNIVEL1ID",gxz:"ZV17MenuNivel1Id",gxold:"OV17MenuNivel1Id",gxvar:"AV17MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17MenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1ID",gx.O.AV17MenuNivel1Id,0)},c2v:function(){gx.O.AV17MenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL1NOME",gxz:"ZV21MenuNivel1Nome",gxold:"OV21MenuNivel1Nome",gxvar:"AV21MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21MenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV21MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1NOME",gx.O.AV21MenuNivel1Nome,0)},c2v:function(){gx.O.AV21MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSISTEMAID",gxz:"ZV19SistemaId",gxold:"OV19SistemaId",gxvar:"AV19SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SistemaId=Value},v2z:function(Value){gx.O.ZV19SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV19SistemaId,0)},c2v:function(){gx.O.AV19SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMAID",gxz:"ZV20ProgramaId",gxold:"OV20ProgramaId",gxvar:"AV20ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROGRAMAID",gx.O.AV20ProgramaId,0)},c2v:function(){gx.O.AV20ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROGRAMAID",'.')},nac:gx.falseFn};
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
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2ORDEM",gxz:"Z375MenuNivel2Ordem",gxold:"O375MenuNivel2Ordem",gxvar:"A375MenuNivel2Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A375MenuNivel2Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z375MenuNivel2Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ORDEM",row || gx.fn.currentGridRowImpl(58),gx.O.A375MenuNivel2Ordem,0)},c2v:function(){gx.O.A375MenuNivel2Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ORDEM",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2DESCRICAO",gxz:"Z80MenuNivel2Descricao",gxold:"O80MenuNivel2Descricao",gxvar:"A80MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A80MenuNivel2Descricao=Value},v2z:function(Value){gx.O.Z80MenuNivel2Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A80MenuNivel2Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A80MenuNivel2Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:this.Valid_Sistemanivel2,isvalid:null,rgrid:[],fld:"SISTEMANIVEL2",gxz:"Z376SistemaNivel2",gxold:"O376SistemaNivel2",gxvar:"A376SistemaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A376SistemaNivel2=Value},v2z:function(Value){gx.O.Z376SistemaNivel2=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANIVEL2",row || gx.fn.currentGridRowImpl(58),gx.O.A376SistemaNivel2,0)},c2v:function(){gx.O.A376SistemaNivel2=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANIVEL2",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:this.Valid_Programanivel2,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL2",gxz:"Z377ProgramaNivel2",gxold:"O377ProgramaNivel2",gxvar:"A377ProgramaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A377ProgramaNivel2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z377ProgramaNivel2=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANIVEL2",row || gx.fn.currentGridRowImpl(58),gx.O.A377ProgramaNivel2,0)},c2v:function(){gx.O.A377ProgramaNivel2=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMANIVEL2",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOMENIVEL2",gxz:"Z380ProgramaNomeNivel2",gxold:"O380ProgramaNomeNivel2",gxvar:"A380ProgramaNomeNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A380ProgramaNomeNivel2=Value},v2z:function(Value){gx.O.Z380ProgramaNomeNivel2=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOMENIVEL2",row || gx.fn.currentGridRowImpl(58),gx.O.A380ProgramaNomeNivel2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A380ProgramaNomeNivel2=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOMENIVEL2",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINKNIVEL2",gxz:"Z378ProgramaLinkNivel2",gxold:"O378ProgramaLinkNivel2",gxvar:"A378ProgramaLinkNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A378ProgramaLinkNivel2=Value},v2z:function(Value){gx.O.Z378ProgramaLinkNivel2=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINKNIVEL2",row || gx.fn.currentGridRowImpl(58),gx.O.A378ProgramaLinkNivel2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A378ProgramaLinkNivel2=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINKNIVEL2",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMEN3",gxz:"ZV18bmpMen3",gxold:"OV18bmpMen3",gxvar:"AV18bmpMen3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18bmpMen3=Value},v2z:function(Value){gx.O.ZV18bmpMen3=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMEN3",row || gx.fn.currentGridRowImpl(58),gx.O.AV18bmpMen3,gx.O.AV37Bmpmen3_GXI)},c2v:function(){gx.O.AV37Bmpmen3_GXI=this.val_GXI();gx.O.AV18bmpMen3=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMEN3",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMEN3_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV37Bmpmen3_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCADMENU",gxz:"ZV32bmpCadMenu",gxold:"OV32bmpCadMenu",gxvar:"AV32bmpCadMenu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpCadMenu=Value},v2z:function(Value){gx.O.ZV32bmpCadMenu=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCADMENU",row || gx.fn.currentGridRowImpl(58),gx.O.AV32bmpCadMenu,gx.O.AV41Bmpcadmenu_GXI)},c2v:function(){gx.O.AV41Bmpcadmenu_GXI=this.val_GXI();gx.O.AV32bmpCadMenu=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCADMENU",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCADMENU_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV41Bmpcadmenu_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(58),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(58),gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOB",gxz:"ZV22bmpSob",gxold:"OV22bmpSob",gxvar:"AV22bmpSob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpSob=Value},v2z:function(Value){gx.O.ZV22bmpSob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOB",row || gx.fn.currentGridRowImpl(58),gx.O.AV22bmpSob,gx.O.AV42Bmpsob_GXI)},c2v:function(){gx.O.AV42Bmpsob_GXI=this.val_GXI();gx.O.AV22bmpSob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOB",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOB_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV42Bmpsob_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDES",gxz:"ZV23bmpDes",gxold:"OV23bmpDes",gxvar:"AV23bmpDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpDes=Value},v2z:function(Value){gx.O.ZV23bmpDes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDES",row || gx.fn.currentGridRowImpl(58),gx.O.AV23bmpDes,gx.O.AV43Bmpdes_GXI)},c2v:function(){gx.O.AV43Bmpdes_GXI=this.val_GXI();gx.O.AV23bmpDes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDES",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDES_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV43Bmpdes_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"PROMPT_SISTEMAID",grid:0};
   GXValidFnc[82]={fld:"PROMPT_PROGRAMAID",grid:0};
   this.AV17MenuNivel1Id = 0 ;
   this.ZV17MenuNivel1Id = 0 ;
   this.OV17MenuNivel1Id = 0 ;
   this.AV21MenuNivel1Nome = "" ;
   this.ZV21MenuNivel1Nome = "" ;
   this.OV21MenuNivel1Nome = "" ;
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
   this.Z375MenuNivel2Ordem = 0 ;
   this.O375MenuNivel2Ordem = 0 ;
   this.Z80MenuNivel2Descricao = "" ;
   this.O80MenuNivel2Descricao = "" ;
   this.Z376SistemaNivel2 = "" ;
   this.O376SistemaNivel2 = "" ;
   this.Z377ProgramaNivel2 = 0 ;
   this.O377ProgramaNivel2 = 0 ;
   this.Z380ProgramaNomeNivel2 = "" ;
   this.O380ProgramaNomeNivel2 = "" ;
   this.Z378ProgramaLinkNivel2 = "" ;
   this.O378ProgramaLinkNivel2 = "" ;
   this.ZV18bmpMen3 = "" ;
   this.OV18bmpMen3 = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV32bmpCadMenu = "" ;
   this.OV32bmpCadMenu = "" ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.ZV22bmpSob = "" ;
   this.OV22bmpSob = "" ;
   this.ZV23bmpDes = "" ;
   this.OV23bmpDes = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17MenuNivel1Id = 0 ;
   this.AV21MenuNivel1Nome = "" ;
   this.AV19SistemaId = "" ;
   this.AV20ProgramaId = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A374MenuNivel2UltimoNivel3 = 0 ;
   this.A375MenuNivel2Ordem = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.A376SistemaNivel2 = "" ;
   this.A377ProgramaNivel2 = 0 ;
   this.A380ProgramaNomeNivel2 = "" ;
   this.A378ProgramaLinkNivel2 = "" ;
   this.AV18bmpMen3 = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV32bmpCadMenu = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.AV22bmpSob = "" ;
   this.AV23bmpDes = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e112v2_client": ["'ANTERIOR'", true] ,"e122v2_client": ["'PROXIMO'", true] ,"e202v2_client": ["'ALTERAR'", true] ,"e212v2_client": ["'CONSULTAR'", true] ,"e162v2_client": ["VPAGINA.CLICK", true] ,"e132v2_client": ["'NOVO'", true] ,"e142v2_client": ["'FECHAR'", true] ,"e152v2_client": ["'PROCURAR'", true] ,"e222v2_client": ["'SOBE'", true] ,"e232v2_client": ["'DESCE'", true] ,"e242v2_client": ["'EXCLUIR'", true] ,"e252v2_client": ["'ATUALIZAPAGINA'", true] ,"e272v2_client": ["ENTER", true] ,"e282v2_client": ["CANCEL", true] ,"e262v2_client": ["'CADASTRARMENU'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'}],[{ctrl:'MENUNIVEL2DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2DESCRICAO","Title")',ctrl:'MENUNIVEL2DESCRICAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SISTEMANIVEL2',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANIVEL2","Title")',ctrl:'SISTEMANIVEL2',prop:'Title'},{ctrl:'PROGRAMANIVEL2',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANIVEL2","Title")',ctrl:'PROGRAMANIVEL2',prop:'Title'},{ctrl:'PROGRAMANOMENIVEL2',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOMENIVEL2","Title")',ctrl:'PROGRAMANOMENIVEL2',prop:'Title'},{ctrl:'MENUNIVEL2ORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2ORDEM","Title")',ctrl:'MENUNIVEL2ORDEM',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'}],[{av:'AV18bmpMen3',fld:'vBMPMEN3'},{av:'gx.fn.getCtrlProperty("vBMPMEN3","Tooltiptext")',ctrl:'vBMPMEN3',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPMEN3","Link")',ctrl:'vBMPMEN3',prop:'Link'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpCadMenu',fld:'vBMPCADMENU'},{av:'gx.fn.getCtrlProperty("vBMPCADMENU","Tooltiptext")',ctrl:'vBMPCADMENU',prop:'Tooltiptext'},{av:'AV22bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV23bmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'}],[{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SOBE'"] = [[{av:'A375MenuNivel2Ordem',fld:'MENUNIVEL2ORDEM'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'}],[{av:'A375MenuNivel2Ordem',fld:'MENUNIVEL2ORDEM'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'DESCE'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A375MenuNivel2Ordem',fld:'MENUNIVEL2ORDEM'}],[{av:'A375MenuNivel2Ordem',fld:'MENUNIVEL2ORDEM'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'AV30Diretorio',fld:'vDIRETORIO'}],[{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'}]];
   this.EvtParms["'CADASTRARMENU'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV20ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A374MenuNivel2UltimoNivel3',fld:'MENUNIVEL2ULTIMONIVEL3'},{av:'AV21MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'}],[]];
   this.setPrompt("PROMPT_SISTEMAID", [25]);
   this.setPrompt("PROMPT_PROGRAMAID", [30]);
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A374MenuNivel2UltimoNivel3", "MENUNIVEL2ULTIMONIVEL3", 0, "int");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A374MenuNivel2UltimoNivel3", "MENUNIVEL2ULTIMONIVEL3", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A374MenuNivel2UltimoNivel3"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"A77MenuNivel2Id", rfrProp:"Value", gxAttId:"77"});
   GridContainer.addRefreshingVar({rfrVar:"A80MenuNivel2Descricao", rfrProp:"Value", gxAttId:"80"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmenunivel2());
