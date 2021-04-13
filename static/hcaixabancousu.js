/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:8:18.24
*/
gx.evt.autoSkip = false;
gx.define('hcaixabancousu', false, function () {
   this.ServerClass =  "hcaixabancousu" ;
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
      this.AV30PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Caixabancousucxabcoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUCXABCOID", gx.fn.currentGridRowImpl(41));
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
   this.Valid_Caixabancousucxabcoempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOUSUCXABCOEMPID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11a72_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12a72_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e21a72_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22a72_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23a72_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16a72_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13a72_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14a72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15a72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e17a72_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e24a72_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e25a72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26a72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27a72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,19,22,24,26,28,30,32,35,37,38,42,43,44,45,46,47,48,49,50,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcaixabancousu",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1766,42,"CAIXABANCOUSUCXABCOID","","","CaixaBancoUsuCxaBcoId","int",0,"px",5,5,"right",null,[],1766,"CaixaBancoUsuCxaBcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1767,43,"CAIXABANCOUSUCXABCODESCRICAO","","","CaixaBancoUsuCxaBcoDescricao","svchar",0,"px",25,25,"left",null,[],1767,"CaixaBancoUsuCxaBcoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpduplica","vBMPDUPLICA",44,0,"px",17,"px","e24a72_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",45,0,"px",17,"px","e21a72_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",46,0,"px",17,"px","e22a72_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",47,0,"px",17,"px","e23a72_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1076,48,"PERMISSAOUSUCXACONTAEMPRESAID","Empresa","","PermissaoUsuCxaContaEmpresaId","char",0,"px",10,10,"left",null,[],1076,"PermissaoUsuCxaContaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1771,49,"PERMISSAOUSUCXACONTAUSUARIOID","Usuário","","PermissaoUsuCxaContaUsuarioId","char",0,"px",12,12,"left",null,[],1771,"PermissaoUsuCxaContaUsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1765,50,"CAIXABANCOUSUCXABCOEMPID","Empresa","","CaixaBancoUsuCxaBcoEmpId","char",0,"px",10,10,"left",null,[],1765,"CaixaBancoUsuCxaBcoEmpId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAOUSUCXACONTAUSUARIOID",gxz:"ZV29PermissaoUsuCxaContaUsuarioId",gxold:"OV29PermissaoUsuCxaContaUsuarioId",gxvar:"AV29PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.ZV29PermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOUSUCXACONTAUSUARIOID",gx.O.AV29PermissaoUsuCxaContaUsuarioId,0)},c2v:function(){gx.O.AV29PermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE4",grid:0};
   GXValidFnc[19]={fld:"TABLE6",grid:0};
   GXValidFnc[22]={fld:"IMAGE2",grid:0};
   GXValidFnc[24]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[26]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[28]={fld:"BTNHELP",grid:0};
   GXValidFnc[30]={fld:"IMAGE1",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Caixabancousucxabcoid,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUCXABCOID",gxz:"Z1766CaixaBancoUsuCxaBcoId",gxold:"O1766CaixaBancoUsuCxaBcoId",gxvar:"A1766CaixaBancoUsuCxaBcoId",ucs:[],op:[43],ip:[43,42,50],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1766CaixaBancoUsuCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1766CaixaBancoUsuCxaBcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOUSUCXABCOID",row || gx.fn.currentGridRowImpl(41),gx.O.A1766CaixaBancoUsuCxaBcoId,0)},c2v:function(){gx.O.A1766CaixaBancoUsuCxaBcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXABANCOUSUCXABCOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUCXABCODESCRICAO",gxz:"Z1767CaixaBancoUsuCxaBcoDescricao",gxold:"O1767CaixaBancoUsuCxaBcoDescricao",gxvar:"A1767CaixaBancoUsuCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1767CaixaBancoUsuCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1767CaixaBancoUsuCxaBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOUSUCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A1767CaixaBancoUsuCxaBcoDescricao,0)},c2v:function(){gx.O.A1767CaixaBancoUsuCxaBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOUSUCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPLICA",gxz:"ZV31bmpDuplica",gxold:"OV31bmpDuplica",gxvar:"AV31bmpDuplica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpDuplica=Value},v2z:function(Value){gx.O.ZV31bmpDuplica=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPLICA",row || gx.fn.currentGridRowImpl(41),gx.O.AV31bmpDuplica,gx.O.AV40Bmpduplica_GXI)},c2v:function(){gx.O.AV40Bmpduplica_GXI=this.val_GXI();gx.O.AV31bmpDuplica=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPLICA",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPLICA_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV40Bmpduplica_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAEMPRESAID",gxz:"Z1076PermissaoUsuCxaContaEmpresaId",gxold:"O1076PermissaoUsuCxaContaEmpresaId",gxvar:"A1076PermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1076PermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.Z1076PermissaoUsuCxaContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A1076PermissaoUsuCxaContaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1076PermissaoUsuCxaContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Caixabancousucxabcoempid,isvalid:null,rgrid:[],fld:"CAIXABANCOUSUCXABCOEMPID",gxz:"Z1765CaixaBancoUsuCxaBcoEmpId",gxold:"O1765CaixaBancoUsuCxaBcoEmpId",gxvar:"A1765CaixaBancoUsuCxaBcoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1765CaixaBancoUsuCxaBcoEmpId=Value},v2z:function(Value){gx.O.Z1765CaixaBancoUsuCxaBcoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOUSUCXABCOEMPID",row || gx.fn.currentGridRowImpl(41),gx.O.A1765CaixaBancoUsuCxaBcoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1765CaixaBancoUsuCxaBcoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOUSUCXABCOEMPID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JSABR", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV29PermissaoUsuCxaContaUsuarioId = "" ;
   this.ZV29PermissaoUsuCxaContaUsuarioId = "" ;
   this.OV29PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1766CaixaBancoUsuCxaBcoId = 0 ;
   this.O1766CaixaBancoUsuCxaBcoId = 0 ;
   this.Z1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.O1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.ZV31bmpDuplica = "" ;
   this.OV31bmpDuplica = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.O1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.O1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV29PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV30PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1766CaixaBancoUsuCxaBcoId = 0 ;
   this.A1767CaixaBancoUsuCxaBcoDescricao = "" ;
   this.AV31bmpDuplica = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1765CaixaBancoUsuCxaBcoEmpId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.Events = {"e11a72_client": ["'ANTERIOR'", true] ,"e12a72_client": ["'PROXIMO'", true] ,"e21a72_client": ["'ALTERAR'", true] ,"e22a72_client": ["'EXCLUIR'", true] ,"e23a72_client": ["'CONSULTAR'", true] ,"e16a72_client": ["VPAGINA.CLICK", true] ,"e13a72_client": ["'NOVO'", true] ,"e14a72_client": ["'FECHAR'", true] ,"e15a72_client": ["'PROCURAR'", true] ,"e17a72_client": ["'COPIAR'", true] ,"e24a72_client": ["'DUPLICAR'", true] ,"e25a72_client": ["'ATUALIZAPAGINA'", true] ,"e26a72_client": ["ENTER", true] ,"e27a72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CAIXABANCOUSUCXABCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCOUSUCXABCOID","Title")',ctrl:'CAIXABANCOUSUCXABCOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CAIXABANCOUSUCXABCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCOUSUCXABCODESCRICAO","Title")',ctrl:'CAIXABANCOUSUCXABCODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpDuplica',fld:'vBMPDUPLICA'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICA","Tooltiptext")',ctrl:'vBMPDUPLICA',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'}],[{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1765CaixaBancoUsuCxaBcoEmpId',fld:'CAIXABANCOUSUCXABCOEMPID'},{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'A1767CaixaBancoUsuCxaBcoDescricao',fld:'CAIXABANCOUSUCXABCODESCRICAO'}],[{av:'A1767CaixaBancoUsuCxaBcoDescricao',fld:'CAIXABANCOUSUCXABCODESCRICAO'},{av:'A1766CaixaBancoUsuCxaBcoId',fld:'CAIXABANCOUSUCXABCOID'},{av:'A1765CaixaBancoUsuCxaBcoEmpId',fld:'CAIXABANCOUSUCXABCOEMPID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV29PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV30PermissaoUsuCxaContaEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcaixabancousu());
