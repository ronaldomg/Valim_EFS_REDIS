/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:29.53
*/
gx.evt.autoSkip = false;
gx.define('hbuscacfopcst', false, function () {
   this.ServerClass =  "hbuscacfopcst" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Buscacfopcsttrnsaidacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCACFOPCSTTRNSAIDACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Buscacfopcsttrnsaidaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCACFOPCSTTRNSAIDAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111gs2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121gs2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e161gs2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131gs2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141gs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151gs2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e191gs2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e201gs2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e211gs2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e231gs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e241gs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,63,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hbuscacfopcst",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Tptributacao",47,"vTPTRIBUTACAO","Tipo de Tributação","","TpTributacao","char",0,"px",25,25,"left",null,[],"Tptributacao","TpTributacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9431,48,"BUSCACFOPCSTTPTRIBUTACAO","Tipo Tributação","","BuscaCfopCSTTpTributacao","char",0,"px",1,1,"left",null,[],9431,"BuscaCfopCSTTpTributacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9421,49,"BUSCACFOPCSTSTCODIGO","CST","","BuscaCfopCSTSTCodigo","char",0,"px",4,4,"left",null,[],9421,"BuscaCfopCSTSTCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9423,50,"BUSCACFOPCSTCFOPDENCODIGO","CFOP Den UF","","BuscaCfopCSTCFOPDenCodigo","int",0,"px",4,4,"right",null,[],9423,"BuscaCfopCSTCFOPDenCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9425,51,"BUSCACFOPCSTCFOPFORCODIGO","CFOP For UF","","BuscaCfopCSTCFOPForCodigo","int",0,"px",4,4,"right",null,[],9425,"BuscaCfopCSTCFOPForCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e191gs2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e201gs2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e211gs2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(9430,55,"BUSCACFOPCSTTRNSAIDACODIGO","Busca Cfop CSTTrn Saida Codigo","","BuscaCfopCSTTrnSaidaCodigo","char",0,"px",10,10,"left",null,[],9430,"BuscaCfopCSTTrnSaidaCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9429,56,"BUSCACFOPCSTTRNSAIDAEMPID","Busca Cfop CSTTrn Saida Emp Id","","BuscaCfopCSTTrnSaidaEmpId","char",0,"px",10,10,"left",null,[],9429,"BuscaCfopCSTTrnSaidaEmpId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscacfopcsttrnsaidacodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCACFOPCSTTRNSAIDACODIGO",gxz:"ZV28BuscaCfopCSTTrnSaidaCodigo",gxold:"OV28BuscaCfopCSTTrnSaidaCodigo",gxvar:"AV28BuscaCfopCSTTrnSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BuscaCfopCSTTrnSaidaCodigo=Value},v2z:function(Value){gx.O.ZV28BuscaCfopCSTTrnSaidaCodigo=Value},v2c:function(){gx.fn.setControlValue("vBUSCACFOPCSTTRNSAIDACODIGO",gx.O.AV28BuscaCfopCSTTrnSaidaCodigo,0)},c2v:function(){gx.O.AV28BuscaCfopCSTTrnSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vBUSCACFOPCSTTRNSAIDACODIGO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBUSCACFOPCSTTRNSAIDADESC",gxz:"ZV27BuscaCfopCSTTrnSaidaDesc",gxold:"OV27BuscaCfopCSTTrnSaidaDesc",gxvar:"AV27BuscaCfopCSTTrnSaidaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BuscaCfopCSTTrnSaidaDesc=Value},v2z:function(Value){gx.O.ZV27BuscaCfopCSTTrnSaidaDesc=Value},v2c:function(){gx.fn.setControlValue("vBUSCACFOPCSTTRNSAIDADESC",gx.O.AV27BuscaCfopCSTTrnSaidaDesc,0)},c2v:function(){gx.O.AV27BuscaCfopCSTTrnSaidaDesc=this.val()},val:function(){return gx.fn.getControlValue("vBUSCACFOPCSTTRNSAIDADESC")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE7",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:25,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPTRIBUTACAO",gxz:"ZV32TpTributacao",gxold:"OV32TpTributacao",gxvar:"AV32TpTributacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32TpTributacao=Value},v2z:function(Value){gx.O.ZV32TpTributacao=Value},v2c:function(row){gx.fn.setGridControlValue("vTPTRIBUTACAO",row || gx.fn.currentGridRowImpl(46),gx.O.AV32TpTributacao,0)},c2v:function(){gx.O.AV32TpTributacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPTRIBUTACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTTPTRIBUTACAO",gxz:"Z9431BuscaCfopCSTTpTributacao",gxold:"O9431BuscaCfopCSTTpTributacao",gxvar:"A9431BuscaCfopCSTTpTributacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9431BuscaCfopCSTTpTributacao=Value},v2z:function(Value){gx.O.Z9431BuscaCfopCSTTpTributacao=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCACFOPCSTTPTRIBUTACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A9431BuscaCfopCSTTpTributacao,0)},c2v:function(){gx.O.A9431BuscaCfopCSTTpTributacao=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCACFOPCSTTPTRIBUTACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTSTCODIGO",gxz:"Z9421BuscaCfopCSTSTCodigo",gxold:"O9421BuscaCfopCSTSTCodigo",gxvar:"A9421BuscaCfopCSTSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9421BuscaCfopCSTSTCodigo=Value},v2z:function(Value){gx.O.Z9421BuscaCfopCSTSTCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCACFOPCSTSTCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A9421BuscaCfopCSTSTCodigo,0)},c2v:function(){gx.O.A9421BuscaCfopCSTSTCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCACFOPCSTSTCODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTCFOPDENCODIGO",gxz:"Z9423BuscaCfopCSTCFOPDenCodigo",gxold:"O9423BuscaCfopCSTCFOPDenCodigo",gxvar:"A9423BuscaCfopCSTCFOPDenCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9423BuscaCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9423BuscaCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BUSCACFOPCSTCFOPDENCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A9423BuscaCfopCSTCFOPDenCodigo,0)},c2v:function(){gx.O.A9423BuscaCfopCSTCFOPDenCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BUSCACFOPCSTCFOPDENCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTCFOPFORCODIGO",gxz:"Z9425BuscaCfopCSTCFOPForCodigo",gxold:"O9425BuscaCfopCSTCFOPForCodigo",gxvar:"A9425BuscaCfopCSTCFOPForCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9425BuscaCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9425BuscaCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BUSCACFOPCSTCFOPFORCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A9425BuscaCfopCSTCFOPForCodigo,0)},c2v:function(){gx.O.A9425BuscaCfopCSTCFOPForCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BUSCACFOPCSTCFOPFORCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTTRNSAIDACODIGO",gxz:"Z9430BuscaCfopCSTTrnSaidaCodigo",gxold:"O9430BuscaCfopCSTTrnSaidaCodigo",gxvar:"A9430BuscaCfopCSTTrnSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9430BuscaCfopCSTTrnSaidaCodigo=Value},v2z:function(Value){gx.O.Z9430BuscaCfopCSTTrnSaidaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCACFOPCSTTRNSAIDACODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A9430BuscaCfopCSTTrnSaidaCodigo,0)},c2v:function(){gx.O.A9430BuscaCfopCSTTrnSaidaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCACFOPCSTTRNSAIDACODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTTRNSAIDAEMPID",gxz:"Z9429BuscaCfopCSTTrnSaidaEmpId",gxold:"O9429BuscaCfopCSTTrnSaidaEmpId",gxvar:"A9429BuscaCfopCSTTrnSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9429BuscaCfopCSTTrnSaidaEmpId=Value},v2z:function(Value){gx.O.Z9429BuscaCfopCSTTrnSaidaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("BUSCACFOPCSTTRNSAIDAEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A9429BuscaCfopCSTTrnSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9429BuscaCfopCSTTrnSaidaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("BUSCACFOPCSTTRNSAIDAEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscacfopcsttrnsaidaempid,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCACFOPCSTTRNSAIDAEMPID",gxz:"ZV29BuscaCfopCSTTrnSaidaEmpId",gxold:"OV29BuscaCfopCSTTrnSaidaEmpId",gxvar:"AV29BuscaCfopCSTTrnSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BuscaCfopCSTTrnSaidaEmpId=Value},v2z:function(Value){gx.O.ZV29BuscaCfopCSTTrnSaidaEmpId=Value},v2c:function(){gx.fn.setControlValue("vBUSCACFOPCSTTRNSAIDAEMPID",gx.O.AV29BuscaCfopCSTTrnSaidaEmpId,0)},c2v:function(){gx.O.AV29BuscaCfopCSTTrnSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vBUSCACFOPCSTTRNSAIDAEMPID")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDAFILIALID",gxz:"ZV34TransacaoSaidaFilialId",gxold:"OV34TransacaoSaidaFilialId",gxvar:"AV34TransacaoSaidaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TransacaoSaidaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TransacaoSaidaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDAFILIALID",gx.O.AV34TransacaoSaidaFilialId,0)},c2v:function(){gx.O.AV34TransacaoSaidaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOSAIDAFILIALID",'.')},nac:gx.falseFn};
   this.AV28BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.ZV28BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.OV28BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.AV27BuscaCfopCSTTrnSaidaDesc = "" ;
   this.ZV27BuscaCfopCSTTrnSaidaDesc = "" ;
   this.OV27BuscaCfopCSTTrnSaidaDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV32TpTributacao = "" ;
   this.OV32TpTributacao = "" ;
   this.Z9431BuscaCfopCSTTpTributacao = "" ;
   this.O9431BuscaCfopCSTTpTributacao = "" ;
   this.Z9421BuscaCfopCSTSTCodigo = "" ;
   this.O9421BuscaCfopCSTSTCodigo = "" ;
   this.Z9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.O9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.Z9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.O9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.O9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.Z9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.O9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.AV29BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.ZV29BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.OV29BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.AV34TransacaoSaidaFilialId = 0 ;
   this.ZV34TransacaoSaidaFilialId = 0 ;
   this.OV34TransacaoSaidaFilialId = 0 ;
   this.AV28BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.AV27BuscaCfopCSTTrnSaidaDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV29BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.AV34TransacaoSaidaFilialId = 0 ;
   this.AV32TpTributacao = "" ;
   this.A9431BuscaCfopCSTTpTributacao = "" ;
   this.A9421BuscaCfopCSTSTCodigo = "" ;
   this.A9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.A9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.A9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5583TransacaoSaidaFilialId = 0 ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e111gs2_client": ["'ANTERIOR'", true] ,"e121gs2_client": ["'PROXIMO'", true] ,"e161gs2_client": ["VPAGINA.CLICK", true] ,"e131gs2_client": ["'NOVO'", true] ,"e141gs2_client": ["'FECHAR'", true] ,"e151gs2_client": ["'PROCURAR'", true] ,"e191gs2_client": ["'ALTERAR'", true] ,"e201gs2_client": ["'EXCLUIR'", true] ,"e211gs2_client": ["'CONSULTAR'", true] ,"e231gs2_client": ["ENTER", true] ,"e241gs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV34TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'},{av:'AV27BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV28BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV29BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9431BuscaCfopCSTTpTributacao',fld:'BUSCACFOPCSTTPTRIBUTACAO'}],[{av:'AV32TpTributacao',fld:'vTPTRIBUTACAO'}]];
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A9431BuscaCfopCSTTpTributacao", rfrProp:"Value", gxAttId:"9431"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbuscacfopcst());
