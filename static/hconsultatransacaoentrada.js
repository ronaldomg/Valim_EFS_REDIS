/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:37.6
*/
gx.evt.autoSkip = false;
gx.define('hconsultatransacaoentrada', false, function () {
   this.ServerClass =  "hconsultatransacaoentrada" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV25TransacaoEntradaSnInativa=gx.fn.getControlValue("vTRANSACAOENTRADASNINATIVA") ;
      this.AV16TransacaoEntradaCodigo=gx.fn.getControlValue("vTRANSACAOENTRADACODIGO") ;
   };
   this.e17tk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11tk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12tk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13tk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14tk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15tk2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20tk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21tk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,35,36,37,38,44,47,49,51,53,55,56,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatransacaoentrada",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4481,29,"TRANSACAOENTRADACODIGO","","","TransacaoEntradaCodigo","char",0,"px",10,10,"left",null,[],4481,"TransacaoEntradaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4482,30,"TRANSACAOENTRADADESCRICAO","","","TransacaoEntradaDescricao","svchar",0,"px",30,30,"left",null,[],4482,"TransacaoEntradaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4603,31,"TRANSACAOENTRADACFOPDENESTADOC","","","TransacaoEntradaCFOPDenEstadoC","int",0,"px",4,4,"right",null,[],4603,"TransacaoEntradaCFOPDenEstadoC",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4604,32,"TRANSACAOENTRADACFOPFORESTADOC","","","TransacaoEntradaCFOPForEstadoC","int",0,"px",4,4,"right",null,[],4604,"TransacaoEntradaCFOPForEstadoC",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4500,33,"TRANSACAOENTRADACSTTIPO","Tipo da Situação Tributária","","TransacaoEntradaCSTTipo","char",0,"px",1,1,"left",null,[],4500,"TransacaoEntradaCSTTipo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipocst",34,"vTIPOCST","Tipo CST","","TipoCST","svchar",0,"px",40,40,"left",null,[],"Tipocst","TipoCST",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4502,35,"TRANSACAOENTRADACSTCODIGO","","","TransacaoEntradaCSTCodigo","char",0,"px",4,4,"left",null,[],4502,"TransacaoEntradaCSTCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4490,36,"TRANSACAOENTRADAATIVO","Transação Ativa","","TransacaoEntradaAtivo","char",0,"px",1,1,"left",null,[],4490,"TransacaoEntradaAtivo",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsnativa","vBMPSNATIVA",37,0,"px",17,"px",null,"","Ativa","Image","");
   GridContainer.addSingleLineEdit(5489,38,"TRANSACAOENTRADATIPO","Transacao Entrada Tipo","","TransacaoEntradaTipo","char",0,"px",1,1,"left",null,[],5489,"TransacaoEntradaTipo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCTRANSACAOENTRADACODIGO",gxz:"ZV19cTransacaoEntradaCodigo",gxold:"OV19cTransacaoEntradaCodigo",gxvar:"AV19cTransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19cTransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.ZV19cTransacaoEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOENTRADACODIGO",gx.O.AV19cTransacaoEntradaCodigo,0)},c2v:function(){gx.O.AV19cTransacaoEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCTRANSACAOENTRADADESCRICAO",gxz:"ZV20cTransacaoEntradaDescricao",gxold:"OV20cTransacaoEntradaDescricao",gxvar:"AV20cTransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20cTransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.ZV20cTransacaoEntradaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOENTRADADESCRICAO",gx.O.AV20cTransacaoEntradaDescricao,0)},c2v:function(){gx.O.AV20cTransacaoEntradaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOENTRADADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOTRANSACAOENTRADA",gxz:"ZV27TipoTransacaoEntrada",gxold:"OV27TipoTransacaoEntrada",gxvar:"AV27TipoTransacaoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TipoTransacaoEntrada=Value},v2z:function(Value){gx.O.ZV27TipoTransacaoEntrada=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOTRANSACAOENTRADA",gx.O.AV27TipoTransacaoEntrada)},c2v:function(){gx.O.AV27TipoTransacaoEntrada=this.val()},val:function(){return gx.fn.getControlValue("vTIPOTRANSACAOENTRADA")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACODIGO",gxz:"Z4481TransacaoEntradaCodigo",gxold:"O4481TransacaoEntradaCodigo",gxvar:"A4481TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4481TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.Z4481TransacaoEntradaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A4481TransacaoEntradaCodigo,0)},c2v:function(){gx.O.A4481TransacaoEntradaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADADESCRICAO",gxz:"Z4482TransacaoEntradaDescricao",gxold:"O4482TransacaoEntradaDescricao",gxvar:"A4482TransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4482TransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.Z4482TransacaoEntradaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADADESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A4482TransacaoEntradaDescricao,0)},c2v:function(){gx.O.A4482TransacaoEntradaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADADESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACFOPDENESTADOC",gxz:"Z4603TransacaoEntradaCFOPDenEstadoC",gxold:"O4603TransacaoEntradaCFOPDenEstadoC",gxvar:"A4603TransacaoEntradaCFOPDenEstadoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4603TransacaoEntradaCFOPDenEstadoC=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4603TransacaoEntradaCFOPDenEstadoC=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACFOPDENESTADOC",row || gx.fn.currentGridRowImpl(28),gx.O.A4603TransacaoEntradaCFOPDenEstadoC,0)},c2v:function(){gx.O.A4603TransacaoEntradaCFOPDenEstadoC=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOENTRADACFOPDENESTADOC",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACFOPFORESTADOC",gxz:"Z4604TransacaoEntradaCFOPForEstadoC",gxold:"O4604TransacaoEntradaCFOPForEstadoC",gxvar:"A4604TransacaoEntradaCFOPForEstadoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4604TransacaoEntradaCFOPForEstadoC=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4604TransacaoEntradaCFOPForEstadoC=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACFOPFORESTADOC",row || gx.fn.currentGridRowImpl(28),gx.O.A4604TransacaoEntradaCFOPForEstadoC,0)},c2v:function(){gx.O.A4604TransacaoEntradaCFOPForEstadoC=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOENTRADACFOPFORESTADOC",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACSTTIPO",gxz:"Z4500TransacaoEntradaCSTTipo",gxold:"O4500TransacaoEntradaCSTTipo",gxvar:"A4500TransacaoEntradaCSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4500TransacaoEntradaCSTTipo=Value},v2z:function(Value){gx.O.Z4500TransacaoEntradaCSTTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACSTTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A4500TransacaoEntradaCSTTipo,0)},c2v:function(){gx.O.A4500TransacaoEntradaCSTTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACSTTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCST",gxz:"ZV17TipoCST",gxold:"OV17TipoCST",gxvar:"AV17TipoCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17TipoCST=Value},v2z:function(Value){gx.O.ZV17TipoCST=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOCST",row || gx.fn.currentGridRowImpl(28),gx.O.AV17TipoCST,0)},c2v:function(){gx.O.AV17TipoCST=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOCST",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACSTCODIGO",gxz:"Z4502TransacaoEntradaCSTCodigo",gxold:"O4502TransacaoEntradaCSTCodigo",gxvar:"A4502TransacaoEntradaCSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4502TransacaoEntradaCSTCodigo=Value},v2z:function(Value){gx.O.Z4502TransacaoEntradaCSTCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACSTCODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A4502TransacaoEntradaCSTCodigo,0)},c2v:function(){gx.O.A4502TransacaoEntradaCSTCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACSTCODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADAATIVO",gxz:"Z4490TransacaoEntradaAtivo",gxold:"O4490TransacaoEntradaAtivo",gxvar:"A4490TransacaoEntradaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4490TransacaoEntradaAtivo=Value},v2z:function(Value){gx.O.Z4490TransacaoEntradaAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADAATIVO",row || gx.fn.currentGridRowImpl(28),gx.O.A4490TransacaoEntradaAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4490TransacaoEntradaAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADAATIVO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNATIVA",gxz:"ZV26BmpSnAtiva",gxold:"OV26BmpSnAtiva",gxvar:"AV26BmpSnAtiva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26BmpSnAtiva=Value},v2z:function(Value){gx.O.ZV26BmpSnAtiva=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNATIVA",row || gx.fn.currentGridRowImpl(28),gx.O.AV26BmpSnAtiva,gx.O.AV34Bmpsnativa_GXI)},c2v:function(){gx.O.AV34Bmpsnativa_GXI=this.val_GXI();gx.O.AV26BmpSnAtiva=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNATIVA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNATIVA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV34Bmpsnativa_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADATIPO",gxz:"Z5489TransacaoEntradaTipo",gxold:"O5489TransacaoEntradaTipo",gxvar:"A5489TransacaoEntradaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5489TransacaoEntradaTipo=Value},v2z:function(Value){gx.O.Z5489TransacaoEntradaTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADATIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A5489TransacaoEntradaTipo,0)},c2v:function(){gx.O.A5489TransacaoEntradaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADATIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLENAV",grid:0};
   GXValidFnc[47]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[55]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV30Pagina",gxold:"OV30Pagina",gxvar:"AV30Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV30Pagina)},c2v:function(){gx.O.AV30Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV31PaginaAux",gxold:"OV31PaginaAux",gxvar:"AV31PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV31PaginaAux,0)},c2v:function(){gx.O.AV31PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19cTransacaoEntradaCodigo = "" ;
   this.ZV19cTransacaoEntradaCodigo = "" ;
   this.OV19cTransacaoEntradaCodigo = "" ;
   this.AV20cTransacaoEntradaDescricao = "" ;
   this.ZV20cTransacaoEntradaDescricao = "" ;
   this.OV20cTransacaoEntradaDescricao = "" ;
   this.AV27TipoTransacaoEntrada = "" ;
   this.ZV27TipoTransacaoEntrada = "" ;
   this.OV27TipoTransacaoEntrada = "" ;
   this.Z4481TransacaoEntradaCodigo = "" ;
   this.O4481TransacaoEntradaCodigo = "" ;
   this.Z4482TransacaoEntradaDescricao = "" ;
   this.O4482TransacaoEntradaDescricao = "" ;
   this.Z4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.O4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.Z4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.O4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.Z4500TransacaoEntradaCSTTipo = "" ;
   this.O4500TransacaoEntradaCSTTipo = "" ;
   this.ZV17TipoCST = "" ;
   this.OV17TipoCST = "" ;
   this.Z4502TransacaoEntradaCSTCodigo = "" ;
   this.O4502TransacaoEntradaCSTCodigo = "" ;
   this.Z4490TransacaoEntradaAtivo = "" ;
   this.O4490TransacaoEntradaAtivo = "" ;
   this.ZV26BmpSnAtiva = "" ;
   this.OV26BmpSnAtiva = "" ;
   this.Z5489TransacaoEntradaTipo = "" ;
   this.O5489TransacaoEntradaTipo = "" ;
   this.AV30Pagina = 0 ;
   this.ZV30Pagina = 0 ;
   this.OV30Pagina = 0 ;
   this.AV31PaginaAux = 0 ;
   this.ZV31PaginaAux = 0 ;
   this.OV31PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19cTransacaoEntradaCodigo = "" ;
   this.AV20cTransacaoEntradaDescricao = "" ;
   this.AV27TipoTransacaoEntrada = "" ;
   this.AV30Pagina = 0 ;
   this.AV31PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV25TransacaoEntradaSnInativa = "" ;
   this.AV16TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4482TransacaoEntradaDescricao = "" ;
   this.A4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.A4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.A4500TransacaoEntradaCSTTipo = "" ;
   this.AV17TipoCST = "" ;
   this.A4502TransacaoEntradaCSTCodigo = "" ;
   this.A4490TransacaoEntradaAtivo = "" ;
   this.AV26BmpSnAtiva = "" ;
   this.A5489TransacaoEntradaTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17tk2_client": ["ENTER", true] ,"e11tk2_client": ["'GXM_FIRST'", true] ,"e12tk2_client": ["'GXM_PREVIOUS'", true] ,"e13tk2_client": ["'GXM_NEXT'", true] ,"e14tk2_client": ["'GXM_LAST'", true] ,"e15tk2_client": ["'PROCURAR'", true] ,"e20tk2_client": ["'ATUALIZAPAGINA'", true] ,"e21tk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRANSACAOENTRADACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACODIGO","Title")',ctrl:'TRANSACAOENTRADACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOENTRADADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADADESCRICAO","Title")',ctrl:'TRANSACAOENTRADADESCRICAO',prop:'Title'},{ctrl:'TRANSACAOENTRADACFOPDENESTADOC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACFOPDENESTADOC","Title")',ctrl:'TRANSACAOENTRADACFOPDENESTADOC',prop:'Title'},{ctrl:'TRANSACAOENTRADACFOPFORESTADOC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACFOPFORESTADOC","Title")',ctrl:'TRANSACAOENTRADACFOPFORESTADOC',prop:'Title'},{ctrl:'TRANSACAOENTRADACSTCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACSTCODIGO","Title")',ctrl:'TRANSACAOENTRADACSTCODIGO',prop:'Title'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'AV29NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'}],[{av:'AV16TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'AV30Pagina',fld:'vPAGINA'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'}],[{av:'AV26BmpSnAtiva',fld:'vBMPSNATIVA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19cTransacaoEntradaCodigo',fld:'vCTRANSACAOENTRADACODIGO'},{av:'AV20cTransacaoEntradaDescricao',fld:'vCTRANSACAOENTRADADESCRICAO'},{av:'AV27TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV25TransacaoEntradaSnInativa',fld:'vTRANSACAOENTRADASNINATIVA',hsh:true},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25TransacaoEntradaSnInativa", "vTRANSACAOENTRADASNINATIVA", 0, "char");
   this.setVCMap("AV16TransacaoEntradaCodigo", "vTRANSACAOENTRADACODIGO", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV25TransacaoEntradaSnInativa", "vTRANSACAOENTRADASNINATIVA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV25TransacaoEntradaSnInativa"});
   GridContainer.addRefreshingVar({rfrVar:"A4490TransacaoEntradaAtivo", rfrProp:"Value", gxAttId:"4490"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatransacaoentrada());
