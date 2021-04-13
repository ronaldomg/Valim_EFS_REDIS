/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:44.60
*/
gx.evt.autoSkip = false;
gx.define('hconsultamovimentacao', false, function () {
   this.ServerClass =  "hconsultamovimentacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV21EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV24MovimentacaoEmpresaId=gx.fn.getControlValue("vMOVIMENTACAOEMPRESAID") ;
      this.AV11PMovimentacao=gx.fn.getIntegerValue("vPMOVIMENTACAO",'.') ;
   };
   this.e171b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111b2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121b2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131b2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141b2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151b2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191b2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211b1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,26,28,33,35,40,42,47,49,55,56,57,58,59,60,61,67,70,72,74,76,78,79,80,81,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamovimentacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(104,55,"MOVIMENTACAOID","","","MovimentacaoId","int",0,"px",7,7,"right",null,[],104,"MovimentacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(40,56,"ACERVOTITULO","","","AcervoTitulo","svchar",0,"px",50,50,"left",null,[],40,"AcervoTitulo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(105,57,"MOVIMENTACAODATAEMPRESTIMO","","","MovimentacaoDataEmprestimo","date",0,"px",10,10,"right",null,[],105,"MovimentacaoDataEmprestimo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(106,58,"MOVIMENTACAOPREVISAODEVOLUCAO","","","MovimentacaoPrevisaoDevolucao","date",0,"px",10,10,"right",null,[],106,"MovimentacaoPrevisaoDevolucao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(107,59,"MOVIMENTACAODATADEVOLUCAO","","","MovimentacaoDataDevolucao","date",0,"px",10,10,"right",null,[],107,"MovimentacaoDataDevolucao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,60,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(108,61,"MOVIMENTACAOTIPO","","","MovimentacaoTipo","char",0,"px",1,1,"left",null,[],108,"MovimentacaoTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOVIMENTACAOID",gxz:"ZV12MovimentacaoId",gxold:"OV12MovimentacaoId",gxvar:"AV12MovimentacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12MovimentacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12MovimentacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAOID",gx.O.AV12MovimentacaoId,0)},c2v:function(){gx.O.AV12MovimentacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVIMENTACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOVIMENTACAOTIPO",gxz:"ZV16MovimentacaoTipo",gxold:"OV16MovimentacaoTipo",gxvar:"AV16MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV16MovimentacaoTipo=Value},v2z:function(Value){gx.O.ZV16MovimentacaoTipo=Value},v2c:function(){gx.fn.setRadioValue("vMOVIMENTACAOTIPO",gx.O.AV16MovimentacaoTipo)},c2v:function(){gx.O.AV16MovimentacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vACERVOTITULO",gxz:"ZV18AcervoTitulo",gxold:"OV18AcervoTitulo",gxvar:"AV18AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV18AcervoTitulo=Value},v2z:function(Value){gx.O.ZV18AcervoTitulo=Value},v2c:function(){gx.fn.setComboBoxValue("vACERVOTITULO",gx.O.AV18AcervoTitulo)},c2v:function(){gx.O.AV18AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOVIMENTACAODATAEMPRESTIMO",gxz:"ZV13MovimentacaoDataEmprestimo",gxold:"OV13MovimentacaoDataEmprestimo",gxvar:"AV13MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAODATAEMPRESTIMO",gx.O.AV13MovimentacaoDataEmprestimo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAODATAEMPRESTIMO")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOVIMENTACAOPREVISAODEVOLUCAO",gxz:"ZV14MovimentacaoPrevisaoDevolucao",gxold:"OV14MovimentacaoPrevisaoDevolucao",gxvar:"AV14MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO",gx.O.AV14MovimentacaoPrevisaoDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMOVIMENTACAODATADEVOLUCAO",gxz:"ZV15MovimentacaoDataDevolucao",gxold:"OV15MovimentacaoDataDevolucao",gxvar:"AV15MovimentacaoDataDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAODATADEVOLUCAO",gx.O.AV15MovimentacaoDataDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAODATADEVOLUCAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAFANTASIA",gxz:"ZV20PessoaFantasia",gxold:"OV20PessoaFantasia",gxvar:"AV20PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV20PessoaFantasia=Value},v2z:function(Value){gx.O.ZV20PessoaFantasia=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOAFANTASIA",gx.O.AV20PessoaFantasia)},c2v:function(){gx.O.AV20PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOID",gxz:"Z104MovimentacaoId",gxold:"O104MovimentacaoId",gxvar:"A104MovimentacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A104MovimentacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z104MovimentacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOID",row || gx.fn.currentGridRowImpl(54),gx.O.A104MovimentacaoId,0)},c2v:function(){gx.O.A104MovimentacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVIMENTACAOID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOTITULO",gxz:"Z40AcervoTitulo",gxold:"O40AcervoTitulo",gxvar:"A40AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A40AcervoTitulo=Value},v2z:function(Value){gx.O.Z40AcervoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(54),gx.O.A40AcervoTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A40AcervoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERVOTITULO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATAEMPRESTIMO",gxz:"Z105MovimentacaoDataEmprestimo",gxold:"O105MovimentacaoDataEmprestimo",gxvar:"A105MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(54),gx.O.A105MovimentacaoDataEmprestimo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAODATAEMPRESTIMO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOPREVISAODEVOLUCAO",gxz:"Z106MovimentacaoPrevisaoDevolucao",gxold:"O106MovimentacaoPrevisaoDevolucao",gxvar:"A106MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(54),gx.O.A106MovimentacaoPrevisaoDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAOPREVISAODEVOLUCAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATADEVOLUCAO",gxz:"Z107MovimentacaoDataDevolucao",gxold:"O107MovimentacaoDataDevolucao",gxvar:"A107MovimentacaoDataDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAODATADEVOLUCAO",row || gx.fn.currentGridRowImpl(54),gx.O.A107MovimentacaoDataDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVIMENTACAODATADEVOLUCAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(54),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOTIPO",gxz:"Z108MovimentacaoTipo",gxold:"O108MovimentacaoTipo",gxvar:"A108MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A108MovimentacaoTipo=Value},v2z:function(Value){gx.O.Z108MovimentacaoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("MOVIMENTACAOTIPO",row || gx.fn.currentGridRowImpl(54),gx.O.A108MovimentacaoTipo,0)},c2v:function(){gx.O.A108MovimentacaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MOVIMENTACAOTIPO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TABLENAV",grid:0};
   GXValidFnc[70]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[72]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[74]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[76]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[78]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[79]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV12MovimentacaoId = 0 ;
   this.ZV12MovimentacaoId = 0 ;
   this.OV12MovimentacaoId = 0 ;
   this.AV16MovimentacaoTipo = "" ;
   this.ZV16MovimentacaoTipo = "" ;
   this.OV16MovimentacaoTipo = "" ;
   this.AV18AcervoTitulo = "" ;
   this.ZV18AcervoTitulo = "" ;
   this.OV18AcervoTitulo = "" ;
   this.AV13MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.ZV13MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.OV13MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV14MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.ZV14MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.OV14MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV15MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.ZV15MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.OV15MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.AV20PessoaFantasia = "" ;
   this.ZV20PessoaFantasia = "" ;
   this.OV20PessoaFantasia = "" ;
   this.Z104MovimentacaoId = 0 ;
   this.O104MovimentacaoId = 0 ;
   this.Z40AcervoTitulo = "" ;
   this.O40AcervoTitulo = "" ;
   this.Z105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.O105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.Z106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.O106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.Z107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.O107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z108MovimentacaoTipo = "" ;
   this.O108MovimentacaoTipo = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.ZV26PaginaAux = 0 ;
   this.OV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV12MovimentacaoId = 0 ;
   this.AV16MovimentacaoTipo = "" ;
   this.AV18AcervoTitulo = "" ;
   this.AV13MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV14MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV15MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.AV20PessoaFantasia = "" ;
   this.AV27Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV11PMovimentacao = 0 ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A3082AcervoEmpresaId = "" ;
   this.A39AcervoId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A104MovimentacaoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A71PessoaFantasia = "" ;
   this.A108MovimentacaoTipo = "" ;
   this.AV24MovimentacaoEmpresaId = "" ;
   this.Events = {"e171b2_client": ["ENTER", true] ,"e111b2_client": ["'GXM_FIRST'", true] ,"e121b2_client": ["'GXM_PREVIOUS'", true] ,"e131b2_client": ["'GXM_NEXT'", true] ,"e141b2_client": ["'GXM_LAST'", true] ,"e151b2_client": ["'PROCURAR'", true] ,"e191b2_client": ["'ATUALIZAPAGINA'", true] ,"e211b1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MOVIMENTACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOID","Title")',ctrl:'MOVIMENTACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ACERVOTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACERVOTITULO","Title")',ctrl:'ACERVOTITULO',prop:'Title'},{ctrl:'MOVIMENTACAODATAEMPRESTIMO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAODATAEMPRESTIMO","Title")',ctrl:'MOVIMENTACAODATAEMPRESTIMO',prop:'Title'},{ctrl:'MOVIMENTACAOPREVISAODEVOLUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOPREVISAODEVOLUCAO","Title")',ctrl:'MOVIMENTACAOPREVISAODEVOLUCAO',prop:'Title'},{ctrl:'MOVIMENTACAODATADEVOLUCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAODATADEVOLUCAO","Title")',ctrl:'MOVIMENTACAODATADEVOLUCAO',prop:'Title'},{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{ctrl:'MOVIMENTACAOTIPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MOVIMENTACAOTIPO","Title")',ctrl:'MOVIMENTACAOTIPO',prop:'Title'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV28NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A104MovimentacaoId',fld:'MOVIMENTACAOID'}],[{av:'AV11PMovimentacao',fld:'vPMOVIMENTACAO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'AV16MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV18AcervoTitulo',fld:'vACERVOTITULO'},{av:'AV13MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV14MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV15MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV20PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'}],[]];
   this.setVCMap("AV21EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24MovimentacaoEmpresaId", "vMOVIMENTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV11PMovimentacao", "vPMOVIMENTACAO", 0, "int");
   this.setVCMap("AV24MovimentacaoEmpresaId", "vMOVIMENTACAOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar({rfrVar:"AV24MovimentacaoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamovimentacao());
