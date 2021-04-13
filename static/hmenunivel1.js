/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:29.3
*/
gx.evt.autoSkip = false;
gx.define('hmenunivel1', false, function () {
   this.ServerClass =  "hmenunivel1" ;
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
      this.AV37SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A366MenuNivel1UltimoNivel2=gx.fn.getIntegerValue("MENUNIVEL1ULTIMONIVEL2",'.') ;
   };
   this.Valid_Sistemanivel1=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMANIVEL1", gx.fn.currentGridRowImpl(48));
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
   this.Valid_Programanivel1=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMANIVEL1", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e272u2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hcadastrarmenu",[this.A76MenuNivel1Id, 0, 0]), []);
      this.refreshOutputs([]);
   };
   this.e112u2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122u2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e212u2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e222u2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162u2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132u2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152u2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e232u2_client=function()
   {
      this.executeServerEvent("'SOBE'", true, arguments[0], false, false);
   };
   this.e242u2_client=function()
   {
      this.executeServerEvent("'DESCE'", true, arguments[0], false, false);
   };
   this.e252u2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e172u2_client=function()
   {
      this.executeServerEvent("'EXCLUITUDO'", true, null, false, false);
   };
   this.e262u2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e282u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e292u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,61,62,69,70,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmenunivel1",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(373,49,"MENUNIVEL1ORDEM","","","MenuNivel1Ordem","int",0,"px",4,4,"right",null,[],373,"MenuNivel1Ordem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(79,50,"MENUNIVEL1NOME","","","MenuNivel1Nome","svchar",0,"px",40,40,"left",null,[],79,"MenuNivel1Nome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(367,51,"SISTEMANIVEL1","","","SistemaNivel1","char",0,"px",8,8,"left",null,[],367,"SistemaNivel1",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(368,52,"PROGRAMANIVEL1","","","ProgramaNivel1","int",0,"px",4,4,"right",null,[],368,"ProgramaNivel1",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(371,53,"PROGRAMANOMENIVEL1","","","ProgramaNomeNivel1","svchar",0,"px",40,40,"left",null,[],371,"ProgramaNomeNivel1",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(369,54,"PROGRAMALINKNIVEL1","Link","","ProgramaLinkNivel1","svchar",0,"px",40,40,"left",null,[],369,"ProgramaLinkNivel1",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpmen2","vBMPMEN2",55,0,"px",17,"px",null,"","Nível","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",56,0,"px",17,"px","e212u2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e252u2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",58,0,"px",17,"px","e222u2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcadmenu","vBMPCADMENU",59,0,"px",17,"px","e272u2_client","","Cadastrar Menu","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsob","vBMPSOB",60,0,"px",17,"px","e232u2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdes","vBMPDES",61,0,"px",17,"px","e242u2_client","","Descer","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(76,62,"MENUNIVEL1ID","Código Nível 1","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSISTEMAID",gxz:"ZV17SistemaId",gxold:"OV17SistemaId",gxvar:"AV17SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SistemaId=Value},v2z:function(Value){gx.O.ZV17SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV17SistemaId,0)},c2v:function(){gx.O.AV17SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMAID",gxz:"ZV18ProgramaId",gxold:"OV18ProgramaId",gxvar:"AV18ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROGRAMAID",gx.O.AV18ProgramaId,0)},c2v:function(){gx.O.AV18ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"EXCLUITUDO",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ORDEM",gxz:"Z373MenuNivel1Ordem",gxold:"O373MenuNivel1Ordem",gxvar:"A373MenuNivel1Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A373MenuNivel1Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z373MenuNivel1Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ORDEM",row || gx.fn.currentGridRowImpl(48),gx.O.A373MenuNivel1Ordem,0)},c2v:function(){gx.O.A373MenuNivel1Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ORDEM",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(48),gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Sistemanivel1,isvalid:null,rgrid:[],fld:"SISTEMANIVEL1",gxz:"Z367SistemaNivel1",gxold:"O367SistemaNivel1",gxvar:"A367SistemaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A367SistemaNivel1=Value},v2z:function(Value){gx.O.Z367SistemaNivel1=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANIVEL1",row || gx.fn.currentGridRowImpl(48),gx.O.A367SistemaNivel1,0)},c2v:function(){gx.O.A367SistemaNivel1=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANIVEL1",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Programanivel1,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL1",gxz:"Z368ProgramaNivel1",gxold:"O368ProgramaNivel1",gxvar:"A368ProgramaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A368ProgramaNivel1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z368ProgramaNivel1=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANIVEL1",row || gx.fn.currentGridRowImpl(48),gx.O.A368ProgramaNivel1,0)},c2v:function(){gx.O.A368ProgramaNivel1=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMANIVEL1",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOMENIVEL1",gxz:"Z371ProgramaNomeNivel1",gxold:"O371ProgramaNomeNivel1",gxvar:"A371ProgramaNomeNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A371ProgramaNomeNivel1=Value},v2z:function(Value){gx.O.Z371ProgramaNomeNivel1=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOMENIVEL1",row || gx.fn.currentGridRowImpl(48),gx.O.A371ProgramaNomeNivel1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A371ProgramaNomeNivel1=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOMENIVEL1",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINKNIVEL1",gxz:"Z369ProgramaLinkNivel1",gxold:"O369ProgramaLinkNivel1",gxvar:"A369ProgramaLinkNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A369ProgramaLinkNivel1=Value},v2z:function(Value){gx.O.Z369ProgramaLinkNivel1=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINKNIVEL1",row || gx.fn.currentGridRowImpl(48),gx.O.A369ProgramaLinkNivel1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A369ProgramaLinkNivel1=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINKNIVEL1",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMEN2",gxz:"ZV19bmpMen2",gxold:"OV19bmpMen2",gxvar:"AV19bmpMen2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpMen2=Value},v2z:function(Value){gx.O.ZV19bmpMen2=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMEN2",row || gx.fn.currentGridRowImpl(48),gx.O.AV19bmpMen2,gx.O.AV43Bmpmen2_GXI)},c2v:function(){gx.O.AV43Bmpmen2_GXI=this.val_GXI();gx.O.AV19bmpMen2=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMEN2",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMEN2_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV43Bmpmen2_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCADMENU",gxz:"ZV38bmpcadmenu",gxold:"OV38bmpcadmenu",gxvar:"AV38bmpcadmenu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38bmpcadmenu=Value},v2z:function(Value){gx.O.ZV38bmpcadmenu=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCADMENU",row || gx.fn.currentGridRowImpl(48),gx.O.AV38bmpcadmenu,gx.O.AV47Bmpcadmenu_GXI)},c2v:function(){gx.O.AV47Bmpcadmenu_GXI=this.val_GXI();gx.O.AV38bmpcadmenu=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCADMENU",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCADMENU_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV47Bmpcadmenu_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOB",gxz:"ZV20bmpSob",gxold:"OV20bmpSob",gxvar:"AV20bmpSob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpSob=Value},v2z:function(Value){gx.O.ZV20bmpSob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOB",row || gx.fn.currentGridRowImpl(48),gx.O.AV20bmpSob,gx.O.AV48Bmpsob_GXI)},c2v:function(){gx.O.AV48Bmpsob_GXI=this.val_GXI();gx.O.AV20bmpSob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOB",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOB_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV48Bmpsob_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDES",gxz:"ZV21bmpDes",gxold:"OV21bmpDes",gxvar:"AV21bmpDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpDes=Value},v2z:function(Value){gx.O.ZV21bmpDes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDES",row || gx.fn.currentGridRowImpl(48),gx.O.AV21bmpDes,gx.O.AV49Bmpdes_GXI)},c2v:function(){gx.O.AV49Bmpdes_GXI=this.val_GXI();gx.O.AV21bmpDes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDES",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDES_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV49Bmpdes_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(48),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"PROMPT_SISTEMAID",grid:0};
   GXValidFnc[71]={fld:"PROMPT_PROGRAMAID",grid:0};
   this.AV17SistemaId = "" ;
   this.ZV17SistemaId = "" ;
   this.OV17SistemaId = "" ;
   this.AV18ProgramaId = 0 ;
   this.ZV18ProgramaId = 0 ;
   this.OV18ProgramaId = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z373MenuNivel1Ordem = 0 ;
   this.O373MenuNivel1Ordem = 0 ;
   this.Z79MenuNivel1Nome = "" ;
   this.O79MenuNivel1Nome = "" ;
   this.Z367SistemaNivel1 = "" ;
   this.O367SistemaNivel1 = "" ;
   this.Z368ProgramaNivel1 = 0 ;
   this.O368ProgramaNivel1 = 0 ;
   this.Z371ProgramaNomeNivel1 = "" ;
   this.O371ProgramaNomeNivel1 = "" ;
   this.Z369ProgramaLinkNivel1 = "" ;
   this.O369ProgramaLinkNivel1 = "" ;
   this.ZV19bmpMen2 = "" ;
   this.OV19bmpMen2 = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV38bmpcadmenu = "" ;
   this.OV38bmpcadmenu = "" ;
   this.ZV20bmpSob = "" ;
   this.OV20bmpSob = "" ;
   this.ZV21bmpDes = "" ;
   this.OV21bmpDes = "" ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17SistemaId = "" ;
   this.AV18ProgramaId = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A366MenuNivel1UltimoNivel2 = 0 ;
   this.A373MenuNivel1Ordem = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A367SistemaNivel1 = "" ;
   this.A368ProgramaNivel1 = 0 ;
   this.A371ProgramaNomeNivel1 = "" ;
   this.A369ProgramaLinkNivel1 = "" ;
   this.AV19bmpMen2 = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV38bmpcadmenu = "" ;
   this.AV20bmpSob = "" ;
   this.AV21bmpDes = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.AV37SnRecuperaFiltro = "" ;
   this.Events = {"e112u2_client": ["'ANTERIOR'", true] ,"e122u2_client": ["'PROXIMO'", true] ,"e212u2_client": ["'ALTERAR'", true] ,"e222u2_client": ["'CONSULTAR'", true] ,"e162u2_client": ["VPAGINA.CLICK", true] ,"e132u2_client": ["'NOVO'", true] ,"e142u2_client": ["'FECHAR'", true] ,"e152u2_client": ["'PROCURAR'", true] ,"e232u2_client": ["'SOBE'", true] ,"e242u2_client": ["'DESCE'", true] ,"e252u2_client": ["'EXCLUIR'", true] ,"e172u2_client": ["'EXCLUITUDO'", true] ,"e262u2_client": ["'ATUALIZAPAGINA'", true] ,"e282u2_client": ["ENTER", true] ,"e292u2_client": ["CANCEL", true] ,"e272u2_client": ["'CADASTRARMENU'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'}],[{ctrl:'MENUNIVEL1NOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1NOME","Title")',ctrl:'MENUNIVEL1NOME',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SISTEMANIVEL1',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANIVEL1","Title")',ctrl:'SISTEMANIVEL1',prop:'Title'},{ctrl:'PROGRAMANIVEL1',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANIVEL1","Title")',ctrl:'PROGRAMANIVEL1',prop:'Title'},{ctrl:'PROGRAMANOMENIVEL1',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOMENIVEL1","Title")',ctrl:'PROGRAMANOMENIVEL1',prop:'Title'},{ctrl:'MENUNIVEL1ORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1ORDEM","Title")',ctrl:'MENUNIVEL1ORDEM',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV29filtros',fld:'vFILTROS'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'}],[{av:'AV19bmpMen2',fld:'vBMPMEN2'},{av:'gx.fn.getCtrlProperty("vBMPMEN2","Tooltiptext")',ctrl:'vBMPMEN2',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPMEN2","Link")',ctrl:'vBMPMEN2',prop:'Link'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpcadmenu',fld:'vBMPCADMENU'},{av:'gx.fn.getCtrlProperty("vBMPCADMENU","Tooltiptext")',ctrl:'vBMPCADMENU',prop:'Tooltiptext'},{av:'AV20bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV21bmpDes',fld:'vBMPDES'},{av:'gx.fn.getCtrlProperty("vBMPDES","Tooltiptext")',ctrl:'vBMPDES',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SOBE'"] = [[{av:'A373MenuNivel1Ordem',fld:'MENUNIVEL1ORDEM'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}],[{av:'A373MenuNivel1Ordem',fld:'MENUNIVEL1ORDEM'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'DESCE'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A373MenuNivel1Ordem',fld:'MENUNIVEL1ORDEM'}],[{av:'A373MenuNivel1Ordem',fld:'MENUNIVEL1ORDEM'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'AV31Diretorio',fld:'vDIRETORIO'}],[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}]];
   this.EvtParms["'EXCLUITUDO'"] = [[{av:'AV33CategoriaNivel1Id',fld:'vCATEGORIANIVEL1ID'},{av:'AV32CategoriaNivel1Descricao',fld:'vCATEGORIANIVEL1DESCRICAO'},{av:'AV34UsuarioIdCat1',fld:'vUSUARIOIDCAT1'}],[{av:'AV36SnExcluiu',fld:'vSNEXCLUIU'},{av:'AV34UsuarioIdCat1',fld:'vUSUARIOIDCAT1'},{av:'AV32CategoriaNivel1Descricao',fld:'vCATEGORIANIVEL1DESCRICAO'},{av:'AV33CategoriaNivel1Id',fld:'vCATEGORIANIVEL1ID'}]];
   this.EvtParms["'CADASTRARMENU'"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17SistemaId',fld:'vSISTEMAID'},{av:'AV18ProgramaId',fld:'vPROGRAMAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A366MenuNivel1UltimoNivel2',fld:'MENUNIVEL1ULTIMONIVEL2'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'}],[]];
   this.setPrompt("PROMPT_SISTEMAID", [13]);
   this.setPrompt("PROMPT_PROGRAMAID", [18]);
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A366MenuNivel1UltimoNivel2", "MENUNIVEL1ULTIMONIVEL2", 0, "int");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A366MenuNivel1UltimoNivel2", "MENUNIVEL1ULTIMONIVEL2", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV37SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A366MenuNivel1UltimoNivel2"});
   GridContainer.addRefreshingVar({rfrVar:"A76MenuNivel1Id", rfrProp:"Value", gxAttId:"76"});
   GridContainer.addRefreshingVar({rfrVar:"A79MenuNivel1Nome", rfrProp:"Value", gxAttId:"79"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmenunivel1());
