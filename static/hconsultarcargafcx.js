/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:21:14.93
*/
gx.evt.autoSkip = false;
gx.define('hconsultarcargafcx', false, function () {
   this.ServerClass =  "hconsultarcargafcx" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.AV81CargaPDVProdutoId=gx.fn.getIntegerValue("vCARGAPDVPRODUTOID",'.') ;
      this.A2961ProdutoDescricaoResumida=gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.AV76Usuario=gx.fn.getControlValue("vUSUARIO") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cargapdvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCARGAPDVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pdvcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPDVCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cargapdvcodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CARGAPDVCODIGO", gx.fn.currentGridRowImpl(60));
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
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cargapdvempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCARGAPDVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11xk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12xk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13xk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14xk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15xk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e16xk2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20xk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21xk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e22xk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,23,24,27,29,32,34,36,38,41,43,46,48,51,53,61,62,63,64,65,66,67,68,69,70,71,77,81,84,86,88,90,92,93,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,117,118,119];
   this.GXLastCtrlId =119;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarcargafcx",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6384,61,"CARGAPDVNUMERO","","","CargaPDVNumero","int",0,"px",8,8,"right",null,[],6384,"CargaPDVNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6391,62,"CARGAPDVDATAHORAALT","","","CargaPDVDataHoraAlt","dtime",0,"px",16,16,"right",null,[],6391,"CargaPDVDataHoraAlt",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6392,63,"CARGAPDVUSUARIOALT","Carga PDVUsuario Alt","","CargaPDVUsuarioAlt","char",0,"px",12,12,"left",null,[],6392,"CargaPDVUsuarioAlt",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Usuarionome",64,"vUSUARIONOME","Usuário","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],"Usuarionome","UsuarioNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(6387,65,"CARGAPDVTIPOATUALIZACAO","Tp Atualização","CargaPDVTipoAtualizacao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(6393,66,"CARGAPDVCODIGO","","","CargaPDVCodigo","int",0,"px",10,10,"right",null,[],6393,"CargaPDVCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5773,67,"PDVRETAGUARDAFILIALID","Filial","","PDVRetaguardaFilialId","int",0,"px",7,7,"right",null,[],5773,"PDVRetaguardaFilialId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6388,68,"CARGAPDVPRODUTOID","","","CargaPDVProdutoId","int",0,"px",10,10,"right",null,[],6388,"CargaPDVProdutoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Cargapdvprodutodescricao",69,"vCARGAPDVPRODUTODESCRICAO","Descrição Produto","","CargaPDVProdutoDescricao","svchar",0,"px",40,40,"left",null,[],"Cargapdvprodutodescricao","CargaPDVProdutoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6390,70,"CARGAPDVSITUACAO","Carga PDVSituacao","","CargaPDVSituacao","char",0,"px",1,1,"left",null,[],6390,"CargaPDVSituacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsit","vBMPSIT",71,0,"px",17,"px",null,"","Sit","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TABLE11",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALID",gxz:"ZV68FilialId",gxold:"OV68FilialId",gxvar:"AV68FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV68FilialId,0)},c2v:function(){gx.O.AV68FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV69FilialNome",gxold:"OV69FilialNome",gxvar:"AV69FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69FilialNome=Value},v2z:function(Value){gx.O.ZV69FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV69FilialNome,0)},c2v:function(){gx.O.AV69FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV84ProdutoId",gxold:"OV84ProdutoId",gxvar:"AV84ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV84ProdutoId,0)},c2v:function(){gx.O.AV84ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV85ProdutoDescricaoResumida",gxold:"OV85ProdutoDescricaoResumida",gxvar:"AV85ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV85ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV85ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV85ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE12",grid:0};
   GXValidFnc[32]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARGAPDVDATAINI",gxz:"ZV70CargaPDVDataIni",gxold:"OV70CargaPDVDataIni",gxvar:"AV70CargaPDVDataIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70CargaPDVDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV70CargaPDVDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVDATAINI",gx.O.AV70CargaPDVDataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV70CargaPDVDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCARGAPDVDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARGAPDVDATAFIM",gxz:"ZV71CargaPDVDataFim",gxold:"OV71CargaPDVDataFim",gxvar:"AV71CargaPDVDataFim",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71CargaPDVDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV71CargaPDVDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVDATAFIM",gx.O.AV71CargaPDVDataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV71CargaPDVDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCARGAPDVDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[38]={fld:"TABLE13",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cargapdvnumero,isvalid:null,rgrid:[this.GridContainer],fld:"vCARGAPDVNUMERO",gxz:"ZV95CargaPDVNumero",gxold:"OV95CargaPDVNumero",gxvar:"AV95CargaPDVNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95CargaPDVNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95CargaPDVNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVNUMERO",gx.O.AV95CargaPDVNumero,0)},c2v:function(){gx.O.AV95CargaPDVNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCARGAPDVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pdvcodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vPDVCODIGO",gxz:"ZV74PDVCodigo",gxold:"OV74PDVCodigo",gxvar:"AV74PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74PDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPDVCODIGO",gx.O.AV74PDVCodigo,0)},c2v:function(){gx.O.AV74PDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPDVCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARGAPDVSITUACAO",gxz:"ZV75CargaPDVSituacao",gxold:"OV75CargaPDVSituacao",gxvar:"AV75CargaPDVSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV75CargaPDVSituacao=Value},v2z:function(Value){gx.O.ZV75CargaPDVSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCARGAPDVSITUACAO",gx.O.AV75CargaPDVSituacao)},c2v:function(){gx.O.AV75CargaPDVSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCARGAPDVSITUACAO")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARGAPDVNUMERO",gxz:"Z6384CargaPDVNumero",gxold:"O6384CargaPDVNumero",gxvar:"A6384CargaPDVNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6384CargaPDVNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6384CargaPDVNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CARGAPDVNUMERO",row || gx.fn.currentGridRowImpl(60),gx.O.A6384CargaPDVNumero,0)},c2v:function(){gx.O.A6384CargaPDVNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CARGAPDVNUMERO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARGAPDVDATAHORAALT",gxz:"Z6391CargaPDVDataHoraAlt",gxold:"O6391CargaPDVDataHoraAlt",gxvar:"A6391CargaPDVDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6391CargaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6391CargaPDVDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CARGAPDVDATAHORAALT",row || gx.fn.currentGridRowImpl(60),gx.O.A6391CargaPDVDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6391CargaPDVDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CARGAPDVDATAHORAALT",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARGAPDVUSUARIOALT",gxz:"Z6392CargaPDVUsuarioAlt",gxold:"O6392CargaPDVUsuarioAlt",gxvar:"A6392CargaPDVUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6392CargaPDVUsuarioAlt=Value},v2z:function(Value){gx.O.Z6392CargaPDVUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("CARGAPDVUSUARIOALT",row || gx.fn.currentGridRowImpl(60),gx.O.A6392CargaPDVUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6392CargaPDVUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("CARGAPDVUSUARIOALT",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV77UsuarioNome",gxold:"OV77UsuarioNome",gxvar:"AV77UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV77UsuarioNome=Value},v2z:function(Value){gx.O.ZV77UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(60),gx.O.AV77UsuarioNome,0)},c2v:function(){gx.O.AV77UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARGAPDVTIPOATUALIZACAO",gxz:"Z6387CargaPDVTipoAtualizacao",gxold:"O6387CargaPDVTipoAtualizacao",gxvar:"A6387CargaPDVTipoAtualizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6387CargaPDVTipoAtualizacao=Value},v2z:function(Value){gx.O.Z6387CargaPDVTipoAtualizacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CARGAPDVTIPOATUALIZACAO",row || gx.fn.currentGridRowImpl(60),gx.O.A6387CargaPDVTipoAtualizacao)},c2v:function(){gx.O.A6387CargaPDVTipoAtualizacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CARGAPDVTIPOATUALIZACAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Cargapdvcodigo,isvalid:null,rgrid:[],fld:"CARGAPDVCODIGO",gxz:"Z6393CargaPDVCodigo",gxold:"O6393CargaPDVCodigo",gxvar:"A6393CargaPDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6393CargaPDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6393CargaPDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CARGAPDVCODIGO",row || gx.fn.currentGridRowImpl(60),gx.O.A6393CargaPDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6393CargaPDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CARGAPDVCODIGO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PDVRETAGUARDAFILIALID",gxz:"Z5773PDVRetaguardaFilialId",gxold:"O5773PDVRetaguardaFilialId",gxvar:"A5773PDVRetaguardaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5773PDVRetaguardaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5773PDVRetaguardaFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVRETAGUARDAFILIALID",row || gx.fn.currentGridRowImpl(60),gx.O.A5773PDVRetaguardaFilialId,0)},c2v:function(){gx.O.A5773PDVRetaguardaFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PDVRETAGUARDAFILIALID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARGAPDVPRODUTOID",gxz:"Z6388CargaPDVProdutoId",gxold:"O6388CargaPDVProdutoId",gxvar:"A6388CargaPDVProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6388CargaPDVProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6388CargaPDVProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CARGAPDVPRODUTOID",row || gx.fn.currentGridRowImpl(60),gx.O.A6388CargaPDVProdutoId,0)},c2v:function(){gx.O.A6388CargaPDVProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CARGAPDVPRODUTOID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCARGAPDVPRODUTODESCRICAO",gxz:"ZV82CargaPDVProdutoDescricao",gxold:"OV82CargaPDVProdutoDescricao",gxvar:"AV82CargaPDVProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV82CargaPDVProdutoDescricao=Value},v2z:function(Value){gx.O.ZV82CargaPDVProdutoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCARGAPDVPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.AV82CargaPDVProdutoDescricao,0)},c2v:function(){gx.O.AV82CargaPDVProdutoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCARGAPDVPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARGAPDVSITUACAO",gxz:"Z6390CargaPDVSituacao",gxold:"O6390CargaPDVSituacao",gxvar:"A6390CargaPDVSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6390CargaPDVSituacao=Value},v2z:function(Value){gx.O.Z6390CargaPDVSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("CARGAPDVSITUACAO",row || gx.fn.currentGridRowImpl(60),gx.O.A6390CargaPDVSituacao,0)},c2v:function(){gx.O.A6390CargaPDVSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CARGAPDVSITUACAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIT",gxz:"ZV79bmpSit",gxold:"OV79bmpSit",gxvar:"AV79bmpSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79bmpSit=Value},v2z:function(Value){gx.O.ZV79bmpSit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIT",row || gx.fn.currentGridRowImpl(60),gx.O.AV79bmpSit,gx.O.AV102Bmpsit_GXI)},c2v:function(){gx.O.AV102Bmpsit_GXI=this.val_GXI();gx.O.AV79bmpSit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV102Bmpsit_GXI',nac:gx.falseFn};
   GXValidFnc[77]={fld:"TABLE7",grid:0};
   GXValidFnc[81]={fld:"TABLE8",grid:0};
   GXValidFnc[84]={fld:"IMAGE1",grid:0};
   GXValidFnc[86]={fld:"IMAGE2",grid:0};
   GXValidFnc[88]={fld:"IMAGE3",grid:0};
   GXValidFnc[90]={fld:"IMAGE4",grid:0};
   GXValidFnc[92]={fld:"IMAGE5",grid:0};
   GXValidFnc[93]={fld:"INVISIVEIS",grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV89IntAux",gxold:"OV89IntAux",gxvar:"AV89IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV89IntAux,0)},c2v:function(){gx.O.AV89IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV94CharAux",gxold:"OV94CharAux",gxvar:"AV94CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94CharAux=Value},v2z:function(Value){gx.O.ZV94CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV94CharAux,0)},c2v:function(){gx.O.AV94CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV59Data",gxold:"OV59Data",gxvar:"AV59Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV59Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV59Data,0)},c2v:function(){gx.O.AV59Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV93GrupoProdutoId",gxold:"OV93GrupoProdutoId",gxvar:"AV93GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV93GrupoProdutoId,0)},c2v:function(){gx.O.AV93GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV92SubGrupoProdutoId",gxold:"OV92SubGrupoProdutoId",gxvar:"AV92SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV92SubGrupoProdutoId,0)},c2v:function(){gx.O.AV92SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV91ProdutoCodigoId",gxold:"OV91ProdutoCodigoId",gxvar:"AV91ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV91ProdutoCodigoId,0)},c2v:function(){gx.O.AV91ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV90LoteProdutoCombinacao",gxold:"OV90LoteProdutoCombinacao",gxvar:"AV90LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV90LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV90LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV90LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV88SNVenda",gxold:"OV88SNVenda",gxvar:"AV88SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88SNVenda=Value},v2z:function(Value){gx.O.ZV88SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV88SNVenda,0)},c2v:function(){gx.O.AV88SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV87ProdutoReferencia",gxold:"OV87ProdutoReferencia",gxvar:"AV87ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV87ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV87ProdutoReferencia,0)},c2v:function(){gx.O.AV87ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV86CodigoBarrasProdutoBarra",gxold:"OV86CodigoBarrasProdutoBarra",gxvar:"AV86CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV86CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV86CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV83ProdutoEmpresaId",gxold:"OV83ProdutoEmpresaId",gxvar:"AV83ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV83ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV83ProdutoEmpresaId,0)},c2v:function(){gx.O.AV83ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cargapdvempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vCARGAPDVEMPRESAID",gxz:"ZV67CargaPDVEmpresaId",gxold:"OV67CargaPDVEmpresaId",gxvar:"AV67CargaPDVEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67CargaPDVEmpresaId=Value},v2z:function(Value){gx.O.ZV67CargaPDVEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCARGAPDVEMPRESAID",gx.O.AV67CargaPDVEmpresaId,0)},c2v:function(){gx.O.AV67CargaPDVEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCARGAPDVEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUXFIN",gxz:"ZV58DataAuxFin",gxold:"OV58DataAuxFin",gxvar:"AV58DataAuxFin",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58DataAuxFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV58DataAuxFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUXFIN",gx.O.AV58DataAuxFin,0)},c2v:function(){gx.O.AV58DataAuxFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAAUXFIN")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV96Qtde",gxold:"OV96Qtde",gxvar:"AV96Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV96Qtde,0)},c2v:function(){gx.O.AV96Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAAUXINI",gxz:"ZV57DataAuxIni",gxold:"OV57DataAuxIni",gxvar:"AV57DataAuxIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57DataAuxIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV57DataAuxIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAUXINI",gx.O.AV57DataAuxIni,0)},c2v:function(){gx.O.AV57DataAuxIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAAUXINI")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV72FilialEmpresaId",gxold:"OV72FilialEmpresaId",gxvar:"AV72FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV72FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV72FilialEmpresaId,0)},c2v:function(){gx.O.AV72FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"JS", format:2,grid:0};
   GXValidFnc[117]={fld:"BTNHELP",grid:0};
   GXValidFnc[118]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[119]={fld:"PROMPT_PDVCODIGO",grid:0};
   this.AV68FilialId = 0 ;
   this.ZV68FilialId = 0 ;
   this.OV68FilialId = 0 ;
   this.AV69FilialNome = "" ;
   this.ZV69FilialNome = "" ;
   this.OV69FilialNome = "" ;
   this.AV84ProdutoId = 0 ;
   this.ZV84ProdutoId = 0 ;
   this.OV84ProdutoId = 0 ;
   this.AV85ProdutoDescricaoResumida = "" ;
   this.ZV85ProdutoDescricaoResumida = "" ;
   this.OV85ProdutoDescricaoResumida = "" ;
   this.AV70CargaPDVDataIni = gx.date.nullDate() ;
   this.ZV70CargaPDVDataIni = gx.date.nullDate() ;
   this.OV70CargaPDVDataIni = gx.date.nullDate() ;
   this.AV71CargaPDVDataFim = gx.date.nullDate() ;
   this.ZV71CargaPDVDataFim = gx.date.nullDate() ;
   this.OV71CargaPDVDataFim = gx.date.nullDate() ;
   this.AV95CargaPDVNumero = 0 ;
   this.ZV95CargaPDVNumero = 0 ;
   this.OV95CargaPDVNumero = 0 ;
   this.AV74PDVCodigo = 0 ;
   this.ZV74PDVCodigo = 0 ;
   this.OV74PDVCodigo = 0 ;
   this.AV75CargaPDVSituacao = "" ;
   this.ZV75CargaPDVSituacao = "" ;
   this.OV75CargaPDVSituacao = "" ;
   this.Z6384CargaPDVNumero = 0 ;
   this.O6384CargaPDVNumero = 0 ;
   this.Z6391CargaPDVDataHoraAlt = gx.date.nullDate() ;
   this.O6391CargaPDVDataHoraAlt = gx.date.nullDate() ;
   this.Z6392CargaPDVUsuarioAlt = "" ;
   this.O6392CargaPDVUsuarioAlt = "" ;
   this.ZV77UsuarioNome = "" ;
   this.OV77UsuarioNome = "" ;
   this.Z6387CargaPDVTipoAtualizacao = "" ;
   this.O6387CargaPDVTipoAtualizacao = "" ;
   this.Z6393CargaPDVCodigo = 0 ;
   this.O6393CargaPDVCodigo = 0 ;
   this.Z5773PDVRetaguardaFilialId = 0 ;
   this.O5773PDVRetaguardaFilialId = 0 ;
   this.Z6388CargaPDVProdutoId = 0 ;
   this.O6388CargaPDVProdutoId = 0 ;
   this.ZV82CargaPDVProdutoDescricao = "" ;
   this.OV82CargaPDVProdutoDescricao = "" ;
   this.Z6390CargaPDVSituacao = "" ;
   this.O6390CargaPDVSituacao = "" ;
   this.ZV79bmpSit = "" ;
   this.OV79bmpSit = "" ;
   this.AV89IntAux = 0 ;
   this.ZV89IntAux = 0 ;
   this.OV89IntAux = 0 ;
   this.AV94CharAux = "" ;
   this.ZV94CharAux = "" ;
   this.OV94CharAux = "" ;
   this.AV59Data = gx.date.nullDate() ;
   this.ZV59Data = gx.date.nullDate() ;
   this.OV59Data = gx.date.nullDate() ;
   this.AV93GrupoProdutoId = 0 ;
   this.ZV93GrupoProdutoId = 0 ;
   this.OV93GrupoProdutoId = 0 ;
   this.AV92SubGrupoProdutoId = 0 ;
   this.ZV92SubGrupoProdutoId = 0 ;
   this.OV92SubGrupoProdutoId = 0 ;
   this.AV91ProdutoCodigoId = 0 ;
   this.ZV91ProdutoCodigoId = 0 ;
   this.OV91ProdutoCodigoId = 0 ;
   this.AV90LoteProdutoCombinacao = "" ;
   this.ZV90LoteProdutoCombinacao = "" ;
   this.OV90LoteProdutoCombinacao = "" ;
   this.AV88SNVenda = "" ;
   this.ZV88SNVenda = "" ;
   this.OV88SNVenda = "" ;
   this.AV87ProdutoReferencia = "" ;
   this.ZV87ProdutoReferencia = "" ;
   this.OV87ProdutoReferencia = "" ;
   this.AV86CodigoBarrasProdutoBarra = 0 ;
   this.ZV86CodigoBarrasProdutoBarra = 0 ;
   this.OV86CodigoBarrasProdutoBarra = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV83ProdutoEmpresaId = "" ;
   this.ZV83ProdutoEmpresaId = "" ;
   this.OV83ProdutoEmpresaId = "" ;
   this.AV67CargaPDVEmpresaId = "" ;
   this.ZV67CargaPDVEmpresaId = "" ;
   this.OV67CargaPDVEmpresaId = "" ;
   this.AV58DataAuxFin = gx.date.nullDate() ;
   this.ZV58DataAuxFin = gx.date.nullDate() ;
   this.OV58DataAuxFin = gx.date.nullDate() ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV96Qtde = 0 ;
   this.ZV96Qtde = 0 ;
   this.OV96Qtde = 0 ;
   this.AV57DataAuxIni = gx.date.nullDate() ;
   this.ZV57DataAuxIni = gx.date.nullDate() ;
   this.OV57DataAuxIni = gx.date.nullDate() ;
   this.AV72FilialEmpresaId = "" ;
   this.ZV72FilialEmpresaId = "" ;
   this.OV72FilialEmpresaId = "" ;
   this.AV68FilialId = 0 ;
   this.AV69FilialNome = "" ;
   this.AV84ProdutoId = 0 ;
   this.AV85ProdutoDescricaoResumida = "" ;
   this.AV70CargaPDVDataIni = gx.date.nullDate() ;
   this.AV71CargaPDVDataFim = gx.date.nullDate() ;
   this.AV95CargaPDVNumero = 0 ;
   this.AV74PDVCodigo = 0 ;
   this.AV75CargaPDVSituacao = "" ;
   this.AV89IntAux = 0 ;
   this.AV94CharAux = "" ;
   this.AV59Data = gx.date.nullDate() ;
   this.AV93GrupoProdutoId = 0 ;
   this.AV92SubGrupoProdutoId = 0 ;
   this.AV91ProdutoCodigoId = 0 ;
   this.AV90LoteProdutoCombinacao = "" ;
   this.AV88SNVenda = "" ;
   this.AV87ProdutoReferencia = "" ;
   this.AV86CodigoBarrasProdutoBarra = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV83ProdutoEmpresaId = "" ;
   this.AV67CargaPDVEmpresaId = "" ;
   this.AV58DataAuxFin = gx.date.nullDate() ;
   this.AV11OrderedBy = 0 ;
   this.AV96Qtde = 0 ;
   this.AV57DataAuxIni = gx.date.nullDate() ;
   this.AV72FilialEmpresaId = "" ;
   this.A6386CargaPDVEmpresaId = "" ;
   this.A6384CargaPDVNumero = 0 ;
   this.A6391CargaPDVDataHoraAlt = gx.date.nullDate() ;
   this.A6392CargaPDVUsuarioAlt = "" ;
   this.AV77UsuarioNome = "" ;
   this.A6387CargaPDVTipoAtualizacao = "" ;
   this.A6393CargaPDVCodigo = 0 ;
   this.A5773PDVRetaguardaFilialId = 0 ;
   this.A6388CargaPDVProdutoId = 0 ;
   this.AV82CargaPDVProdutoDescricao = "" ;
   this.A6390CargaPDVSituacao = "" ;
   this.AV79bmpSit = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3434PDVCodigo = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.AV81CargaPDVProdutoId = 0 ;
   this.AV76Usuario = "" ;
   this.Events = {"e11xk2_client": ["'GXM_FIRST'", true] ,"e12xk2_client": ["'GXM_PREVIOUS'", true] ,"e13xk2_client": ["'GXM_NEXT'", true] ,"e14xk2_client": ["'GXM_LAST'", true] ,"e15xk2_client": ["'FECHAR'", true] ,"e16xk2_client": ["'PROCURAR'", true] ,"e20xk2_client": ["'ATUALIZAPAGINA'", true] ,"e21xk2_client": ["ENTER", true] ,"e22xk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'CARGAPDVNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CARGAPDVNUMERO","Title")',ctrl:'CARGAPDVNUMERO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CARGAPDVDATAHORAALT',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CARGAPDVDATAHORAALT","Title")',ctrl:'CARGAPDVDATAHORAALT',prop:'Title'},{ctrl:'CARGAPDVCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CARGAPDVCODIGO","Title")',ctrl:'CARGAPDVCODIGO',prop:'Title'},{ctrl:'CARGAPDVPRODUTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CARGAPDVPRODUTOID","Title")',ctrl:'CARGAPDVPRODUTOID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'AV79bmpSit',fld:'vBMPSIT'},{av:'AV82CargaPDVProdutoDescricao',fld:'vCARGAPDVPRODUTODESCRICAO'},{av:'AV77UsuarioNome',fld:'vUSUARIONOME'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV73SNErro',fld:'vSNERRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV72FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A6386CargaPDVEmpresaId',fld:'CARGAPDVEMPRESAID'},{av:'A6384CargaPDVNumero',fld:'CARGAPDVNUMERO'},{av:'A3434PDVCodigo',fld:'PDVCODIGO'}],[{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV80Aux',fld:'vAUX'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV73SNErro',fld:'vSNERRO'},{av:'AV103GXLvl200',fld:'vGXLVL200'},{av:'AV104GXLvl212',fld:'vGXLVL212'},{av:'AV105GXLvl224',fld:'vGXLVL224'},{av:'AV106GXLvl236',fld:'vGXLVL236'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68FilialId',fld:'vFILIALID'},{av:'AV84ProdutoId',fld:'vPRODUTOID'},{av:'AV70CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV71CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'},{av:'AV95CargaPDVNumero',fld:'vCARGAPDVNUMERO'},{av:'AV74PDVCodigo',fld:'vPDVCODIGO'},{av:'AV75CargaPDVSituacao',fld:'vCARGAPDVSITUACAO'},{av:'AV67CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV58DataAuxFin',fld:'vDATAAUXFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV57DataAuxIni',fld:'vDATAAUXINI'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A6388CargaPDVProdutoId',fld:'CARGAPDVPRODUTOID'},{av:'A6392CargaPDVUsuarioAlt',fld:'CARGAPDVUSUARIOALT'},{av:'A6390CargaPDVSituacao',fld:'CARGAPDVSITUACAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV83ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV81CargaPDVProdutoId',fld:'vCARGAPDVPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV76Usuario',fld:'vUSUARIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[]];
   this.setPrompt("PROMPT_FILIALID", [16]);
   this.setPrompt("PROMPTPROD", [22,99,100,101,102,104,105]);
   this.setPrompt("PROMPT_PDVCODIGO", [48]);
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV81CargaPDVProdutoId", "vCARGAPDVPRODUTOID", 0, "int");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV76Usuario", "vUSUARIO", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV81CargaPDVProdutoId", "vCARGAPDVPRODUTOID", 0, "int");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV76Usuario", "vUSUARIO", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridContainer.addRefreshingVar(this.GXValidFnc[111]);
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingVar(this.GXValidFnc[106]);
   GridContainer.addRefreshingVar(this.GXValidFnc[107]);
   GridContainer.addRefreshingVar({rfrVar:"A6388CargaPDVProdutoId", rfrProp:"Value", gxAttId:"6388"});
   GridContainer.addRefreshingVar({rfrVar:"A6392CargaPDVUsuarioAlt", rfrProp:"Value", gxAttId:"6392"});
   GridContainer.addRefreshingVar({rfrVar:"A6390CargaPDVSituacao", rfrProp:"Value", gxAttId:"6390"});
   GridContainer.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[108]);
   GridContainer.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV81CargaPDVProdutoId"});
   GridContainer.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   GridContainer.addRefreshingVar({rfrVar:"A75UsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"AV76Usuario"});
   GridContainer.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarcargafcx());
