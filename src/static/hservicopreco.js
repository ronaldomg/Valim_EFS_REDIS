/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:7:28.11
*/
gx.evt.autoSkip = false;
gx.define('hservicopreco', false, function () {
   this.ServerClass =  "hservicopreco" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV29ServicoCodigoGrid=gx.fn.getIntegerValue("vSERVICOCODIGOGRID",'.') ;
   };
   this.Valid_Servicocodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SERVICOCODIGO", gx.fn.currentGridRowImpl(48));
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
   this.Valid_Servicoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SERVICOEMPRESAID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Servicocodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SERVICOCODIGO", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Servicoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SERVICOEMPRESAID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111ch2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121ch2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171ch2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131ch2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141ch2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151ch2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161ch2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e211ch2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e221ch2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e231ch2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241ch2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251ch2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261ch2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,61,68];
   this.GXLastCtrlId =68;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hservicopreco",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8626,49,"SERVICOCODIGO","","","ServicoCodigo","int",0,"px",4,4,"right",null,[],8626,"ServicoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Servicodescricaogrid",50,"vSERVICODESCRICAOGRID","","","ServicoDescricaoGrid","svchar",0,"px",60,60,"left",null,[],"Servicodescricaogrid","ServicoDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8683,51,"SERVICOPRECODESCRICAO","","","ServicoPrecoDescricao","svchar",0,"px",30,30,"left",null,[],8683,"ServicoPrecoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8688,52,"SERVICOPRECODATA","","","ServicoPrecoData","date",0,"px",10,10,"right",null,[],8688,"ServicoPrecoData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8684,53,"SERVICOPRECOVLR","","","ServicoPrecoVlr","decimal",0,"px",10,10,"right",null,[],8684,"ServicoPrecoVlr",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e211ch2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e221ch2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e231ch2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8687,57,"SERVICOPRECOEMPRESAID","Empresa do Preço do Serviço","","ServicoPrecoEmpresaId","char",0,"px",10,10,"left",null,[],8687,"ServicoPrecoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8625,58,"SERVICOEMPRESAID","Empresa do Serviço","","ServicoEmpresaId","char",0,"px",10,10,"left",null,[],8625,"ServicoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8686,59,"SERVICOPRECODATUSUALT","Data Alteração","","ServicoPrecoDatUsuAlt","dtime",0,"px",16,16,"right",null,[],8686,"ServicoPrecoDatUsuAlt",false,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8685,60,"SERVICOPRECOUSUALT","Usuário Alteração","","ServicoPrecoUsuAlt","char",0,"px",12,12,"left",null,[],8685,"ServicoPrecoUsuAlt",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8622,61,"SERVICODESCRICAO","Servico Descricao","","ServicoDescricao","svchar",0,"px",60,60,"left",null,[],8622,"ServicoDescricao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICOCODIGO",gxz:"ZV28ServicoCodigo",gxold:"OV28ServicoCodigo",gxvar:"AV28ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ServicoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSERVICOCODIGO",gx.O.AV28ServicoCodigo,0)},c2v:function(){gx.O.AV28ServicoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSERVICOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICODESCRICAO",gxz:"ZV31ServicoDescricao",gxold:"OV31ServicoDescricao",gxvar:"AV31ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ServicoDescricao=Value},v2z:function(Value){gx.O.ZV31ServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSERVICODESCRICAO",gx.O.AV31ServicoDescricao,0)},c2v:function(){gx.O.AV31ServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Servicocodigo,isvalid:null,rgrid:[],fld:"SERVICOCODIGO",gxz:"Z8626ServicoCodigo",gxold:"O8626ServicoCodigo",gxvar:"A8626ServicoCodigo",ucs:[],op:[61],ip:[61,49,58],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8626ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8626ServicoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SERVICOCODIGO",row || gx.fn.currentGridRowImpl(48),gx.O.A8626ServicoCodigo,0)},c2v:function(){gx.O.A8626ServicoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SERVICOCODIGO",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICODESCRICAOGRID",gxz:"ZV30ServicoDescricaoGrid",gxold:"OV30ServicoDescricaoGrid",gxvar:"AV30ServicoDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30ServicoDescricaoGrid=Value},v2z:function(Value){gx.O.ZV30ServicoDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vSERVICODESCRICAOGRID",row || gx.fn.currentGridRowImpl(48),gx.O.AV30ServicoDescricaoGrid,0)},c2v:function(){gx.O.AV30ServicoDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vSERVICODESCRICAOGRID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECODESCRICAO",gxz:"Z8683ServicoPrecoDescricao",gxold:"O8683ServicoPrecoDescricao",gxvar:"A8683ServicoPrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8683ServicoPrecoDescricao=Value},v2z:function(Value){gx.O.Z8683ServicoPrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICOPRECODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A8683ServicoPrecoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8683ServicoPrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICOPRECODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECODATA",gxz:"Z8688ServicoPrecoData",gxold:"O8688ServicoPrecoData",gxvar:"A8688ServicoPrecoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8688ServicoPrecoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8688ServicoPrecoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SERVICOPRECODATA",row || gx.fn.currentGridRowImpl(48),gx.O.A8688ServicoPrecoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8688ServicoPrecoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SERVICOPRECODATA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:9,dec:2,sign:true,pic:"ZZZ,ZZ9.99",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECOVLR",gxz:"Z8684ServicoPrecoVlr",gxold:"O8684ServicoPrecoVlr",gxvar:"A8684ServicoPrecoVlr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8684ServicoPrecoVlr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8684ServicoPrecoVlr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SERVICOPRECOVLR",row || gx.fn.currentGridRowImpl(48),gx.O.A8684ServicoPrecoVlr,2,',')},c2v:function(){gx.O.A8684ServicoPrecoVlr=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SERVICOPRECOVLR",row || gx.fn.currentGridRowImpl(48),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECOEMPRESAID",gxz:"Z8687ServicoPrecoEmpresaId",gxold:"O8687ServicoPrecoEmpresaId",gxvar:"A8687ServicoPrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8687ServicoPrecoEmpresaId=Value},v2z:function(Value){gx.O.Z8687ServicoPrecoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICOPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A8687ServicoPrecoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8687ServicoPrecoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICOPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Servicoempresaid,isvalid:null,rgrid:[],fld:"SERVICOEMPRESAID",gxz:"Z8625ServicoEmpresaId",gxold:"O8625ServicoEmpresaId",gxvar:"A8625ServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8625ServicoEmpresaId=Value},v2z:function(Value){gx.O.Z8625ServicoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A8625ServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8625ServicoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECODATUSUALT",gxz:"Z8686ServicoPrecoDatUsuAlt",gxold:"O8686ServicoPrecoDatUsuAlt",gxvar:"A8686ServicoPrecoDatUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8686ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8686ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SERVICOPRECODATUSUALT",row || gx.fn.currentGridRowImpl(48),gx.O.A8686ServicoPrecoDatUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8686ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SERVICOPRECODATUSUALT",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECOUSUALT",gxz:"Z8685ServicoPrecoUsuAlt",gxold:"O8685ServicoPrecoUsuAlt",gxvar:"A8685ServicoPrecoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8685ServicoPrecoUsuAlt=Value},v2z:function(Value){gx.O.Z8685ServicoPrecoUsuAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICOPRECOUSUALT",row || gx.fn.currentGridRowImpl(48),gx.O.A8685ServicoPrecoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8685ServicoPrecoUsuAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICOPRECOUSUALT",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICODESCRICAO",gxz:"Z8622ServicoDescricao",gxold:"O8622ServicoDescricao",gxvar:"A8622ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8622ServicoDescricao=Value},v2z:function(Value){gx.O.Z8622ServicoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A8622ServicoDescricao,0)},c2v:function(){gx.O.A8622ServicoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28ServicoCodigo = 0 ;
   this.ZV28ServicoCodigo = 0 ;
   this.OV28ServicoCodigo = 0 ;
   this.AV31ServicoDescricao = "" ;
   this.ZV31ServicoDescricao = "" ;
   this.OV31ServicoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8626ServicoCodigo = 0 ;
   this.O8626ServicoCodigo = 0 ;
   this.ZV30ServicoDescricaoGrid = "" ;
   this.OV30ServicoDescricaoGrid = "" ;
   this.Z8683ServicoPrecoDescricao = "" ;
   this.O8683ServicoPrecoDescricao = "" ;
   this.Z8688ServicoPrecoData = gx.date.nullDate() ;
   this.O8688ServicoPrecoData = gx.date.nullDate() ;
   this.Z8684ServicoPrecoVlr = 0 ;
   this.O8684ServicoPrecoVlr = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8687ServicoPrecoEmpresaId = "" ;
   this.O8687ServicoPrecoEmpresaId = "" ;
   this.Z8625ServicoEmpresaId = "" ;
   this.O8625ServicoEmpresaId = "" ;
   this.Z8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.O8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.Z8685ServicoPrecoUsuAlt = "" ;
   this.O8685ServicoPrecoUsuAlt = "" ;
   this.Z8622ServicoDescricao = "" ;
   this.O8622ServicoDescricao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28ServicoCodigo = 0 ;
   this.AV31ServicoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8626ServicoCodigo = 0 ;
   this.AV30ServicoDescricaoGrid = "" ;
   this.A8683ServicoPrecoDescricao = "" ;
   this.A8688ServicoPrecoData = gx.date.nullDate() ;
   this.A8684ServicoPrecoVlr = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8687ServicoPrecoEmpresaId = "" ;
   this.A8625ServicoEmpresaId = "" ;
   this.A8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.A8685ServicoPrecoUsuAlt = "" ;
   this.A8622ServicoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.AV38Pgmname = "" ;
   this.AV29ServicoCodigoGrid = 0 ;
   this.Events = {"e111ch2_client": ["'ANTERIOR'", true] ,"e121ch2_client": ["'PROXIMO'", true] ,"e171ch2_client": ["VPAGINA.CLICK", true] ,"e131ch2_client": ["'NOVO'", true] ,"e141ch2_client": ["'FECHAR'", true] ,"e151ch2_client": ["'IMPRIMIR'", true] ,"e161ch2_client": ["'PROCURAR'", true] ,"e211ch2_client": ["'ALTERAR'", true] ,"e221ch2_client": ["'EXCLUIR'", true] ,"e231ch2_client": ["'CONSULTAR'", true] ,"e241ch2_client": ["'ATUALIZAPAGINA'", true] ,"e251ch2_client": ["ENTER", true] ,"e261ch2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'}],[{ctrl:'SERVICOPRECODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOPRECODESCRICAO","Title")',ctrl:'SERVICOPRECODESCRICAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SERVICOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOCODIGO","Title")',ctrl:'SERVICOCODIGO',prop:'Title'},{ctrl:'SERVICOPRECODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOPRECODATA","Title")',ctrl:'SERVICOPRECODATA',prop:'Title'},{ctrl:'SERVICOPRECOVLR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOPRECOVLR","Title")',ctrl:'SERVICOPRECOVLR',prop:'Title'},{ctrl:'vSERVICODESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSERVICODESCRICAOGRID","Title")',ctrl:'vSERVICODESCRICAOGRID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'}],[{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'AV43GXLvl136',fld:'vGXLVL136'},{av:'AV30ServicoDescricaoGrid',fld:'vSERVICODESCRICAOGRID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ServicoPrecoData',fld:'vSERVICOPRECODATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32ServicoPrecoVlr',fld:'vSERVICOPRECOVLR'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV33ServicoPrecoDatUsuAlt',fld:'vSERVICOPRECODATUSUALT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'AV33ServicoPrecoDatUsuAlt',fld:'vSERVICOPRECODATUSUALT'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV32ServicoPrecoVlr',fld:'vSERVICOPRECOVLR'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ServicoPrecoData',fld:'vSERVICOPRECODATA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV39Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8688ServicoPrecoData',fld:'SERVICOPRECODATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A8688ServicoPrecoData',fld:'SERVICOPRECODATA'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8688ServicoPrecoData',fld:'SERVICOPRECODATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A8688ServicoPrecoData',fld:'SERVICOPRECODATA'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8688ServicoPrecoData',fld:'SERVICOPRECODATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A8688ServicoPrecoData',fld:'SERVICOPRECODATA'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV31ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'AV29ServicoCodigoGrid',fld:'vSERVICOCODIGOGRID'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29ServicoCodigoGrid", "vSERVICOCODIGOGRID", 0, "int");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29ServicoCodigoGrid", "vSERVICOCODIGOGRID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV38Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A8626ServicoCodigo", rfrProp:"Value", gxAttId:"8626"});
   GridContainer.addRefreshingVar({rfrVar:"A8625ServicoEmpresaId", rfrProp:"Value", gxAttId:"8625"});
   GridContainer.addRefreshingVar({rfrVar:"AV29ServicoCodigoGrid"});
   GridContainer.addRefreshingVar({rfrVar:"A8622ServicoDescricao", rfrProp:"Value", gxAttId:"8622"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hservicopreco());
