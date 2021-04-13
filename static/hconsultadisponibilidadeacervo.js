/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:9.92
*/
gx.evt.autoSkip = false;
gx.define('hconsultadisponibilidadeacervo', false, function () {
   this.ServerClass =  "hconsultadisponibilidadeacervo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A107MovimentacaoDataDevolucao=gx.fn.getDateValue("MOVIMENTACAODATADEVOLUCAO") ;
      this.A391MovimentacaoDiasMulta=gx.fn.getIntegerValue("MOVIMENTACAODIASMULTA",'.') ;
      this.A555TipoItemValorMultaDia=gx.fn.getDecimalValue("TIPOITEMVALORMULTADIA",'.',',') ;
      this.AV65MovimentacaoEmpresaId=gx.fn.getControlValue("vMOVIMENTACAOEMPRESAID") ;
      this.AV16Hoje=gx.fn.getDateValue("vHOJE") ;
      this.AV58MovimentacaoValorDias=gx.fn.getDateValue("vMOVIMENTACAOVALORDIAS") ;
      this.AV63DataAux=gx.fn.getDateValue("vDATAAUX") ;
      this.AV61date=gx.fn.getDateValue("vDATE") ;
      this.AV55CaminhoAcervo=gx.fn.getControlValue("vCAMINHOACERVO") ;
   };
   this.Valid_Acervoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(34) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ACERVOID", gx.fn.currentGridRowImpl(34));
         this.AnyError  = 0;
         this.standaloneModal0Z3( );
         this.standaloneNotModal0Z3( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoprevisaodevolucao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(34) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOPREVISAODEVOLUCAO", gx.fn.currentGridRowImpl(34));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Acervoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(34) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ACERVOID", gx.fn.currentGridRowImpl(34));
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
   this.Valid_Movimentacaoprevisaodevolucao=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(34) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOPREVISAODEVOLUCAO", gx.fn.currentGridRowImpl(34));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e110z2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, arguments[0], false, false);
   };
   this.e120z2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, arguments[0], false, false);
   };
   this.e130z2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, arguments[0], false, false);
   };
   this.e140z2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, arguments[0], false, false);
   };
   this.e160z2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e210z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,12,15,18,20,21,26,30,33,35,36,37,38,39,40,41,44,46,47,48,49,50,52,55,58,61,63,66,68,71,73,76,78,81,83,86,88,91,93,96,98,101,103,106,109,111];
   this.GXLastCtrlId =111;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultadisponibilidadeacervo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(39,35,"ACERVOID","Código Acervo","","AcervoId","int",0,"px",7,7,"right",null,[],39,"AcervoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,36,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(105,37,"MOVIMENTACAODATAEMPRESTIMO","","","MovimentacaoDataEmprestimo","date",0,"px",10,10,"right",null,[],105,"MovimentacaoDataEmprestimo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(106,38,"MOVIMENTACAOPREVISAODEVOLUCAO","","","MovimentacaoPrevisaoDevolucao","date",0,"px",10,10,"right",null,[],106,"MovimentacaoPrevisaoDevolucao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(392,39,"MOVIMENTACAOVALORTOTALMULTA","","","MovimentacaoValorTotalMulta","decimal",0,"px",9,9,"right",null,[],392,"MovimentacaoValorTotalMulta",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   this.Grid1Container = new gx.grid.grid(this, 3,"WbpLvl3",45,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultadisponibilidadeacervo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(39,46,"ACERVOID","Código Acervo","","AcervoId","int",0,"px",7,7,"right",null,[],39,"AcervoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(71,47,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(105,48,"MOVIMENTACAODATAEMPRESTIMO","","","MovimentacaoDataEmprestimo","date",0,"px",10,10,"right",null,[],105,"MovimentacaoDataEmprestimo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(106,49,"MOVIMENTACAOPREVISAODEVOLUCAO","","","MovimentacaoPrevisaoDevolucao","date",0,"px",10,10,"right",null,[],106,"MovimentacaoPrevisaoDevolucao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 29, 5, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV66Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV66Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV66Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hconsultadisponibilidadeacervo_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer,this.Grid1Container],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE10",grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer,this.Grid1Container],fld:"vACERVOID",gxz:"ZV13AcervoId",gxold:"OV13AcervoId",gxvar:"AV13AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13AcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOID",gx.O.AV13AcervoId,0)},c2v:function(){gx.O.AV13AcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOTITULO",gxz:"ZV23AcervoTitulo",gxold:"OV23AcervoTitulo",gxvar:"AV23AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcervoTitulo=Value},v2z:function(Value){gx.O.ZV23AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOTITULO",gx.O.AV23AcervoTitulo,0)},c2v:function(){gx.O.AV23AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TAB4",grid:0};
   GXValidFnc[30]={fld:"TAB1",grid:0};
   GXValidFnc[33]={fld:"DIV1", format:1,grid:0};
   GXValidFnc[35]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:this.Valid_Acervoid,isvalid:null,rgrid:[],fld:"ACERVOID",gxz:"Z39AcervoId",gxold:"O39AcervoId",gxvar:"A39AcervoId",ucs:[],op:[39,36],ip:[39,38,35,36],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A39AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z39AcervoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOID",row || gx.fn.currentGridRowImpl(34),gx.O.A39AcervoId,0)},c2v:function(){gx.O.A39AcervoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOID",row || gx.fn.currentGridRowImpl(34),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(34),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATAEMPRESTIMO",gxz:"Z105MovimentacaoDataEmprestimo",gxold:"O105MovimentacaoDataEmprestimo",gxvar:"A105MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(34),gx.O.A105MovimentacaoDataEmprestimo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:this.Valid_Movimentacaoprevisaodevolucao,isvalid:null,rgrid:[],fld:"MOVIMENTACAOPREVISAODEVOLUCAO",gxz:"Z106MovimentacaoPrevisaoDevolucao",gxold:"O106MovimentacaoPrevisaoDevolucao",gxvar:"A106MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(34),gx.O.A106MovimentacaoPrevisaoDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"decimal",len:9,dec:2,sign:false,pic:"ZZZZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOVALORTOTALMULTA",gxz:"Z392MovimentacaoValorTotalMulta",gxold:"O392MovimentacaoValorTotalMulta",gxvar:"A392MovimentacaoValorTotalMulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A392MovimentacaoValorTotalMulta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z392MovimentacaoValorTotalMulta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MOVIMENTACAOVALORTOTALMULTA",row || gx.fn.currentGridRowImpl(34),gx.O.A392MovimentacaoValorTotalMulta,2,',')},c2v:function(){gx.O.A392MovimentacaoValorTotalMulta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MOVIMENTACAOVALORTOTALMULTA",row || gx.fn.currentGridRowImpl(34),'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"DIV2", format:1,grid:0};
   GXValidFnc[41]={fld:"TAB2",grid:0};
   GXValidFnc[44]={fld:"DIV3", format:1,grid:0};
   GXValidFnc[46]={lvl:3,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:45,gxgrid:this.Grid1Container,fnc:this.Valid_Acervoid,isvalid:null,rgrid:[],fld:"ACERVOID",gxz:"Z39AcervoId",gxold:"O39AcervoId",gxvar:"A39AcervoId",ucs:[],op:[39,36],ip:[39,38,35,36],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A39AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z39AcervoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERVOID",row || gx.fn.currentGridRowImpl(45),gx.O.A39AcervoId,0)},c2v:function(){gx.O.A39AcervoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERVOID",row || gx.fn.currentGridRowImpl(45),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:3,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(45),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:3,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATAEMPRESTIMO",gxz:"Z105MovimentacaoDataEmprestimo",gxold:"O105MovimentacaoDataEmprestimo",gxvar:"A105MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(45),gx.O.A105MovimentacaoDataEmprestimo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:3,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.Grid1Container,fnc:this.Valid_Movimentacaoprevisaodevolucao,isvalid:null,rgrid:[],fld:"MOVIMENTACAOPREVISAODEVOLUCAO",gxz:"Z106MovimentacaoPrevisaoDevolucao",gxold:"O106MovimentacaoPrevisaoDevolucao",gxvar:"A106MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(45),gx.O.A106MovimentacaoPrevisaoDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"DIV4", format:1,grid:0};
   GXValidFnc[52]={fld:"TABLE2",grid:0};
   GXValidFnc[55]={fld:"TABDETALHE1",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOSUBTITULO",gxz:"ZV24AcervoSubtitulo",gxold:"OV24AcervoSubtitulo",gxvar:"AV24AcervoSubtitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcervoSubtitulo=Value},v2z:function(Value){gx.O.ZV24AcervoSubtitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOSUBTITULO",gx.O.AV24AcervoSubtitulo,0)},c2v:function(){gx.O.AV24AcervoSubtitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOSUBTITULO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOAUTORNOME",gxz:"ZV30AcervoAutorNome",gxold:"OV30AcervoAutorNome",gxvar:"AV30AcervoAutorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AcervoAutorNome=Value},v2z:function(Value){gx.O.ZV30AcervoAutorNome=Value},v2c:function(){gx.fn.setControlValue("vACERVOAUTORNOME",gx.O.AV30AcervoAutorNome,0)},c2v:function(){gx.O.AV30AcervoAutorNome=this.val()},val:function(){return gx.fn.getControlValue("vACERVOAUTORNOME")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOITEMDESCRICAO",gxz:"ZV28TipoItemDescricao",gxold:"OV28TipoItemDescricao",gxvar:"AV28TipoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoItemDescricao=Value},v2z:function(Value){gx.O.ZV28TipoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOITEMDESCRICAO",gx.O.AV28TipoItemDescricao,0)},c2v:function(){gx.O.AV28TipoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDITORADESCRICAO",gxz:"ZV26EditoraDescricao",gxold:"OV26EditoraDescricao",gxvar:"AV26EditoraDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26EditoraDescricao=Value},v2z:function(Value){gx.O.ZV26EditoraDescricao=Value},v2c:function(){gx.fn.setControlValue("vEDITORADESCRICAO",gx.O.AV26EditoraDescricao,0)},c2v:function(){gx.O.AV26EditoraDescricao=this.val()},val:function(){return gx.fn.getControlValue("vEDITORADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOLITERARIADESCRICAO",gxz:"ZV27ClassificacaoLiterariaDescricao",gxold:"OV27ClassificacaoLiterariaDescricao",gxvar:"AV27ClassificacaoLiterariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassificacaoLiterariaDescricao=Value},v2z:function(Value){gx.O.ZV27ClassificacaoLiterariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOLITERARIADESCRICAO",gx.O.AV27ClassificacaoLiterariaDescricao,0)},c2v:function(){gx.O.AV27ClassificacaoLiterariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOLITERARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDIOMADESCRICAO",gxz:"ZV29IdiomaDescricao",gxold:"OV29IdiomaDescricao",gxvar:"AV29IdiomaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29IdiomaDescricao=Value},v2z:function(Value){gx.O.ZV29IdiomaDescricao=Value},v2c:function(){gx.fn.setControlValue("vIDIOMADESCRICAO",gx.O.AV29IdiomaDescricao,0)},c2v:function(){gx.O.AV29IdiomaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vIDIOMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOANOPUBLICACAO",gxz:"ZV25AcervoAnoPublicacao",gxold:"OV25AcervoAnoPublicacao",gxvar:"AV25AcervoAnoPublicacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcervoAnoPublicacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcervoAnoPublicacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOANOPUBLICACAO",gx.O.AV25AcervoAnoPublicacao,0)},c2v:function(){gx.O.AV25AcervoAnoPublicacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOANOPUBLICACAO",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEXEMPLARES",gxz:"ZV20QtdExemplares",gxold:"OV20QtdExemplares",gxvar:"AV20QtdExemplares",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdExemplares=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdExemplares=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEXEMPLARES",gx.O.AV20QtdExemplares,0)},c2v:function(){gx.O.AV20QtdExemplares=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEXEMPLARES",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATADISPONIVEL",gxz:"ZV19DataDisponivel",gxold:"OV19DataDisponivel",gxvar:"AV19DataDisponivel",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DataDisponivel=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19DataDisponivel=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATADISPONIVEL",gx.O.AV19DataDisponivel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19DataDisponivel=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATADISPONIVEL")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[106]={fld:"TABLE6",grid:0};
   GXValidFnc[109]={fld:"IMAGE2",grid:0};
   GXValidFnc[111]={fld:"PROMPT_ACERVOID",grid:0};
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13AcervoId = 0 ;
   this.ZV13AcervoId = 0 ;
   this.OV13AcervoId = 0 ;
   this.AV23AcervoTitulo = "" ;
   this.ZV23AcervoTitulo = "" ;
   this.OV23AcervoTitulo = "" ;
   this.Z39AcervoId = 0 ;
   this.O39AcervoId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.O105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.Z106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.O106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.Z392MovimentacaoValorTotalMulta = 0 ;
   this.O392MovimentacaoValorTotalMulta = 0 ;
   this.AV24AcervoSubtitulo = "" ;
   this.ZV24AcervoSubtitulo = "" ;
   this.OV24AcervoSubtitulo = "" ;
   this.AV30AcervoAutorNome = "" ;
   this.ZV30AcervoAutorNome = "" ;
   this.OV30AcervoAutorNome = "" ;
   this.AV28TipoItemDescricao = "" ;
   this.ZV28TipoItemDescricao = "" ;
   this.OV28TipoItemDescricao = "" ;
   this.AV26EditoraDescricao = "" ;
   this.ZV26EditoraDescricao = "" ;
   this.OV26EditoraDescricao = "" ;
   this.AV27ClassificacaoLiterariaDescricao = "" ;
   this.ZV27ClassificacaoLiterariaDescricao = "" ;
   this.OV27ClassificacaoLiterariaDescricao = "" ;
   this.AV29IdiomaDescricao = "" ;
   this.ZV29IdiomaDescricao = "" ;
   this.OV29IdiomaDescricao = "" ;
   this.AV25AcervoAnoPublicacao = 0 ;
   this.ZV25AcervoAnoPublicacao = 0 ;
   this.OV25AcervoAnoPublicacao = 0 ;
   this.AV20QtdExemplares = 0 ;
   this.ZV20QtdExemplares = 0 ;
   this.OV20QtdExemplares = 0 ;
   this.AV19DataDisponivel = gx.date.nullDate() ;
   this.ZV19DataDisponivel = gx.date.nullDate() ;
   this.OV19DataDisponivel = gx.date.nullDate() ;
   this.AV5Orderedby = 0 ;
   this.AV13AcervoId = 0 ;
   this.AV23AcervoTitulo = "" ;
   this.AV66Tab = [ ] ;
   this.A39AcervoId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV24AcervoSubtitulo = "" ;
   this.AV30AcervoAutorNome = "" ;
   this.AV28TipoItemDescricao = "" ;
   this.AV26EditoraDescricao = "" ;
   this.AV27ClassificacaoLiterariaDescricao = "" ;
   this.AV29IdiomaDescricao = "" ;
   this.AV25AcervoAnoPublicacao = 0 ;
   this.AV20QtdExemplares = 0 ;
   this.AV19DataDisponivel = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A108MovimentacaoTipo = "" ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A391MovimentacaoDiasMulta = 0 ;
   this.A555TipoItemValorMultaDia = 0 ;
   this.A3082AcervoEmpresaId = "" ;
   this.A3080TipoItemEmpresaId = "" ;
   this.A120TipoItemId = 0 ;
   this.A392MovimentacaoValorTotalMulta = 0 ;
   this.AV65MovimentacaoEmpresaId = "" ;
   this.AV16Hoje = gx.date.nullDate() ;
   this.AV58MovimentacaoValorDias = gx.date.nullDate() ;
   this.AV63DataAux = gx.date.nullDate() ;
   this.AV61date = gx.date.nullDate() ;
   this.AV55CaminhoAcervo = "" ;
   this.Events = {"e110z2_client": ["'GXM_FIRST'", true] ,"e120z2_client": ["'GXM_PREVIOUS'", true] ,"e130z2_client": ["'GXM_NEXT'", true] ,"e140z2_client": ["'GXM_LAST'", true] ,"e160z2_client": ["ENTER", true] ,"e150z2_client": ["'FECHAR'", true] ,"e210z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16Hoje',fld:'vHOJE',hsh:true},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV61date',fld:'vDATE'},{av:'AV55CaminhoAcervo',fld:'vCAMINHOACERVO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13AcervoId',fld:'vACERVOID'},{av:'AV65MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13AcervoId',fld:'vACERVOID'},{av:'AV65MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV16Hoje',fld:'vHOJE',hsh:true},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV61date',fld:'vDATE'},{av:'AV55CaminhoAcervo',fld:'vCAMINHOACERVO'}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13AcervoId',fld:'vACERVOID'},{av:'AV65MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV16Hoje',fld:'vHOJE',hsh:true},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV61date',fld:'vDATE'},{av:'AV55CaminhoAcervo',fld:'vCAMINHOACERVO'}],[]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13AcervoId',fld:'vACERVOID'},{av:'AV65MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV16Hoje',fld:'vHOJE',hsh:true},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV61date',fld:'vDATE'},{av:'AV55CaminhoAcervo',fld:'vCAMINHOACERVO'}],[]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13AcervoId',fld:'vACERVOID'},{av:'AV65MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV16Hoje',fld:'vHOJE',hsh:true},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV61date',fld:'vDATE'},{av:'AV55CaminhoAcervo',fld:'vCAMINHOACERVO'}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV13AcervoId',fld:'vACERVOID'},{av:'AV16Hoje',fld:'vHOJE',hsh:true},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV61date',fld:'vDATE'},{av:'AV55CaminhoAcervo',fld:'vCAMINHOACERVO'}],[{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MOVIMENTACAODATAEMPRESTIMO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAODATAEMPRESTIMO","Title")',ctrl:'MOVIMENTACAODATAEMPRESTIMO',prop:'Title'},{ctrl:'MOVIMENTACAOPREVISAODEVOLUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOPREVISAODEVOLUCAO","Title")',ctrl:'MOVIMENTACAOPREVISAODEVOLUCAO',prop:'Title'},{ctrl:'MOVIMENTACAOVALORTOTALMULTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOVALORTOTALMULTA","Title")',ctrl:'MOVIMENTACAOVALORTOTALMULTA',prop:'Title'},{av:'AV61date',fld:'vDATE'},{av:'AV63DataAux',fld:'vDATAAUX'},{av:'AV24AcervoSubtitulo',fld:'vACERVOSUBTITULO'},{av:'AV30AcervoAutorNome',fld:'vACERVOAUTORNOME'},{av:'AV25AcervoAnoPublicacao',fld:'vACERVOANOPUBLICACAO'},{av:'AV29IdiomaDescricao',fld:'vIDIOMADESCRICAO'},{av:'AV27ClassificacaoLiterariaDescricao',fld:'vCLASSIFICACAOLITERARIADESCRICAO'},{av:'AV26EditoraDescricao',fld:'vEDITORADESCRICAO'},{av:'AV28TipoItemDescricao',fld:'vTIPOITEMDESCRICAO'},{av:'AV58MovimentacaoValorDias',fld:'vMOVIMENTACAOVALORDIAS'},{av:'AV23AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV19DataDisponivel',fld:'vDATADISPONIVEL'},{av:'AV18QtdReservas',fld:'vQTDRESERVAS'},{av:'AV17Saldo',fld:'vSALDO'},{av:'gx.fn.getCtrlProperty("vDATADISPONIVEL","Visible")',ctrl:'vDATADISPONIVEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDEXEMPLARES","Visible")',ctrl:'vQTDEXEMPLARES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vACERVOANOPUBLICACAO","Visible")',ctrl:'vACERVOANOPUBLICACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vACERVOTITULO","Forecolor")',ctrl:'vACERVOTITULO',prop:'Forecolor'},{av:'AV31Foto',fld:'vFOTO'},{av:'AV56Foto1',fld:'vFOTO1'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_ACERVOID", [20]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A107MovimentacaoDataDevolucao", "MOVIMENTACAODATADEVOLUCAO", 0, "date");
   this.setVCMap("A391MovimentacaoDiasMulta", "MOVIMENTACAODIASMULTA", 0, "int");
   this.setVCMap("A555TipoItemValorMultaDia", "TIPOITEMVALORMULTADIA", 0, "decimal");
   this.setVCMap("AV65MovimentacaoEmpresaId", "vMOVIMENTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV16Hoje", "vHOJE", 0, "date");
   this.setVCMap("AV58MovimentacaoValorDias", "vMOVIMENTACAOVALORDIAS", 0, "date");
   this.setVCMap("AV63DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("AV61date", "vDATE", 0, "date");
   this.setVCMap("AV55CaminhoAcervo", "vCAMINHOACERVO", 0, "svchar");
   this.setVCMap("AV65MovimentacaoEmpresaId", "vMOVIMENTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV16Hoje", "vHOJE", 0, "date");
   this.setVCMap("AV58MovimentacaoValorDias", "vMOVIMENTACAOVALORDIAS", 0, "date");
   this.setVCMap("AV63DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("AV61date", "vDATE", 0, "date");
   this.setVCMap("AV55CaminhoAcervo", "vCAMINHOACERVO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[5]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"AV65MovimentacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV16Hoje"});
   GridContainer.addRefreshingVar({rfrVar:"AV58MovimentacaoValorDias"});
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV63DataAux"});
   GridContainer.addRefreshingVar({rfrVar:"AV61date"});
   GridContainer.addRefreshingVar({rfrVar:"AV55CaminhoAcervo"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[5]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid1Container.addRefreshingVar({rfrVar:"AV65MovimentacaoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultadisponibilidadeacervo());
