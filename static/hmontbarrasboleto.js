/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:44:5.1
*/
gx.evt.autoSkip = false;
gx.define('hmontbarrasboleto', false, function () {
   this.ServerClass =  "hmontbarrasboleto" ;
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
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11j62_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12j62_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16j62_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13j62_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14j62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15j62_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e21j62_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22j62_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23j62_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17j62_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e24j62_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25j62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26j62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,38,39,40,41,42,43,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmontbarrasboleto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2820,31,"MONTBARRASBOLETOID","","","MontBarrasBoletoId","int",0,"px",4,4,"right",null,[],2820,"MontBarrasBoletoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2821,32,"MONTBARRASBOLETOTIPO","","MontBarrasBoletoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2823,33,"MONTBARRASBOLETOPESOINI","Peso Inicial","","MontBarrasBoletoPesoIni","int",0,"px",4,4,"right",null,[],2823,"MontBarrasBoletoPesoIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2824,34,"MONTBARRASBOLETOPESOFIN","Peso Final","","MontBarrasBoletoPesoFin","int",0,"px",4,4,"right",null,[],2824,"MontBarrasBoletoPesoFin",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2822,35,"MONTBARRASBOLETOBASE","Base","MontBarrasBoletoBase","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2825,36,"MONTBARRASBOLETORESTO0","Resto 0","","MontBarrasBoletoResto0","char",0,"px",1,1,"left",null,[],2825,"MontBarrasBoletoResto0",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2826,37,"MONTBARRASBOLETORESTO1","Resto 1","","MontBarrasBoletoResto1","char",0,"px",1,1,"left",null,[],2826,"MontBarrasBoletoResto1",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2828,38,"MONTBARRASBOLETOQTDEDIGSOMA","Qt Díg Mult","MontBarrasBoletoQtdeDigSoma","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2827,39,"MONTBARRASBOLETODTBASEFTVENC","Dt Base Ftr Venc","","MontBarrasBoletoDtBaseFtVenc","date",0,"px",10,10,"right",null,[],2827,"MontBarrasBoletoDtBaseFtVenc",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpdet","vBMPDET",40,0,"px",17,"px",null,"","Detalhe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",41,0,"px",17,"px","e21j62_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",42,0,"px",17,"px","e22j62_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",43,0,"px",17,"px","e23j62_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"IMAGE3",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOID",gxz:"Z2820MontBarrasBoletoId",gxold:"O2820MontBarrasBoletoId",gxvar:"A2820MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2820MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2820MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(30),gx.O.A2820MontBarrasBoletoId,0)},c2v:function(){gx.O.A2820MontBarrasBoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOTIPO",gxz:"Z2821MontBarrasBoletoTipo",gxold:"O2821MontBarrasBoletoTipo",gxvar:"A2821MontBarrasBoletoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2821MontBarrasBoletoTipo=Value},v2z:function(Value){gx.O.Z2821MontBarrasBoletoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBARRASBOLETOTIPO",row || gx.fn.currentGridRowImpl(30),gx.O.A2821MontBarrasBoletoTipo)},c2v:function(){gx.O.A2821MontBarrasBoletoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOTIPO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOPESOINI",gxz:"Z2823MontBarrasBoletoPesoIni",gxold:"O2823MontBarrasBoletoPesoIni",gxvar:"A2823MontBarrasBoletoPesoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2823MontBarrasBoletoPesoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2823MontBarrasBoletoPesoIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOPESOINI",row || gx.fn.currentGridRowImpl(30),gx.O.A2823MontBarrasBoletoPesoIni,0)},c2v:function(){gx.O.A2823MontBarrasBoletoPesoIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOPESOINI",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOPESOFIN",gxz:"Z2824MontBarrasBoletoPesoFin",gxold:"O2824MontBarrasBoletoPesoFin",gxvar:"A2824MontBarrasBoletoPesoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2824MontBarrasBoletoPesoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2824MontBarrasBoletoPesoFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOPESOFIN",row || gx.fn.currentGridRowImpl(30),gx.O.A2824MontBarrasBoletoPesoFin,0)},c2v:function(){gx.O.A2824MontBarrasBoletoPesoFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOPESOFIN",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOBASE",gxz:"Z2822MontBarrasBoletoBase",gxold:"O2822MontBarrasBoletoBase",gxvar:"A2822MontBarrasBoletoBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2822MontBarrasBoletoBase=Value},v2z:function(Value){gx.O.Z2822MontBarrasBoletoBase=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBARRASBOLETOBASE",row || gx.fn.currentGridRowImpl(30),gx.O.A2822MontBarrasBoletoBase)},c2v:function(){gx.O.A2822MontBarrasBoletoBase=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOBASE",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO0",gxz:"Z2825MontBarrasBoletoResto0",gxold:"O2825MontBarrasBoletoResto0",gxvar:"A2825MontBarrasBoletoResto0",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2825MontBarrasBoletoResto0=Value},v2z:function(Value){gx.O.Z2825MontBarrasBoletoResto0=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETORESTO0",row || gx.fn.currentGridRowImpl(30),gx.O.A2825MontBarrasBoletoResto0,0)},c2v:function(){gx.O.A2825MontBarrasBoletoResto0=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETORESTO0",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO1",gxz:"Z2826MontBarrasBoletoResto1",gxold:"O2826MontBarrasBoletoResto1",gxvar:"A2826MontBarrasBoletoResto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2826MontBarrasBoletoResto1=Value},v2z:function(Value){gx.O.Z2826MontBarrasBoletoResto1=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETORESTO1",row || gx.fn.currentGridRowImpl(30),gx.O.A2826MontBarrasBoletoResto1,0)},c2v:function(){gx.O.A2826MontBarrasBoletoResto1=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETORESTO1",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOQTDEDIGSOMA",gxz:"Z2828MontBarrasBoletoQtdeDigSoma",gxold:"O2828MontBarrasBoletoQtdeDigSoma",gxvar:"A2828MontBarrasBoletoQtdeDigSoma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2828MontBarrasBoletoQtdeDigSoma=Value},v2z:function(Value){gx.O.Z2828MontBarrasBoletoQtdeDigSoma=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBARRASBOLETOQTDEDIGSOMA",row || gx.fn.currentGridRowImpl(30),gx.O.A2828MontBarrasBoletoQtdeDigSoma)},c2v:function(){gx.O.A2828MontBarrasBoletoQtdeDigSoma=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOQTDEDIGSOMA",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETODTBASEFTVENC",gxz:"Z2827MontBarrasBoletoDtBaseFtVenc",gxold:"O2827MontBarrasBoletoDtBaseFtVenc",gxvar:"A2827MontBarrasBoletoDtBaseFtVenc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETODTBASEFTVENC",row || gx.fn.currentGridRowImpl(30),gx.O.A2827MontBarrasBoletoDtBaseFtVenc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MONTBARRASBOLETODTBASEFTVENC",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV27bmpDet",gxold:"OV27bmpDet",gxvar:"AV27bmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpDet=Value},v2z:function(Value){gx.O.ZV27bmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(30),gx.O.AV27bmpDet,gx.O.AV36Bmpdet_GXI)},c2v:function(){gx.O.AV36Bmpdet_GXI=this.val_GXI();gx.O.AV27bmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV36Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV35Bmpcon_GXI)},c2v:function(){gx.O.AV35Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV35Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2820MontBarrasBoletoId = 0 ;
   this.O2820MontBarrasBoletoId = 0 ;
   this.Z2821MontBarrasBoletoTipo = "" ;
   this.O2821MontBarrasBoletoTipo = "" ;
   this.Z2823MontBarrasBoletoPesoIni = 0 ;
   this.O2823MontBarrasBoletoPesoIni = 0 ;
   this.Z2824MontBarrasBoletoPesoFin = 0 ;
   this.O2824MontBarrasBoletoPesoFin = 0 ;
   this.Z2822MontBarrasBoletoBase = "" ;
   this.O2822MontBarrasBoletoBase = "" ;
   this.Z2825MontBarrasBoletoResto0 = "" ;
   this.O2825MontBarrasBoletoResto0 = "" ;
   this.Z2826MontBarrasBoletoResto1 = "" ;
   this.O2826MontBarrasBoletoResto1 = "" ;
   this.Z2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.O2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.Z2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.O2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.ZV27bmpDet = "" ;
   this.OV27bmpDet = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2821MontBarrasBoletoTipo = "" ;
   this.A2823MontBarrasBoletoPesoIni = 0 ;
   this.A2824MontBarrasBoletoPesoFin = 0 ;
   this.A2822MontBarrasBoletoBase = "" ;
   this.A2825MontBarrasBoletoResto0 = "" ;
   this.A2826MontBarrasBoletoResto1 = "" ;
   this.A2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.A2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.AV27bmpDet = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e11j62_client": ["'ANTERIOR'", true] ,"e12j62_client": ["'PROXIMO'", true] ,"e16j62_client": ["VPAGINA.CLICK", true] ,"e13j62_client": ["'NOVO'", true] ,"e14j62_client": ["'FECHAR'", true] ,"e15j62_client": ["'PROCURAR'", true] ,"e21j62_client": ["'ALTERAR'", true] ,"e22j62_client": ["'EXCLUIR'", true] ,"e23j62_client": ["'CONSULTAR'", true] ,"e17j62_client": ["'COPIAR'", true] ,"e24j62_client": ["'ATUALIZAPAGINA'", true] ,"e25j62_client": ["ENTER", true] ,"e26j62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'}],[{av:'AV27bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDET","Link")',ctrl:'vBMPDET',prop:'Link'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'}],[{ctrl:'MONTBARRASBOLETOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MONTBARRASBOLETOID","Title")',ctrl:'MONTBARRASBOLETOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MONTBARRASBOLETOTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2821MontBarrasBoletoTipo',fld:'MONTBARRASBOLETOTIPO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2820MontBarrasBoletoId", rfrProp:"Value", gxAttId:"2820"});
   GridContainer.addRefreshingVar({rfrVar:"A2821MontBarrasBoletoTipo", rfrProp:"Value", gxAttId:"2821"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmontbarrasboleto());
