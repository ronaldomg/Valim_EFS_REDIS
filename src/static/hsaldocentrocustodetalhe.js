/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:7.52
*/
gx.evt.autoSkip = false;
gx.define('hsaldocentrocustodetalhe', false, function () {
   this.ServerClass =  "hsaldocentrocustodetalhe" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV58CentroCusto=gx.fn.getControlValue("vCENTROCUSTO") ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV54CentroCustoIni=gx.fn.getControlValue("vCENTROCUSTOINI") ;
      this.AV55CentroCustoFin=gx.fn.getControlValue("vCENTROCUSTOFIN") ;
      this.AV56Tradutor=gx.fn.getControlValue("vTRADUTOR") ;
   };
   this.s132_client=function()
   {
      if ( this.AV58CentroCusto.length > 0 )
      {
         this.AV64QtdePag = gx.num.trunc( this.AV58CentroCusto.length / 10 ,0) ;
         if ( gx.num.mod(this.AV58CentroCusto.length, 10) != 0 )
         {
            this.AV64QtdePag = gx.num.trunc( this.AV64QtdePag + 1 ,0) ;
         }
         if ( this.AV64QtdePag == 0 )
         {
            this.AV64QtdePag = gx.num.trunc( 1 ,0) ;
         }
      }
      else
      {
         this.AV64QtdePag = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e116a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e126a2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e136a2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e176a2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e186a2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,26,28,30,32,37,39,42,44,46,51,53,54,62,63,64,65,66,67,68,69,75,78,80,82,83,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaldocentrocustodetalhe",[],false,1,true,true,0,false,false,false,"CollSaldoCCusto.SaldoCCustoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV58CentroCusto",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLCENTROCUSTOID","Centro de Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],"GXV11Q","GXV11Q",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11R",63,"CTLCENTROCUSTODESCRICAO","Descrição","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],"GXV11R","GXV11R",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11S",64,"CTLSALDOCENTROCUSTOANTERIOR","Saldo Anterior","","SaldoCentroCustoAnterior","decimal",0,"px",18,18,"right",null,[],"GXV11S","GXV11S",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tiposaldoanterior",65,"vTIPOSALDOANTERIOR","D/C","","TipoSaldoAnterior","char",0,"px",1,1,"left",null,[],"Tiposaldoanterior","TipoSaldoAnterior",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11U",66,"CTLSALDOCENTROCUSTOTOTALDEBITO","Total Débito","","SaldoCentroCustoTotalDebito","decimal",0,"px",18,18,"right",null,[],"GXV11U","GXV11U",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLSALDOCENTROCUSTOTOTALCREDIT","Total Crédito","","SaldoCentroCustoTotalCredito","decimal",0,"px",18,18,"right",null,[],"GXV11V","GXV11V",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLSALDOCENTROCUSTOSALDOATUAL","Saldo Atual","","SaldoCentroCustoSaldoAtual","decimal",0,"px",18,18,"right",null,[],"GXV11W","GXV11W",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tiposaldoatual",69,"vTIPOSALDOATUAL","D/C","","TipoSaldoAtual","char",0,"px",1,1,"left",null,[],"Tiposaldoatual","TipoSaldoAtual",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV44MesIni",gxold:"OV44MesIni",gxvar:"AV44MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV44MesIni,0)},c2v:function(){gx.O.AV44MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV45AnoIni",gxold:"OV45AnoIni",gxvar:"AV45AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV45AnoIni,0)},c2v:function(){gx.O.AV45AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV46MesFin",gxold:"OV46MesFin",gxvar:"AV46MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV46MesFin,0)},c2v:function(){gx.O.AV46MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV47AnoFin",gxold:"OV47AnoFin",gxvar:"AV47AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV47AnoFin,0)},c2v:function(){gx.O.AV47AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE7",grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV48ContaContabilId",gxold:"OV48ContaContabilId",gxvar:"AV48ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ContaContabilId=Value},v2z:function(Value){gx.O.ZV48ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV48ContaContabilId,0)},c2v:function(){gx.O.AV48ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV49ContaContabilNome",gxold:"OV49ContaContabilNome",gxvar:"AV49ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaContabilNome=Value},v2z:function(Value){gx.O.ZV49ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV49ContaContabilNome,0)},c2v:function(){gx.O.AV49ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDODACONTA",gxz:"ZV50SaldoDaConta",gxold:"OV50SaldoDaConta",gxvar:"AV50SaldoDaConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SaldoDaConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV50SaldoDaConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDODACONTA",gx.O.AV50SaldoDaConta,2,',')},c2v:function(){gx.O.AV50SaldoDaConta=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDODACONTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDO",gxz:"ZV51TipoSaldo",gxold:"OV51TipoSaldo",gxvar:"AV51TipoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TipoSaldo=Value},v2z:function(Value){gx.O.ZV51TipoSaldo=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDO",gx.O.AV51TipoSaldo,0)},c2v:function(){gx.O.AV51TipoSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDO")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTOID",gxz:"ZV69GXV11Q",gxold:"OV69GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Q=Value},v2z:function(Value){gx.O.ZV69GXV11Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTOID",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTOID",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTODESCRICAO",gxz:"ZV70GXV11R",gxold:"OV70GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV70GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDOCENTROCUSTOANTERIOR",gxz:"ZV71GXV11S",gxold:"OV71GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11S=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71GXV11S=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLSALDOCENTROCUSTOANTERIOR",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11S,2,',')},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLSALDOCENTROCUSTOANTERIOR",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDOANTERIOR",gxz:"ZV52TipoSaldoAnterior",gxold:"OV52TipoSaldoAnterior",gxvar:"AV52TipoSaldoAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV52TipoSaldoAnterior=Value},v2z:function(Value){gx.O.ZV52TipoSaldoAnterior=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(61),gx.O.AV52TipoSaldoAnterior,0)},c2v:function(){gx.O.AV52TipoSaldoAnterior=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDOCENTROCUSTOTOTALDEBITO",gxz:"ZV72GXV11U",gxold:"OV72GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11U=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72GXV11U=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLSALDOCENTROCUSTOTOTALDEBITO",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11U,2,',')},c2v:function(){gx.O.GXV11U=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLSALDOCENTROCUSTOTOTALDEBITO",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDOCENTROCUSTOTOTALCREDIT",gxz:"ZV73GXV11V",gxold:"OV73GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11V=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV73GXV11V=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLSALDOCENTROCUSTOTOTALCREDIT",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11V,2,',')},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLSALDOCENTROCUSTOTOTALCREDIT",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDOCENTROCUSTOSALDOATUAL",gxz:"ZV74GXV11W",gxold:"OV74GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11W=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74GXV11W=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLSALDOCENTROCUSTOSALDOATUAL",row || gx.fn.currentGridRowImpl(61),gx.O.GXV11W,2,',')},c2v:function(){gx.O.GXV11W=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLSALDOCENTROCUSTOSALDOATUAL",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDOATUAL",gxz:"ZV53TipoSaldoAtual",gxold:"OV53TipoSaldoAtual",gxvar:"AV53TipoSaldoAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV53TipoSaldoAtual=Value},v2z:function(Value){gx.O.ZV53TipoSaldoAtual=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(61),gx.O.AV53TipoSaldoAtual,0)},c2v:function(){gx.O.AV53TipoSaldoAtual=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TABLE6",grid:0};
   GXValidFnc[78]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[80]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[82]={fld:"IMAGE5",grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV64QtdePag",gxold:"OV64QtdePag",gxvar:"AV64QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV64QtdePag,0)},c2v:function(){gx.O.AV64QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   this.AV44MesIni = 0 ;
   this.ZV44MesIni = 0 ;
   this.OV44MesIni = 0 ;
   this.AV45AnoIni = 0 ;
   this.ZV45AnoIni = 0 ;
   this.OV45AnoIni = 0 ;
   this.AV46MesFin = 0 ;
   this.ZV46MesFin = 0 ;
   this.OV46MesFin = 0 ;
   this.AV47AnoFin = 0 ;
   this.ZV47AnoFin = 0 ;
   this.OV47AnoFin = 0 ;
   this.AV48ContaContabilId = "" ;
   this.ZV48ContaContabilId = "" ;
   this.OV48ContaContabilId = "" ;
   this.AV49ContaContabilNome = "" ;
   this.ZV49ContaContabilNome = "" ;
   this.OV49ContaContabilNome = "" ;
   this.AV50SaldoDaConta = 0 ;
   this.ZV50SaldoDaConta = 0 ;
   this.OV50SaldoDaConta = 0 ;
   this.AV51TipoSaldo = "" ;
   this.ZV51TipoSaldo = "" ;
   this.OV51TipoSaldo = "" ;
   this.ZV69GXV11Q = "" ;
   this.OV69GXV11Q = "" ;
   this.ZV70GXV11R = "" ;
   this.OV70GXV11R = "" ;
   this.ZV71GXV11S = 0 ;
   this.OV71GXV11S = 0 ;
   this.ZV52TipoSaldoAnterior = "" ;
   this.OV52TipoSaldoAnterior = "" ;
   this.ZV72GXV11U = 0 ;
   this.OV72GXV11U = 0 ;
   this.ZV73GXV11V = 0 ;
   this.OV73GXV11V = 0 ;
   this.ZV74GXV11W = 0 ;
   this.OV74GXV11W = 0 ;
   this.ZV53TipoSaldoAtual = "" ;
   this.OV53TipoSaldoAtual = "" ;
   this.AV64QtdePag = 0 ;
   this.ZV64QtdePag = 0 ;
   this.OV64QtdePag = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV44MesIni = 0 ;
   this.AV45AnoIni = 0 ;
   this.AV46MesFin = 0 ;
   this.AV47AnoFin = 0 ;
   this.AV48ContaContabilId = "" ;
   this.AV49ContaContabilNome = "" ;
   this.AV50SaldoDaConta = 0 ;
   this.AV51TipoSaldo = "" ;
   this.AV64QtdePag = 0 ;
   this.AV5Pagina = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.AV54CentroCustoIni = "" ;
   this.AV55CentroCustoFin = "" ;
   this.AV56Tradutor = "" ;
   this.GXV11Q = "" ;
   this.GXV11R = "" ;
   this.GXV11S = 0 ;
   this.AV52TipoSaldoAnterior = "" ;
   this.GXV11U = 0 ;
   this.GXV11V = 0 ;
   this.GXV11W = 0 ;
   this.AV53TipoSaldoAtual = "" ;
   this.AV58CentroCusto = [ ] ;
   this.Events = {"e116a2_client": ["'FECHAR'", true] ,"e126a2_client": ["'ANTERIOR'", true] ,"e136a2_client": ["'PROXIMO'", true] ,"e176a2_client": ["ENTER", true] ,"e186a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV64QtdePag',fld:'vQTDEPAG'},{av:'AV58CentroCusto',fld:'vCENTROCUSTO',grid:61}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV64QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV56Tradutor',fld:'vTRADUTOR'},{av:'AV55CentroCustoFin',fld:'vCENTROCUSTOFIN'},{av:'AV54CentroCustoIni',fld:'vCENTROCUSTOINI'},{av:'AV51TipoSaldo',fld:'vTIPOSALDO'},{av:'AV50SaldoDaConta',fld:'vSALDODACONTA'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV48ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV47AnoFin',fld:'vANOFIN'},{av:'AV46MesFin',fld:'vMESFIN'},{av:'AV45AnoIni',fld:'vANOINI'},{av:'AV44MesIni',fld:'vMESINI'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV58CentroCusto',fld:'vCENTROCUSTO',grid:61},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV64QtdePag',fld:'vQTDEPAG'}],[{av:'AV52TipoSaldoAnterior',fld:'vTIPOSALDOANTERIOR'},{av:'AV53TipoSaldoAtual',fld:'vTIPOSALDOATUAL'},{av:'AV58CentroCusto',fld:'vCENTROCUSTO',grid:61}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV64QtdePag',fld:'vQTDEPAG'},{av:'AV58CentroCusto',fld:'vCENTROCUSTO',grid:61}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV64QtdePag',fld:'vQTDEPAG'},{av:'AV58CentroCusto',fld:'vCENTROCUSTO',grid:61}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV64QtdePag',fld:'vQTDEPAG'}]];
   this.setVCMap("AV58CentroCusto", "vCENTROCUSTO", 0, "CollSaldoCCusto.SaldoCCustoItem");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV54CentroCustoIni", "vCENTROCUSTOINI", 0, "svchar");
   this.setVCMap("AV55CentroCustoFin", "vCENTROCUSTOFIN", 0, "svchar");
   this.setVCMap("AV56Tradutor", "vTRADUTOR", 0, "char");
   this.setVCMap("AV58CentroCusto", "vCENTROCUSTO", 0, "CollSaldoCCusto.SaldoCCustoItem");
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar({rfrVar:"AV58CentroCusto"});
   this.addGridBCProperty("Centrocusto", ["CentroCustoId"], this.GXValidFnc[62], "AV58CentroCusto");
   this.addGridBCProperty("Centrocusto", ["CentroCustoDescricao"], this.GXValidFnc[63], "AV58CentroCusto");
   this.addGridBCProperty("Centrocusto", ["SaldoCentroCustoAnterior"], this.GXValidFnc[64], "AV58CentroCusto");
   this.addGridBCProperty("Centrocusto", ["SaldoCentroCustoTotalDebito"], this.GXValidFnc[66], "AV58CentroCusto");
   this.addGridBCProperty("Centrocusto", ["SaldoCentroCustoTotalCredito"], this.GXValidFnc[67], "AV58CentroCusto");
   this.addGridBCProperty("Centrocusto", ["SaldoCentroCustoSaldoAtual"], this.GXValidFnc[68], "AV58CentroCusto");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaldocentrocustodetalhe());
