/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:50.32
*/
gx.evt.autoSkip = false;
gx.define('hvencimentoproduto', false, function () {
   this.ServerClass =  "hvencimentoproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME") ;
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
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(56));
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
   this.Valid_Filialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FILIALID", gx.fn.currentGridRowImpl(56));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

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
   this.Valid_Filialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FILIALID", gx.fn.currentGridRowImpl(56));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(56));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FILIALID", gx.fn.currentGridRowImpl(56));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11qs2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qs2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17qs2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qs2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qs2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16qs2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20qs2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21qs2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22qs2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23qs2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25qs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26qs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,21,24,26,31,34,37,39,41,43,45,47,50,52,53,57,58,59,60,61,62,63,64,65,66,67,68,74,75,76,77,78,80,81,82,83,84,85,86,87,88,89,90,91];
   this.GXLastCtrlId =91;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hvencimentoproduto",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2965,57,"PRODUTOID","","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2961,58,"PRODUTODESCRICAORESUMIDA","","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],2961,"ProdutoDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4187,59,"VENCIMENTOPRODUTODSLOTE","","","VencimentoProdutoDsLote","char",0,"px",20,20,"left",null,[],4187,"VencimentoProdutoDsLote",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4188,60,"VENCIMENTOPRODUTOSEQUENCIA","","","VencimentoProdutoSequencia","int",0,"px",4,4,"right",null,[],4188,"VencimentoProdutoSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4183,61,"VENCIMENTOPRODUTODTENTRADA","","","VencimentoProdutoDtEntrada","date",0,"px",10,10,"right",null,[],4183,"VencimentoProdutoDtEntrada",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4182,62,"VENCIMENTOPRODUTODATA","","","VencimentoProdutoData","date",0,"px",10,10,"right",null,[],4182,"VencimentoProdutoData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4184,63,"VENCIMENTOPRODUTOQTENTRADA","Quantidade","","VencimentoProdutoQtEntrada","decimal",0,"px",21,21,"right",null,[],4184,"VencimentoProdutoQtEntrada",true,4,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e20qs2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e21qs2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e22qs2_client","","Con","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1156,67,"FILIALID","Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1136,68,"FILIALNOME","Nome da Filial","","FilialNome","svchar",0,"px",100,80,"left",null,[],1136,"FilialNome",false,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALID",gxz:"ZV27FilialId",gxold:"OV27FilialId",gxvar:"AV27FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV27FilialId,0)},c2v:function(){gx.O.AV27FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV28FilialNome",gxold:"OV28FilialNome",gxvar:"AV28FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialNome=Value},v2z:function(Value){gx.O.ZV28FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV28FilialNome,0)},c2v:function(){gx.O.AV28FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV29ProdutoId",gxold:"OV29ProdutoId",gxvar:"AV29ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV29ProdutoId,0)},c2v:function(){gx.O.AV29ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV30Produtodescricao",gxold:"OV30Produtodescricao",gxvar:"AV30Produtodescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Produtodescricao=Value},v2z:function(Value){gx.O.ZV30Produtodescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV30Produtodescricao,0)},c2v:function(){gx.O.AV30Produtodescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAVENCIMENTO",gxz:"ZV31DataVencimento",gxold:"OV31DataVencimento",gxvar:"AV31DataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31DataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENCIMENTO",gx.O.AV31DataVencimento,0)},c2v:function(){gx.O.AV31DataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TABLE6",grid:0};
   GXValidFnc[37]={fld:"IMAGE2",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"IMAGE1",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[58,68],ip:[58,68,57,67],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(56),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAORESUMIDA",gxz:"Z2961ProdutoDescricaoResumida",gxold:"O2961ProdutoDescricaoResumida",gxvar:"A2961ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2961ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.Z2961ProdutoDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(56),gx.O.A2961ProdutoDescricaoResumida,0)},c2v:function(){gx.O.A2961ProdutoDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODSLOTE",gxz:"Z4187VencimentoProdutoDsLote",gxold:"O4187VencimentoProdutoDsLote",gxvar:"A4187VencimentoProdutoDsLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4187VencimentoProdutoDsLote=Value},v2z:function(Value){gx.O.Z4187VencimentoProdutoDsLote=Value},v2c:function(row){gx.fn.setGridControlValue("VENCIMENTOPRODUTODSLOTE",row || gx.fn.currentGridRowImpl(56),gx.O.A4187VencimentoProdutoDsLote,0)},c2v:function(){gx.O.A4187VencimentoProdutoDsLote=this.val()},val:function(row){return gx.fn.getGridControlValue("VENCIMENTOPRODUTODSLOTE",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTOSEQUENCIA",gxz:"Z4188VencimentoProdutoSequencia",gxold:"O4188VencimentoProdutoSequencia",gxvar:"A4188VencimentoProdutoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4188VencimentoProdutoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4188VencimentoProdutoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VENCIMENTOPRODUTOSEQUENCIA",row || gx.fn.currentGridRowImpl(56),gx.O.A4188VencimentoProdutoSequencia,0)},c2v:function(){gx.O.A4188VencimentoProdutoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VENCIMENTOPRODUTOSEQUENCIA",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODTENTRADA",gxz:"Z4183VencimentoProdutoDtEntrada",gxold:"O4183VencimentoProdutoDtEntrada",gxvar:"A4183VencimentoProdutoDtEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4183VencimentoProdutoDtEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4183VencimentoProdutoDtEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("VENCIMENTOPRODUTODTENTRADA",row || gx.fn.currentGridRowImpl(56),gx.O.A4183VencimentoProdutoDtEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4183VencimentoProdutoDtEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("VENCIMENTOPRODUTODTENTRADA",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODATA",gxz:"Z4182VencimentoProdutoData",gxold:"O4182VencimentoProdutoData",gxvar:"A4182VencimentoProdutoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4182VencimentoProdutoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4182VencimentoProdutoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("VENCIMENTOPRODUTODATA",row || gx.fn.currentGridRowImpl(56),gx.O.A4182VencimentoProdutoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4182VencimentoProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("VENCIMENTOPRODUTODATA",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTOQTENTRADA",gxz:"Z4184VencimentoProdutoQtEntrada",gxold:"O4184VencimentoProdutoQtEntrada",gxvar:"A4184VencimentoProdutoQtEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4184VencimentoProdutoQtEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4184VencimentoProdutoQtEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("VENCIMENTOPRODUTOQTENTRADA",row || gx.fn.currentGridRowImpl(56),gx.O.A4184VencimentoProdutoQtEntrada,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4184VencimentoProdutoQtEntrada=this.val()},val:function(row){return gx.fn.getGridDecimalValue("VENCIMENTOPRODUTOQTENTRADA",row || gx.fn.currentGridRowImpl(56),'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpAlt,gx.O.AV58Bmpalt_GXI)},c2v:function(){gx.O.AV58Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV58Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV59Bmpexc_GXI)},c2v:function(){gx.O.AV59Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV59Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV16bmpCon,gx.O.AV60Bmpcon_GXI)},c2v:function(){gx.O.AV60Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV60Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(56),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(56),gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV51Qtde",gxold:"OV51Qtde",gxvar:"AV51Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV51Qtde,0)},c2v:function(){gx.O.AV51Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV45ProdutoCategoria",gxold:"OV45ProdutoCategoria",gxvar:"AV45ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV45ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV45ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV45ProdutoCategoria)},c2v:function(){gx.O.AV45ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV42SubGrupoProdutoId",gxold:"OV42SubGrupoProdutoId",gxvar:"AV42SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV42SubGrupoProdutoId,0)},c2v:function(){gx.O.AV42SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV43ProdutoCodigoId",gxold:"OV43ProdutoCodigoId",gxvar:"AV43ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV43ProdutoCodigoId,0)},c2v:function(){gx.O.AV43ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOEMPRESAID",gxz:"ZV32ProdutoEmpresaId",gxold:"OV32ProdutoEmpresaId",gxvar:"AV32ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV32ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV32ProdutoEmpresaId,0)},c2v:function(){gx.O.AV32ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV41GrupoProdutoId",gxold:"OV41GrupoProdutoId",gxvar:"AV41GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV41GrupoProdutoId,0)},c2v:function(){gx.O.AV41GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV44LoteProdutoCombinacao",gxold:"OV44LoteProdutoCombinacao",gxvar:"AV44LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV44LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV44LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV44LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV40PrecoNulo",gxold:"OV40PrecoNulo",gxvar:"AV40PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV40PrecoNulo,0)},c2v:function(){gx.O.AV40PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV49IntAuxIn",gxold:"OV49IntAuxIn",gxvar:"AV49IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV49IntAuxIn,0)},c2v:function(){gx.O.AV49IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV47CodigoBarrasProdutoBarra",gxold:"OV47CodigoBarrasProdutoBarra",gxvar:"AV47CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV47CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV47CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV48ProdutoReferencia",gxold:"OV48ProdutoReferencia",gxvar:"AV48ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV48ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV48ProdutoReferencia,0)},c2v:function(){gx.O.AV48ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV50SNVenda",gxold:"OV50SNVenda",gxvar:"AV50SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SNVenda=Value},v2z:function(Value){gx.O.ZV50SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV50SNVenda,0)},c2v:function(){gx.O.AV50SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALEMPRESAID",gxz:"ZV33FilialEmpresaId",gxold:"OV33FilialEmpresaId",gxvar:"AV33FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV33FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV33FilialEmpresaId,0)},c2v:function(){gx.O.AV33FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"PROMPT_FILIALID",grid:0};
   this.AV27FilialId = 0 ;
   this.ZV27FilialId = 0 ;
   this.OV27FilialId = 0 ;
   this.AV28FilialNome = "" ;
   this.ZV28FilialNome = "" ;
   this.OV28FilialNome = "" ;
   this.AV29ProdutoId = 0 ;
   this.ZV29ProdutoId = 0 ;
   this.OV29ProdutoId = 0 ;
   this.AV30Produtodescricao = "" ;
   this.ZV30Produtodescricao = "" ;
   this.OV30Produtodescricao = "" ;
   this.AV31DataVencimento = gx.date.nullDate() ;
   this.ZV31DataVencimento = gx.date.nullDate() ;
   this.OV31DataVencimento = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z2961ProdutoDescricaoResumida = "" ;
   this.O2961ProdutoDescricaoResumida = "" ;
   this.Z4187VencimentoProdutoDsLote = "" ;
   this.O4187VencimentoProdutoDsLote = "" ;
   this.Z4188VencimentoProdutoSequencia = 0 ;
   this.O4188VencimentoProdutoSequencia = 0 ;
   this.Z4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.O4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.Z4182VencimentoProdutoData = gx.date.nullDate() ;
   this.O4182VencimentoProdutoData = gx.date.nullDate() ;
   this.Z4184VencimentoProdutoQtEntrada = 0 ;
   this.O4184VencimentoProdutoQtEntrada = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.AV51Qtde = 0 ;
   this.ZV51Qtde = 0 ;
   this.OV51Qtde = 0 ;
   this.AV45ProdutoCategoria = "" ;
   this.ZV45ProdutoCategoria = "" ;
   this.OV45ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV42SubGrupoProdutoId = 0 ;
   this.ZV42SubGrupoProdutoId = 0 ;
   this.OV42SubGrupoProdutoId = 0 ;
   this.AV43ProdutoCodigoId = 0 ;
   this.ZV43ProdutoCodigoId = 0 ;
   this.OV43ProdutoCodigoId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV32ProdutoEmpresaId = "" ;
   this.ZV32ProdutoEmpresaId = "" ;
   this.OV32ProdutoEmpresaId = "" ;
   this.AV41GrupoProdutoId = 0 ;
   this.ZV41GrupoProdutoId = 0 ;
   this.OV41GrupoProdutoId = 0 ;
   this.AV44LoteProdutoCombinacao = "" ;
   this.ZV44LoteProdutoCombinacao = "" ;
   this.OV44LoteProdutoCombinacao = "" ;
   this.AV40PrecoNulo = 0 ;
   this.ZV40PrecoNulo = 0 ;
   this.OV40PrecoNulo = 0 ;
   this.AV49IntAuxIn = 0 ;
   this.ZV49IntAuxIn = 0 ;
   this.OV49IntAuxIn = 0 ;
   this.AV47CodigoBarrasProdutoBarra = 0 ;
   this.ZV47CodigoBarrasProdutoBarra = 0 ;
   this.OV47CodigoBarrasProdutoBarra = 0 ;
   this.AV48ProdutoReferencia = "" ;
   this.ZV48ProdutoReferencia = "" ;
   this.OV48ProdutoReferencia = "" ;
   this.AV50SNVenda = "" ;
   this.ZV50SNVenda = "" ;
   this.OV50SNVenda = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.ZV33FilialEmpresaId = "" ;
   this.OV33FilialEmpresaId = "" ;
   this.AV27FilialId = 0 ;
   this.AV28FilialNome = "" ;
   this.AV29ProdutoId = 0 ;
   this.AV30Produtodescricao = "" ;
   this.AV31DataVencimento = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV51Qtde = 0 ;
   this.AV45ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV42SubGrupoProdutoId = 0 ;
   this.AV43ProdutoCodigoId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV32ProdutoEmpresaId = "" ;
   this.AV41GrupoProdutoId = 0 ;
   this.AV44LoteProdutoCombinacao = "" ;
   this.AV40PrecoNulo = 0 ;
   this.AV49IntAuxIn = 0 ;
   this.AV47CodigoBarrasProdutoBarra = 0 ;
   this.AV48ProdutoReferencia = "" ;
   this.AV50SNVenda = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A4187VencimentoProdutoDsLote = "" ;
   this.A4188VencimentoProdutoSequencia = 0 ;
   this.A4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.A4182VencimentoProdutoData = gx.date.nullDate() ;
   this.A4184VencimentoProdutoQtEntrada = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.AV56Pgmname = "" ;
   this.Events = {"e11qs2_client": ["'ANTERIOR'", true] ,"e12qs2_client": ["'PROXIMO'", true] ,"e17qs2_client": ["VPAGINA.CLICK", true] ,"e13qs2_client": ["'NOVO'", true] ,"e14qs2_client": ["'FECHAR'", true] ,"e15qs2_client": ["'IMPRIMIR'", true] ,"e16qs2_client": ["'PROCURAR'", true] ,"e20qs2_client": ["'ALTERAR'", true] ,"e21qs2_client": ["'EXCLUIR'", true] ,"e22qs2_client": ["'CONSULTAR'", true] ,"e23qs2_client": ["'ATUALIZAPAGINA'", true] ,"e25qs2_client": ["ENTER", true] ,"e26qs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'PRODUTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRODUTOID","Title")',ctrl:'PRODUTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PRODUTODESCRICAORESUMIDA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRODUTODESCRICAORESUMIDA","Title")',ctrl:'PRODUTODESCRICAORESUMIDA',prop:'Title'},{ctrl:'VENCIMENTOPRODUTODSLOTE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENCIMENTOPRODUTODSLOTE","Title")',ctrl:'VENCIMENTOPRODUTODSLOTE',prop:'Title'},{ctrl:'VENCIMENTOPRODUTOSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENCIMENTOPRODUTOSEQUENCIA","Title")',ctrl:'VENCIMENTOPRODUTOSEQUENCIA',prop:'Title'},{ctrl:'VENCIMENTOPRODUTODTENTRADA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENCIMENTOPRODUTODTENTRADA","Title")',ctrl:'VENCIMENTOPRODUTODTENTRADA',prop:'Title'},{ctrl:'VENCIMENTOPRODUTODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENCIMENTOPRODUTODATA","Title")',ctrl:'VENCIMENTOPRODUTODATA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV46TpErro',fld:'vTPERRO'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV46TpErro',fld:'vTPERRO'},{av:'AV61GXLvl221',fld:'vGXLVL221'},{av:'AV62GXLvl233',fld:'vGXLVL233'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV56Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV52QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV27FilialId',fld:'vFILIALID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV46TpErro',fld:'vTPERRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV46TpErro',fld:'vTPERRO'},{av:'AV61GXLvl221',fld:'vGXLVL221'},{av:'AV62GXLvl233',fld:'vGXLVL233'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV30Produtodescricao',fld:'vPRODUTODESCRICAO'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'A4188VencimentoProdutoSequencia',fld:'VENCIMENTOPRODUTOSEQUENCIA'},{av:'A4187VencimentoProdutoDsLote',fld:'VENCIMENTOPRODUTODSLOTE'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29ProdutoId',fld:'vPRODUTOID'},{av:'AV31DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setPrompt("PROMPT_FILIALID", [13]);
   this.setPrompt("IMGPROMPT", [19,83,77,78,84,88,87]);
   this.setVCMap("AV56Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV56Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV56Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvencimentoproduto());
