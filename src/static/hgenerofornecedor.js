/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:51:30.23
*/
gx.evt.autoSkip = false;
gx.define('hgenerofornecedor', false, function () {
   this.ServerClass =  "hgenerofornecedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Generofornecedorgeneroid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("GENEROFORNECEDORGENEROID", gx.fn.currentGridRowImpl(44));
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
   this.s132_client=function()
   {
      this.AV33SnErro =  "N"  ;
      if ( (0==this.AV27GeneroFornecedorPessoaIdFiltro) )
      {
         this.addMessage("Informe o código do fornecedor");
         gx.fn.usrSetFocus("vGENEROFORNECEDORPESSOAIDFILTRO") ;
         this.AV33SnErro =  "S"  ;
      }
   };
   this.e11oa2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12oa2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16oa2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13oa2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14oa2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15oa2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e17oa2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e21oa2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22oa2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23oa2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24oa2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,19,22,25,27,29,31,33,35,38,40,41,45,46,47,48,49,50,57,58,59,60,61,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgenerofornecedor",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3535,45,"GENEROFORNECEDORGENEROID","","","GeneroFornecedorGeneroId","char",0,"px",2,2,"left",null,[],3535,"GeneroFornecedorGeneroId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Generodescricao",46,"vGENERODESCRICAO","","","GeneroDescricao","svchar",0,"px",60,60,"left",null,[],"Generodescricao","GeneroDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3530,47,"GENEROFORNECEDORGENERODESC","Descrição Gênero","","GeneroFornecedorGeneroDesc","svchar",0,"px",160,80,"left",null,[],3530,"GeneroFornecedorGeneroDesc",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3534,48,"GENEROFORNECEDORPESSOAID","Código Fornecedor","","GeneroFornecedorPessoaId","int",0,"px",7,7,"right",null,[],3534,"GeneroFornecedorPessoaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",49,0,"px",17,"px","e21oa2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",50,0,"px",17,"px","e22oa2_client","","Cons","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGENEROFORNECEDORPESSOAIDFILTRO",gxz:"ZV27GeneroFornecedorPessoaIdFiltro",gxold:"OV27GeneroFornecedorPessoaIdFiltro",gxvar:"AV27GeneroFornecedorPessoaIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27GeneroFornecedorPessoaIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27GeneroFornecedorPessoaIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGENEROFORNECEDORPESSOAIDFILTRO",gx.O.AV27GeneroFornecedorPessoaIdFiltro,0)},c2v:function(){gx.O.AV27GeneroFornecedorPessoaIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGENEROFORNECEDORPESSOAIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGENEROFORNECEDORPESSOAFANTASIA",gxz:"ZV28GeneroFornecedorPessoaFantasia",gxold:"OV28GeneroFornecedorPessoaFantasia",gxvar:"AV28GeneroFornecedorPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28GeneroFornecedorPessoaFantasia=Value},v2z:function(Value){gx.O.ZV28GeneroFornecedorPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vGENEROFORNECEDORPESSOAFANTASIA",gx.O.AV28GeneroFornecedorPessoaFantasia,0)},c2v:function(){gx.O.AV28GeneroFornecedorPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vGENEROFORNECEDORPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLE4",grid:0};
   GXValidFnc[22]={fld:"TABLE1",grid:0};
   GXValidFnc[25]={fld:"IMAGE2",grid:0};
   GXValidFnc[27]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[29]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[31]={fld:"IMAGE1",grid:0};
   GXValidFnc[33]={fld:"BTNHELP",grid:0};
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Generofornecedorgeneroid,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORGENEROID",gxz:"Z3535GeneroFornecedorGeneroId",gxold:"O3535GeneroFornecedorGeneroId",gxvar:"A3535GeneroFornecedorGeneroId",ucs:[],op:[47],ip:[47,45],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3535GeneroFornecedorGeneroId=Value},v2z:function(Value){gx.O.Z3535GeneroFornecedorGeneroId=Value},v2c:function(row){gx.fn.setGridControlValue("GENEROFORNECEDORGENEROID",row || gx.fn.currentGridRowImpl(44),gx.O.A3535GeneroFornecedorGeneroId,0)},c2v:function(){gx.O.A3535GeneroFornecedorGeneroId=this.val()},val:function(row){return gx.fn.getGridControlValue("GENEROFORNECEDORGENEROID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGENERODESCRICAO",gxz:"ZV35GeneroDescricao",gxold:"OV35GeneroDescricao",gxvar:"AV35GeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35GeneroDescricao=Value},v2z:function(Value){gx.O.ZV35GeneroDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vGENERODESCRICAO",row || gx.fn.currentGridRowImpl(44),gx.O.AV35GeneroDescricao,0)},c2v:function(){gx.O.AV35GeneroDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vGENERODESCRICAO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:160,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORGENERODESC",gxz:"Z3530GeneroFornecedorGeneroDesc",gxold:"O3530GeneroFornecedorGeneroDesc",gxvar:"A3530GeneroFornecedorGeneroDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3530GeneroFornecedorGeneroDesc=Value},v2z:function(Value){gx.O.Z3530GeneroFornecedorGeneroDesc=Value},v2c:function(row){gx.fn.setGridControlValue("GENEROFORNECEDORGENERODESC",row || gx.fn.currentGridRowImpl(44),gx.O.A3530GeneroFornecedorGeneroDesc,0)},c2v:function(){gx.O.A3530GeneroFornecedorGeneroDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("GENEROFORNECEDORGENERODESC",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORPESSOAID",gxz:"Z3534GeneroFornecedorPessoaId",gxold:"O3534GeneroFornecedorPessoaId",gxvar:"A3534GeneroFornecedorPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3534GeneroFornecedorPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3534GeneroFornecedorPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GENEROFORNECEDORPESSOAID",row || gx.fn.currentGridRowImpl(44),gx.O.A3534GeneroFornecedorPessoaId,0)},c2v:function(){gx.O.A3534GeneroFornecedorPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GENEROFORNECEDORPESSOAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(44),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV31Sim",gxold:"OV31Sim",gxvar:"AV31Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Sim=Value},v2z:function(Value){gx.O.ZV31Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV31Sim,0)},c2v:function(){gx.O.AV31Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV32Nao",gxold:"OV32Nao",gxvar:"AV32Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Nao=Value},v2z:function(Value){gx.O.ZV32Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV32Nao,0)},c2v:function(){gx.O.AV32Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"PROMPT_GENEROFORNECEDORPESSOAIDFILTRO",grid:0};
   this.AV27GeneroFornecedorPessoaIdFiltro = 0 ;
   this.ZV27GeneroFornecedorPessoaIdFiltro = 0 ;
   this.OV27GeneroFornecedorPessoaIdFiltro = 0 ;
   this.AV28GeneroFornecedorPessoaFantasia = "" ;
   this.ZV28GeneroFornecedorPessoaFantasia = "" ;
   this.OV28GeneroFornecedorPessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3535GeneroFornecedorGeneroId = "" ;
   this.O3535GeneroFornecedorGeneroId = "" ;
   this.ZV35GeneroDescricao = "" ;
   this.OV35GeneroDescricao = "" ;
   this.Z3530GeneroFornecedorGeneroDesc = "" ;
   this.O3530GeneroFornecedorGeneroDesc = "" ;
   this.Z3534GeneroFornecedorPessoaId = 0 ;
   this.O3534GeneroFornecedorPessoaId = 0 ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV31Sim = "" ;
   this.ZV31Sim = "" ;
   this.OV31Sim = "" ;
   this.AV32Nao = "" ;
   this.ZV32Nao = "" ;
   this.OV32Nao = "" ;
   this.AV27GeneroFornecedorPessoaIdFiltro = 0 ;
   this.AV28GeneroFornecedorPessoaFantasia = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31Sim = "" ;
   this.AV32Nao = "" ;
   this.A3533GeneroFornecedorPessoaEmpId = "" ;
   this.A3535GeneroFornecedorGeneroId = "" ;
   this.AV35GeneroDescricao = "" ;
   this.A3530GeneroFornecedorGeneroDesc = "" ;
   this.A3534GeneroFornecedorPessoaId = 0 ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.AV33SnErro = "" ;
   this.Events = {"e11oa2_client": ["'ANTERIOR'", true] ,"e12oa2_client": ["'PROXIMO'", true] ,"e16oa2_client": ["VPAGINA.CLICK", true] ,"e13oa2_client": ["'NOVO'", true] ,"e14oa2_client": ["'FECHAR'", true] ,"e15oa2_client": ["'IMPRIMIR'", true] ,"e17oa2_client": ["ENTER", true] ,"e21oa2_client": ["'EXCLUIR'", true] ,"e22oa2_client": ["'CONSULTAR'", true] ,"e23oa2_client": ["'ATUALIZAPAGINA'", true] ,"e24oa2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'},{ctrl:'GRID',prop:'Rows'}],[{ctrl:'GENEROFORNECEDORGENEROID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GENEROFORNECEDORGENEROID","Title")',ctrl:'GENEROFORNECEDORGENEROID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vGENERODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vGENERODESCRICAO","Title")',ctrl:'vGENERODESCRICAO',prop:'Title'},{av:'AV37QtdRegistrosGrid',fld:'vQTDREGISTROSGRID'},{av:'AV38QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'}]];
   this.EvtParms["LOAD"] = [[{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'}],[{av:'AV35GeneroDescricao',fld:'vGENERODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV36Ordenacao',fld:'vORDENACAO'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV43Pgmdesc',fld:'vPGMDESC'}],[{av:'AV36Ordenacao',fld:'vORDENACAO'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33SnErro',fld:'vSNERRO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV28GeneroFornecedorPessoaFantasia',fld:'vGENEROFORNECEDORPESSOAFANTASIA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3535GeneroFornecedorGeneroId',fld:'GENEROFORNECEDORGENEROID'},{av:'A3534GeneroFornecedorPessoaId',fld:'GENEROFORNECEDORPESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroFornecedorPessoaIdFiltro',fld:'vGENEROFORNECEDORPESSOAIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3530GeneroFornecedorGeneroDesc',fld:'GENEROFORNECEDORGENERODESC'}],[]];
   this.setPrompt("PROMPT_GENEROFORNECEDORPESSOAIDFILTRO", [13]);
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3530GeneroFornecedorGeneroDesc", rfrProp:"Value", gxAttId:"3530"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgenerofornecedor());
