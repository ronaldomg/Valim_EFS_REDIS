/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:24.66
*/
gx.evt.autoSkip = false;
gx.define('htermooutorgaintegrante', false, function () {
   this.ServerClass =  "htermooutorgaintegrante" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Termooutorganoprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTERMOOUTORGANOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1113l2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1213l2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1613l2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1313l2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1413l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1513l2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e2013l2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2113l2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2213l2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2313l2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2413l2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2513l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,24,27,29,31,33,35,38,40,41,45,46,47,48,49,50,51,52,53,60];
   this.GXLastCtrlId =60;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htermooutorgaintegrante",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8123,45,"TERMOOUTORGAINTEGRANTESEQ","","","TermoOutorgaIntegranteSeq","int",0,"px",4,4,"right",null,[],8123,"TermoOutorgaIntegranteSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8117,46,"TERMOOUTORGAINTEGRANTENOME","","","TermoOutorgaIntegranteNome","svchar",0,"px",60,60,"left",null,[],8117,"TermoOutorgaIntegranteNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Nomeintegrante",47,"vNOMEINTEGRANTE","Nome","","NomeIntegrante","svchar",0,"px",40,40,"left",null,[],"Nomeintegrante","NomeIntegrante",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8118,48,"TERMOOUTORGAINTEGRANTECPF","","","TermoOutorgaIntegranteCPF","char",0,"px",14,14,"left",null,[],8118,"TermoOutorgaIntegranteCPF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",49,0,"px",17,"px","e2013l2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",50,0,"px",17,"px","e2113l2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",51,0,"px",17,"px","e2213l2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8112,52,"TERMOOUTORGANOPROCESSO","Número do Processo","","TermoOutorgaNoProcesso","svchar",0,"px",20,20,"left",null,[],8112,"TermoOutorgaNoProcesso",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8111,53,"TERMOOUTORGAEMPRESAID","Empresa","","TermoOutorgaEmpresaId","char",0,"px",10,10,"left",null,[],8111,"TermoOutorgaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Termooutorganoprocesso,isvalid:null,rgrid:[this.GridContainer],fld:"vTERMOOUTORGANOPROCESSO",gxz:"ZV27TermoOutorgaNoProcesso",gxold:"OV27TermoOutorgaNoProcesso",gxvar:"AV27TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.ZV27TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGANOPROCESSO",gx.O.AV27TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.AV27TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGATITULO",gxz:"ZV28TermoOutorgaTitulo",gxold:"OV28TermoOutorgaTitulo",gxvar:"AV28TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.ZV28TermoOutorgaTitulo=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGATITULO",gx.O.AV28TermoOutorgaTitulo,0)},c2v:function(){gx.O.AV28TermoOutorgaTitulo=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGATITULO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLE4",grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={fld:"IMAGE2",grid:0};
   GXValidFnc[29]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[31]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[33]={fld:"BTNHELP",grid:0};
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTESEQ",gxz:"Z8123TermoOutorgaIntegranteSeq",gxold:"O8123TermoOutorgaIntegranteSeq",gxvar:"A8123TermoOutorgaIntegranteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8123TermoOutorgaIntegranteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8123TermoOutorgaIntegranteSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGAINTEGRANTESEQ",row || gx.fn.currentGridRowImpl(44),gx.O.A8123TermoOutorgaIntegranteSeq,0)},c2v:function(){gx.O.A8123TermoOutorgaIntegranteSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TERMOOUTORGAINTEGRANTESEQ",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTENOME",gxz:"Z8117TermoOutorgaIntegranteNome",gxold:"O8117TermoOutorgaIntegranteNome",gxvar:"A8117TermoOutorgaIntegranteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8117TermoOutorgaIntegranteNome=Value},v2z:function(Value){gx.O.Z8117TermoOutorgaIntegranteNome=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGAINTEGRANTENOME",row || gx.fn.currentGridRowImpl(44),gx.O.A8117TermoOutorgaIntegranteNome,0)},c2v:function(){gx.O.A8117TermoOutorgaIntegranteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGAINTEGRANTENOME",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEINTEGRANTE",gxz:"ZV30NomeIntegrante",gxold:"OV30NomeIntegrante",gxvar:"AV30NomeIntegrante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30NomeIntegrante=Value},v2z:function(Value){gx.O.ZV30NomeIntegrante=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMEINTEGRANTE",row || gx.fn.currentGridRowImpl(44),gx.O.AV30NomeIntegrante,0)},c2v:function(){gx.O.AV30NomeIntegrante=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMEINTEGRANTE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAINTEGRANTECPF",gxz:"Z8118TermoOutorgaIntegranteCPF",gxold:"O8118TermoOutorgaIntegranteCPF",gxvar:"A8118TermoOutorgaIntegranteCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8118TermoOutorgaIntegranteCPF=Value},v2z:function(Value){gx.O.Z8118TermoOutorgaIntegranteCPF=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGAINTEGRANTECPF",row || gx.fn.currentGridRowImpl(44),gx.O.A8118TermoOutorgaIntegranteCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8118TermoOutorgaIntegranteCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGAINTEGRANTECPF",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(44),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44),gx.O.AV8bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(44),gx.O.AV16bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGANOPROCESSO",row || gx.fn.currentGridRowImpl(44),gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGANOPROCESSO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAEMPRESAID",gxz:"Z8111TermoOutorgaEmpresaId",gxold:"O8111TermoOutorgaEmpresaId",gxvar:"A8111TermoOutorgaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8111TermoOutorgaEmpresaId=Value},v2z:function(Value){gx.O.Z8111TermoOutorgaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGAEMPRESAID",row || gx.fn.currentGridRowImpl(44),gx.O.A8111TermoOutorgaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8111TermoOutorgaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGAEMPRESAID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TermoOutorgaNoProcesso = "" ;
   this.ZV27TermoOutorgaNoProcesso = "" ;
   this.OV27TermoOutorgaNoProcesso = "" ;
   this.AV28TermoOutorgaTitulo = "" ;
   this.ZV28TermoOutorgaTitulo = "" ;
   this.OV28TermoOutorgaTitulo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8123TermoOutorgaIntegranteSeq = 0 ;
   this.O8123TermoOutorgaIntegranteSeq = 0 ;
   this.Z8117TermoOutorgaIntegranteNome = "" ;
   this.O8117TermoOutorgaIntegranteNome = "" ;
   this.ZV30NomeIntegrante = "" ;
   this.OV30NomeIntegrante = "" ;
   this.Z8118TermoOutorgaIntegranteCPF = "" ;
   this.O8118TermoOutorgaIntegranteCPF = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.Z8111TermoOutorgaEmpresaId = "" ;
   this.O8111TermoOutorgaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TermoOutorgaNoProcesso = "" ;
   this.AV28TermoOutorgaTitulo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8123TermoOutorgaIntegranteSeq = 0 ;
   this.A8117TermoOutorgaIntegranteNome = "" ;
   this.AV30NomeIntegrante = "" ;
   this.A8118TermoOutorgaIntegranteCPF = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8082TermoOutorgaTitulo = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.Events = {"e1113l2_client": ["'ANTERIOR'", true] ,"e1213l2_client": ["'PROXIMO'", true] ,"e1613l2_client": ["VPAGINA.CLICK", true] ,"e1313l2_client": ["'NOVO'", true] ,"e1413l2_client": ["'FECHAR'", true] ,"e1513l2_client": ["'PROCURAR'", true] ,"e2013l2_client": ["'ALTERAR'", true] ,"e2113l2_client": ["'EXCLUIR'", true] ,"e2213l2_client": ["'CONSULTAR'", true] ,"e2313l2_client": ["'ATUALIZAPAGINA'", true] ,"e2413l2_client": ["ENTER", true] ,"e2513l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'}],[{av:'AV30NomeIntegrante',fld:'vNOMEINTEGRANTE'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'}],[{ctrl:'TERMOOUTORGAINTEGRANTESEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGAINTEGRANTESEQ","Title")',ctrl:'TERMOOUTORGAINTEGRANTESEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TERMOOUTORGAINTEGRANTENOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGAINTEGRANTENOME","Title")',ctrl:'TERMOOUTORGAINTEGRANTENOME',prop:'Title'},{ctrl:'TERMOOUTORGAINTEGRANTECPF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGAINTEGRANTECPF","Title")',ctrl:'TERMOOUTORGAINTEGRANTECPF',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'A8123TermoOutorgaIntegranteSeq',fld:'TERMOOUTORGAINTEGRANTESEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8123TermoOutorgaIntegranteSeq',fld:'TERMOOUTORGAINTEGRANTESEQ'},{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'A8123TermoOutorgaIntegranteSeq',fld:'TERMOOUTORGAINTEGRANTESEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8123TermoOutorgaIntegranteSeq',fld:'TERMOOUTORGAINTEGRANTESEQ'},{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'A8123TermoOutorgaIntegranteSeq',fld:'TERMOOUTORGAINTEGRANTESEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8123TermoOutorgaIntegranteSeq',fld:'TERMOOUTORGAINTEGRANTESEQ'},{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8117TermoOutorgaIntegranteNome',fld:'TERMOOUTORGAINTEGRANTENOME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A8117TermoOutorgaIntegranteNome", rfrProp:"Value", gxAttId:"8117"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htermooutorgaintegrante());
