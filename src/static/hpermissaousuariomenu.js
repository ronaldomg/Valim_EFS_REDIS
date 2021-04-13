/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:29.21
*/
gx.evt.autoSkip = false;
gx.define('hpermissaousuariomenu', false, function () {
   this.ServerClass =  "hpermissaousuariomenu" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Menunivel1id=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL1ID", gx.fn.currentGridRowImpl(48));
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
   this.Valid_Menunivel2id=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL2ID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Menunivel3id=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL3ID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e113b2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123b2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e213b2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e223b2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e153b2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133b2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e233b2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e163b2_client=function()
   {
      this.executeServerEvent("'EXCLUIRMENU'", true, null, false, false);
   };
   this.e173b2_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e243b2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e253b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e263b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpermissaousuariomenu",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(79,49,"MENUNIVEL1NOME","","","MenuNivel1Nome","svchar",0,"px",40,40,"left",null,[],79,"MenuNivel1Nome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(80,50,"MENUNIVEL2DESCRICAO","","","MenuNivel2Descricao","svchar",0,"px",40,40,"left",null,[],80,"MenuNivel2Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(81,51,"MENUNIVEL3DESCRICAO","","","MenuNivel3Descricao","svchar",0,"px",40,40,"left",null,[],81,"MenuNivel3Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e213b2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e223b2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(76,54,"MENUNIVEL1ID","Código Nível 1","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(77,55,"MENUNIVEL2ID","Código Nível 2","","MenuNivel2Id","int",0,"px",7,7,"right",null,[],77,"MenuNivel2Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(78,56,"MENUNIVEL3ID","Código Nível 3","","MenuNivel3Id","int",0,"px",7,7,"right",null,[],78,"MenuNivel3Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(75,57,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(74,58,"PERMISSAOUSUARIOMENUID","Código","","PermissaoUsuarioMenuId","int",0,"px",7,7,"right",null,[],74,"PermissaoUsuarioMenuId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV16UsuarioId",gxold:"OV16UsuarioId",gxvar:"AV16UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UsuarioId=Value},v2z:function(Value){gx.O.ZV16UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV16UsuarioId,0)},c2v:function(){gx.O.AV16UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV17UsuarioNome",gxold:"OV17UsuarioNome",gxvar:"AV17UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17UsuarioNome=Value},v2z:function(Value){gx.O.ZV17UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV17UsuarioNome,0)},c2v:function(){gx.O.AV17UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE7",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNCOPIAR",grid:0};
   GXValidFnc[37]={fld:"BTNEXCMENUS",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(48),gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2DESCRICAO",gxz:"Z80MenuNivel2Descricao",gxold:"O80MenuNivel2Descricao",gxvar:"A80MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A80MenuNivel2Descricao=Value},v2z:function(Value){gx.O.Z80MenuNivel2Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A80MenuNivel2Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A80MenuNivel2Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3DESCRICAO",gxz:"Z81MenuNivel3Descricao",gxold:"O81MenuNivel3Descricao",gxvar:"A81MenuNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A81MenuNivel3Descricao=Value},v2z:function(Value){gx.O.Z81MenuNivel3Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A81MenuNivel3Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A81MenuNivel3Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpExc,gx.O.AV28Bmpexc_GXI)},c2v:function(){gx.O.AV28Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV28Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV15bmpCon",gxold:"OV15bmpCon",gxvar:"AV15bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpCon=Value},v2z:function(Value){gx.O.ZV15bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV15bmpCon,gx.O.AV29Bmpcon_GXI)},c2v:function(){gx.O.AV29Bmpcon_GXI=this.val_GXI();gx.O.AV15bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV29Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Menunivel1id,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(48),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Menunivel2id,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(48),gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Menunivel3id,isvalid:null,rgrid:[],fld:"MENUNIVEL3ID",gxz:"Z78MenuNivel3Id",gxold:"O78MenuNivel3Id",gxvar:"A78MenuNivel3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A78MenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z78MenuNivel3Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(48),gx.O.A78MenuNivel3Id,0)},c2v:function(){gx.O.A78MenuNivel3Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(48),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOMENUID",gxz:"Z74PermissaoUsuarioMenuId",gxold:"O74PermissaoUsuarioMenuId",gxvar:"A74PermissaoUsuarioMenuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A74PermissaoUsuarioMenuId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z74PermissaoUsuarioMenuId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUARIOMENUID",row || gx.fn.currentGridRowImpl(48),gx.O.A74PermissaoUsuarioMenuId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A74PermissaoUsuarioMenuId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PERMISSAOUSUARIOMENUID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV10OrderedBy",gxold:"OV10OrderedBy",gxvar:"AV10OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV10OrderedBy,0)},c2v:function(){gx.O.AV10OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16UsuarioId = "" ;
   this.ZV16UsuarioId = "" ;
   this.OV16UsuarioId = "" ;
   this.AV17UsuarioNome = "" ;
   this.ZV17UsuarioNome = "" ;
   this.OV17UsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z79MenuNivel1Nome = "" ;
   this.O79MenuNivel1Nome = "" ;
   this.Z80MenuNivel2Descricao = "" ;
   this.O80MenuNivel2Descricao = "" ;
   this.Z81MenuNivel3Descricao = "" ;
   this.O81MenuNivel3Descricao = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV15bmpCon = "" ;
   this.OV15bmpCon = "" ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.Z78MenuNivel3Id = 0 ;
   this.O78MenuNivel3Id = 0 ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z74PermissaoUsuarioMenuId = 0 ;
   this.O74PermissaoUsuarioMenuId = 0 ;
   this.AV10OrderedBy = 0 ;
   this.ZV10OrderedBy = 0 ;
   this.OV10OrderedBy = 0 ;
   this.AV16UsuarioId = "" ;
   this.AV17UsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV10OrderedBy = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A80MenuNivel2Descricao = "" ;
   this.A81MenuNivel3Descricao = "" ;
   this.AV7bmpExc = "" ;
   this.AV15bmpCon = "" ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A78MenuNivel3Id = 0 ;
   this.A75UsuarioId = "" ;
   this.A74PermissaoUsuarioMenuId = 0 ;
   this.AV23SnRecuperaFiltro = "" ;
   this.Events = {"e113b2_client": ["'ANTERIOR'", true] ,"e123b2_client": ["'PROXIMO'", true] ,"e213b2_client": ["'EXCLUIR'", true] ,"e223b2_client": ["'CONSULTAR'", true] ,"e153b2_client": ["VPAGINA.CLICK", true] ,"e133b2_client": ["'NOVO'", true] ,"e143b2_client": ["'FECHAR'", true] ,"e233b2_client": ["'ATUALIZAR'", true] ,"e163b2_client": ["'EXCLUIRMENU'", true] ,"e173b2_client": ["'COPIAR'", true] ,"e243b2_client": ["'ATUALIZAPAGINA'", true] ,"e253b2_client": ["ENTER", true] ,"e263b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'MENUNIVEL1NOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1NOME","Title")',ctrl:'MENUNIVEL1NOME',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'},{ctrl:'MENUNIVEL2DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2DESCRICAO","Title")',ctrl:'MENUNIVEL2DESCRICAO',prop:'Title'},{ctrl:'MENUNIVEL3DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3DESCRICAO","Title")',ctrl:'MENUNIVEL3DESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV9NumPagina',fld:'vNUMPAGINA'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV21filtros',fld:'vFILTROS'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A74PermissaoUsuarioMenuId',fld:'PERMISSAOUSUARIOMENUID'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17UsuarioNome',fld:'vUSUARIONOME'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'A74PermissaoUsuarioMenuId',fld:'PERMISSAOUSUARIOMENUID'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A74PermissaoUsuarioMenuId',fld:'PERMISSAOUSUARIOMENUID'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17UsuarioNome',fld:'vUSUARIONOME'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'A74PermissaoUsuarioMenuId',fld:'PERMISSAOUSUARIOMENUID'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV17UsuarioNome',fld:'vUSUARIONOME'},{av:'AV16UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIRMENU'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17UsuarioNome',fld:'vUSUARIONOME'}],[{av:'AV17UsuarioNome',fld:'vUSUARIONOME'},{av:'AV16UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16UsuarioId',fld:'vUSUARIOID'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setVCMap("AV23SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV23SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV23SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpermissaousuariomenu());
