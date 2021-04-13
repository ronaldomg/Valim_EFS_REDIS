/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:59.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultamontbarrasboleto', false, function () {
   this.ServerClass =  "hconsultamontbarrasboleto" ;
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
      this.AV18MontBarrasBoletoTipo=gx.fn.getControlValue("vMONTBARRASBOLETOTIPO") ;
      this.AV17MontBarrasBoletoIdOut=gx.fn.getIntegerValue("vMONTBARRASBOLETOIDOUT",'.') ;
   };
   this.e18j32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11j32_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12j32_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13j32_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14j32_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15j32_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19j32_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21j31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,21,22,23,24,25,26,27,33,36,38,40,42,44,45,46,47];
   this.GXLastCtrlId =47;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamontbarrasboleto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2820,19,"MONTBARRASBOLETOID","","","MontBarrasBoletoId","int",0,"px",4,4,"right",null,[],2820,"MontBarrasBoletoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2821,20,"MONTBARRASBOLETOTIPO","","MontBarrasBoletoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2823,21,"MONTBARRASBOLETOPESOINI","Peso Inicial","","MontBarrasBoletoPesoIni","int",0,"px",4,4,"right",null,[],2823,"MontBarrasBoletoPesoIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2824,22,"MONTBARRASBOLETOPESOFIN","Peso Final","","MontBarrasBoletoPesoFin","int",0,"px",4,4,"right",null,[],2824,"MontBarrasBoletoPesoFin",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2822,23,"MONTBARRASBOLETOBASE","Base","MontBarrasBoletoBase","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2825,24,"MONTBARRASBOLETORESTO0","Resto 0","","MontBarrasBoletoResto0","char",0,"px",1,1,"left",null,[],2825,"MontBarrasBoletoResto0",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2826,25,"MONTBARRASBOLETORESTO1","Resto 1","","MontBarrasBoletoResto1","char",0,"px",1,1,"left",null,[],2826,"MontBarrasBoletoResto1",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2828,26,"MONTBARRASBOLETOQTDEDIGSOMA","Qt Díg Mult","MontBarrasBoletoQtdeDigSoma","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2827,27,"MONTBARRASBOLETODTBASEFTVENC","Dt Base Vencmto","","MontBarrasBoletoDtBaseFtVenc","date",0,"px",10,10,"right",null,[],2827,"MontBarrasBoletoDtBaseFtVenc",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMONTBARRASBOLETOID",gxz:"ZV16MontBarrasBoletoId",gxold:"OV16MontBarrasBoletoId",gxvar:"AV16MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOID",gx.O.AV16MontBarrasBoletoId,0)},c2v:function(){gx.O.AV16MontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOID",gxz:"Z2820MontBarrasBoletoId",gxold:"O2820MontBarrasBoletoId",gxvar:"A2820MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2820MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2820MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(18),gx.O.A2820MontBarrasBoletoId,0)},c2v:function(){gx.O.A2820MontBarrasBoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOTIPO",gxz:"Z2821MontBarrasBoletoTipo",gxold:"O2821MontBarrasBoletoTipo",gxvar:"A2821MontBarrasBoletoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2821MontBarrasBoletoTipo=Value},v2z:function(Value){gx.O.Z2821MontBarrasBoletoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBARRASBOLETOTIPO",row || gx.fn.currentGridRowImpl(18),gx.O.A2821MontBarrasBoletoTipo)},c2v:function(){gx.O.A2821MontBarrasBoletoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOTIPO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOPESOINI",gxz:"Z2823MontBarrasBoletoPesoIni",gxold:"O2823MontBarrasBoletoPesoIni",gxvar:"A2823MontBarrasBoletoPesoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2823MontBarrasBoletoPesoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2823MontBarrasBoletoPesoIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOPESOINI",row || gx.fn.currentGridRowImpl(18),gx.O.A2823MontBarrasBoletoPesoIni,0)},c2v:function(){gx.O.A2823MontBarrasBoletoPesoIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOPESOINI",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOPESOFIN",gxz:"Z2824MontBarrasBoletoPesoFin",gxold:"O2824MontBarrasBoletoPesoFin",gxvar:"A2824MontBarrasBoletoPesoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2824MontBarrasBoletoPesoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2824MontBarrasBoletoPesoFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOPESOFIN",row || gx.fn.currentGridRowImpl(18),gx.O.A2824MontBarrasBoletoPesoFin,0)},c2v:function(){gx.O.A2824MontBarrasBoletoPesoFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOPESOFIN",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOBASE",gxz:"Z2822MontBarrasBoletoBase",gxold:"O2822MontBarrasBoletoBase",gxvar:"A2822MontBarrasBoletoBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2822MontBarrasBoletoBase=Value},v2z:function(Value){gx.O.Z2822MontBarrasBoletoBase=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBARRASBOLETOBASE",row || gx.fn.currentGridRowImpl(18),gx.O.A2822MontBarrasBoletoBase)},c2v:function(){gx.O.A2822MontBarrasBoletoBase=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOBASE",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO0",gxz:"Z2825MontBarrasBoletoResto0",gxold:"O2825MontBarrasBoletoResto0",gxvar:"A2825MontBarrasBoletoResto0",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2825MontBarrasBoletoResto0=Value},v2z:function(Value){gx.O.Z2825MontBarrasBoletoResto0=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETORESTO0",row || gx.fn.currentGridRowImpl(18),gx.O.A2825MontBarrasBoletoResto0,0)},c2v:function(){gx.O.A2825MontBarrasBoletoResto0=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETORESTO0",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO1",gxz:"Z2826MontBarrasBoletoResto1",gxold:"O2826MontBarrasBoletoResto1",gxvar:"A2826MontBarrasBoletoResto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2826MontBarrasBoletoResto1=Value},v2z:function(Value){gx.O.Z2826MontBarrasBoletoResto1=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETORESTO1",row || gx.fn.currentGridRowImpl(18),gx.O.A2826MontBarrasBoletoResto1,0)},c2v:function(){gx.O.A2826MontBarrasBoletoResto1=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETORESTO1",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOQTDEDIGSOMA",gxz:"Z2828MontBarrasBoletoQtdeDigSoma",gxold:"O2828MontBarrasBoletoQtdeDigSoma",gxvar:"A2828MontBarrasBoletoQtdeDigSoma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2828MontBarrasBoletoQtdeDigSoma=Value},v2z:function(Value){gx.O.Z2828MontBarrasBoletoQtdeDigSoma=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBARRASBOLETOQTDEDIGSOMA",row || gx.fn.currentGridRowImpl(18),gx.O.A2828MontBarrasBoletoQtdeDigSoma)},c2v:function(){gx.O.A2828MontBarrasBoletoQtdeDigSoma=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOQTDEDIGSOMA",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETODTBASEFTVENC",gxz:"Z2827MontBarrasBoletoDtBaseFtVenc",gxold:"O2827MontBarrasBoletoDtBaseFtVenc",gxvar:"A2827MontBarrasBoletoDtBaseFtVenc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETODTBASEFTVENC",row || gx.fn.currentGridRowImpl(18),gx.O.A2827MontBarrasBoletoDtBaseFtVenc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MONTBARRASBOLETODTBASEFTVENC",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[44]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16MontBarrasBoletoId = 0 ;
   this.ZV16MontBarrasBoletoId = 0 ;
   this.OV16MontBarrasBoletoId = 0 ;
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
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16MontBarrasBoletoId = 0 ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18MontBarrasBoletoTipo = "" ;
   this.AV17MontBarrasBoletoIdOut = 0 ;
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
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e18j32_client": ["ENTER", true] ,"e11j32_client": ["'GXM_FIRST'", true] ,"e12j32_client": ["'GXM_PREVIOUS'", true] ,"e13j32_client": ["'GXM_NEXT'", true] ,"e14j32_client": ["'GXM_LAST'", true] ,"e15j32_client": ["'PROCURAR'", true] ,"e19j32_client": ["'ATUALIZAPAGINA'", true] ,"e21j31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MONTBARRASBOLETOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MONTBARRASBOLETOID","Title")',ctrl:'MONTBARRASBOLETOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MONTBARRASBOLETOTIPO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'}],[{av:'AV17MontBarrasBoletoIdOut',fld:'vMONTBARRASBOLETOIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18MontBarrasBoletoTipo", "vMONTBARRASBOLETOTIPO", 0, "char");
   this.setVCMap("AV17MontBarrasBoletoIdOut", "vMONTBARRASBOLETOIDOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamontbarrasboleto());
