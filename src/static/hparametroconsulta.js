/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:43.58
*/
gx.evt.autoSkip = false;
gx.define('hparametroconsulta', false, function () {
   this.ServerClass =  "hparametroconsulta" ;
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
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Parametroconsultatabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPARAMETROCONSULTATABELA");
         this.AnyError  = 0;
         if ( ! ( this.AV29ParametroConsultaTabela == 0 || (0==this.AV29ParametroConsultaTabela) ) )
         {
            try {
               gxballoon.setError("Campo ParametroConsultaTabela fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ln2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ln2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ln2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ln2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ln2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ln2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20ln2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21ln2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22ln2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23ln2_client=function()
   {
      this.executeServerEvent("'CAMPO'", true, arguments[0], false, false);
   };
   this.e24ln2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e25ln2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26ln2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27ln2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,45,47,48,52,53,54,55,56,57,58,59,60,61,62,63,64,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hparametroconsulta",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3228,52,"PARAMETROCONSULTACODIGO","","","ParametroConsultaCodigo","int",0,"px",4,4,"right",null,[],3228,"ParametroConsultaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3215,53,"PARAMETROCONSULTADESCRICAO","","","ParametroConsultaDescricao","svchar",0,"px",30,30,"left",null,[],3215,"ParametroConsultaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsnsuspenso","vBMPSNSUSPENSO",54,0,"px",17,"px",null,"","Mostrar Suspenso","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsncons","vBMPSNCONS",55,0,"px",17,"px",null,"","Padrão Cons","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsnpdrvenda","vBMPSNPDRVENDA",56,0,"px",17,"px",null,"","Padrão Venda","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpparcampo","vBMPPARCAMPO",57,0,"px",17,"px","e23ln2_client","","Campo","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdup","vBMPDUP",58,0,"px",17,"px","e24ln2_client","","Dup","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e20ln2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e21ln2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e22ln2_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3223,62,"PARAMETROCONSULTASNCON","Padrão para tela de Consulta","","ParametroConsultaSNCon","char",0,"px",1,1,"left",null,[],3223,"ParametroConsultaSNCon",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3222,63,"PARAMETROCONSULTASNSUSPENSO","Apresentar Suspensos","","ParametroConsultaSNSuspenso","char",0,"px",1,1,"left",null,[],3222,"ParametroConsultaSNSuspenso",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3224,64,"PARAMETROCONSULTASNPADRAOVENDA","Consulta Padrão para Tela de Vendas","","ParametroConsultaSNPadraoVenda","char",0,"px",1,1,"left",null,[],3224,"ParametroConsultaSNPadraoVenda",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPARAMETROCONSULTACODIGO",gxz:"ZV27ParametroConsultaCodigo",gxold:"OV27ParametroConsultaCodigo",gxvar:"AV27ParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTACODIGO",gx.O.AV27ParametroConsultaCodigo,0)},c2v:function(){gx.O.AV27ParametroConsultaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARAMETROCONSULTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPARAMETROCONSULTADESCRICAO",gxz:"ZV28ParametroConsultaDescricao",gxold:"OV28ParametroConsultaDescricao",gxvar:"AV28ParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ParametroConsultaDescricao=Value},v2z:function(Value){gx.O.ZV28ParametroConsultaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROCONSULTADESCRICAO",gx.O.AV28ParametroConsultaDescricao,0)},c2v:function(){gx.O.AV28ParametroConsultaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROCONSULTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Parametroconsultatabela,isvalid:null,rgrid:[this.GridContainer],fld:"vPARAMETROCONSULTATABELA",gxz:"ZV29ParametroConsultaTabela",gxold:"OV29ParametroConsultaTabela",gxvar:"AV29ParametroConsultaTabela",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ParametroConsultaTabela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ParametroConsultaTabela=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPARAMETROCONSULTATABELA",gx.O.AV29ParametroConsultaTabela)},c2v:function(){gx.O.AV29ParametroConsultaTabela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARAMETROCONSULTATABELA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTACODIGO",gxz:"Z3228ParametroConsultaCodigo",gxold:"O3228ParametroConsultaCodigo",gxvar:"A3228ParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3228ParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3228ParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTACODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A3228ParametroConsultaCodigo,0)},c2v:function(){gx.O.A3228ParametroConsultaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROCONSULTACODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTADESCRICAO",gxz:"Z3215ParametroConsultaDescricao",gxold:"O3215ParametroConsultaDescricao",gxvar:"A3215ParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3215ParametroConsultaDescricao=Value},v2z:function(Value){gx.O.Z3215ParametroConsultaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A3215ParametroConsultaDescricao,0)},c2v:function(){gx.O.A3215ParametroConsultaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNSUSPENSO",gxz:"ZV30bmpSnSuspenso",gxold:"OV30bmpSnSuspenso",gxvar:"AV30bmpSnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpSnSuspenso=Value},v2z:function(Value){gx.O.ZV30bmpSnSuspenso=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNSUSPENSO",row || gx.fn.currentGridRowImpl(51),gx.O.AV30bmpSnSuspenso,gx.O.AV45Bmpsnsuspenso_GXI)},c2v:function(){gx.O.AV45Bmpsnsuspenso_GXI=this.val_GXI();gx.O.AV30bmpSnSuspenso=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNSUSPENSO",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNSUSPENSO_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV45Bmpsnsuspenso_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNCONS",gxz:"ZV31bmpSnCons",gxold:"OV31bmpSnCons",gxvar:"AV31bmpSnCons",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpSnCons=Value},v2z:function(Value){gx.O.ZV31bmpSnCons=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNCONS",row || gx.fn.currentGridRowImpl(51),gx.O.AV31bmpSnCons,gx.O.AV46Bmpsncons_GXI)},c2v:function(){gx.O.AV46Bmpsncons_GXI=this.val_GXI();gx.O.AV31bmpSnCons=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNCONS",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNCONS_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV46Bmpsncons_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNPDRVENDA",gxz:"ZV32bmpSnPdrVenda",gxold:"OV32bmpSnPdrVenda",gxvar:"AV32bmpSnPdrVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpSnPdrVenda=Value},v2z:function(Value){gx.O.ZV32bmpSnPdrVenda=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNPDRVENDA",row || gx.fn.currentGridRowImpl(51),gx.O.AV32bmpSnPdrVenda,gx.O.AV47Bmpsnpdrvenda_GXI)},c2v:function(){gx.O.AV47Bmpsnpdrvenda_GXI=this.val_GXI();gx.O.AV32bmpSnPdrVenda=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNPDRVENDA",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNPDRVENDA_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV47Bmpsnpdrvenda_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPARCAMPO",gxz:"ZV33bmpParCampo",gxold:"OV33bmpParCampo",gxvar:"AV33bmpParCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpParCampo=Value},v2z:function(Value){gx.O.ZV33bmpParCampo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPARCAMPO",row || gx.fn.currentGridRowImpl(51),gx.O.AV33bmpParCampo,gx.O.AV43Bmpparcampo_GXI)},c2v:function(){gx.O.AV43Bmpparcampo_GXI=this.val_GXI();gx.O.AV33bmpParCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPARCAMPO",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPARCAMPO_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV43Bmpparcampo_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUP",gxz:"ZV34bmpDup",gxold:"OV34bmpDup",gxvar:"AV34bmpDup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpDup=Value},v2z:function(Value){gx.O.ZV34bmpDup=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUP",row || gx.fn.currentGridRowImpl(51),gx.O.AV34bmpDup,gx.O.AV44Bmpdup_GXI)},c2v:function(){gx.O.AV44Bmpdup_GXI=this.val_GXI();gx.O.AV34bmpDup=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUP",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUP_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV44Bmpdup_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNCON",gxz:"Z3223ParametroConsultaSNCon",gxold:"O3223ParametroConsultaSNCon",gxvar:"A3223ParametroConsultaSNCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3223ParametroConsultaSNCon=Value},v2z:function(Value){gx.O.Z3223ParametroConsultaSNCon=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTASNCON",row || gx.fn.currentGridRowImpl(51),gx.O.A3223ParametroConsultaSNCon,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3223ParametroConsultaSNCon=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTASNCON",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNSUSPENSO",gxz:"Z3222ParametroConsultaSNSuspenso",gxold:"O3222ParametroConsultaSNSuspenso",gxvar:"A3222ParametroConsultaSNSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3222ParametroConsultaSNSuspenso=Value},v2z:function(Value){gx.O.Z3222ParametroConsultaSNSuspenso=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTASNSUSPENSO",row || gx.fn.currentGridRowImpl(51),gx.O.A3222ParametroConsultaSNSuspenso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3222ParametroConsultaSNSuspenso=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTASNSUSPENSO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNPADRAOVENDA",gxz:"Z3224ParametroConsultaSNPadraoVenda",gxold:"O3224ParametroConsultaSNPadraoVenda",gxvar:"A3224ParametroConsultaSNPadraoVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3224ParametroConsultaSNPadraoVenda=Value},v2z:function(Value){gx.O.Z3224ParametroConsultaSNPadraoVenda=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTASNPADRAOVENDA",row || gx.fn.currentGridRowImpl(51),gx.O.A3224ParametroConsultaSNPadraoVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3224ParametroConsultaSNPadraoVenda=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTASNPADRAOVENDA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ParametroConsultaCodigo = 0 ;
   this.ZV27ParametroConsultaCodigo = 0 ;
   this.OV27ParametroConsultaCodigo = 0 ;
   this.AV28ParametroConsultaDescricao = "" ;
   this.ZV28ParametroConsultaDescricao = "" ;
   this.OV28ParametroConsultaDescricao = "" ;
   this.AV29ParametroConsultaTabela = 0 ;
   this.ZV29ParametroConsultaTabela = 0 ;
   this.OV29ParametroConsultaTabela = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3228ParametroConsultaCodigo = 0 ;
   this.O3228ParametroConsultaCodigo = 0 ;
   this.Z3215ParametroConsultaDescricao = "" ;
   this.O3215ParametroConsultaDescricao = "" ;
   this.ZV30bmpSnSuspenso = "" ;
   this.OV30bmpSnSuspenso = "" ;
   this.ZV31bmpSnCons = "" ;
   this.OV31bmpSnCons = "" ;
   this.ZV32bmpSnPdrVenda = "" ;
   this.OV32bmpSnPdrVenda = "" ;
   this.ZV33bmpParCampo = "" ;
   this.OV33bmpParCampo = "" ;
   this.ZV34bmpDup = "" ;
   this.OV34bmpDup = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3223ParametroConsultaSNCon = "" ;
   this.O3223ParametroConsultaSNCon = "" ;
   this.Z3222ParametroConsultaSNSuspenso = "" ;
   this.O3222ParametroConsultaSNSuspenso = "" ;
   this.Z3224ParametroConsultaSNPadraoVenda = "" ;
   this.O3224ParametroConsultaSNPadraoVenda = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ParametroConsultaCodigo = 0 ;
   this.AV28ParametroConsultaDescricao = "" ;
   this.AV29ParametroConsultaTabela = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3216ParametroConsultaTabela = 0 ;
   this.A3227ParametroConsultaEmpresaId = "" ;
   this.A3228ParametroConsultaCodigo = 0 ;
   this.A3215ParametroConsultaDescricao = "" ;
   this.AV30bmpSnSuspenso = "" ;
   this.AV31bmpSnCons = "" ;
   this.AV32bmpSnPdrVenda = "" ;
   this.AV33bmpParCampo = "" ;
   this.AV34bmpDup = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3223ParametroConsultaSNCon = "" ;
   this.A3222ParametroConsultaSNSuspenso = "" ;
   this.A3224ParametroConsultaSNPadraoVenda = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.AV38Pgmname = "" ;
   this.Events = {"e11ln2_client": ["'ANTERIOR'", true] ,"e12ln2_client": ["'PROXIMO'", true] ,"e16ln2_client": ["VPAGINA.CLICK", true] ,"e13ln2_client": ["'NOVO'", true] ,"e14ln2_client": ["'FECHAR'", true] ,"e15ln2_client": ["'PROCURAR'", true] ,"e20ln2_client": ["'ALTERAR'", true] ,"e21ln2_client": ["'EXCLUIR'", true] ,"e22ln2_client": ["'CONSULTAR'", true] ,"e23ln2_client": ["'CAMPO'", true] ,"e24ln2_client": ["'DUPLICAR'", true] ,"e25ln2_client": ["'ATUALIZAPAGINA'", true] ,"e26ln2_client": ["ENTER", true] ,"e27ln2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'}],[{ctrl:'PARAMETROCONSULTACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROCONSULTACODIGO","Title")',ctrl:'PARAMETROCONSULTACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PARAMETROCONSULTADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROCONSULTADESCRICAO","Title")',ctrl:'PARAMETROCONSULTADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'}],[{av:'AV30bmpSnSuspenso',fld:'vBMPSNSUSPENSO'},{av:'AV31bmpSnCons',fld:'vBMPSNCONS'},{av:'AV32bmpSnPdrVenda',fld:'vBMPSNPDRVENDA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CAMPO'"] = [[{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'}],[{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO'},{av:'AV28ParametroConsultaDescricao',fld:'vPARAMETROCONSULTADESCRICAO'},{av:'AV29ParametroConsultaTabela',fld:'vPARAMETROCONSULTATABELA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33bmpParCampo',fld:'vBMPPARCAMPO'},{av:'gx.fn.getCtrlProperty("vBMPPARCAMPO","Tooltiptext")',ctrl:'vBMPPARCAMPO',prop:'Tooltiptext'},{av:'AV34bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'A3222ParametroConsultaSNSuspenso',fld:'PARAMETROCONSULTASNSUSPENSO'},{av:'A3223ParametroConsultaSNCon',fld:'PARAMETROCONSULTASNCON'},{av:'A3224ParametroConsultaSNPadraoVenda',fld:'PARAMETROCONSULTASNPADRAOVENDA'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpParCampo", rfrProp:"Value", gxAttId:"Bmpparcampo"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpParCampo", rfrProp:"Tooltiptext", gxAttId:"Bmpparcampo"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpDup", rfrProp:"Value", gxAttId:"Bmpdup"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpDup", rfrProp:"Tooltiptext", gxAttId:"Bmpdup"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV38Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3222ParametroConsultaSNSuspenso", rfrProp:"Value", gxAttId:"3222"});
   GridContainer.addRefreshingVar({rfrVar:"A3223ParametroConsultaSNCon", rfrProp:"Value", gxAttId:"3223"});
   GridContainer.addRefreshingVar({rfrVar:"A3224ParametroConsultaSNPadraoVenda", rfrProp:"Value", gxAttId:"3224"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametroconsulta());
