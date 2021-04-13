/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:51:35.91
*/
gx.evt.autoSkip = false;
gx.define('himportaestoquecompras', false, function () {
   this.ServerClass =  "himportaestoquecompras" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Produtofabricanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFABRICANTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Setorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSETORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtofabricanteempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOFABRICANTEEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Setorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSETOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13of2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11of2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12of2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e14of2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e19of2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,9,12,15,17,20,22,26,31,34,36,37,39,42,44,45,49,51,52,56,59,61,62,65,67,68,71,73,75,78,81,83,84,85,86,87,92,94,95,96,97,98,105,108,109,110,111,113,114,115,116];
   this.GXLastCtrlId =116;
   this.GridmodContainer = new gx.grid.grid(this, 2,"WbpLvl2",82,"Gridmod","Gridmod","GridmodContainer",this.CmpContext,this.IsMasterPage,"himportaestoquecompras",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridmodContainer = this.GridmodContainer;
   GridmodContainer.addSingleLineEdit("Tipolicitacaoid",83,"vTIPOLICITACAOID","Tipo Licitação","","TipoLicitacaoId","int",0,"px",3,3,"right",null,[],"Tipolicitacaoid","TipoLicitacaoId",true,0,false,false,"Attribute",1,"");
   GridmodContainer.addSingleLineEdit("Tipolicitacaodescricao",84,"vTIPOLICITACAODESCRICAO","Descrição","","TipoLicitacaoDescricao","svchar",0,"px",25,25,"left",null,[],"Tipolicitacaodescricao","TipoLicitacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridmodContainer.addSingleLineEdit("Tipolicitacaocorresp",85,"vTIPOLICITACAOCORRESP","Licitação Correspondente","","TipoLicitacaoCorresp","int",0,"px",3,3,"right",null,[],"Tipolicitacaocorresp","TipoLicitacaoCorresp",true,0,false,false,"Attribute",1,"");
   GridmodContainer.addBitmap("&Bmpprompt","vBMPPROMPT",86,0,"px",17,"px",null,"","","Image","");
   this.setGrid(GridmodContainer);
   this.GridusuContainer = new gx.grid.grid(this, 3,"WbpLvl3",93,"Gridusu","Gridusu","GridusuContainer",this.CmpContext,this.IsMasterPage,"himportaestoquecompras",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridusuContainer = this.GridusuContainer;
   GridusuContainer.addSingleLineEdit("Usuarioid",94,"vUSUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],"Usuarioid","UsuarioId",true,0,false,false,"Attribute",1,"");
   GridusuContainer.addSingleLineEdit("Usuarionome",95,"vUSUARIONOME","Nome","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],"Usuarionome","UsuarioNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridusuContainer.addSingleLineEdit("Usuariocorresp",96,"vUSUARIOCORRESP","Usuário Correspondente","","UsuarioCorresp","char",0,"px",12,12,"left",null,[],"Usuariocorresp","UsuarioCorresp",true,0,false,false,"Attribute",1,"");
   GridusuContainer.addBitmap("&Bmppromptu","vBMPPROMPTU",97,0,"px",17,"px",null,"","","Image","");
   this.setGrid(GridusuContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 8, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV63Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV63Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV63Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "himportaestoquecompras_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.TIMER1Container = gx.uc.getNew(this, 74, 20, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12of2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TAB1",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE5",grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV23Diretorio",gxold:"OV23Diretorio",gxvar:"AV23Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Diretorio=Value},v2z:function(Value){gx.O.ZV23Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV23Diretorio,0)},c2v:function(){gx.O.AV23Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV24ExcluirDados",gxold:"OV24ExcluirDados",gxvar:"AV24ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24ExcluirDados=Value},v2z:function(Value){gx.O.ZV24ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV24ExcluirDados,"S")},c2v:function(){gx.O.AV24ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtofabricanteid,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV45ProdutoFabricanteId",gxold:"OV45ProdutoFabricanteId",gxvar:"AV45ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEID",gx.O.AV45ProdutoFabricanteId,0)},c2v:function(){gx.O.AV45ProdutoFabricanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV47ProdutoFabricanteFantasia",gxold:"OV47ProdutoFabricanteFantasia",gxvar:"AV47ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV47ProdutoFabricanteFantasia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEFANTASIA",gx.O.AV47ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV47ProdutoFabricanteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFABRICANTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARFORNECEDOR",gxz:"ZV40AtualizarFornecedor",gxold:"OV40AtualizarFornecedor",gxvar:"AV40AtualizarFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40AtualizarFornecedor=Value},v2z:function(Value){gx.O.ZV40AtualizarFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARFORNECEDOR",gx.O.AV40AtualizarFornecedor,"S")},c2v:function(){gx.O.AV40AtualizarFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTID",gxz:"ZV41ClassificacaoEstId",gxold:"OV41ClassificacaoEstId",gxvar:"AV41ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV41ClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTID",gx.O.AV41ClassificacaoEstId,0)},c2v:function(){gx.O.AV41ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTDESCRICAO",gxz:"ZV58ClassificacaoEstDescricao",gxold:"OV58ClassificacaoEstDescricao",gxvar:"AV58ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV58ClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTDESCRICAO",gx.O.AV58ClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV58ClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Setorid,isvalid:null,rgrid:[],fld:"vSETORID",gxz:"ZV42SetorId",gxold:"OV42SetorId",gxvar:"AV42SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SetorId=Value},v2z:function(Value){gx.O.ZV42SetorId=Value},v2c:function(){gx.fn.setControlValue("vSETORID",gx.O.AV42SetorId,0)},c2v:function(){gx.O.AV42SetorId=this.val()},val:function(){return gx.fn.getControlValue("vSETORID")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORDESCRICAO",gxz:"ZV48SetorDescricao",gxold:"OV48SetorDescricao",gxvar:"AV48SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48SetorDescricao=Value},v2z:function(Value){gx.O.ZV48SetorDescricao=Value},v2c:function(){gx.fn.setControlValue("vSETORDESCRICAO",gx.O.AV48SetorDescricao,0)},c2v:function(){gx.O.AV48SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TAB3",grid:0};
   GXValidFnc[59]={fld:"IMAGE2",grid:0};
   GXValidFnc[61]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[62]={fld:"TAB4",grid:0};
   GXValidFnc[65]={fld:"IMGERRO",grid:0};
   GXValidFnc[67]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[68]={fld:"TAB5",grid:0};
   GXValidFnc[71]={fld:"IMGPROC",grid:0};
   GXValidFnc[73]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[75]={fld:"TAB2",grid:0};
   GXValidFnc[78]={fld:"TABLE4",grid:0};
   GXValidFnc[81]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[83]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:82,gxgrid:this.GridmodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLICITACAOID",gxz:"ZV53TipoLicitacaoId",gxold:"OV53TipoLicitacaoId",gxvar:"AV53TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53TipoLicitacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTIPOLICITACAOID",row || gx.fn.currentGridRowImpl(82),gx.O.AV53TipoLicitacaoId,0)},c2v:function(){gx.O.AV53TipoLicitacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTIPOLICITACAOID",row || gx.fn.currentGridRowImpl(82),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.GridmodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLICITACAODESCRICAO",gxz:"ZV54TipoLicitacaoDescricao",gxold:"OV54TipoLicitacaoDescricao",gxvar:"AV54TipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV54TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.ZV54TipoLicitacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(82),gx.O.AV54TipoLicitacaoDescricao,0)},c2v:function(){gx.O.AV54TipoLicitacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:82,gxgrid:this.GridmodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLICITACAOCORRESP",gxz:"ZV55TipoLicitacaoCorresp",gxold:"OV55TipoLicitacaoCorresp",gxvar:"AV55TipoLicitacaoCorresp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV55TipoLicitacaoCorresp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55TipoLicitacaoCorresp=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTIPOLICITACAOCORRESP",row || gx.fn.currentGridRowImpl(82),gx.O.AV55TipoLicitacaoCorresp,0)},c2v:function(){gx.O.AV55TipoLicitacaoCorresp=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTIPOLICITACAOCORRESP",row || gx.fn.currentGridRowImpl(82),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:82,gxgrid:this.GridmodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT",gxz:"ZV39bmpPrompt",gxold:"OV39bmpPrompt",gxvar:"AV39bmpPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39bmpPrompt=Value},v2z:function(Value){gx.O.ZV39bmpPrompt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT",row || gx.fn.currentGridRowImpl(82),gx.O.AV39bmpPrompt,gx.O.AV70Bmpprompt_GXI)},c2v:function(){gx.O.AV70Bmpprompt_GXI=this.val_GXI();gx.O.AV39bmpPrompt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT",row || gx.fn.currentGridRowImpl(82))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT_GXI",row || gx.fn.currentGridRowImpl(82))}, gxvar_GXI:'AV70Bmpprompt_GXI',nac:gx.falseFn};
   GXValidFnc[87]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[92]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[94]={lvl:3,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:93,gxgrid:this.GridusuContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV52UsuarioId",gxold:"OV52UsuarioId",gxvar:"AV52UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV52UsuarioId=Value},v2z:function(Value){gx.O.ZV52UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIOID",row || gx.fn.currentGridRowImpl(93),gx.O.AV52UsuarioId,0)},c2v:function(){gx.O.AV52UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIOID",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:3,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:93,gxgrid:this.GridusuContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV56UsuarioNome",gxold:"OV56UsuarioNome",gxvar:"AV56UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV56UsuarioNome=Value},v2z:function(Value){gx.O.ZV56UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(93),gx.O.AV56UsuarioNome,0)},c2v:function(){gx.O.AV56UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:3,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:93,gxgrid:this.GridusuContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOCORRESP",gxz:"ZV57UsuarioCorresp",gxold:"OV57UsuarioCorresp",gxvar:"AV57UsuarioCorresp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV57UsuarioCorresp=Value},v2z:function(Value){gx.O.ZV57UsuarioCorresp=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIOCORRESP",row || gx.fn.currentGridRowImpl(93),gx.O.AV57UsuarioCorresp,0)},c2v:function(){gx.O.AV57UsuarioCorresp=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIOCORRESP",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:3,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:93,gxgrid:this.GridusuContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPTU",gxz:"ZV51bmpPromptU",gxold:"OV51bmpPromptU",gxvar:"AV51bmpPromptU",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV51bmpPromptU=Value},v2z:function(Value){gx.O.ZV51bmpPromptU=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPTU",row || gx.fn.currentGridRowImpl(93),gx.O.AV51bmpPromptU,gx.O.AV71Bmppromptu_GXI)},c2v:function(){gx.O.AV71Bmppromptu_GXI=this.val_GXI();gx.O.AV51bmpPromptU=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPTU",row || gx.fn.currentGridRowImpl(93))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPTU_GXI",row || gx.fn.currentGridRowImpl(93))}, gxvar_GXI:'AV71Bmppromptu_GXI',nac:gx.falseFn};
   GXValidFnc[98]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV33ProcessoId",gxold:"OV33ProcessoId",gxvar:"AV33ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV33ProcessoId,0)},c2v:function(){gx.O.AV33ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"JS", format:2,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtofabricanteempid,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEEMPID",gxz:"ZV46ProdutoFabricanteEmpId",gxold:"OV46ProdutoFabricanteEmpId",gxvar:"AV46ProdutoFabricanteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ProdutoFabricanteEmpId=Value},v2z:function(Value){gx.O.ZV46ProdutoFabricanteEmpId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEEMPID",gx.O.AV46ProdutoFabricanteEmpId,0)},c2v:function(){gx.O.AV46ProdutoFabricanteEmpId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFABRICANTEEMPID")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Setorempresaid,isvalid:null,rgrid:[],fld:"vSETOREMPRESAID",gxz:"ZV49SetorEmpresaId",gxold:"OV49SetorEmpresaId",gxvar:"AV49SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SetorEmpresaId=Value},v2z:function(Value){gx.O.ZV49SetorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSETOREMPRESAID",gx.O.AV49SetorEmpresaId,0)},c2v:function(){gx.O.AV49SetorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSETOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTEMPRESAID",gxz:"ZV50ClassificacaoEstEmpresaId",gxold:"OV50ClassificacaoEstEmpresaId",gxvar:"AV50ClassificacaoEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ClassificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV50ClassificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTEMPRESAID",gx.O.AV50ClassificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV50ClassificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"BTNHELP",grid:0};
   GXValidFnc[114]={fld:"PROMPT_PRODUTOFABRICANTEID",grid:0};
   GXValidFnc[115]={fld:"PROMPT_CLASSIFICACAOESTID",grid:0};
   GXValidFnc[116]={fld:"PROMPT_SETORID",grid:0};
   this.AV23Diretorio = "" ;
   this.ZV23Diretorio = "" ;
   this.OV23Diretorio = "" ;
   this.AV24ExcluirDados = "" ;
   this.ZV24ExcluirDados = "" ;
   this.OV24ExcluirDados = "" ;
   this.AV45ProdutoFabricanteId = 0 ;
   this.ZV45ProdutoFabricanteId = 0 ;
   this.OV45ProdutoFabricanteId = 0 ;
   this.AV47ProdutoFabricanteFantasia = "" ;
   this.ZV47ProdutoFabricanteFantasia = "" ;
   this.OV47ProdutoFabricanteFantasia = "" ;
   this.AV40AtualizarFornecedor = "" ;
   this.ZV40AtualizarFornecedor = "" ;
   this.OV40AtualizarFornecedor = "" ;
   this.AV41ClassificacaoEstId = "" ;
   this.ZV41ClassificacaoEstId = "" ;
   this.OV41ClassificacaoEstId = "" ;
   this.AV58ClassificacaoEstDescricao = "" ;
   this.ZV58ClassificacaoEstDescricao = "" ;
   this.OV58ClassificacaoEstDescricao = "" ;
   this.AV42SetorId = "" ;
   this.ZV42SetorId = "" ;
   this.OV42SetorId = "" ;
   this.AV48SetorDescricao = "" ;
   this.ZV48SetorDescricao = "" ;
   this.OV48SetorDescricao = "" ;
   this.ZV53TipoLicitacaoId = 0 ;
   this.OV53TipoLicitacaoId = 0 ;
   this.ZV54TipoLicitacaoDescricao = "" ;
   this.OV54TipoLicitacaoDescricao = "" ;
   this.ZV55TipoLicitacaoCorresp = 0 ;
   this.OV55TipoLicitacaoCorresp = 0 ;
   this.ZV39bmpPrompt = "" ;
   this.OV39bmpPrompt = "" ;
   this.ZV52UsuarioId = "" ;
   this.OV52UsuarioId = "" ;
   this.ZV56UsuarioNome = "" ;
   this.OV56UsuarioNome = "" ;
   this.ZV57UsuarioCorresp = "" ;
   this.OV57UsuarioCorresp = "" ;
   this.ZV51bmpPromptU = "" ;
   this.OV51bmpPromptU = "" ;
   this.AV33ProcessoId = 0 ;
   this.ZV33ProcessoId = 0 ;
   this.OV33ProcessoId = 0 ;
   this.AV46ProdutoFabricanteEmpId = "" ;
   this.ZV46ProdutoFabricanteEmpId = "" ;
   this.OV46ProdutoFabricanteEmpId = "" ;
   this.AV49SetorEmpresaId = "" ;
   this.ZV49SetorEmpresaId = "" ;
   this.OV49SetorEmpresaId = "" ;
   this.AV50ClassificacaoEstEmpresaId = "" ;
   this.ZV50ClassificacaoEstEmpresaId = "" ;
   this.OV50ClassificacaoEstEmpresaId = "" ;
   this.AV63Tab = [ ] ;
   this.AV23Diretorio = "" ;
   this.AV24ExcluirDados = "" ;
   this.AV45ProdutoFabricanteId = 0 ;
   this.AV47ProdutoFabricanteFantasia = "" ;
   this.AV40AtualizarFornecedor = "" ;
   this.AV41ClassificacaoEstId = "" ;
   this.AV58ClassificacaoEstDescricao = "" ;
   this.AV42SetorId = "" ;
   this.AV48SetorDescricao = "" ;
   this.AV33ProcessoId = 0 ;
   this.AV46ProdutoFabricanteEmpId = "" ;
   this.AV49SetorEmpresaId = "" ;
   this.AV50ClassificacaoEstEmpresaId = "" ;
   this.AV53TipoLicitacaoId = 0 ;
   this.AV54TipoLicitacaoDescricao = "" ;
   this.AV55TipoLicitacaoCorresp = 0 ;
   this.AV39bmpPrompt = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.AV52UsuarioId = "" ;
   this.AV56UsuarioNome = "" ;
   this.AV57UsuarioCorresp = "" ;
   this.AV51bmpPromptU = "" ;
   this.A2953SetorId = "" ;
   this.A2952SetorEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A449PessoaFabricante = "" ;
   this.Events = {"e13of2_client": ["ENTER", true] ,"e11of2_client": ["'FECHAR'", true] ,"e12of2_client": ["TIMER1.ELAPSED", true] ,"e14of2_client": ["'BUSCARDIRETORIO'", true] ,"e19of2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDMOD_nFirstRecordOnPage'},{av:'GRIDMOD_nEOF'},{av:'AV39bmpPrompt',fld:'vBMPPROMPT',grid:82},{av:'GRIDUSU_nFirstRecordOnPage'},{av:'GRIDUSU_nEOF'},{av:'AV51bmpPromptU',fld:'vBMPPROMPTU',grid:93},{av:'AV53TipoLicitacaoId',fld:'vTIPOLICITACAOID',grid:82},{av:'AV55TipoLicitacaoCorresp',fld:'vTIPOLICITACAOCORRESP',grid:82},{av:'AV52UsuarioId',fld:'vUSUARIOID',grid:93},{av:'AV57UsuarioCorresp',fld:'vUSUARIOCORRESP',grid:93}],[{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV29SdtTipoLicitacao',fld:'vSDTTIPOLICITACAO'},{av:'AV31SdtUsuario',fld:'vSDTUSUARIO'},{av:'AV81GXV3',fld:'vGXV3'},{av:'AV30SdtTipoLicitacaoItem',fld:'vSDTTIPOLICITACAOITEM'},{av:'AV83GXV4',fld:'vGXV4'},{av:'AV32SdtUsuarioItem',fld:'vSDTUSUARIOITEM'}]];
   this.EvtParms["GRIDMOD.LOAD"] = [[],[{av:'AV29SdtTipoLicitacao',fld:'vSDTTIPOLICITACAO'},{av:'AV72GXV1',fld:'vGXV1'},{av:'AV30SdtTipoLicitacaoItem',fld:'vSDTTIPOLICITACAOITEM'},{av:'AV53TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV54TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV55TipoLicitacaoCorresp',fld:'vTIPOLICITACAOCORRESP'}]];
   this.EvtParms["GRIDUSU.LOAD"] = [[],[{av:'AV31SdtUsuario',fld:'vSDTUSUARIO'},{av:'AV73GXV2',fld:'vGXV2'},{av:'AV32SdtUsuarioItem',fld:'vSDTUSUARIOITEM'},{av:'AV52UsuarioId',fld:'vUSUARIOID'},{av:'AV56UsuarioNome',fld:'vUSUARIONOME'},{av:'AV57UsuarioCorresp',fld:'vUSUARIOCORRESP'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV45ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV46ProdutoFabricanteEmpId',fld:'vPRODUTOFABRICANTEEMPID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A449PessoaFabricante',fld:'PESSOAFABRICANTE'},{av:'AV41ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV50ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV42SetorId',fld:'vSETORID'},{av:'A2952SetorEmpresaId',fld:'SETOREMPRESAID'},{av:'AV49SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'A2953SetorId',fld:'SETORID'},{av:'AV53TipoLicitacaoId',fld:'vTIPOLICITACAOID',grid:82},{av:'AV54TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO',grid:82},{av:'AV55TipoLicitacaoCorresp',fld:'vTIPOLICITACAOCORRESP',grid:82},{av:'AV62SdtTipoLicitacaoParm',fld:'vSDTTIPOLICITACAOPARM'},{av:'AV52UsuarioId',fld:'vUSUARIOID',grid:93},{av:'AV56UsuarioNome',fld:'vUSUARIONOME',grid:93},{av:'AV57UsuarioCorresp',fld:'vUSUARIOCORRESP',grid:93},{av:'AV59SdtUsuarioParm',fld:'vSDTUSUARIOPARM'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV24ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV40AtualizarFornecedor',fld:'vATUALIZARFORNECEDOR'},{av:'AV38ErrDsc',fld:'vERRDSC'}],[{av:'AV26tpErro',fld:'vTPERRO'},{av:'AV74GXLvl109',fld:'vGXLVL109'},{av:'AV75GXLvl136',fld:'vGXLVL136'},{av:'AV76GXLvl156',fld:'vGXLVL156'},{av:'AV29SdtTipoLicitacao',fld:'vSDTTIPOLICITACAO'},{av:'AV31SdtUsuario',fld:'vSDTUSUARIO'},{av:'AV61SdtTipoLicitacaoParmItem',fld:'vSDTTIPOLICITACAOPARMITEM'},{av:'AV62SdtTipoLicitacaoParm',fld:'vSDTTIPOLICITACAOPARM'},{av:'AV60SdtUsuarioParmItem',fld:'vSDTUSUARIOPARMITEM'},{av:'AV59SdtUsuarioParm',fld:'vSDTUSUARIOPARM'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV33ProcessoId',fld:'vPROCESSOID'},{av:'AV65ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV38ErrDsc',fld:'vERRDSC'},{av:'AV40AtualizarFornecedor',fld:'vATUALIZARFORNECEDOR'},{av:'AV42SetorId',fld:'vSETORID'},{av:'AV41ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV45ProdutoFabricanteId',fld:'vPRODUTOFABRICANTEID'},{av:'AV24ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV33ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV79GXLvl317',fld:'vGXLVL317'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[{av:'GRIDMOD_nFirstRecordOnPage'},{av:'GRIDMOD_nEOF'},{av:'AV39bmpPrompt',fld:'vBMPPROMPT'},{av:'AV53TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV55TipoLicitacaoCorresp',fld:'vTIPOLICITACAOCORRESP'},{av:'AV52UsuarioId',fld:'vUSUARIOID'},{av:'AV57UsuarioCorresp',fld:'vUSUARIOCORRESP'}],[]];
   this.setPrompt("PROMPT_PRODUTOFABRICANTEID", [36]);
   this.setPrompt("PROMPT_CLASSIFICACAOESTID", [44]);
   this.setPrompt("PROMPT_SETORID", [51]);
   this.setPrompt("&BMPPROMPT", [85]);
   this.setPrompt("&BMPPROMPTU", [96]);
   this.EnterCtrl = ["BUTTON1"];
   GridmodContainer.addRefreshingVar({rfrVar:"AV39bmpPrompt", rfrProp:"Value", gxAttId:"Bmpprompt"});
   GridmodContainer.addRefreshingVar({rfrVar:"AV53TipoLicitacaoId", rfrProp:"Value", gxAttId:"Tipolicitacaoid"});
   GridmodContainer.addRefreshingVar({rfrVar:"AV55TipoLicitacaoCorresp", rfrProp:"Value", gxAttId:"Tipolicitacaocorresp"});
   GridmodContainer.addRefreshingVar({rfrVar:"AV52UsuarioId", rfrProp:"Value", gxAttId:"Usuarioid"});
   GridmodContainer.addRefreshingVar({rfrVar:"AV57UsuarioCorresp", rfrProp:"Value", gxAttId:"Usuariocorresp"});
   GridusuContainer.addRefreshingVar({rfrVar:"AV51bmpPromptU", rfrProp:"Value", gxAttId:"Bmppromptu"});
   GridusuContainer.addRefreshingVar({rfrVar:"AV53TipoLicitacaoId", rfrProp:"Value", gxAttId:"Tipolicitacaoid"});
   GridusuContainer.addRefreshingVar({rfrVar:"AV55TipoLicitacaoCorresp", rfrProp:"Value", gxAttId:"Tipolicitacaocorresp"});
   GridusuContainer.addRefreshingVar({rfrVar:"AV52UsuarioId", rfrProp:"Value", gxAttId:"Usuarioid"});
   GridusuContainer.addRefreshingVar({rfrVar:"AV57UsuarioCorresp", rfrProp:"Value", gxAttId:"Usuariocorresp"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportaestoquecompras());
