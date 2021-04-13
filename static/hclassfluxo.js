/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:21.96
*/
gx.evt.autoSkip = false;
gx.define('hclassfluxo', false, function () {
   this.ServerClass =  "hclassfluxo" ;
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
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV36TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
   };
   this.e11m12_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12m12_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16m12_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13m12_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14m12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15m12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21m12_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22m12_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23m12_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e25m12_client=function()
   {
      this.executeServerEvent("'SELECAO'", true, arguments[0], false, false);
   };
   this.e17m12_client=function()
   {
      this.executeServerEvent("'REGISTRARPADRAO'", true, null, false, false);
   };
   this.e26m12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e18m12_client=function()
   {
      this.executeServerEvent("'COPIARTIPOFLUXO'", true, null, false, false);
   };
   this.e27m12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28m12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,32,34,39,42,45,47,49,51,53,55,57,60,62,63,67,68,69,70,71,72,73,74,75,76,77,78,79,80,87,88];
   this.GXLastCtrlId =88;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hclassfluxo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3288,67,"CLASSFLUXOID","","","ClassFluxoId","svchar",0,"px",10,10,"left",null,[],3288,"ClassFluxoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3289,68,"CLASSFLUXODESCRICAO","Descrição","","ClassFluxoDescricao","svchar",0,"px",60,60,"left",null,[],3289,"ClassFluxoDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Classfluxodescricaogrid",69,"vCLASSFLUXODESCRICAOGRID","","","ClassFluxoDescricaoGrid","svchar",0,"px",60,60,"left",null,[],"Classfluxodescricaogrid","ClassFluxoDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipodetalhe",70,"vTIPODETALHE","Tipo Detalhe","","TipoDetalhe","char",0,"px",20,20,"left",null,[],"Tipodetalhe","TipoDetalhe",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3281,71,"CLASSFLUXOTPDETALHE","","ClassFluxoTpDetalhe","char",null,0,false,false,0,"px","");
   GridContainer.addComboBox(3285,72,"CLASSFLUXOENTRADASAIDA","","ClassFluxoEntradaSaida","char",null,0,true,false,0,"px","");
   GridContainer.addCheckBox(3284,73,"CLASSFLUXOSNESTORNO","Estorno","","ClassFluxoSnEstorno","char","S","N",null,false,false,0,"px","");
   GridContainer.addSingleLineEdit("Snestorno",74,"vSNESTORNO","Estorno","","SnEstorno","char",0,"px",3,3,"left",null,[],"Snestorno","SnEstorno",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3282,75,"CLASSFLUXOTPIMPRESSAO","","ClassFluxoTpImpressao","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(3283,76,"CLASSFLUXOTPFLUXO","","ClassFluxoTpFluxo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpselecao","vBMPSELECAO",77,0,"px",17,"px","e25m12_client","","Seleção","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",78,0,"px",17,"px","e21m12_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",79,0,"px",17,"px","e22m12_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",80,0,"px",17,"px","e23m12_client","","Con","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXT2", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE3",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOID",gxz:"ZV37TipoClassFluxoId",gxold:"OV37TipoClassFluxoId",gxvar:"AV37TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV37TipoClassFluxoId,0)},c2v:function(){gx.O.AV37TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV38TipoClassFluxoDescricao",gxold:"OV38TipoClassFluxoDescricao",gxvar:"AV38TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV38TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV38TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV38TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOID",gxz:"ZV27ClassFluxoId",gxold:"OV27ClassFluxoId",gxvar:"AV27ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassFluxoId=Value},v2z:function(Value){gx.O.ZV27ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOID",gx.O.AV27ClassFluxoId,0)},c2v:function(){gx.O.AV27ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV28ClassFluxoDescricao",gxold:"OV28ClassFluxoDescricao",gxvar:"AV28ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV28ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV28ClassFluxoDescricao,0)},c2v:function(){gx.O.AV28ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[45]={fld:"IMAGE2",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNHELP",grid:0};
   GXValidFnc[53]={fld:"IMAGE3",grid:0};
   GXValidFnc[55]={fld:"IMAGE4",grid:0};
   GXValidFnc[57]={fld:"TABLE5",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOID",row || gx.fn.currentGridRowImpl(66),gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOID",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXODESCRICAO",gxz:"Z3289ClassFluxoDescricao",gxold:"O3289ClassFluxoDescricao",gxvar:"A3289ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3289ClassFluxoDescricao=Value},v2z:function(Value){gx.O.Z3289ClassFluxoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXODESCRICAO",row || gx.fn.currentGridRowImpl(66),gx.O.A3289ClassFluxoDescricao,0)},c2v:function(){gx.O.A3289ClassFluxoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXODESCRICAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAOGRID",gxz:"ZV30ClassFluxoDescricaoGrid",gxold:"OV30ClassFluxoDescricaoGrid",gxvar:"AV30ClassFluxoDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30ClassFluxoDescricaoGrid=Value},v2z:function(Value){gx.O.ZV30ClassFluxoDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCLASSFLUXODESCRICAOGRID",row || gx.fn.currentGridRowImpl(66),gx.O.AV30ClassFluxoDescricaoGrid,0)},c2v:function(){gx.O.AV30ClassFluxoDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSFLUXODESCRICAOGRID",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODETALHE",gxz:"ZV39TipoDetalhe",gxold:"OV39TipoDetalhe",gxvar:"AV39TipoDetalhe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV39TipoDetalhe=Value},v2z:function(Value){gx.O.ZV39TipoDetalhe=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPODETALHE",row || gx.fn.currentGridRowImpl(66),gx.O.AV39TipoDetalhe,0)},c2v:function(){gx.O.AV39TipoDetalhe=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPODETALHE",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOTPDETALHE",gxz:"Z3281ClassFluxoTpDetalhe",gxold:"O3281ClassFluxoTpDetalhe",gxvar:"A3281ClassFluxoTpDetalhe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3281ClassFluxoTpDetalhe=Value},v2z:function(Value){gx.O.Z3281ClassFluxoTpDetalhe=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CLASSFLUXOTPDETALHE",row || gx.fn.currentGridRowImpl(66),gx.O.A3281ClassFluxoTpDetalhe)},c2v:function(){gx.O.A3281ClassFluxoTpDetalhe=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOTPDETALHE",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOENTRADASAIDA",gxz:"Z3285ClassFluxoEntradaSaida",gxold:"O3285ClassFluxoEntradaSaida",gxvar:"A3285ClassFluxoEntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3285ClassFluxoEntradaSaida=Value},v2z:function(Value){gx.O.Z3285ClassFluxoEntradaSaida=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CLASSFLUXOENTRADASAIDA",row || gx.fn.currentGridRowImpl(66),gx.O.A3285ClassFluxoEntradaSaida)},c2v:function(){gx.O.A3285ClassFluxoEntradaSaida=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOENTRADASAIDA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSNESTORNO",gxz:"Z3284ClassFluxoSnEstorno",gxold:"O3284ClassFluxoSnEstorno",gxvar:"A3284ClassFluxoSnEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A3284ClassFluxoSnEstorno=Value},v2z:function(Value){gx.O.Z3284ClassFluxoSnEstorno=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CLASSFLUXOSNESTORNO",row || gx.fn.currentGridRowImpl(66),gx.O.A3284ClassFluxoSnEstorno,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3284ClassFluxoSnEstorno=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOSNESTORNO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[74]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNESTORNO",gxz:"ZV33SnEstorno",gxold:"OV33SnEstorno",gxvar:"AV33SnEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33SnEstorno=Value},v2z:function(Value){gx.O.ZV33SnEstorno=Value},v2c:function(row){gx.fn.setGridControlValue("vSNESTORNO",row || gx.fn.currentGridRowImpl(66),gx.O.AV33SnEstorno,0)},c2v:function(){gx.O.AV33SnEstorno=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNESTORNO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOTPIMPRESSAO",gxz:"Z3282ClassFluxoTpImpressao",gxold:"O3282ClassFluxoTpImpressao",gxvar:"A3282ClassFluxoTpImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3282ClassFluxoTpImpressao=Value},v2z:function(Value){gx.O.Z3282ClassFluxoTpImpressao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CLASSFLUXOTPIMPRESSAO",row || gx.fn.currentGridRowImpl(66),gx.O.A3282ClassFluxoTpImpressao)},c2v:function(){gx.O.A3282ClassFluxoTpImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOTPIMPRESSAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOTPFLUXO",gxz:"Z3283ClassFluxoTpFluxo",gxold:"O3283ClassFluxoTpFluxo",gxvar:"A3283ClassFluxoTpFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3283ClassFluxoTpFluxo=Value},v2z:function(Value){gx.O.Z3283ClassFluxoTpFluxo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CLASSFLUXOTPFLUXO",row || gx.fn.currentGridRowImpl(66),gx.O.A3283ClassFluxoTpFluxo)},c2v:function(){gx.O.A3283ClassFluxoTpFluxo=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOTPFLUXO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSELECAO",gxz:"ZV34bmpSelecao",gxold:"OV34bmpSelecao",gxvar:"AV34bmpSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpSelecao=Value},v2z:function(Value){gx.O.ZV34bmpSelecao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSELECAO",row || gx.fn.currentGridRowImpl(66),gx.O.AV34bmpSelecao,gx.O.AV47Bmpselecao_GXI)},c2v:function(){gx.O.AV47Bmpselecao_GXI=this.val_GXI();gx.O.AV34bmpSelecao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSELECAO",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSELECAO_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV47Bmpselecao_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(66),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(66),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(66),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV37TipoClassFluxoId = 0 ;
   this.ZV37TipoClassFluxoId = 0 ;
   this.OV37TipoClassFluxoId = 0 ;
   this.AV38TipoClassFluxoDescricao = "" ;
   this.ZV38TipoClassFluxoDescricao = "" ;
   this.OV38TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.ZV27ClassFluxoId = "" ;
   this.OV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.ZV28ClassFluxoDescricao = "" ;
   this.OV28ClassFluxoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.Z3289ClassFluxoDescricao = "" ;
   this.O3289ClassFluxoDescricao = "" ;
   this.ZV30ClassFluxoDescricaoGrid = "" ;
   this.OV30ClassFluxoDescricaoGrid = "" ;
   this.ZV39TipoDetalhe = "" ;
   this.OV39TipoDetalhe = "" ;
   this.Z3281ClassFluxoTpDetalhe = "" ;
   this.O3281ClassFluxoTpDetalhe = "" ;
   this.Z3285ClassFluxoEntradaSaida = "" ;
   this.O3285ClassFluxoEntradaSaida = "" ;
   this.Z3284ClassFluxoSnEstorno = "" ;
   this.O3284ClassFluxoSnEstorno = "" ;
   this.ZV33SnEstorno = "" ;
   this.OV33SnEstorno = "" ;
   this.Z3282ClassFluxoTpImpressao = "" ;
   this.O3282ClassFluxoTpImpressao = "" ;
   this.Z3283ClassFluxoTpFluxo = "" ;
   this.O3283ClassFluxoTpFluxo = "" ;
   this.ZV34bmpSelecao = "" ;
   this.OV34bmpSelecao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV37TipoClassFluxoId = 0 ;
   this.AV38TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV36TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A3288ClassFluxoId = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.AV30ClassFluxoDescricaoGrid = "" ;
   this.AV39TipoDetalhe = "" ;
   this.A3281ClassFluxoTpDetalhe = "" ;
   this.A3285ClassFluxoEntradaSaida = "" ;
   this.A3284ClassFluxoSnEstorno = "" ;
   this.AV33SnEstorno = "" ;
   this.A3282ClassFluxoTpImpressao = "" ;
   this.A3283ClassFluxoTpFluxo = "" ;
   this.AV34bmpSelecao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.Events = {"e11m12_client": ["'ANTERIOR'", true] ,"e12m12_client": ["'PROXIMO'", true] ,"e16m12_client": ["VPAGINA.CLICK", true] ,"e13m12_client": ["'NOVO'", true] ,"e14m12_client": ["'FECHAR'", true] ,"e15m12_client": ["'PROCURAR'", true] ,"e21m12_client": ["'ALTERAR'", true] ,"e22m12_client": ["'EXCLUIR'", true] ,"e23m12_client": ["'CONSULTAR'", true] ,"e25m12_client": ["'SELECAO'", true] ,"e17m12_client": ["'REGISTRARPADRAO'", true] ,"e26m12_client": ["'ATUALIZAPAGINA'", true] ,"e18m12_client": ["'COPIARTIPOFLUXO'", true] ,"e27m12_client": ["ENTER", true] ,"e28m12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'}],[{ctrl:'CLASSFLUXOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOID","Title")',ctrl:'CLASSFLUXOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vCLASSFLUXODESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCLASSFLUXODESCRICAOGRID","Title")',ctrl:'vCLASSFLUXODESCRICAOGRID',prop:'Title'},{ctrl:'CLASSFLUXOTPDETALHE'},{ctrl:'CLASSFLUXOENTRADASAIDA'},{ctrl:'CLASSFLUXOTPIMPRESSAO'},{ctrl:'CLASSFLUXOTPFLUXO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'}],[{av:'AV30ClassFluxoDescricaoGrid',fld:'vCLASSFLUXODESCRICAOGRID'},{av:'AV39TipoDetalhe',fld:'vTIPODETALHE'},{av:'AV33SnEstorno',fld:'vSNESTORNO'}]];
   this.EvtParms["'SELECAO'"] = [[{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'REGISTRARPADRAO'"] = [[{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'}],[]];
   this.EvtParms["'COPIARTIPOFLUXO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV28ClassFluxoDescricao',fld:'vCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3289ClassFluxoDescricao',fld:'CLASSFLUXODESCRICAO'},{av:'A3281ClassFluxoTpDetalhe',fld:'CLASSFLUXOTPDETALHE'},{av:'A3284ClassFluxoSnEstorno',fld:'CLASSFLUXOSNESTORNO'},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true},{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true}],[{av:'AV38TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO',hsh:true},{av:'AV37TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV36TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID',hsh:true}]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV36TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpSelecao", rfrProp:"Value", gxAttId:"Bmpselecao"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpSelecao", rfrProp:"Tooltiptext", gxAttId:"Bmpselecao"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3289ClassFluxoDescricao", rfrProp:"Value", gxAttId:"3289"});
   GridContainer.addRefreshingVar({rfrVar:"A3281ClassFluxoTpDetalhe", rfrProp:"Value", gxAttId:"3281"});
   GridContainer.addRefreshingVar({rfrVar:"A3284ClassFluxoSnEstorno", rfrProp:"Value", gxAttId:"3284"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassfluxo());
