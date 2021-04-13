/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:46.48
*/
gx.evt.autoSkip = false;
gx.define('hccontabilpessoa', false, function () {
   this.ServerClass =  "hccontabilpessoa" ;
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
      this.AV29EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1529CContabilPessoaContaCliTraduto=gx.fn.getIntegerValue("CCONTABILPESSOACONTACLITRADUTO",'.') ;
      this.A1530CContabilPessoaContaForTraduto=gx.fn.getIntegerValue("CCONTABILPESSOACONTAFORTRADUTO",'.') ;
      this.AV38Chamada=gx.fn.getControlValue("vCHAMADA") ;
   };
   this.Valid_Filialid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FILIALID", gx.fn.currentGridRowImpl(42));
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
   this.Valid_Filialempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(42) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FILIALEMPRESAID", gx.fn.currentGridRowImpl(42));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e169h2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e199h2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e119h2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129h2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e229h2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e239h2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e249h2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e179h2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139h2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e159h2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e259h2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e269h2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e279h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,20,23,25,27,29,31,33,36,38,39,43,44,45,46,47,48,49,50,51,52,53,60,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hccontabilpessoa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1156,43,"FILIALID","","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1136,44,"FILIALNOME","","","FilialNome","svchar",0,"px",100,80,"left",null,[],1136,"FilialNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tradutorcliente",45,"vTRADUTORCLIENTE","Tradutor Cliente","","TradutorCliente","svchar",0,"px",9,9,"left",null,[],"Tradutorcliente","TradutorCliente",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tradutorfornecedor",46,"vTRADUTORFORNECEDOR","Tradutor Fornecedor","","TradutorFornecedor","svchar",0,"px",9,9,"left",null,[],"Tradutorfornecedor","TradutorFornecedor",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplog","vBMPLOG",47,0,"px",17,"px","e199h2_client","","Log","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",48,0,"px",17,"px","e229h2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",49,0,"px",17,"px","e239h2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",50,0,"px",17,"px","e249h2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(227,51,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1228,52,"FILIALEMPRESAID","Empresa da Filial","","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(69,53,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV27PessoaId",gxold:"OV27PessoaId",gxvar:"AV27PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV27PessoaId,0)},c2v:function(){gx.O.AV27PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV28PessoaFantasia",gxold:"OV28PessoaFantasia",gxvar:"AV28PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaFantasia=Value},v2z:function(Value){gx.O.ZV28PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV28PessoaFantasia,0)},c2v:function(){gx.O.AV28PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={fld:"TABLE6",grid:0};
   GXValidFnc[23]={fld:"IMAGE2",grid:0};
   GXValidFnc[25]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[27]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[29]={fld:"IMAGE3",grid:0};
   GXValidFnc[31]={fld:"BTNLOG",grid:0};
   GXValidFnc[33]={fld:"TABLE5",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[44],ip:[44,43,52],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(42),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(42),gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:9,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCLIENTE",gxz:"ZV34TradutorCliente",gxold:"OV34TradutorCliente",gxvar:"AV34TradutorCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV34TradutorCliente=Value},v2z:function(Value){gx.O.ZV34TradutorCliente=Value},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORCLIENTE",row || gx.fn.currentGridRowImpl(42),gx.O.AV34TradutorCliente,0)},c2v:function(){gx.O.AV34TradutorCliente=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRADUTORCLIENTE",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:9,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFORNECEDOR",gxz:"ZV35TradutorFornecedor",gxold:"OV35TradutorFornecedor",gxvar:"AV35TradutorFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35TradutorFornecedor=Value},v2z:function(Value){gx.O.ZV35TradutorFornecedor=Value},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORFORNECEDOR",row || gx.fn.currentGridRowImpl(42),gx.O.AV35TradutorFornecedor,0)},c2v:function(){gx.O.AV35TradutorFornecedor=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRADUTORFORNECEDOR",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV36bmpLog",gxold:"OV36bmpLog",gxvar:"AV36bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpLog=Value},v2z:function(Value){gx.O.ZV36bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(42),gx.O.AV36bmpLog,gx.O.AV47Bmplog_GXI)},c2v:function(){gx.O.AV47Bmplog_GXI=this.val_GXI();gx.O.AV36bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV47Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(42),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(42),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(42),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(42),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"JSABR", format:2,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27PessoaId = 0 ;
   this.ZV27PessoaId = 0 ;
   this.OV27PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.ZV28PessoaFantasia = "" ;
   this.OV28PessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.ZV34TradutorCliente = "" ;
   this.OV34TradutorCliente = "" ;
   this.ZV35TradutorFornecedor = "" ;
   this.OV35TradutorFornecedor = "" ;
   this.ZV36bmpLog = "" ;
   this.OV36bmpLog = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.AV38Chamada = "" ;
   this.A1529CContabilPessoaContaCliTraduto = 0 ;
   this.A1530CContabilPessoaContaForTraduto = 0 ;
   this.A1436CContabilPessoaContaCliEmpresa = "" ;
   this.A1437CContabilPessoaContaCliId = "" ;
   this.A1439CContabilPessoaContaForEmpresa = "" ;
   this.A1440CContabilPessoaContaForId = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.AV34TradutorCliente = "" ;
   this.AV35TradutorFornecedor = "" ;
   this.AV36bmpLog = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.AV39SnRecuperaFiltro = "" ;
   this.Events = {"e169h2_client": ["'CONSULTALOGGERAL'", true] ,"e199h2_client": ["'CONSULTALOG'", true] ,"e119h2_client": ["'ANTERIOR'", true] ,"e129h2_client": ["'PROXIMO'", true] ,"e229h2_client": ["'ALTERAR'", true] ,"e239h2_client": ["'EXCLUIR'", true] ,"e249h2_client": ["'CONSULTAR'", true] ,"e179h2_client": ["VPAGINA.CLICK", true] ,"e139h2_client": ["'NOVO'", true] ,"e149h2_client": ["'FECHAR'", true] ,"e159h2_client": ["'PROCURAR'", true] ,"e259h2_client": ["'ATUALIZAPAGINA'", true] ,"e269h2_client": ["ENTER", true] ,"e279h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'}],[]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'}],[{av:'AV37Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV37Log',fld:'vLOG'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'}],[{ctrl:'FILIALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALID","Title")',ctrl:'FILIALID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'FILIALNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALNOME","Title")',ctrl:'FILIALNOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV31ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV32Digito',fld:'vDIGITO'},{av:'AV33DigitoChar',fld:'vDIGITOCHAR'},{av:'AV34TradutorCliente',fld:'vTRADUTORCLIENTE'},{av:'AV35TradutorFornecedor',fld:'vTRADUTORFORNECEDOR'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'A1156FilialId',fld:'FILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'A1156FilialId',fld:'FILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'A1156FilialId',fld:'FILIALID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV38Chamada',fld:'vCHAMADA',hsh:true}],[{av:'AV38Chamada',fld:'vCHAMADA',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV38Chamada',fld:'vCHAMADA',hsh:true}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV27PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1529CContabilPessoaContaCliTraduto',fld:'CCONTABILPESSOACONTACLITRADUTO'},{av:'A1530CContabilPessoaContaForTraduto',fld:'CCONTABILPESSOACONTAFORTRADUTO'}],[]];
   this.setVCMap("AV29EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1529CContabilPessoaContaCliTraduto", "CCONTABILPESSOACONTACLITRADUTO", 0, "int");
   this.setVCMap("A1530CContabilPessoaContaForTraduto", "CCONTABILPESSOACONTAFORTRADUTO", 0, "int");
   this.setVCMap("AV38Chamada", "vCHAMADA", 0, "char");
   this.setVCMap("AV29EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1529CContabilPessoaContaCliTraduto", "CCONTABILPESSOACONTACLITRADUTO", 0, "int");
   this.setVCMap("A1530CContabilPessoaContaForTraduto", "CCONTABILPESSOACONTAFORTRADUTO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV29EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1529CContabilPessoaContaCliTraduto"});
   GridContainer.addRefreshingVar({rfrVar:"A1530CContabilPessoaContaForTraduto"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hccontabilpessoa());
