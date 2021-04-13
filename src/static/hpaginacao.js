/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:45.43
*/
gx.evt.autoSkip = false;
gx.define('hpaginacao', false, function () {
   this.ServerClass =  "hpaginacao" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV27SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Empresapaginacaoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(28) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAPAGINACAOEMPRESAID", gx.fn.currentGridRowImpl(28));
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
   this.e11362_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12362_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e19362_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20362_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21362_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e15362_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13362_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14362_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e22362_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e23362_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24362_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25362_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,50];
   this.GXLastCtrlId =50;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpaginacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(82,29,"EMPRESAPAGINACAOEMPRESAID","","","EmpresaPaginacaoEmpresaId","char",0,"px",10,10,"left",null,[],82,"EmpresaPaginacaoEmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(83,30,"EMPRESAPAGINACAONOME","","","EmpresaPaginacaoNome","svchar",0,"px",40,40,"left",null,[],83,"EmpresaPaginacaoNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",31,0,"px",17,"px","e19362_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",32,0,"px",17,"px","e20362_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",33,0,"px",17,"px","e21362_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(93,34,"PAGINACAONUMEROBALANCETE","Número da Pág. do Balancete de Verificação","","PaginacaoNumeroBalancete","int",0,"px",4,4,"right",null,[],93,"PaginacaoNumeroBalancete",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(89,35,"PAGINACAONUMEROBALANCO","Número da Pág. do Balanço Patrimonial","","PaginacaoNumeroBalanco","int",0,"px",4,4,"right",null,[],89,"PaginacaoNumeroBalanco",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(85,36,"PAGINACAONUMERODIARIO","Número da Pág. do Diário","","PaginacaoNumeroDiario","int",0,"px",4,4,"right",null,[],85,"PaginacaoNumeroDiario",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(91,37,"PAGINACAONUMEROPLANOCONTAS","Número da Pág. do Plano de Contas","","PaginacaoNumeroPlanoContas","int",0,"px",4,4,"right",null,[],91,"PaginacaoNumeroPlanoContas",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(87,38,"PAGINACAONUMERORAZAO","Número da Pág. do Razão","","PaginacaoNumeroRazao","int",0,"px",4,4,"right",null,[],87,"PaginacaoNumeroRazao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(92,39,"PAGINACAOQUANTIDADEBALANCETE","Qtde Páginas do Balancete de Verificação","","PaginacaoQuantidadeBalancete","int",0,"px",4,4,"right",null,[],92,"PaginacaoQuantidadeBalancete",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(88,40,"PAGINACAOQUANTIDADEBALANCO","Qtde Páginas do Balanço Patrimonial","","PaginacaoQuantidadeBalanco","int",0,"px",4,4,"right",null,[],88,"PaginacaoQuantidadeBalanco",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(84,41,"PAGINACAOQUANTIDADEDIARIO","Qtde Páginas do Diário","","PaginacaoQuantidadeDiario","int",0,"px",4,4,"right",null,[],84,"PaginacaoQuantidadeDiario",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(90,42,"PAGINACAOQUANTIDADEPLANOCONTAS","Qtde Páginas do Plano de Contas","","PaginacaoQuantidadePlanoContas","int",0,"px",4,4,"right",null,[],90,"PaginacaoQuantidadePlanoContas",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(86,43,"PAGINACAOQUANTIDADERAZAO","Qtde Páginas do Razão","","PaginacaoQuantidadeRazao","int",0,"px",4,4,"right",null,[],86,"PaginacaoQuantidadeRazao",false,0,false,false,"Attribute",1,"");
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
   GXValidFnc[29]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:this.Valid_Empresapaginacaoempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPAGINACAOEMPRESAID",gxz:"Z82EmpresaPaginacaoEmpresaId",gxold:"O82EmpresaPaginacaoEmpresaId",gxvar:"A82EmpresaPaginacaoEmpresaId",ucs:[],op:[30],ip:[30,29],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A82EmpresaPaginacaoEmpresaId=Value},v2z:function(Value){gx.O.Z82EmpresaPaginacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPAGINACAOEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A82EmpresaPaginacaoEmpresaId,0)},c2v:function(){gx.O.A82EmpresaPaginacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPAGINACAOEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPAGINACAONOME",gxz:"Z83EmpresaPaginacaoNome",gxold:"O83EmpresaPaginacaoNome",gxvar:"A83EmpresaPaginacaoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A83EmpresaPaginacaoNome=Value},v2z:function(Value){gx.O.Z83EmpresaPaginacaoNome=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPAGINACAONOME",row || gx.fn.currentGridRowImpl(28),gx.O.A83EmpresaPaginacaoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A83EmpresaPaginacaoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPAGINACAONOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAONUMEROBALANCETE",gxz:"Z93PaginacaoNumeroBalancete",gxold:"O93PaginacaoNumeroBalancete",gxvar:"A93PaginacaoNumeroBalancete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A93PaginacaoNumeroBalancete=gx.num.intval(Value)},v2z:function(Value){gx.O.Z93PaginacaoNumeroBalancete=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAONUMEROBALANCETE",row || gx.fn.currentGridRowImpl(28),gx.O.A93PaginacaoNumeroBalancete,0)},c2v:function(){gx.O.A93PaginacaoNumeroBalancete=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAONUMEROBALANCETE",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAONUMEROBALANCO",gxz:"Z89PaginacaoNumeroBalanco",gxold:"O89PaginacaoNumeroBalanco",gxvar:"A89PaginacaoNumeroBalanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A89PaginacaoNumeroBalanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z89PaginacaoNumeroBalanco=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAONUMEROBALANCO",row || gx.fn.currentGridRowImpl(28),gx.O.A89PaginacaoNumeroBalanco,0)},c2v:function(){gx.O.A89PaginacaoNumeroBalanco=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAONUMEROBALANCO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAONUMERODIARIO",gxz:"Z85PaginacaoNumeroDiario",gxold:"O85PaginacaoNumeroDiario",gxvar:"A85PaginacaoNumeroDiario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A85PaginacaoNumeroDiario=gx.num.intval(Value)},v2z:function(Value){gx.O.Z85PaginacaoNumeroDiario=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAONUMERODIARIO",row || gx.fn.currentGridRowImpl(28),gx.O.A85PaginacaoNumeroDiario,0)},c2v:function(){gx.O.A85PaginacaoNumeroDiario=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAONUMERODIARIO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAONUMEROPLANOCONTAS",gxz:"Z91PaginacaoNumeroPlanoContas",gxold:"O91PaginacaoNumeroPlanoContas",gxvar:"A91PaginacaoNumeroPlanoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A91PaginacaoNumeroPlanoContas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z91PaginacaoNumeroPlanoContas=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAONUMEROPLANOCONTAS",row || gx.fn.currentGridRowImpl(28),gx.O.A91PaginacaoNumeroPlanoContas,0)},c2v:function(){gx.O.A91PaginacaoNumeroPlanoContas=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAONUMEROPLANOCONTAS",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAONUMERORAZAO",gxz:"Z87PaginacaoNumeroRazao",gxold:"O87PaginacaoNumeroRazao",gxvar:"A87PaginacaoNumeroRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A87PaginacaoNumeroRazao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z87PaginacaoNumeroRazao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAONUMERORAZAO",row || gx.fn.currentGridRowImpl(28),gx.O.A87PaginacaoNumeroRazao,0)},c2v:function(){gx.O.A87PaginacaoNumeroRazao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAONUMERORAZAO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEBALANCETE",gxz:"Z92PaginacaoQuantidadeBalancete",gxold:"O92PaginacaoQuantidadeBalancete",gxvar:"A92PaginacaoQuantidadeBalancete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A92PaginacaoQuantidadeBalancete=gx.num.intval(Value)},v2z:function(Value){gx.O.Z92PaginacaoQuantidadeBalancete=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAOQUANTIDADEBALANCETE",row || gx.fn.currentGridRowImpl(28),gx.O.A92PaginacaoQuantidadeBalancete,0)},c2v:function(){gx.O.A92PaginacaoQuantidadeBalancete=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAOQUANTIDADEBALANCETE",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEBALANCO",gxz:"Z88PaginacaoQuantidadeBalanco",gxold:"O88PaginacaoQuantidadeBalanco",gxvar:"A88PaginacaoQuantidadeBalanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A88PaginacaoQuantidadeBalanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z88PaginacaoQuantidadeBalanco=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAOQUANTIDADEBALANCO",row || gx.fn.currentGridRowImpl(28),gx.O.A88PaginacaoQuantidadeBalanco,0)},c2v:function(){gx.O.A88PaginacaoQuantidadeBalanco=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAOQUANTIDADEBALANCO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEDIARIO",gxz:"Z84PaginacaoQuantidadeDiario",gxold:"O84PaginacaoQuantidadeDiario",gxvar:"A84PaginacaoQuantidadeDiario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A84PaginacaoQuantidadeDiario=gx.num.intval(Value)},v2z:function(Value){gx.O.Z84PaginacaoQuantidadeDiario=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAOQUANTIDADEDIARIO",row || gx.fn.currentGridRowImpl(28),gx.O.A84PaginacaoQuantidadeDiario,0)},c2v:function(){gx.O.A84PaginacaoQuantidadeDiario=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAOQUANTIDADEDIARIO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEPLANOCONTAS",gxz:"Z90PaginacaoQuantidadePlanoContas",gxold:"O90PaginacaoQuantidadePlanoContas",gxvar:"A90PaginacaoQuantidadePlanoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A90PaginacaoQuantidadePlanoContas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z90PaginacaoQuantidadePlanoContas=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAOQUANTIDADEPLANOCONTAS",row || gx.fn.currentGridRowImpl(28),gx.O.A90PaginacaoQuantidadePlanoContas,0)},c2v:function(){gx.O.A90PaginacaoQuantidadePlanoContas=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAOQUANTIDADEPLANOCONTAS",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADERAZAO",gxz:"Z86PaginacaoQuantidadeRazao",gxold:"O86PaginacaoQuantidadeRazao",gxvar:"A86PaginacaoQuantidadeRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A86PaginacaoQuantidadeRazao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z86PaginacaoQuantidadeRazao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGINACAOQUANTIDADERAZAO",row || gx.fn.currentGridRowImpl(28),gx.O.A86PaginacaoQuantidadeRazao,0)},c2v:function(){gx.O.A86PaginacaoQuantidadeRazao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGINACAOQUANTIDADERAZAO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z82EmpresaPaginacaoEmpresaId = "" ;
   this.O82EmpresaPaginacaoEmpresaId = "" ;
   this.Z83EmpresaPaginacaoNome = "" ;
   this.O83EmpresaPaginacaoNome = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z93PaginacaoNumeroBalancete = 0 ;
   this.O93PaginacaoNumeroBalancete = 0 ;
   this.Z89PaginacaoNumeroBalanco = 0 ;
   this.O89PaginacaoNumeroBalanco = 0 ;
   this.Z85PaginacaoNumeroDiario = 0 ;
   this.O85PaginacaoNumeroDiario = 0 ;
   this.Z91PaginacaoNumeroPlanoContas = 0 ;
   this.O91PaginacaoNumeroPlanoContas = 0 ;
   this.Z87PaginacaoNumeroRazao = 0 ;
   this.O87PaginacaoNumeroRazao = 0 ;
   this.Z92PaginacaoQuantidadeBalancete = 0 ;
   this.O92PaginacaoQuantidadeBalancete = 0 ;
   this.Z88PaginacaoQuantidadeBalanco = 0 ;
   this.O88PaginacaoQuantidadeBalanco = 0 ;
   this.Z84PaginacaoQuantidadeDiario = 0 ;
   this.O84PaginacaoQuantidadeDiario = 0 ;
   this.Z90PaginacaoQuantidadePlanoContas = 0 ;
   this.O90PaginacaoQuantidadePlanoContas = 0 ;
   this.Z86PaginacaoQuantidadeRazao = 0 ;
   this.O86PaginacaoQuantidadeRazao = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.A83EmpresaPaginacaoNome = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A93PaginacaoNumeroBalancete = 0 ;
   this.A89PaginacaoNumeroBalanco = 0 ;
   this.A85PaginacaoNumeroDiario = 0 ;
   this.A91PaginacaoNumeroPlanoContas = 0 ;
   this.A87PaginacaoNumeroRazao = 0 ;
   this.A92PaginacaoQuantidadeBalancete = 0 ;
   this.A88PaginacaoQuantidadeBalanco = 0 ;
   this.A84PaginacaoQuantidadeDiario = 0 ;
   this.A90PaginacaoQuantidadePlanoContas = 0 ;
   this.A86PaginacaoQuantidadeRazao = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV27SnRecuperaFiltro = "" ;
   this.AV32Pgmname = "" ;
   this.Events = {"e11362_client": ["'ANTERIOR'", true] ,"e12362_client": ["'PROXIMO'", true] ,"e19362_client": ["'ALTERAR'", true] ,"e20362_client": ["'EXCLUIR'", true] ,"e21362_client": ["'CONSULTAR'", true] ,"e15362_client": ["VPAGINA.CLICK", true] ,"e13362_client": ["'NOVO'", true] ,"e14362_client": ["'FECHAR'", true] ,"e22362_client": ["'ATUALIZAR'", true] ,"e23362_client": ["'ATUALIZAPAGINA'", true] ,"e24362_client": ["ENTER", true] ,"e25362_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{ctrl:'EMPRESAPAGINACAOEMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAPAGINACAOEMPRESAID","Title")',ctrl:'EMPRESAPAGINACAOEMPRESAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'EMPRESAPAGINACAONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAPAGINACAONOME","Title")',ctrl:'EMPRESAPAGINACAONOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV32Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpaginacao());
