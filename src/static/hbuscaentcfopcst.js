/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:56.15
*/
gx.evt.autoSkip = false;
gx.define('hbuscaentcfopcst', false, function () {
   this.ServerClass =  "hbuscaentcfopcst" ;
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
      this.AV27SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Buscaentcfopcsttrnentcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCAENTCFOPCSTTRNENTCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Buscaentcfopcsttrnentempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCAENTCFOPCSTTRNENTEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112dd2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122dd2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e162dd2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132dd2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142dd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152dd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e192dd2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e202dd2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e212dd2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e232dd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e242dd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,64,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hbuscaentcfopcst",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Tptributacao",47,"vTPTRIBUTACAO","Tipo de Tributação","","TpTributacao","char",0,"px",25,25,"left",null,[],"Tptributacao","TpTributacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11259,48,"BUSCAENTCFOPCSTSTCODIGO","CST","","BuscaEntCfopCSTSTCodigo","char",0,"px",4,4,"left",null,[],11259,"BuscaEntCfopCSTSTCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11260,49,"BUSCAENTCFOPCSTCFOPDENCODIGO","CFOP Den UF","","BuscaEntCfopCSTCFOPDenCodigo","int",0,"px",4,4,"right",null,[],11260,"BuscaEntCfopCSTCFOPDenCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11261,50,"BUSCAENTCFOPCSTCFOPFORCODIGO","CFOP For UF","","BuscaEntCfopCSTCFOPForCodigo","int",0,"px",4,4,"right",null,[],11261,"BuscaEntCfopCSTCFOPForCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e192dd2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e202dd2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e212dd2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(11257,54,"BUSCAENTCFOPCSTTIPOTRIBUTACAO","Busca Ent Cfop CSTTipo Tributacao","","BuscaEntCfopCSTTipoTributacao","char",0,"px",1,1,"left",null,[],11257,"BuscaEntCfopCSTTipoTributacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11255,55,"BUSCAENTCFOPCSTTRNENTEMPID","Busca Ent Cfop CSTTrn Ent Emp Id","","BuscaEntCfopCSTTrnEntEmpId","char",0,"px",10,10,"left",null,[],11255,"BuscaEntCfopCSTTrnEntEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11256,56,"BUSCAENTCFOPCSTTRNENTCODIGO","Busca Ent Cfop CSTTrn Ent Codigo","","BuscaEntCfopCSTTrnEntCodigo","char",0,"px",10,10,"left",null,[],11256,"BuscaEntCfopCSTTrnEntCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(11258,57,"BUSCAENTCFOPCSTSTTIPO","Tipo ST","BuscaEntCfopCSTSTTipo","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscaentcfopcsttrnentcodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAENTCFOPCSTTRNENTCODIGO",gxz:"ZV8BuscaEntCfopCSTTrnEntCodigo",gxold:"OV8BuscaEntCfopCSTTrnEntCodigo",gxvar:"AV8BuscaEntCfopCSTTrnEntCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8BuscaEntCfopCSTTrnEntCodigo=Value},v2z:function(Value){gx.O.ZV8BuscaEntCfopCSTTrnEntCodigo=Value},v2c:function(){gx.fn.setControlValue("vBUSCAENTCFOPCSTTRNENTCODIGO",gx.O.AV8BuscaEntCfopCSTTrnEntCodigo,0)},c2v:function(){gx.O.AV8BuscaEntCfopCSTTrnEntCodigo=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTTRNENTCODIGO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUSCAENTCFOPCSTTRNENTDESC",gxz:"ZV9BuscaEntCfopCSTTrnEntDesc",gxold:"OV9BuscaEntCfopCSTTrnEntDesc",gxvar:"AV9BuscaEntCfopCSTTrnEntDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9BuscaEntCfopCSTTrnEntDesc=Value},v2z:function(Value){gx.O.ZV9BuscaEntCfopCSTTrnEntDesc=Value},v2c:function(){gx.fn.setControlValue("vBUSCAENTCFOPCSTTRNENTDESC",gx.O.AV9BuscaEntCfopCSTTrnEntDesc,0)},c2v:function(){gx.O.AV9BuscaEntCfopCSTTrnEntDesc=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTTRNENTDESC")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE7",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:25,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPTRIBUTACAO",gxz:"ZV29TpTributacao",gxold:"OV29TpTributacao",gxvar:"AV29TpTributacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29TpTributacao=Value},v2z:function(Value){gx.O.ZV29TpTributacao=Value},v2c:function(row){gx.fn.setGridControlValue("vTPTRIBUTACAO",row || gx.fn.currentGridRowImpl(46),gx.O.AV29TpTributacao,0)},c2v:function(){gx.O.AV29TpTributacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPTRIBUTACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTSTCODIGO",gxz:"Z11259BuscaEntCfopCSTSTCodigo",gxold:"O11259BuscaEntCfopCSTSTCodigo",gxvar:"A11259BuscaEntCfopCSTSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11259BuscaEntCfopCSTSTCodigo=Value},v2z:function(Value){gx.O.Z11259BuscaEntCfopCSTSTCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCAENTCFOPCSTSTCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A11259BuscaEntCfopCSTSTCodigo,0)},c2v:function(){gx.O.A11259BuscaEntCfopCSTSTCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCAENTCFOPCSTSTCODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTCFOPDENCODIGO",gxz:"Z11260BuscaEntCfopCSTCFOPDenCodigo",gxold:"O11260BuscaEntCfopCSTCFOPDenCodigo",gxvar:"A11260BuscaEntCfopCSTCFOPDenCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11260BuscaEntCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BUSCAENTCFOPCSTCFOPDENCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo,0)},c2v:function(){gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BUSCAENTCFOPCSTCFOPDENCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTCFOPFORCODIGO",gxz:"Z11261BuscaEntCfopCSTCFOPForCodigo",gxold:"O11261BuscaEntCfopCSTCFOPForCodigo",gxvar:"A11261BuscaEntCfopCSTCFOPForCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11261BuscaEntCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11261BuscaEntCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BUSCAENTCFOPCSTCFOPFORCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A11261BuscaEntCfopCSTCFOPForCodigo,0)},c2v:function(){gx.O.A11261BuscaEntCfopCSTCFOPForCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BUSCAENTCFOPCSTCFOPFORCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV5bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV6bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTTIPOTRIBUTACAO",gxz:"Z11257BuscaEntCfopCSTTipoTributacao",gxold:"O11257BuscaEntCfopCSTTipoTributacao",gxvar:"A11257BuscaEntCfopCSTTipoTributacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11257BuscaEntCfopCSTTipoTributacao=Value},v2z:function(Value){gx.O.Z11257BuscaEntCfopCSTTipoTributacao=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCAENTCFOPCSTTIPOTRIBUTACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A11257BuscaEntCfopCSTTipoTributacao,0)},c2v:function(){gx.O.A11257BuscaEntCfopCSTTipoTributacao=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCAENTCFOPCSTTIPOTRIBUTACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTTRNENTEMPID",gxz:"Z11255BuscaEntCfopCSTTrnEntEmpId",gxold:"O11255BuscaEntCfopCSTTrnEntEmpId",gxvar:"A11255BuscaEntCfopCSTTrnEntEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11255BuscaEntCfopCSTTrnEntEmpId=Value},v2z:function(Value){gx.O.Z11255BuscaEntCfopCSTTrnEntEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCAENTCFOPCSTTRNENTEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A11255BuscaEntCfopCSTTrnEntEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11255BuscaEntCfopCSTTrnEntEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCAENTCFOPCSTTRNENTEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTTRNENTCODIGO",gxz:"Z11256BuscaEntCfopCSTTrnEntCodigo",gxold:"O11256BuscaEntCfopCSTTrnEntCodigo",gxvar:"A11256BuscaEntCfopCSTTrnEntCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11256BuscaEntCfopCSTTrnEntCodigo=Value},v2z:function(Value){gx.O.Z11256BuscaEntCfopCSTTrnEntCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCAENTCFOPCSTTRNENTCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A11256BuscaEntCfopCSTTrnEntCodigo,0)},c2v:function(){gx.O.A11256BuscaEntCfopCSTTrnEntCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCAENTCFOPCSTTRNENTCODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTSTTIPO",gxz:"Z11258BuscaEntCfopCSTSTTipo",gxold:"O11258BuscaEntCfopCSTSTTipo",gxvar:"A11258BuscaEntCfopCSTSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11258BuscaEntCfopCSTSTTipo=Value},v2z:function(Value){gx.O.Z11258BuscaEntCfopCSTSTTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("BUSCAENTCFOPCSTSTTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A11258BuscaEntCfopCSTSTTipo)},c2v:function(){gx.O.A11258BuscaEntCfopCSTSTTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCAENTCFOPCSTSTTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscaentcfopcsttrnentempid,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAENTCFOPCSTTRNENTEMPID",gxz:"ZV11BuscaEntCfopCSTTrnEntEmpId",gxold:"OV11BuscaEntCfopCSTTrnEntEmpId",gxvar:"AV11BuscaEntCfopCSTTrnEntEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11BuscaEntCfopCSTTrnEntEmpId=Value},v2z:function(Value){gx.O.ZV11BuscaEntCfopCSTTrnEntEmpId=Value},v2c:function(){gx.fn.setControlValue("vBUSCAENTCFOPCSTTRNENTEMPID",gx.O.AV11BuscaEntCfopCSTTrnEntEmpId,0)},c2v:function(){gx.O.AV11BuscaEntCfopCSTTrnEntEmpId=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTTRNENTEMPID")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADAFILIALID",gxz:"ZV30TransacaoEntradaFilialId",gxold:"OV30TransacaoEntradaFilialId",gxvar:"AV30TransacaoEntradaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TransacaoEntradaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30TransacaoEntradaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADAFILIALID",gx.O.AV30TransacaoEntradaFilialId,0)},c2v:function(){gx.O.AV30TransacaoEntradaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOENTRADAFILIALID",'.')},nac:gx.falseFn};
   this.AV8BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.ZV8BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.OV8BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.AV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.ZV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.OV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.ZV29TpTributacao = "" ;
   this.OV29TpTributacao = "" ;
   this.Z11259BuscaEntCfopCSTSTCodigo = "" ;
   this.O11259BuscaEntCfopCSTSTCodigo = "" ;
   this.Z11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.O11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.Z11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.O11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.Z11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.O11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.Z11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.O11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.Z11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.O11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.Z11258BuscaEntCfopCSTSTTipo = "" ;
   this.O11258BuscaEntCfopCSTSTTipo = "" ;
   this.AV11BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.ZV11BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.OV11BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.AV30TransacaoEntradaFilialId = 0 ;
   this.ZV30TransacaoEntradaFilialId = 0 ;
   this.OV30TransacaoEntradaFilialId = 0 ;
   this.AV8BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.AV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV11BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.AV30TransacaoEntradaFilialId = 0 ;
   this.AV29TpTributacao = "" ;
   this.A11259BuscaEntCfopCSTSTCodigo = "" ;
   this.A11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.A11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.A11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.A11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.A11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.A11258BuscaEntCfopCSTSTTipo = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4494TransacaoEntradaFilialId = 0 ;
   this.AV27SnRecuperaFiltro = "" ;
   this.Events = {"e112dd2_client": ["'ANTERIOR'", true] ,"e122dd2_client": ["'PROXIMO'", true] ,"e162dd2_client": ["VPAGINA.CLICK", true] ,"e132dd2_client": ["'NOVO'", true] ,"e142dd2_client": ["'FECHAR'", true] ,"e152dd2_client": ["'PROCURAR'", true] ,"e192dd2_client": ["'ALTERAR'", true] ,"e202dd2_client": ["'EXCLUIR'", true] ,"e212dd2_client": ["'CONSULTAR'", true] ,"e232dd2_client": ["ENTER", true] ,"e242dd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'}],[{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV30TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV8BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV11BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A11257BuscaEntCfopCSTTipoTributacao',fld:'BUSCAENTCFOPCSTTIPOTRIBUTACAO'}],[{av:'AV29TpTributacao',fld:'vTPTRIBUTACAO'}]];
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A11257BuscaEntCfopCSTTipoTributacao", rfrProp:"Value", gxAttId:"11257"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbuscaentcfopcst());
