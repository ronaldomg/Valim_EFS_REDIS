/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:2:37.85
*/
gx.evt.autoSkip = false;
gx.define('hservico', false, function () {
   this.ServerClass =  "hservico" ;
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
      this.AV37SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Listaservicoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOID", gx.fn.currentGridRowImpl(60));
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
   this.e111bd2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121bd2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171bd2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131bd2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141bd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151bd2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161bd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201bd2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211bd2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221bd2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241bd2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251bd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261bd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,35,38,41,43,45,47,49,51,54,56,57,61,62,63,64,65,66,67,68,69,70,76,78,79,80,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hservico",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8626,61,"SERVICOCODIGO","","","ServicoCodigo","int",0,"px",4,4,"right",null,[],8626,"ServicoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Servicodescricaogrid",62,"vSERVICODESCRICAOGRID","","","ServicoDescricaoGrid","svchar",0,"px",60,60,"left",null,[],"Servicodescricaogrid","ServicoDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2983,63,"LISTASERVICOID","","","ListaServicoId","int",0,"px",6,6,"right",null,[],2983,"ListaServicoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Listaservicodescricaogrid",64,"vLISTASERVICODESCRICAOGRID","","","ListaServicoDescricaoGrid","svchar",0,"px",360,80,"left",null,[],"Listaservicodescricaogrid","ListaServicoDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",65,0,"px",17,"px","e201bd2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",66,0,"px",17,"px","e211bd2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",67,0,"px",17,"px","e221bd2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8625,68,"SERVICOEMPRESAID","Empresa do Serviço","","ServicoEmpresaId","char",0,"px",10,10,"left",null,[],8625,"ServicoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8622,69,"SERVICODESCRICAO","Servico Descricao","","ServicoDescricao","svchar",0,"px",60,60,"left",null,[],8622,"ServicoDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2980,70,"LISTASERVICODESCRICAO","Descrição da Lista de Serviço","","ListaServicoDescricao","svchar",0,"px",360,80,"left",null,[],2980,"ListaServicoDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICOCODIGO",gxz:"ZV27ServicoCodigo",gxold:"OV27ServicoCodigo",gxvar:"AV27ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ServicoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSERVICOCODIGO",gx.O.AV27ServicoCodigo,0)},c2v:function(){gx.O.AV27ServicoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSERVICOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICODESCRICAO",gxz:"ZV28ServicoDescricao",gxold:"OV28ServicoDescricao",gxvar:"AV28ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ServicoDescricao=Value},v2z:function(Value){gx.O.ZV28ServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSERVICODESCRICAO",gx.O.AV28ServicoDescricao,0)},c2v:function(){gx.O.AV28ServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE10",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLISTASERVICOID",gxz:"ZV29ListaServicoId",gxold:"OV29ListaServicoId",gxvar:"AV29ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV29ListaServicoId,0)},c2v:function(){gx.O.AV29ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICODESCRICAO",gxz:"ZV30ListaServicoDescricao",gxold:"OV30ListaServicoDescricao",gxvar:"AV30ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ListaServicoDescricao=Value},v2z:function(Value){gx.O.ZV30ListaServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vLISTASERVICODESCRICAO",gx.O.AV30ListaServicoDescricao,0)},c2v:function(){gx.O.AV30ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLISTASERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"IMAGE1",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOCODIGO",gxz:"Z8626ServicoCodigo",gxold:"O8626ServicoCodigo",gxvar:"A8626ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8626ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8626ServicoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SERVICOCODIGO",row || gx.fn.currentGridRowImpl(60),gx.O.A8626ServicoCodigo,0)},c2v:function(){gx.O.A8626ServicoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SERVICOCODIGO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICODESCRICAOGRID",gxz:"ZV35ServicoDescricaoGrid",gxold:"OV35ServicoDescricaoGrid",gxvar:"AV35ServicoDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35ServicoDescricaoGrid=Value},v2z:function(Value){gx.O.ZV35ServicoDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vSERVICODESCRICAOGRID",row || gx.fn.currentGridRowImpl(60),gx.O.AV35ServicoDescricaoGrid,0)},c2v:function(){gx.O.AV35ServicoDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vSERVICODESCRICAOGRID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Listaservicoid,isvalid:null,rgrid:[],fld:"LISTASERVICOID",gxz:"Z2983ListaServicoId",gxold:"O2983ListaServicoId",gxvar:"A2983ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2983ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2983ListaServicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICOID",row || gx.fn.currentGridRowImpl(60),gx.O.A2983ListaServicoId,0)},c2v:function(){gx.O.A2983ListaServicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LISTASERVICOID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:360,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICODESCRICAOGRID",gxz:"ZV36ListaServicoDescricaoGrid",gxold:"OV36ListaServicoDescricaoGrid",gxvar:"AV36ListaServicoDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36ListaServicoDescricaoGrid=Value},v2z:function(Value){gx.O.ZV36ListaServicoDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vLISTASERVICODESCRICAOGRID",row || gx.fn.currentGridRowImpl(60),gx.O.AV36ListaServicoDescricaoGrid,0)},c2v:function(){gx.O.AV36ListaServicoDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLISTASERVICODESCRICAOGRID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOEMPRESAID",gxz:"Z8625ServicoEmpresaId",gxold:"O8625ServicoEmpresaId",gxvar:"A8625ServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8625ServicoEmpresaId=Value},v2z:function(Value){gx.O.Z8625ServicoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(60),gx.O.A8625ServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8625ServicoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICODESCRICAO",gxz:"Z8622ServicoDescricao",gxold:"O8622ServicoDescricao",gxvar:"A8622ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8622ServicoDescricao=Value},v2z:function(Value){gx.O.Z8622ServicoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICODESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.A8622ServicoDescricao,0)},c2v:function(){gx.O.A8622ServicoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICODESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"svchar",len:360,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICODESCRICAO",gxz:"Z2980ListaServicoDescricao",gxold:"O2980ListaServicoDescricao",gxvar:"A2980ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2980ListaServicoDescricao=Value},v2z:function(Value){gx.O.Z2980ListaServicoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICODESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.A2980ListaServicoDescricao,0)},c2v:function(){gx.O.A2980ListaServicoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LISTASERVICODESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[76]={fld:"JS", format:2,grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTERES",gxz:"ZV33QtCaracteres",gxold:"OV33QtCaracteres",gxvar:"AV33QtCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33QtCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33QtCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTERES",gx.O.AV33QtCaracteres,0)},c2v:function(){gx.O.AV33QtCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"PROMPT_LISTASERVICOID",grid:0};
   this.AV27ServicoCodigo = 0 ;
   this.ZV27ServicoCodigo = 0 ;
   this.OV27ServicoCodigo = 0 ;
   this.AV28ServicoDescricao = "" ;
   this.ZV28ServicoDescricao = "" ;
   this.OV28ServicoDescricao = "" ;
   this.AV29ListaServicoId = 0 ;
   this.ZV29ListaServicoId = 0 ;
   this.OV29ListaServicoId = 0 ;
   this.AV30ListaServicoDescricao = "" ;
   this.ZV30ListaServicoDescricao = "" ;
   this.OV30ListaServicoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8626ServicoCodigo = 0 ;
   this.O8626ServicoCodigo = 0 ;
   this.ZV35ServicoDescricaoGrid = "" ;
   this.OV35ServicoDescricaoGrid = "" ;
   this.Z2983ListaServicoId = 0 ;
   this.O2983ListaServicoId = 0 ;
   this.ZV36ListaServicoDescricaoGrid = "" ;
   this.OV36ListaServicoDescricaoGrid = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8625ServicoEmpresaId = "" ;
   this.O8625ServicoEmpresaId = "" ;
   this.Z8622ServicoDescricao = "" ;
   this.O8622ServicoDescricao = "" ;
   this.Z2980ListaServicoDescricao = "" ;
   this.O2980ListaServicoDescricao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV33QtCaracteres = 0 ;
   this.ZV33QtCaracteres = 0 ;
   this.OV33QtCaracteres = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV27ServicoCodigo = 0 ;
   this.AV28ServicoDescricao = "" ;
   this.AV29ListaServicoId = 0 ;
   this.AV30ListaServicoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33QtCaracteres = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.A8626ServicoCodigo = 0 ;
   this.AV35ServicoDescricaoGrid = "" ;
   this.A2983ListaServicoId = 0 ;
   this.AV36ListaServicoDescricaoGrid = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8625ServicoEmpresaId = "" ;
   this.A8622ServicoDescricao = "" ;
   this.A2980ListaServicoDescricao = "" ;
   this.AV37SnRecuperaFiltro = "" ;
   this.AV40Pgmname = "" ;
   this.Events = {"e111bd2_client": ["'ANTERIOR'", true] ,"e121bd2_client": ["'PROXIMO'", true] ,"e171bd2_client": ["VPAGINA.CLICK", true] ,"e131bd2_client": ["'NOVO'", true] ,"e141bd2_client": ["'FECHAR'", true] ,"e151bd2_client": ["'IMPRIMIR'", true] ,"e161bd2_client": ["'PROCURAR'", true] ,"e201bd2_client": ["'ALTERAR'", true] ,"e211bd2_client": ["'EXCLUIR'", true] ,"e221bd2_client": ["'CONSULTAR'", true] ,"e241bd2_client": ["'ATUALIZAPAGINA'", true] ,"e251bd2_client": ["ENTER", true] ,"e261bd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'}],[{ctrl:'SERVICOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SERVICOCODIGO","Title")',ctrl:'SERVICOCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LISTASERVICOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LISTASERVICOID","Title")',ctrl:'LISTASERVICOID',prop:'Title'},{ctrl:'vSERVICODESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSERVICODESCRICAOGRID","Title")',ctrl:'vSERVICODESCRICAOGRID',prop:'Title'},{ctrl:'vLISTASERVICODESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vLISTASERVICODESCRICAOGRID","Title")',ctrl:'vLISTASERVICODESCRICAOGRID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'},{av:'AV30ListaServicoDescricao',fld:'vLISTASERVICODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'}],[{av:'AV35ServicoDescricaoGrid',fld:'vSERVICODESCRICAOGRID'},{av:'AV36ListaServicoDescricaoGrid',fld:'vLISTASERVICODESCRICAOGRID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV28ServicoDescricao',fld:'vSERVICODESCRICAO'},{av:'AV29ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A8622ServicoDescricao',fld:'SERVICODESCRICAO'},{av:'A2980ListaServicoDescricao',fld:'LISTASERVICODESCRICAO'}],[]];
   this.setPrompt("PROMPT_LISTASERVICOID", [26]);
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV37SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV40Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A8622ServicoDescricao", rfrProp:"Value", gxAttId:"8622"});
   GridContainer.addRefreshingVar({rfrVar:"A2980ListaServicoDescricao", rfrProp:"Value", gxAttId:"2980"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hservico());
