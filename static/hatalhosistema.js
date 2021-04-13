/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:4.40
*/
gx.evt.autoSkip = false;
gx.define('hatalhosistema', false, function () {
   this.ServerClass =  "hatalhosistema" ;
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
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(28) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(28));
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
   this.e110c2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e120c2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e190c2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e200c2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e210c2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e150c2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e130c2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e140c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e220c2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e230c2_client=function()
   {
      this.executeServerEvent("'SOBENIVEL'", true, arguments[0], false, false);
   };
   this.e240c2_client=function()
   {
      this.executeServerEvent("'DESCENIVEL'", true, arguments[0], false, false);
   };
   this.e250c2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e260c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e270c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,36,37,38,39,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hatalhosistema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10506,29,"ATALHOSISTEMANOICONEHOME","Número do ícone da home","","AtalhoSistemaNoIconeHome","int",0,"px",4,4,"right",null,[],10506,"AtalhoSistemaNoIconeHome",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(142,30,"ATALHOSISTEMANOICONE","Número do Ícone","","AtalhoSistemaNoIcone","int",0,"px",2,2,"right",null,[],142,"AtalhoSistemaNoIcone",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(144,31,"ATALHOSISTEMAID","","","AtalhoSistemaId","int",0,"px",2,2,"right",null,[],144,"AtalhoSistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(140,32,"SISTEMAID","","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(145,33,"PROGRAMANOME","","","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(143,34,"ATALHOSISTEMAORDEM","","","AtalhoSistemaOrdem","int",0,"px",4,4,"right",null,[],143,"AtalhoSistemaOrdem",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",35,0,"px",17,"px","e190c2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",36,0,"px",17,"px","e200c2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",37,0,"px",17,"px","e210c2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsobe","vBMPSOBE",38,0,"px",17,"px","e230c2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesce","vBMPDESCE",39,0,"px",17,"px","e240c2_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATALHOSISTEMANOICONEHOME",gxz:"Z10506AtalhoSistemaNoIconeHome",gxold:"O10506AtalhoSistemaNoIconeHome",gxvar:"A10506AtalhoSistemaNoIconeHome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10506AtalhoSistemaNoIconeHome=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10506AtalhoSistemaNoIconeHome=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATALHOSISTEMANOICONEHOME",row || gx.fn.currentGridRowImpl(28),gx.O.A10506AtalhoSistemaNoIconeHome,0)},c2v:function(){gx.O.A10506AtalhoSistemaNoIconeHome=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATALHOSISTEMANOICONEHOME",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATALHOSISTEMANOICONE",gxz:"Z142AtalhoSistemaNoIcone",gxold:"O142AtalhoSistemaNoIcone",gxvar:"A142AtalhoSistemaNoIcone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A142AtalhoSistemaNoIcone=gx.num.intval(Value)},v2z:function(Value){gx.O.Z142AtalhoSistemaNoIcone=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATALHOSISTEMANOICONE",row || gx.fn.currentGridRowImpl(28),gx.O.A142AtalhoSistemaNoIcone,0)},c2v:function(){gx.O.A142AtalhoSistemaNoIcone=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATALHOSISTEMANOICONE",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATALHOSISTEMAID",gxz:"Z144AtalhoSistemaId",gxold:"O144AtalhoSistemaId",gxvar:"A144AtalhoSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A144AtalhoSistemaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z144AtalhoSistemaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATALHOSISTEMAID",row || gx.fn.currentGridRowImpl(28),gx.O.A144AtalhoSistemaId,0)},c2v:function(){gx.O.A144AtalhoSistemaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATALHOSISTEMAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(28),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(28),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ATALHOSISTEMAORDEM",gxz:"Z143AtalhoSistemaOrdem",gxold:"O143AtalhoSistemaOrdem",gxvar:"A143AtalhoSistemaOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A143AtalhoSistemaOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z143AtalhoSistemaOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ATALHOSISTEMAORDEM",row || gx.fn.currentGridRowImpl(28),gx.O.A143AtalhoSistemaOrdem,0)},c2v:function(){gx.O.A143AtalhoSistemaOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ATALHOSISTEMAORDEM",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV35Bmpcon_GXI)},c2v:function(){gx.O.AV35Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV35Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV21bmpSobe",gxold:"OV21bmpSobe",gxvar:"AV21bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpSobe=Value},v2z:function(Value){gx.O.ZV21bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(28),gx.O.AV21bmpSobe,gx.O.AV36Bmpsobe_GXI)},c2v:function(){gx.O.AV36Bmpsobe_GXI=this.val_GXI();gx.O.AV21bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV36Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCE",gxz:"ZV22bmpDesce",gxold:"OV22bmpDesce",gxvar:"AV22bmpDesce",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpDesce=Value},v2z:function(Value){gx.O.ZV22bmpDesce=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCE",row || gx.fn.currentGridRowImpl(28),gx.O.AV22bmpDesce,gx.O.AV37Bmpdesce_GXI)},c2v:function(){gx.O.AV37Bmpdesce_GXI=this.val_GXI();gx.O.AV22bmpDesce=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCE",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCE_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV37Bmpdesce_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z10506AtalhoSistemaNoIconeHome = 0 ;
   this.O10506AtalhoSistemaNoIconeHome = 0 ;
   this.Z142AtalhoSistemaNoIcone = 0 ;
   this.O142AtalhoSistemaNoIcone = 0 ;
   this.Z144AtalhoSistemaId = 0 ;
   this.O144AtalhoSistemaId = 0 ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.Z143AtalhoSistemaOrdem = 0 ;
   this.O143AtalhoSistemaOrdem = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV21bmpSobe = "" ;
   this.OV21bmpSobe = "" ;
   this.ZV22bmpDesce = "" ;
   this.OV22bmpDesce = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A141ProgramaId = 0 ;
   this.A10506AtalhoSistemaNoIconeHome = 0 ;
   this.A142AtalhoSistemaNoIcone = 0 ;
   this.A144AtalhoSistemaId = 0 ;
   this.A140SistemaId = "" ;
   this.A145ProgramaNome = "" ;
   this.A143AtalhoSistemaOrdem = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV21bmpSobe = "" ;
   this.AV22bmpDesce = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e110c2_client": ["'ANTERIOR'", true] ,"e120c2_client": ["'PROXIMO'", true] ,"e190c2_client": ["'ALTERAR'", true] ,"e200c2_client": ["'EXCLUIR'", true] ,"e210c2_client": ["'CONSULTAR'", true] ,"e150c2_client": ["VPAGINA.CLICK", true] ,"e130c2_client": ["'NOVO'", true] ,"e140c2_client": ["'FECHAR'", true] ,"e220c2_client": ["'ATUALIZAR'", true] ,"e230c2_client": ["'SOBENIVEL'", true] ,"e240c2_client": ["'DESCENIVEL'", true] ,"e250c2_client": ["'ATUALIZAPAGINA'", true] ,"e260c2_client": ["ENTER", true] ,"e270c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'}],[{ctrl:'ATALHOSISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ATALHOSISTEMAID","Title")',ctrl:'ATALHOSISTEMAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAID","Title")',ctrl:'SISTEMAID',prop:'Title'},{ctrl:'PROGRAMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOME","Title")',ctrl:'PROGRAMANOME',prop:'Title'},{ctrl:'ATALHOSISTEMAORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ATALHOSISTEMAORDEM","Title")',ctrl:'ATALHOSISTEMAORDEM',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV26filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV21bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV22bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SOBENIVEL'"] = [[{av:'A143AtalhoSistemaOrdem',fld:'ATALHOSISTEMAORDEM'}],[{av:'A143AtalhoSistemaOrdem',fld:'ATALHOSISTEMAORDEM'}]];
   this.EvtParms["'DESCENIVEL'"] = [[{av:'A143AtalhoSistemaOrdem',fld:'ATALHOSISTEMAORDEM'}],[{av:'AV23UltimaOrdemAtalho',fld:'vULTIMAORDEMATALHO'},{av:'A143AtalhoSistemaOrdem',fld:'ATALHOSISTEMAORDEM'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A144AtalhoSistemaId',fld:'ATALHOSISTEMAID'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A10506AtalhoSistemaNoIconeHome',fld:'ATALHOSISTEMANOICONEHOME'}],[]];
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A144AtalhoSistemaId", rfrProp:"Value", gxAttId:"144"});
   GridContainer.addRefreshingVar({rfrVar:"A142AtalhoSistemaNoIcone", rfrProp:"Value", gxAttId:"142"});
   GridContainer.addRefreshingVar({rfrVar:"A10506AtalhoSistemaNoIconeHome", rfrProp:"Value", gxAttId:"10506"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatalhosistema());
