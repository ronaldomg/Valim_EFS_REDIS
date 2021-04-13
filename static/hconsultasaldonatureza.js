/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:31.12
*/
gx.evt.autoSkip = false;
gx.define('hconsultasaldonatureza', false, function () {
   this.ServerClass =  "hconsultasaldonatureza" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV109PaginaAux=gx.fn.getIntegerValue("vPAGINAAUX",'.') ;
      this.AV107SaldoCbl=gx.fn.getControlValue("vSALDOCBL") ;
   };
   this.s142_client=function()
   {
      if ( this.AV107SaldoCbl.length > 0 )
      {
         this.AV108QtdePag = gx.num.trunc( this.AV107SaldoCbl.length / 10 ,0) ;
         if ( gx.num.mod(this.AV107SaldoCbl.length, 10) != 0 )
         {
            this.AV108QtdePag = gx.num.trunc( this.AV108QtdePag + 1 ,0) ;
         }
         if ( this.AV108QtdePag == 0 )
         {
            this.AV108QtdePag = gx.num.trunc( 1 ,0) ;
         }
      }
      else
      {
         this.AV108QtdePag = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e116m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e146m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e126m2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e136m2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e186m2_client=function()
   {
      this.executeServerEvent("'DETALHARCONTA'", true, arguments[0], false, false);
   };
   this.e196m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,19,21,23,25,27,30,32,34,37,39,42,44,46,50,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,79,83,86,88,90,92,94,95,96,97,98,99,100,102,103,104];
   this.GXLastCtrlId =104;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasaldonatureza",[],false,1,true,true,0,true,false,false,"CollSaldoCbl.SaldoCblItem",0,"px","Novo registro",true,false,false,null,null,false,"AV107SaldoCbl",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11M",58,"CTLNATUREZAID","Código","","NaturezaId","svchar",0,"px",30,30,"left",null,[],"GXV11M","GXV11M",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLNATUREZADESCRICAO","Descrição","","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],"GXV11N","GXV11N",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLVLRSALDOANTERIOR","Saldo Anterior","","VlrSaldoAnterior","decimal",0,"px",22,22,"right",null,[],"GXV11O","GXV11O",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLTIPOSALDOANTERIOR","D/C","","TipoSaldoAnterior","char",0,"px",1,1,"left",null,[],"GXV11P","GXV11P",true,0,false,false,"Attribute",1,"GridColumnImage");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLVLRDEBITO","Total Débito","","VlrDebito","decimal",0,"px",22,22,"right",null,[],"GXV11Q","GXV11Q",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11R",63,"CTLVLRCREDITO","Total Crédito","","VlrCredito","decimal",0,"px",22,22,"right",null,[],"GXV11R","GXV11R",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11S",64,"CTLVLRSALDOATUAL","Saldo Atual","","VlrSaldoAtual","decimal",0,"px",22,22,"right",null,[],"GXV11S","GXV11S",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11T",65,"CTLTIPOSALDOATUAL","D/C","","TipoSaldoAtual","char",0,"px",1,1,"left",null,[],"GXV11T","GXV11T",true,0,false,false,"Attribute",1,"GridColumnImage");
   GridContainer.addBitmap("&Bmpdetcontas","vBMPDETCONTAS",66,0,"px",17,"px","e186m2_client","","Contas","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLCENTROCUSTOFINAL","Código Centro Custo","","CentroCustoFinal","svchar",0,"px",30,30,"left",null,[],"GXV11V","GXV11V",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLNATUREZAFINAL","Código da Natureza","","NaturezaFinal","svchar",0,"px",30,30,"left",null,[],"GXV11W","GXV11W",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11X",69,"CTLCONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],"GXV11X","GXV11X",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Y",70,"CTLTRADUTORID","Tradutor Id","","TradutorId","char",0,"px",7,7,"left",null,[],"GXV11Y","GXV11Y",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Z",71,"CTLCONTACONTABILDESC","Descrição da Conta Contabil","","ContaContabilDesc","svchar",0,"px",45,45,"left",null,[],"GXV11Z","GXV11Z",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV120",72,"CTLCENTROCUSTOID","Código Centro Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],"GXV120","GXV120",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV121",73,"CTLCENTROCUSTODESCRICAO","Descrição do Centro de Custo","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],"GXV121","GXV121",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE13",grid:0};
   GXValidFnc[16]={fld:"TABLE14",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV64MesIni",gxold:"OV64MesIni",gxvar:"AV64MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV64MesIni,0)},c2v:function(){gx.O.AV64MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV65AnoIni",gxold:"OV65AnoIni",gxvar:"AV65AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV65AnoIni,0)},c2v:function(){gx.O.AV65AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE15",grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV66MesFin",gxold:"OV66MesFin",gxvar:"AV66MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV66MesFin,0)},c2v:function(){gx.O.AV66MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV67AnoFin",gxold:"OV67AnoFin",gxvar:"AV67AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV67AnoFin,0)},c2v:function(){gx.O.AV67AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE12",grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINICIAL",gxz:"ZV28NaturezaInicial",gxold:"OV28NaturezaInicial",gxvar:"AV28NaturezaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28NaturezaInicial=Value},v2z:function(Value){gx.O.ZV28NaturezaInicial=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINICIAL",gx.O.AV28NaturezaInicial,0)},c2v:function(){gx.O.AV28NaturezaInicial=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINICIAL")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFINAL",gxz:"ZV29NaturezaFinal",gxold:"OV29NaturezaFinal",gxvar:"AV29NaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NaturezaFinal=Value},v2z:function(Value){gx.O.ZV29NaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFINAL",gx.O.AV29NaturezaFinal,0)},c2v:function(){gx.O.AV29NaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOAPURACAO",gxz:"ZV68LancamentoApuracao",gxold:"OV68LancamentoApuracao",gxvar:"AV68LancamentoApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV68LancamentoApuracao=Value},v2z:function(Value){gx.O.ZV68LancamentoApuracao=Value},v2c:function(){gx.fn.setCheckBoxValue("vLANCAMENTOAPURACAO",gx.O.AV68LancamentoApuracao,"S")},c2v:function(){gx.O.AV68LancamentoApuracao=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOAPURACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[58]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNATUREZAID",gxz:"ZV113GXV11M",gxold:"OV113GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV113GXV11M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNATUREZAID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNATUREZAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNATUREZADESCRICAO",gxz:"ZV114GXV11N",gxold:"OV114GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11N=Value},v2z:function(Value){gx.O.ZV114GXV11N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOANTERIOR",gxz:"ZV115GXV11O",gxold:"OV115GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11O=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV115GXV11O=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11O,2,',')},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOANTERIOR",gxz:"ZV116GXV11P",gxold:"OV116GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11P=Value},v2z:function(Value){gx.O.ZV116GXV11P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRDEBITO",gxz:"ZV117GXV11Q",gxold:"OV117GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Q=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV117GXV11Q=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Q,2,',')},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRCREDITO",gxz:"ZV118GXV11R",gxold:"OV118GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11R=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV118GXV11R=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11R,2,',')},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOATUAL",gxz:"ZV119GXV11S",gxold:"OV119GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11S=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV119GXV11S=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11S,2,',')},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOATUAL",gxz:"ZV120GXV11T",gxold:"OV120GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11T=Value},v2z:function(Value){gx.O.ZV120GXV11T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11T,0)},c2v:function(){gx.O.GXV11T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDETCONTAS",gxz:"ZV79bmpDetContas",gxold:"OV79bmpDetContas",gxvar:"AV79bmpDetContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79bmpDetContas=Value},v2z:function(Value){gx.O.ZV79bmpDetContas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDETCONTAS",row || gx.fn.currentGridRowImpl(57),gx.O.AV79bmpDetContas,gx.O.AV130Bmpdetcontas_GXI)},c2v:function(){gx.O.AV130Bmpdetcontas_GXI=this.val_GXI();gx.O.AV79bmpDetContas=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDETCONTAS",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDETCONTAS_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV130Bmpdetcontas_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTOFINAL",gxz:"ZV121GXV11V",gxold:"OV121GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11V=Value},v2z:function(Value){gx.O.ZV121GXV11V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTOFINAL",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTOFINAL",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNATUREZAFINAL",gxz:"ZV122GXV11W",gxold:"OV122GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11W=Value},v2z:function(Value){gx.O.ZV122GXV11W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNATUREZAFINAL",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNATUREZAFINAL",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILID",gxz:"ZV123GXV11X",gxold:"OV123GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11X=Value},v2z:function(Value){gx.O.ZV123GXV11X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRADUTORID",gxz:"ZV124GXV11Y",gxold:"OV124GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Y=Value},v2z:function(Value){gx.O.ZV124GXV11Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILDESC",gxz:"ZV125GXV11Z",gxold:"OV125GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Z=Value},v2z:function(Value){gx.O.ZV125GXV11Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILDESC",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILDESC",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTOID",gxz:"ZV126GXV120",gxold:"OV126GXV120",gxvar:"GXV120",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV120=Value},v2z:function(Value){gx.O.ZV126GXV120=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTOID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV120,0)},c2v:function(){gx.O.GXV120=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTOID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTODESCRICAO",gxz:"ZV127GXV121",gxold:"OV127GXV121",gxvar:"GXV121",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV121=Value},v2z:function(Value){gx.O.ZV127GXV121=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV121,0)},c2v:function(){gx.O.GXV121=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TABLE7",grid:0};
   GXValidFnc[83]={fld:"TABLE8",grid:0};
   GXValidFnc[86]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[88]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[90]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[92]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[94]={fld:"IMAGE5",grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVAR",gxz:"ZV70var",gxold:"OV70var",gxvar:"AV70var",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70var=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70var=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVAR",gx.O.AV70var,0)},c2v:function(){gx.O.AV70var=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVAR",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVAR2",gxz:"ZV69var2",gxold:"OV69var2",gxvar:"AV69var2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69var2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69var2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVAR2",gx.O.AV69var2,0)},c2v:function(){gx.O.AV69var2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVAR2",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV108QtdePag",gxold:"OV108QtdePag",gxvar:"AV108QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV108QtdePag,0)},c2v:function(){gx.O.AV108QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV91ChamaOnBlurMascara",gxold:"OV91ChamaOnBlurMascara",gxvar:"AV91ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV91ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV91ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV91ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"JS", format:2,grid:0};
   GXValidFnc[102]={fld:"BTNHELP",grid:0};
   GXValidFnc[103]={fld:"PROMPT_NATUREZAINICIAL",grid:0};
   GXValidFnc[104]={fld:"PROMPT_NATUREZAFINAL",grid:0};
   this.AV64MesIni = 0 ;
   this.ZV64MesIni = 0 ;
   this.OV64MesIni = 0 ;
   this.AV65AnoIni = 0 ;
   this.ZV65AnoIni = 0 ;
   this.OV65AnoIni = 0 ;
   this.AV66MesFin = 0 ;
   this.ZV66MesFin = 0 ;
   this.OV66MesFin = 0 ;
   this.AV67AnoFin = 0 ;
   this.ZV67AnoFin = 0 ;
   this.OV67AnoFin = 0 ;
   this.AV28NaturezaInicial = "" ;
   this.ZV28NaturezaInicial = "" ;
   this.OV28NaturezaInicial = "" ;
   this.AV29NaturezaFinal = "" ;
   this.ZV29NaturezaFinal = "" ;
   this.OV29NaturezaFinal = "" ;
   this.AV68LancamentoApuracao = "" ;
   this.ZV68LancamentoApuracao = "" ;
   this.OV68LancamentoApuracao = "" ;
   this.ZV113GXV11M = "" ;
   this.OV113GXV11M = "" ;
   this.ZV114GXV11N = "" ;
   this.OV114GXV11N = "" ;
   this.ZV115GXV11O = 0 ;
   this.OV115GXV11O = 0 ;
   this.ZV116GXV11P = "" ;
   this.OV116GXV11P = "" ;
   this.ZV117GXV11Q = 0 ;
   this.OV117GXV11Q = 0 ;
   this.ZV118GXV11R = 0 ;
   this.OV118GXV11R = 0 ;
   this.ZV119GXV11S = 0 ;
   this.OV119GXV11S = 0 ;
   this.ZV120GXV11T = "" ;
   this.OV120GXV11T = "" ;
   this.ZV79bmpDetContas = "" ;
   this.OV79bmpDetContas = "" ;
   this.ZV121GXV11V = "" ;
   this.OV121GXV11V = "" ;
   this.ZV122GXV11W = "" ;
   this.OV122GXV11W = "" ;
   this.ZV123GXV11X = "" ;
   this.OV123GXV11X = "" ;
   this.ZV124GXV11Y = "" ;
   this.OV124GXV11Y = "" ;
   this.ZV125GXV11Z = "" ;
   this.OV125GXV11Z = "" ;
   this.ZV126GXV120 = "" ;
   this.OV126GXV120 = "" ;
   this.ZV127GXV121 = "" ;
   this.OV127GXV121 = "" ;
   this.AV70var = 0 ;
   this.ZV70var = 0 ;
   this.OV70var = 0 ;
   this.AV69var2 = 0 ;
   this.ZV69var2 = 0 ;
   this.OV69var2 = 0 ;
   this.AV108QtdePag = 0 ;
   this.ZV108QtdePag = 0 ;
   this.OV108QtdePag = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV91ChamaOnBlurMascara = "" ;
   this.ZV91ChamaOnBlurMascara = "" ;
   this.OV91ChamaOnBlurMascara = "" ;
   this.AV64MesIni = 0 ;
   this.AV65AnoIni = 0 ;
   this.AV66MesFin = 0 ;
   this.AV67AnoFin = 0 ;
   this.AV28NaturezaInicial = "" ;
   this.AV29NaturezaFinal = "" ;
   this.AV68LancamentoApuracao = "" ;
   this.AV70var = 0 ;
   this.AV69var2 = 0 ;
   this.AV108QtdePag = 0 ;
   this.AV5Pagina = 0 ;
   this.AV91ChamaOnBlurMascara = "" ;
   this.GXV11M = "" ;
   this.GXV11N = "" ;
   this.GXV11O = 0 ;
   this.GXV11P = "" ;
   this.GXV11Q = 0 ;
   this.GXV11R = 0 ;
   this.GXV11S = 0 ;
   this.GXV11T = "" ;
   this.AV79bmpDetContas = "" ;
   this.GXV11V = "" ;
   this.GXV11W = "" ;
   this.GXV11X = "" ;
   this.GXV11Y = "" ;
   this.GXV11Z = "" ;
   this.GXV120 = "" ;
   this.GXV121 = "" ;
   this.AV109PaginaAux = 0 ;
   this.AV107SaldoCbl = [ ] ;
   this.Events = {"e116m2_client": ["'FECHAR'", true] ,"e146m2_client": ["ENTER", true] ,"e126m2_client": ["'ANTERIOR'", true] ,"e136m2_client": ["'PROXIMO'", true] ,"e186m2_client": ["'DETALHARCONTA'", true] ,"e196m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV31TpErro',fld:'vTPERRO'},{av:'AV64MesIni',fld:'vMESINI'},{av:'AV65AnoIni',fld:'vANOINI'},{av:'AV66MesFin',fld:'vMESFIN'},{av:'AV67AnoFin',fld:'vANOFIN'},{av:'AV29NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV28NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV68LancamentoApuracao',fld:'vLANCAMENTOAPURACAO'}],[{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31TpErro',fld:'vTPERRO'},{av:'AV89DataRefIni',fld:'vDATAREFINI'},{av:'AV88DataRefFin',fld:'vDATAREFFIN'},{av:'AV23DataInicial',fld:'vDATAINICIAL'},{av:'AV24DataFinal',fld:'vDATAFINAL'},{av:'AV86ErroDataInicial',fld:'vERRODATAINICIAL'},{av:'AV87ErroDataFinal',fld:'vERRODATAFINAL'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV108QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV85snDetalhe',fld:'vSNDETALHE'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV79bmpDetContas',fld:'vBMPDETCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPDETCONTAS","Tooltiptext")',ctrl:'vBMPDETCONTAS',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDETCONTAS","Enabled")',ctrl:'vBMPDETCONTAS',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV29NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV64MesIni',fld:'vMESINI'},{av:'AV65AnoIni',fld:'vANOINI'},{av:'AV66MesFin',fld:'vMESFIN'},{av:'AV67AnoFin',fld:'vANOFIN'},{av:'AV68LancamentoApuracao',fld:'vLANCAMENTOAPURACAO'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV108QtdePag',fld:'vQTDEPAG'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV29NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV64MesIni',fld:'vMESINI'},{av:'AV65AnoIni',fld:'vANOINI'},{av:'AV66MesFin',fld:'vMESFIN'},{av:'AV67AnoFin',fld:'vANOFIN'},{av:'AV68LancamentoApuracao',fld:'vLANCAMENTOAPURACAO'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV108QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'DETALHARCONTA'"] = [[{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV64MesIni',fld:'vMESINI'},{av:'AV65AnoIni',fld:'vANOINI'},{av:'AV66MesFin',fld:'vMESFIN'},{av:'AV67AnoFin',fld:'vANOFIN'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV26ContaInicial',fld:'vCONTAINICIAL'},{av:'AV27ContaFinal',fld:'vCONTAFINAL'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV27ContaFinal',fld:'vCONTAFINAL'},{av:'AV26ContaInicial',fld:'vCONTAINICIAL'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57},{av:'AV67AnoFin',fld:'vANOFIN'},{av:'AV66MesFin',fld:'vMESFIN'},{av:'AV65AnoIni',fld:'vANOINI'},{av:'AV64MesIni',fld:'vMESINI'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV109PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV107SaldoCbl',fld:'vSALDOCBL',grid:57}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setPrompt("PROMPT_NATUREZAINICIAL", [42]);
   this.setPrompt("PROMPT_NATUREZAFINAL", [46]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV109PaginaAux", "vPAGINAAUX", 0, "int");
   this.setVCMap("AV107SaldoCbl", "vSALDOCBL", 0, "CollSaldoCbl.SaldoCblItem");
   this.setVCMap("AV109PaginaAux", "vPAGINAAUX", 0, "int");
   this.setVCMap("AV107SaldoCbl", "vSALDOCBL", 0, "CollSaldoCbl.SaldoCblItem");
   GridContainer.addRefreshingVar({rfrVar:"AV109PaginaAux"});
   GridContainer.addRefreshingVar(this.GXValidFnc[98]);
   GridContainer.addRefreshingVar({rfrVar:"AV107SaldoCbl"});
   this.addGridBCProperty("Saldocbl", ["NaturezaId"], this.GXValidFnc[58], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["NaturezaDescricao"], this.GXValidFnc[59], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrSaldoAnterior"], this.GXValidFnc[60], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["TipoSaldoAnterior"], this.GXValidFnc[61], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrDebito"], this.GXValidFnc[62], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrCredito"], this.GXValidFnc[63], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrSaldoAtual"], this.GXValidFnc[64], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["TipoSaldoAtual"], this.GXValidFnc[65], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["CentroCustoFinal"], this.GXValidFnc[67], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["NaturezaFinal"], this.GXValidFnc[68], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["ContaContabilId"], this.GXValidFnc[69], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["TradutorId"], this.GXValidFnc[70], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["ContaContabilDesc"], this.GXValidFnc[71], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["CentroCustoId"], this.GXValidFnc[72], "AV107SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["CentroCustoDescricao"], this.GXValidFnc[73], "AV107SaldoCbl");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasaldonatureza());
