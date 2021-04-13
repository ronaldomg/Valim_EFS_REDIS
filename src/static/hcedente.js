/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:54.67
*/
gx.evt.autoSkip = false;
gx.define('hcedente', false, function () {
   this.ServerClass =  "hcedente" ;
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
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Bancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoagenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOAGENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOID", gx.fn.currentGridRowImpl(49));
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
   this.Valid_Bancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOID", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOID", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BANCOID", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e117p2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e127p2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e207p2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e217p2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e227p2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e167p2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e137p2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e147p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e157p2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e237p2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e247p2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e257p2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e267p2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,21,26,29,32,34,36,38,40,43,45,46,50,51,52,53,54,55,56,57,58,64,65,67,68,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",49,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcedente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2772,50,"CEDENTENOCONTA","","","CedenteNoConta","int",0,"px",12,12,"right",null,[],2772,"CedenteNoConta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2761,51,"CEDENTESEQUENCIA","","","CedenteSequencia","int",0,"px",4,4,"right",null,[],2761,"CedenteSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1179,52,"CEDENTEDESCRICAO","","","CedenteDescricao","svchar",0,"px",70,70,"left",null,[],1179,"CedenteDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpcop","vBMPCOP",53,0,"px",17,"px","e237p2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e207p2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e217p2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e227p2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(947,57,"BANCOID","Código do Banco","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(953,58,"BANCOAGENCIAID","Agência","","BancoAgenciaId","int",0,"px",4,4,"right",null,[],953,"BancoAgenciaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE9",grid:0};
   GXValidFnc[9]={fld:"TABLE10",grid:0};
   GXValidFnc[12]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoid,isvalid:null,rgrid:[this.GridContainer],fld:"vBANCOID",gxz:"ZV27BancoId",gxold:"OV27BancoId",gxvar:"AV27BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOID",gx.O.AV27BancoId,0)},c2v:function(){gx.O.AV27BancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV29BancoNome",gxold:"OV29BancoNome",gxvar:"AV29BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BancoNome=Value},v2z:function(Value){gx.O.ZV29BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV29BancoNome,0)},c2v:function(){gx.O.AV29BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoagenciaid,isvalid:null,rgrid:[this.GridContainer],fld:"vBANCOAGENCIAID",gxz:"ZV28BancoAgenciaId",gxold:"OV28BancoAgenciaId",gxvar:"AV28BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28BancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAID",gx.O.AV28BancoAgenciaId,0)},c2v:function(){gx.O.AV28BancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIANOME",gxz:"ZV30BancoAgenciaNome",gxold:"OV30BancoAgenciaNome",gxvar:"AV30BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV30BancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIANOME",gx.O.AV30BancoAgenciaNome,0)},c2v:function(){gx.O.AV30BancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   GXValidFnc[29]={fld:"TABLE1",grid:0};
   GXValidFnc[32]={fld:"IMAGE2",grid:0};
   GXValidFnc[34]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[36]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[38]={fld:"BTNHELP",grid:0};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTENOCONTA",gxz:"Z2772CedenteNoConta",gxold:"O2772CedenteNoConta",gxvar:"A2772CedenteNoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2772CedenteNoConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2772CedenteNoConta=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CEDENTENOCONTA",row || gx.fn.currentGridRowImpl(49),gx.O.A2772CedenteNoConta,0)},c2v:function(){gx.O.A2772CedenteNoConta=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CEDENTENOCONTA",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTESEQUENCIA",gxz:"Z2761CedenteSequencia",gxold:"O2761CedenteSequencia",gxvar:"A2761CedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2761CedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2761CedenteSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CEDENTESEQUENCIA",row || gx.fn.currentGridRowImpl(49),gx.O.A2761CedenteSequencia,0)},c2v:function(){gx.O.A2761CedenteSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CEDENTESEQUENCIA",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CEDENTEDESCRICAO",gxz:"Z1179CedenteDescricao",gxold:"O1179CedenteDescricao",gxvar:"A1179CedenteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1179CedenteDescricao=Value},v2z:function(Value){gx.O.Z1179CedenteDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CEDENTEDESCRICAO",row || gx.fn.currentGridRowImpl(49),gx.O.A1179CedenteDescricao,0)},c2v:function(){gx.O.A1179CedenteDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CEDENTEDESCRICAO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOP",gxz:"ZV36bmpCop",gxold:"OV36bmpCop",gxvar:"AV36bmpCop",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpCop=Value},v2z:function(Value){gx.O.ZV36bmpCop=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOP",row || gx.fn.currentGridRowImpl(49),gx.O.AV36bmpCop,gx.O.AV48Bmpcop_GXI)},c2v:function(){gx.O.AV48Bmpcop_GXI=this.val_GXI();gx.O.AV36bmpCop=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOP",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOP_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV48Bmpcop_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(49),gx.O.AV7bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(49),gx.O.AV8bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV46Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(49),gx.O.AV16bmpCon,gx.O.AV47Bmpcon_GXI)},c2v:function(){gx.O.AV47Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV47Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Bancoid,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(49),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIAID",gxz:"Z953BancoAgenciaId",gxold:"O953BancoAgenciaId",gxvar:"A953BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A953BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z953BancoAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(49),gx.O.A953BancoAgenciaId,0)},c2v:function(){gx.O.A953BancoAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"PROMPT_BANCOID",grid:0};
   GXValidFnc[69]={fld:"PROMPT_BANCOAGENCIAID",grid:0};
   this.AV27BancoId = 0 ;
   this.ZV27BancoId = 0 ;
   this.OV27BancoId = 0 ;
   this.AV29BancoNome = "" ;
   this.ZV29BancoNome = "" ;
   this.OV29BancoNome = "" ;
   this.AV28BancoAgenciaId = 0 ;
   this.ZV28BancoAgenciaId = 0 ;
   this.OV28BancoAgenciaId = 0 ;
   this.AV30BancoAgenciaNome = "" ;
   this.ZV30BancoAgenciaNome = "" ;
   this.OV30BancoAgenciaNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2772CedenteNoConta = 0 ;
   this.O2772CedenteNoConta = 0 ;
   this.Z2761CedenteSequencia = 0 ;
   this.O2761CedenteSequencia = 0 ;
   this.Z1179CedenteDescricao = "" ;
   this.O1179CedenteDescricao = "" ;
   this.ZV36bmpCop = "" ;
   this.OV36bmpCop = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.Z953BancoAgenciaId = 0 ;
   this.O953BancoAgenciaId = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27BancoId = 0 ;
   this.AV29BancoNome = "" ;
   this.AV28BancoAgenciaId = 0 ;
   this.AV30BancoAgenciaNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A2772CedenteNoConta = 0 ;
   this.A2761CedenteSequencia = 0 ;
   this.A1179CedenteDescricao = "" ;
   this.AV36bmpCop = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A947BancoId = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.A948BancoNome = "" ;
   this.A954BancoAgenciaNome = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.Events = {"e117p2_client": ["'ANTERIOR'", true] ,"e127p2_client": ["'PROXIMO'", true] ,"e207p2_client": ["'ALTERAR'", true] ,"e217p2_client": ["'EXCLUIR'", true] ,"e227p2_client": ["'CONSULTAR'", true] ,"e167p2_client": ["VPAGINA.CLICK", true] ,"e137p2_client": ["'NOVO'", true] ,"e147p2_client": ["'FECHAR'", true] ,"e157p2_client": ["'PROCURAR'", true] ,"e237p2_client": ["'DUPLICAR'", true] ,"e247p2_client": ["'ATUALIZAPAGINA'", true] ,"e257p2_client": ["ENTER", true] ,"e267p2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CEDENTENOCONTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CEDENTENOCONTA","Title")',ctrl:'CEDENTENOCONTA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CEDENTESEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CEDENTESEQUENCIA","Title")',ctrl:'CEDENTESEQUENCIA',prop:'Title'},{ctrl:'CEDENTEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CEDENTEDESCRICAO","Title")',ctrl:'CEDENTEDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A948BancoNome',fld:'BANCONOME'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A954BancoAgenciaNome',fld:'BANCOAGENCIANOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV49GXLvl256',fld:'vGXLVL256'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV50GXLvl274',fld:'vGXLVL274'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37SnErro',fld:'vSNERRO'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A948BancoNome',fld:'BANCONOME'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A954BancoAgenciaNome',fld:'BANCOAGENCIANOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV49GXLvl256',fld:'vGXLVL256'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV50GXLvl274',fld:'vGXLVL274'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29BancoNome',fld:'vBANCONOME'},{av:'AV30BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A1179CedenteDescricao',fld:'CEDENTEDESCRICAO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BancoId',fld:'vBANCOID'},{av:'AV28BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_BANCOID", [14]);
   this.setPrompt("PROMPT_BANCOAGENCIAID", [20]);
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcedente());
