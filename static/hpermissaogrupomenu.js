/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:26.59
*/
gx.evt.autoSkip = false;
gx.define('hpermissaogrupomenu', false, function () {
   this.ServerClass =  "hpermissaogrupomenu" ;
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
      this.AV24SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A420PermissaoGrupoMenuId=gx.fn.getIntegerValue("PERMISSAOGRUPOMENUID",'.') ;
   };
   this.Valid_Menunivel1id=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL1ID", gx.fn.currentGridRowImpl(41));
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
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL2ID", gx.fn.currentGridRowImpl(41));
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
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MENUNIVEL3ID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e113a2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123a2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e153a2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133a2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e203a2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e163a2_client=function()
   {
      this.executeServerEvent("'COPIARPERMISSAO'", true, null, false, false);
   };
   this.e213a2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e223a2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,21,24,26,28,30,32,35,37,38,42,43,44,45,46,47,48,49,50,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpermissaogrupomenu",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(79,42,"MENUNIVEL1NOME","","","MenuNivel1Nome","svchar",0,"px",40,40,"left",null,[],79,"MenuNivel1Nome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(80,43,"MENUNIVEL2DESCRICAO","","","MenuNivel2Descricao","svchar",0,"px",40,40,"left",null,[],80,"MenuNivel2Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(81,44,"MENUNIVEL3DESCRICAO","","","MenuNivel3Descricao","svchar",0,"px",40,40,"left",null,[],81,"MenuNivel3Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",45,0,"px",17,"px",null,"","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",46,0,"px",17,"px",null,"","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(244,47,"GRUPOID","Grupo","","GrupoId","int",0,"px",7,7,"right",null,[],244,"GrupoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(76,48,"MENUNIVEL1ID","Código Nível 1","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(77,49,"MENUNIVEL2ID","Código Nível 2","","MenuNivel2Id","int",0,"px",7,7,"right",null,[],77,"MenuNivel2Id",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(78,50,"MENUNIVEL3ID","Código Nível 3","","MenuNivel3Id","int",0,"px",7,7,"right",null,[],78,"MenuNivel3Id",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOID",gxz:"ZV16GrupoId",gxold:"OV16GrupoId",gxvar:"AV16GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16GrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOID",gx.O.AV16GrupoId,0)},c2v:function(){gx.O.AV16GrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPONOME",gxz:"ZV17GrupoNome",gxold:"OV17GrupoNome",gxvar:"AV17GrupoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GrupoNome=Value},v2z:function(Value){gx.O.ZV17GrupoNome=Value},v2c:function(){gx.fn.setControlValue("vGRUPONOME",gx.O.AV17GrupoNome,0)},c2v:function(){gx.O.AV17GrupoNome=this.val()},val:function(){return gx.fn.getControlValue("vGRUPONOME")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLE10",grid:0};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNCOPIAR",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(41),gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2DESCRICAO",gxz:"Z80MenuNivel2Descricao",gxold:"O80MenuNivel2Descricao",gxvar:"A80MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A80MenuNivel2Descricao=Value},v2z:function(Value){gx.O.Z80MenuNivel2Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A80MenuNivel2Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A80MenuNivel2Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3DESCRICAO",gxz:"Z81MenuNivel3Descricao",gxold:"O81MenuNivel3Descricao",gxvar:"A81MenuNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A81MenuNivel3Descricao=Value},v2z:function(Value){gx.O.Z81MenuNivel3Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A81MenuNivel3Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A81MenuNivel3Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpExc,gx.O.AV29Bmpexc_GXI)},c2v:function(){gx.O.AV29Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV29Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV15bmpCon",gxold:"OV15bmpCon",gxvar:"AV15bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpCon=Value},v2z:function(Value){gx.O.ZV15bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV15bmpCon,gx.O.AV30Bmpcon_GXI)},c2v:function(){gx.O.AV30Bmpcon_GXI=this.val_GXI();gx.O.AV15bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV30Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOID",gxz:"Z244GrupoId",gxold:"O244GrupoId",gxvar:"A244GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A244GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z244GrupoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOID",row || gx.fn.currentGridRowImpl(41),gx.O.A244GrupoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A244GrupoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Menunivel1id,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(41),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Menunivel2id,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(41),gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Menunivel3id,isvalid:null,rgrid:[],fld:"MENUNIVEL3ID",gxz:"Z78MenuNivel3Id",gxold:"O78MenuNivel3Id",gxvar:"A78MenuNivel3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A78MenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z78MenuNivel3Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(41),gx.O.A78MenuNivel3Id,0)},c2v:function(){gx.O.A78MenuNivel3Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV10OrderedBy",gxold:"OV10OrderedBy",gxvar:"AV10OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV10OrderedBy,0)},c2v:function(){gx.O.AV10OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16GrupoId = 0 ;
   this.ZV16GrupoId = 0 ;
   this.OV16GrupoId = 0 ;
   this.AV17GrupoNome = "" ;
   this.ZV17GrupoNome = "" ;
   this.OV17GrupoNome = "" ;
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
   this.Z244GrupoId = 0 ;
   this.O244GrupoId = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.Z78MenuNivel3Id = 0 ;
   this.O78MenuNivel3Id = 0 ;
   this.AV10OrderedBy = 0 ;
   this.ZV10OrderedBy = 0 ;
   this.OV10OrderedBy = 0 ;
   this.AV16GrupoId = 0 ;
   this.AV17GrupoNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV10OrderedBy = 0 ;
   this.A420PermissaoGrupoMenuId = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A80MenuNivel2Descricao = "" ;
   this.A81MenuNivel3Descricao = "" ;
   this.AV7bmpExc = "" ;
   this.AV15bmpCon = "" ;
   this.A244GrupoId = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A78MenuNivel3Id = 0 ;
   this.AV24SnRecuperaFiltro = "" ;
   this.Events = {"e113a2_client": ["'ANTERIOR'", true] ,"e123a2_client": ["'PROXIMO'", true] ,"e153a2_client": ["VPAGINA.CLICK", true] ,"e133a2_client": ["'NOVO'", true] ,"e143a2_client": ["'FECHAR'", true] ,"e203a2_client": ["'ATUALIZAR'", true] ,"e163a2_client": ["'COPIARPERMISSAO'", true] ,"e213a2_client": ["ENTER", true] ,"e223a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[{ctrl:'MENUNIVEL1NOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1NOME","Title")',ctrl:'MENUNIVEL1NOME',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'},{ctrl:'MENUNIVEL2DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2DESCRICAO","Title")',ctrl:'MENUNIVEL2DESCRICAO',prop:'Title'},{ctrl:'MENUNIVEL3DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3DESCRICAO","Title")',ctrl:'MENUNIVEL3DESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV9NumPagina',fld:'vNUMPAGINA'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV17GrupoNome',fld:'vGRUPONOME'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIARPERMISSAO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV24SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A420PermissaoGrupoMenuId',fld:'PERMISSAOGRUPOMENUID'},{av:'AV17GrupoNome',fld:'vGRUPONOME'}],[{av:'AV17GrupoNome',fld:'vGRUPONOME'},{av:'AV16GrupoId',fld:'vGRUPOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV24SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A420PermissaoGrupoMenuId", "PERMISSAOGRUPOMENUID", 0, "int");
   this.setVCMap("AV24SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A420PermissaoGrupoMenuId", "PERMISSAOGRUPOMENUID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV24SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar({rfrVar:"A420PermissaoGrupoMenuId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpermissaogrupomenu());
