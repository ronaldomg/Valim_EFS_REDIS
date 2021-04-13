/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:22.14
*/
gx.evt.autoSkip = false;
gx.define('hconsultatransacaopagrec', false, function () {
   this.ServerClass =  "hconsultatransacaopagrec" ;
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
      this.AV19PTransacaoPagRecId=gx.fn.getControlValue("vPTRANSACAOPAGRECID") ;
   };
   this.e17922_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11922_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12922_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13922_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14922_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15922_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19922_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21921_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,29,30,33,35,36,37,43,44,45,46,47,48,54,57,59,61,63,65,66,67,68,69,70,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatransacaopagrec",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1266,43,"TRANSACAOPAGRECID","","","TransacaoPagRecId","char",0,"px",8,8,"left",null,[],1266,"TransacaoPagRecId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1204,44,"TRANSACAOPAGRECDESCRICAO","","","TransacaoPagRecDescricao","svchar",0,"px",40,40,"left",null,[],1204,"TransacaoPagRecDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1151,45,"TIPOLANCAMENTOPAGRECDESCRICAO","","","TipoLancamentoPagRecDescricao","svchar",0,"px",25,25,"left",null,[],1151,"TipoLancamentoPagRecDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1216,46,"TIPOCONTAPAGRECDESCRICAO","","","TipoContaPagRecDescricao","svchar",0,"px",25,25,"left",null,[],1216,"TipoContaPagRecDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1212,47,"TRANSACAOPAGRECEMPRESAID","Transacao Pag Rec Empresa Id","","TransacaoPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1212,"TransacaoPagRecEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1175,48,"TRANSACAOPAGRECTIPO","Tipo","TransacaoPagRecTipo","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOPAGRECTIPO",gxz:"ZV20TransacaoPagRecTipo",gxold:"OV20TransacaoPagRecTipo",gxvar:"AV20TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.ZV20TransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOPAGRECTIPO",gx.O.AV20TransacaoPagRecTipo)},c2v:function(){gx.O.AV20TransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOPAGRECID",gxz:"ZV15TransacaoPagRecId",gxold:"OV15TransacaoPagRecId",gxvar:"AV15TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TransacaoPagRecId=Value},v2z:function(Value){gx.O.ZV15TransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECID",gx.O.AV15TransacaoPagRecId,0)},c2v:function(){gx.O.AV15TransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECID")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOPAGRECDESCRICAO",gxz:"ZV16TransacaoPagRecDescricao",gxold:"OV16TransacaoPagRecDescricao",gxvar:"AV16TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV16TransacaoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECDESCRICAO",gx.O.AV16TransacaoPagRecDescricao,0)},c2v:function(){gx.O.AV16TransacaoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTOPAGRECID",gxz:"ZV21TipoLancamentoPagRecId",gxold:"OV21TipoLancamentoPagRecId",gxvar:"AV21TipoLancamentoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TipoLancamentoPagRecId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21TipoLancamentoPagRecId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOPAGRECID",gx.O.AV21TipoLancamentoPagRecId,0)},c2v:function(){gx.O.AV21TipoLancamentoPagRecId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOPAGRECID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOPAGRECDESCRICAO",gxz:"ZV17TipoLancamentoPagRecDescricao",gxold:"OV17TipoLancamentoPagRecDescricao",gxvar:"AV17TipoLancamentoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoLancamentoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV17TipoLancamentoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOPAGRECDESCRICAO",gx.O.AV17TipoLancamentoPagRecDescricao,0)},c2v:function(){gx.O.AV17TipoLancamentoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOPAGRECEMPRESAID",gxz:"ZV23TipoLancamentoPagRecEmpresaId",gxold:"OV23TipoLancamentoPagRecEmpresaId",gxvar:"AV23TipoLancamentoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TipoLancamentoPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV23TipoLancamentoPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOPAGRECEMPRESAID",gx.O.AV23TipoLancamentoPagRecEmpresaId,0)},c2v:function(){gx.O.AV23TipoLancamentoPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCONTAPAGRECID",gxz:"ZV22TipoContaPagRecId",gxold:"OV22TipoContaPagRecId",gxvar:"AV22TipoContaPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TipoContaPagRecId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22TipoContaPagRecId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAPAGRECID",gx.O.AV22TipoContaPagRecId,0)},c2v:function(){gx.O.AV22TipoContaPagRecId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAPAGRECID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAPAGRECDESCRICAO",gxz:"ZV18TipoContaPagRecDescricao",gxold:"OV18TipoContaPagRecDescricao",gxvar:"AV18TipoContaPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TipoContaPagRecDescricao=Value},v2z:function(Value){gx.O.ZV18TipoContaPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTAPAGRECDESCRICAO",gx.O.AV18TipoContaPagRecDescricao,0)},c2v:function(){gx.O.AV18TipoContaPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTAPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAPAGRECEMPRESAID",gxz:"ZV24TipoContaPagRecEmpresaId",gxold:"OV24TipoContaPagRecEmpresaId",gxvar:"AV24TipoContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TipoContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV24TipoContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTAPAGRECEMPRESAID",gx.O.AV24TipoContaPagRecEmpresaId,0)},c2v:function(){gx.O.AV24TipoContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECID",gxz:"Z1266TransacaoPagRecId",gxold:"O1266TransacaoPagRecId",gxvar:"A1266TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1266TransacaoPagRecId=Value},v2z:function(Value){gx.O.Z1266TransacaoPagRecId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECID",row || gx.fn.currentGridRowImpl(42),gx.O.A1266TransacaoPagRecId,0)},c2v:function(){gx.O.A1266TransacaoPagRecId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECDESCRICAO",gxz:"Z1204TransacaoPagRecDescricao",gxold:"O1204TransacaoPagRecDescricao",gxvar:"A1204TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1204TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.Z1204TransacaoPagRecDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(42),gx.O.A1204TransacaoPagRecDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1204TransacaoPagRecDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOPAGRECDESCRICAO",gxz:"Z1151TipoLancamentoPagRecDescricao",gxold:"O1151TipoLancamentoPagRecDescricao",gxvar:"A1151TipoLancamentoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1151TipoLancamentoPagRecDescricao=Value},v2z:function(Value){gx.O.Z1151TipoLancamentoPagRecDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(42),gx.O.A1151TipoLancamentoPagRecDescricao,0)},c2v:function(){gx.O.A1151TipoLancamentoPagRecDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTAPAGRECDESCRICAO",gxz:"Z1216TipoContaPagRecDescricao",gxold:"O1216TipoContaPagRecDescricao",gxvar:"A1216TipoContaPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1216TipoContaPagRecDescricao=Value},v2z:function(Value){gx.O.Z1216TipoContaPagRecDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTAPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(42),gx.O.A1216TipoContaPagRecDescricao,0)},c2v:function(){gx.O.A1216TipoContaPagRecDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTAPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECEMPRESAID",gxz:"Z1212TransacaoPagRecEmpresaId",gxold:"O1212TransacaoPagRecEmpresaId",gxvar:"A1212TransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1212TransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1212TransacaoPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.A1212TransacaoPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1212TransacaoPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECTIPO",gxz:"Z1175TransacaoPagRecTipo",gxold:"O1175TransacaoPagRecTipo",gxvar:"A1175TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1175TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.Z1175TransacaoPagRecTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOPAGRECTIPO",row || gx.fn.currentGridRowImpl(42),gx.O.A1175TransacaoPagRecTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1175TransacaoPagRecTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECTIPO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLENAV",grid:0};
   GXValidFnc[57]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[59]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[61]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[63]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[65]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[66]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV30Pagina",gxold:"OV30Pagina",gxvar:"AV30Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV30Pagina)},c2v:function(){gx.O.AV30Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV31PaginaAux",gxold:"OV31PaginaAux",gxvar:"AV31PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV31PaginaAux,0)},c2v:function(){gx.O.AV31PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"PROMPT_TIPOLANCAMENTOPAGRECID",grid:0};
   GXValidFnc[71]={fld:"PROMPT_TIPOCONTAPAGRECID",grid:0};
   this.AV20TransacaoPagRecTipo = "" ;
   this.ZV20TransacaoPagRecTipo = "" ;
   this.OV20TransacaoPagRecTipo = "" ;
   this.AV15TransacaoPagRecId = "" ;
   this.ZV15TransacaoPagRecId = "" ;
   this.OV15TransacaoPagRecId = "" ;
   this.AV16TransacaoPagRecDescricao = "" ;
   this.ZV16TransacaoPagRecDescricao = "" ;
   this.OV16TransacaoPagRecDescricao = "" ;
   this.AV21TipoLancamentoPagRecId = 0 ;
   this.ZV21TipoLancamentoPagRecId = 0 ;
   this.OV21TipoLancamentoPagRecId = 0 ;
   this.AV17TipoLancamentoPagRecDescricao = "" ;
   this.ZV17TipoLancamentoPagRecDescricao = "" ;
   this.OV17TipoLancamentoPagRecDescricao = "" ;
   this.AV23TipoLancamentoPagRecEmpresaId = "" ;
   this.ZV23TipoLancamentoPagRecEmpresaId = "" ;
   this.OV23TipoLancamentoPagRecEmpresaId = "" ;
   this.AV22TipoContaPagRecId = 0 ;
   this.ZV22TipoContaPagRecId = 0 ;
   this.OV22TipoContaPagRecId = 0 ;
   this.AV18TipoContaPagRecDescricao = "" ;
   this.ZV18TipoContaPagRecDescricao = "" ;
   this.OV18TipoContaPagRecDescricao = "" ;
   this.AV24TipoContaPagRecEmpresaId = "" ;
   this.ZV24TipoContaPagRecEmpresaId = "" ;
   this.OV24TipoContaPagRecEmpresaId = "" ;
   this.Z1266TransacaoPagRecId = "" ;
   this.O1266TransacaoPagRecId = "" ;
   this.Z1204TransacaoPagRecDescricao = "" ;
   this.O1204TransacaoPagRecDescricao = "" ;
   this.Z1151TipoLancamentoPagRecDescricao = "" ;
   this.O1151TipoLancamentoPagRecDescricao = "" ;
   this.Z1216TipoContaPagRecDescricao = "" ;
   this.O1216TipoContaPagRecDescricao = "" ;
   this.Z1212TransacaoPagRecEmpresaId = "" ;
   this.O1212TransacaoPagRecEmpresaId = "" ;
   this.Z1175TransacaoPagRecTipo = "" ;
   this.O1175TransacaoPagRecTipo = "" ;
   this.AV30Pagina = 0 ;
   this.ZV30Pagina = 0 ;
   this.OV30Pagina = 0 ;
   this.AV31PaginaAux = 0 ;
   this.ZV31PaginaAux = 0 ;
   this.OV31PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20TransacaoPagRecTipo = "" ;
   this.AV15TransacaoPagRecId = "" ;
   this.AV16TransacaoPagRecDescricao = "" ;
   this.AV21TipoLancamentoPagRecId = 0 ;
   this.AV17TipoLancamentoPagRecDescricao = "" ;
   this.AV23TipoLancamentoPagRecEmpresaId = "" ;
   this.AV22TipoContaPagRecId = 0 ;
   this.AV18TipoContaPagRecDescricao = "" ;
   this.AV24TipoContaPagRecEmpresaId = "" ;
   this.AV30Pagina = 0 ;
   this.AV31PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19PTransacaoPagRecId = "" ;
   this.A1230TipoContaPagRecId = 0 ;
   this.A1217TipoLancamentoPagRecId = 0 ;
   this.A1163TipoLancamentoPagRecEmpresaId = "" ;
   this.A1224TipoContaPagRecEmpresaId = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1204TransacaoPagRecDescricao = "" ;
   this.A1151TipoLancamentoPagRecDescricao = "" ;
   this.A1216TipoContaPagRecDescricao = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17922_client": ["ENTER", true] ,"e11922_client": ["'GXM_FIRST'", true] ,"e12922_client": ["'GXM_PREVIOUS'", true] ,"e13922_client": ["'GXM_NEXT'", true] ,"e14922_client": ["'GXM_LAST'", true] ,"e15922_client": ["'PROCURAR'", true] ,"e19922_client": ["'ATUALIZAPAGINA'", true] ,"e21921_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRANSACAOPAGRECID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOPAGRECID","Title")',ctrl:'TRANSACAOPAGRECID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOPAGRECDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOPAGRECDESCRICAO","Title")',ctrl:'TRANSACAOPAGRECDESCRICAO',prop:'Title'},{ctrl:'TIPOLANCAMENTOPAGRECDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTOPAGRECDESCRICAO","Title")',ctrl:'TIPOLANCAMENTOPAGRECDESCRICAO',prop:'Title'},{ctrl:'TIPOCONTAPAGRECDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCONTAPAGRECDESCRICAO","Title")',ctrl:'TIPOCONTAPAGRECDESCRICAO',prop:'Title'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV30Pagina',fld:'vPAGINA'},{av:'AV29NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'}],[{av:'AV19PTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true},{av:'AV30Pagina',fld:'vPAGINA'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true},{av:'AV30Pagina',fld:'vPAGINA'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true},{av:'AV31PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true},{av:'AV17TipoLancamentoPagRecDescricao',fld:'vTIPOLANCAMENTOPAGRECDESCRICAO'},{av:'AV18TipoContaPagRecDescricao',fld:'vTIPOCONTAPAGRECDESCRICAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV21TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV22TipoContaPagRecId',fld:'vTIPOCONTAPAGRECID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true}],[]];
   this.setPrompt("PROMPT_TIPOLANCAMENTOPAGRECID", [28]);
   this.setPrompt("PROMPT_TIPOCONTAPAGRECID", [35]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19PTransacaoPagRecId", "vPTRANSACAOPAGRECID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatransacaopagrec());
