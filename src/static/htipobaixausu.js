/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:8:11.76
*/
gx.evt.autoSkip = false;
gx.define('htipobaixausu', false, function () {
   this.ServerClass =  "htipobaixausu" ;
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
      this.AV29PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Tipobaixausutpbaixapagrec=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(39) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAUSUTPBAIXAPAGREC", gx.fn.currentGridRowImpl(39));
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
   this.Valid_Tipobaixausutpbaixasigla=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(39) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAUSUTPBAIXASIGLA", gx.fn.currentGridRowImpl(39));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipobaixausutpbaixaempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(39) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TIPOBAIXAUSUTPBAIXAEMPID", gx.fn.currentGridRowImpl(39));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11a52_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12a52_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20a52_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21a52_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16a52_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13a52_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14a52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15a52_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e22a52_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23a52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e24a52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,19,22,24,26,28,30,33,35,36,40,41,42,43,44,45,46,47,48,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",39,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipobaixausu",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Tipopagrec",40,"vTIPOPAGREC","Tipo Pag Rec","","TipoPagRec","char",0,"px",7,7,"left",null,[],"Tipopagrec","TipoPagRec",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1755,41,"TIPOBAIXAUSUTPBAIXAPAGREC","Pagar/Receber","","TipoBaixaUsuTpBaixaPagRec","char",0,"px",1,1,"left",null,[],1755,"TipoBaixaUsuTpBaixaPagRec",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1756,42,"TIPOBAIXAUSUTPBAIXASIGLA","","","TipoBaixaUsuTpBaixaSigla","char",0,"px",5,5,"left",null,[],1756,"TipoBaixaUsuTpBaixaSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1757,43,"TIPOBAIXAUSUTPBAIXADESCRICAO","","","TipoBaixaUsuTpBaixaDescricao","svchar",0,"px",30,30,"left",null,[],1757,"TipoBaixaUsuTpBaixaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",44,0,"px",17,"px","e20a52_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",45,0,"px",17,"px","e21a52_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1076,46,"PERMISSAOUSUCXACONTAEMPRESAID","Empresa","","PermissaoUsuCxaContaEmpresaId","char",0,"px",10,10,"left",null,[],1076,"PermissaoUsuCxaContaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1771,47,"PERMISSAOUSUCXACONTAUSUARIOID","Usuário","","PermissaoUsuCxaContaUsuarioId","char",0,"px",12,12,"left",null,[],1771,"PermissaoUsuCxaContaUsuarioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1754,48,"TIPOBAIXAUSUTPBAIXAEMPID","Empresa","","TipoBaixaUsuTpBaixaEmpId","char",0,"px",10,10,"left",null,[],1754,"TipoBaixaUsuTpBaixaEmpId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPERMISSAOUSUCXACONTAUSUARIOID",gxz:"ZV27PermissaoUsuCxaContaUsuarioId",gxold:"OV27PermissaoUsuCxaContaUsuarioId",gxvar:"AV27PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.ZV27PermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOUSUCXACONTAUSUARIOID",gx.O.AV27PermissaoUsuCxaContaUsuarioId,0)},c2v:function(){gx.O.AV27PermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE4",grid:0};
   GXValidFnc[19]={fld:"TABLE6",grid:0};
   GXValidFnc[22]={fld:"IMAGE2",grid:0};
   GXValidFnc[24]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[26]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[28]={fld:"BTNHELP",grid:0};
   GXValidFnc[30]={fld:"TABLE5",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPAGREC",gxz:"ZV28TipoPagRec",gxold:"OV28TipoPagRec",gxvar:"AV28TipoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28TipoPagRec=Value},v2z:function(Value){gx.O.ZV28TipoPagRec=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPAGREC",row || gx.fn.currentGridRowImpl(39),gx.O.AV28TipoPagRec,0)},c2v:function(){gx.O.AV28TipoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPAGREC",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:this.Valid_Tipobaixausutpbaixapagrec,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXAPAGREC",gxz:"Z1755TipoBaixaUsuTpBaixaPagRec",gxold:"O1755TipoBaixaUsuTpBaixaPagRec",gxvar:"A1755TipoBaixaUsuTpBaixaPagRec",ucs:[],op:[43],ip:[43,42,41,48],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1755TipoBaixaUsuTpBaixaPagRec=Value},v2z:function(Value){gx.O.Z1755TipoBaixaUsuTpBaixaPagRec=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXAPAGREC",row || gx.fn.currentGridRowImpl(39),gx.O.A1755TipoBaixaUsuTpBaixaPagRec,0)},c2v:function(){gx.O.A1755TipoBaixaUsuTpBaixaPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXAPAGREC",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:this.Valid_Tipobaixausutpbaixasigla,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXASIGLA",gxz:"Z1756TipoBaixaUsuTpBaixaSigla",gxold:"O1756TipoBaixaUsuTpBaixaSigla",gxvar:"A1756TipoBaixaUsuTpBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1756TipoBaixaUsuTpBaixaSigla=Value},v2z:function(Value){gx.O.Z1756TipoBaixaUsuTpBaixaSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXASIGLA",row || gx.fn.currentGridRowImpl(39),gx.O.A1756TipoBaixaUsuTpBaixaSigla,0)},c2v:function(){gx.O.A1756TipoBaixaUsuTpBaixaSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXASIGLA",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXADESCRICAO",gxz:"Z1757TipoBaixaUsuTpBaixaDescricao",gxold:"O1757TipoBaixaUsuTpBaixaDescricao",gxvar:"A1757TipoBaixaUsuTpBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1757TipoBaixaUsuTpBaixaDescricao=Value},v2z:function(Value){gx.O.Z1757TipoBaixaUsuTpBaixaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(39),gx.O.A1757TipoBaixaUsuTpBaixaDescricao,0)},c2v:function(){gx.O.A1757TipoBaixaUsuTpBaixaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(39),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(39))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(39))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(39),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(39))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(39))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAEMPRESAID",gxz:"Z1076PermissaoUsuCxaContaEmpresaId",gxold:"O1076PermissaoUsuCxaContaEmpresaId",gxvar:"A1076PermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1076PermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.Z1076PermissaoUsuCxaContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(39),gx.O.A1076PermissaoUsuCxaContaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1076PermissaoUsuCxaContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(39),gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:this.Valid_Tipobaixausutpbaixaempid,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXAEMPID",gxz:"Z1754TipoBaixaUsuTpBaixaEmpId",gxold:"O1754TipoBaixaUsuTpBaixaEmpId",gxvar:"A1754TipoBaixaUsuTpBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1754TipoBaixaUsuTpBaixaEmpId=Value},v2z:function(Value){gx.O.Z1754TipoBaixaUsuTpBaixaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXAEMPID",row || gx.fn.currentGridRowImpl(39),gx.O.A1754TipoBaixaUsuTpBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1754TipoBaixaUsuTpBaixaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXAEMPID",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27PermissaoUsuCxaContaUsuarioId = "" ;
   this.ZV27PermissaoUsuCxaContaUsuarioId = "" ;
   this.OV27PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV28TipoPagRec = "" ;
   this.OV28TipoPagRec = "" ;
   this.Z1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.O1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.Z1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.O1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.Z1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.O1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.O1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.O1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV29PermissaoUsuCxaContaEmpresaId = "" ;
   this.AV28TipoPagRec = "" ;
   this.A1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.A1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.A1757TipoBaixaUsuTpBaixaDescricao = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.Events = {"e11a52_client": ["'ANTERIOR'", true] ,"e12a52_client": ["'PROXIMO'", true] ,"e20a52_client": ["'EXCLUIR'", true] ,"e21a52_client": ["'CONSULTAR'", true] ,"e16a52_client": ["VPAGINA.CLICK", true] ,"e13a52_client": ["'NOVO'", true] ,"e14a52_client": ["'FECHAR'", true] ,"e15a52_client": ["'PROCURAR'", true] ,"e22a52_client": ["'ATUALIZAPAGINA'", true] ,"e23a52_client": ["ENTER", true] ,"e24a52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'}],[{ctrl:'TIPOBAIXAUSUTPBAIXASIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBAIXAUSUTPBAIXASIGLA","Title")',ctrl:'TIPOBAIXAUSUTPBAIXASIGLA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOBAIXAUSUTPBAIXADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBAIXAUSUTPBAIXADESCRICAO","Title")',ctrl:'TIPOBAIXAUSUTPBAIXADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'}],[{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28TipoPagRec',fld:'vTIPOPAGREC'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'A1756TipoBaixaUsuTpBaixaSigla',fld:'TIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1756TipoBaixaUsuTpBaixaSigla',fld:'TIPOBAIXAUSUTPBAIXASIGLA'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'A1756TipoBaixaUsuTpBaixaSigla',fld:'TIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1756TipoBaixaUsuTpBaixaSigla',fld:'TIPOBAIXAUSUTPBAIXASIGLA'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'}],[{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV27PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV29PermissaoUsuCxaContaEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1755TipoBaixaUsuTpBaixaPagRec", rfrProp:"Value", gxAttId:"1755"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipobaixausu());
