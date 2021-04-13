/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:16.94
*/
gx.evt.autoSkip = false;
gx.define('hconsultasaldoscorrentistas', false, function () {
   this.ServerClass =  "hconsultasaldoscorrentistas" ;
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
      this.AV98Paginaaux=gx.fn.getDecimalValue("vPAGINAAUX",'.',',') ;
   };
   this.s142_client=function()
   {
      if ( this.AV76SaldoCbl.length > 0 )
      {
         this.AV75QtdePag = gx.num.trunc( this.AV76SaldoCbl.length / 10 ,0) ;
         if ( gx.num.mod(this.AV76SaldoCbl.length, 10) != 0 )
         {
            this.AV75QtdePag = gx.num.trunc( this.AV75QtdePag + 1 ,0) ;
         }
         if ( this.AV75QtdePag == 0 )
         {
            this.AV75QtdePag = gx.num.trunc( 1 ,0) ;
         }
      }
      else
      {
         this.AV75QtdePag = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e146d2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e116d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e126d2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e136d2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e186d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,19,21,23,25,27,30,32,34,37,39,40,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,65,68,70,72,74,76,78,84,88,91,93,95,97,99,100,101,102,103,105,106];
   this.GXLastCtrlId =106;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",47,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasaldoscorrentistas",[],false,1,true,true,0,false,false,false,"CollSaldoCbl.SaldoCblItem",0,"px","Novo registro",true,false,false,null,null,false,"AV76SaldoCbl",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11C",48,"CTLCONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],"GXV11C","GXV11C",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11D",49,"CTLTRADUTORID","Tradutor","","TradutorId","char",0,"px",7,7,"left",null,[],"GXV11D","GXV11D",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11E",50,"CTLCONTACONTABILDESC","Descrição","","ContaContabilDesc","svchar",0,"px",45,45,"left",null,[],"GXV11E","GXV11E",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11F",51,"CTLVLRSALDOANTERIOR","Saldo Anterior","","VlrSaldoAnterior","decimal",0,"px",22,22,"right",null,[],"GXV11F","GXV11F",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11G",52,"CTLTIPOSALDOANTERIOR","D/C","","TipoSaldoAnterior","char",0,"px",1,1,"left",null,[],"GXV11G","GXV11G",true,0,false,false,"Attribute",1,"GridColumnImage");
   GridContainer.addSingleLineEdit("GXV11H",53,"CTLVLRDEBITO","Total Débito","","VlrDebito","decimal",0,"px",22,22,"right",null,[],"GXV11H","GXV11H",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLVLRCREDITO","Total Crédito","","VlrCredito","decimal",0,"px",22,22,"right",null,[],"GXV11I","GXV11I",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLVLRSALDOATUAL","Saldo Atual","","VlrSaldoAtual","decimal",0,"px",22,22,"right",null,[],"GXV11J","GXV11J",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLTIPOSALDOATUAL","D/C","","TipoSaldoAtual","char",0,"px",1,1,"left",null,[],"GXV11K","GXV11K",true,0,false,false,"Attribute",1,"GridColumnImage");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLCENTROCUSTOID","Código Centro Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],"GXV11L","GXV11L",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11M",58,"CTLCENTROCUSTODESCRICAO","Descrição do Centro de Custo","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],"GXV11M","GXV11M",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLNATUREZAID","Código da Natureza","","NaturezaId","svchar",0,"px",30,30,"left",null,[],"GXV11N","GXV11N",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLNATUREZADESCRICAO","Descrição da Natureza","","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],"GXV11O","GXV11O",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLCENTROCUSTOFINAL","Código Centro Custo","","CentroCustoFinal","svchar",0,"px",30,30,"left",null,[],"GXV11P","GXV11P",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLNATUREZAFINAL","Código da Natureza","","NaturezaFinal","svchar",0,"px",30,30,"left",null,[],"GXV11Q","GXV11Q",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE11",grid:0};
   GXValidFnc[16]={fld:"TABLE12",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV40MesIni",gxold:"OV40MesIni",gxvar:"AV40MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV40MesIni,0)},c2v:function(){gx.O.AV40MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV41AnoIni",gxold:"OV41AnoIni",gxvar:"AV41AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV41AnoIni,0)},c2v:function(){gx.O.AV41AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE13",grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV42MesFin",gxold:"OV42MesFin",gxvar:"AV42MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV42MesFin,0)},c2v:function(){gx.O.AV42MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV43AnoFin",gxold:"OV43AnoFin",gxvar:"AV43AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV43AnoFin,0)},c2v:function(){gx.O.AV43AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRENTISTA",gxz:"ZV23Correntista",gxold:"OV23Correntista",gxvar:"AV23Correntista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Correntista=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Correntista=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRENTISTA",gx.O.AV23Correntista,0)},c2v:function(){gx.O.AV23Correntista=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRENTISTA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECORRENTISTA",gxz:"ZV33NomeCorrentista",gxold:"OV33NomeCorrentista",gxvar:"AV33NomeCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33NomeCorrentista=Value},v2z:function(Value){gx.O.ZV33NomeCorrentista=Value},v2c:function(){gx.fn.setControlValue("vNOMECORRENTISTA",gx.O.AV33NomeCorrentista,0)},c2v:function(){gx.O.AV33NomeCorrentista=this.val()},val:function(){return gx.fn.getControlValue("vNOMECORRENTISTA")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILID",gxz:"ZV81GXV11C",gxold:"OV81GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11C=Value},v2z:function(Value){gx.O.ZV81GXV11C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRADUTORID",gxz:"ZV82GXV11D",gxold:"OV82GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11D=Value},v2z:function(Value){gx.O.ZV82GXV11D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILDESC",gxz:"ZV83GXV11E",gxold:"OV83GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11E=Value},v2z:function(Value){gx.O.ZV83GXV11E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILDESC",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILDESC",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOANTERIOR",gxz:"ZV84GXV11F",gxold:"OV84GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11F=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV84GXV11F=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11F,2,',')},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(47),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOANTERIOR",gxz:"ZV85GXV11G",gxold:"OV85GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11G=Value},v2z:function(Value){gx.O.ZV85GXV11G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11G,0)},c2v:function(){gx.O.GXV11G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRDEBITO",gxz:"ZV86GXV11H",gxold:"OV86GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11H=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV86GXV11H=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11H,2,',')},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(47),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRCREDITO",gxz:"ZV87GXV11I",gxold:"OV87GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11I=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV87GXV11I=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11I,2,',')},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(47),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOATUAL",gxz:"ZV88GXV11J",gxold:"OV88GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11J=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV88GXV11J=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11J,2,',')},c2v:function(){gx.O.GXV11J=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(47),'.',',')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOATUAL",gxz:"ZV89GXV11K",gxold:"OV89GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11K=Value},v2z:function(Value){gx.O.ZV89GXV11K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTOID",gxz:"ZV90GXV11L",gxold:"OV90GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11L=Value},v2z:function(Value){gx.O.ZV90GXV11L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTOID",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11L,0)},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTOID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTODESCRICAO",gxz:"ZV91GXV11M",gxold:"OV91GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV91GXV11M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNATUREZAID",gxz:"ZV92GXV11N",gxold:"OV92GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11N=Value},v2z:function(Value){gx.O.ZV92GXV11N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNATUREZAID",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNATUREZAID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNATUREZADESCRICAO",gxz:"ZV93GXV11O",gxold:"OV93GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11O=Value},v2z:function(Value){gx.O.ZV93GXV11O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCENTROCUSTOFINAL",gxz:"ZV94GXV11P",gxold:"OV94GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11P=Value},v2z:function(Value){gx.O.ZV94GXV11P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCENTROCUSTOFINAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCENTROCUSTOFINAL",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNATUREZAFINAL",gxz:"ZV95GXV11Q",gxold:"OV95GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Q=Value},v2z:function(Value){gx.O.ZV95GXV11Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNATUREZAFINAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNATUREZAFINAL",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE6",grid:0};
   GXValidFnc[68]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALSALDOS",gxz:"ZV65ValorTotalSaldos",gxold:"OV65ValorTotalSaldos",gxvar:"AV65ValorTotalSaldos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ValorTotalSaldos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV65ValorTotalSaldos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALSALDOS",gx.O.AV65ValorTotalSaldos,2,',')},c2v:function(){gx.O.AV65ValorTotalSaldos=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALSALDOS",'.',',')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALDEBITOS",gxz:"ZV66ValorTotalDebitos",gxold:"OV66ValorTotalDebitos",gxvar:"AV66ValorTotalDebitos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ValorTotalDebitos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV66ValorTotalDebitos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALDEBITOS",gx.O.AV66ValorTotalDebitos,2,',')},c2v:function(){gx.O.AV66ValorTotalDebitos=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALDEBITOS",'.',',')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALCREDITOS",gxz:"ZV67ValorTotalCreditos",gxold:"OV67ValorTotalCreditos",gxvar:"AV67ValorTotalCreditos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ValorTotalCreditos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67ValorTotalCreditos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALCREDITOS",gx.O.AV67ValorTotalCreditos,2,',')},c2v:function(){gx.O.AV67ValorTotalCreditos=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALCREDITOS",'.',',')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TABLE7",grid:0};
   GXValidFnc[88]={fld:"TABLE8",grid:0};
   GXValidFnc[91]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[93]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[95]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[97]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[99]={fld:"IMAGE5",grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV75QtdePag",gxold:"OV75QtdePag",gxvar:"AV75QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV75QtdePag,0)},c2v:function(){gx.O.AV75QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV16EmpresaPadrao",gxold:"OV16EmpresaPadrao",gxvar:"AV16EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV16EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV16EmpresaPadrao,0)},c2v:function(){gx.O.AV16EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"JS", format:2,grid:0};
   GXValidFnc[105]={fld:"BTNHELP",grid:0};
   GXValidFnc[106]={fld:"PROMPT_CORRENTISTA",grid:0};
   this.AV40MesIni = 0 ;
   this.ZV40MesIni = 0 ;
   this.OV40MesIni = 0 ;
   this.AV41AnoIni = 0 ;
   this.ZV41AnoIni = 0 ;
   this.OV41AnoIni = 0 ;
   this.AV42MesFin = 0 ;
   this.ZV42MesFin = 0 ;
   this.OV42MesFin = 0 ;
   this.AV43AnoFin = 0 ;
   this.ZV43AnoFin = 0 ;
   this.OV43AnoFin = 0 ;
   this.AV23Correntista = 0 ;
   this.ZV23Correntista = 0 ;
   this.OV23Correntista = 0 ;
   this.AV33NomeCorrentista = "" ;
   this.ZV33NomeCorrentista = "" ;
   this.OV33NomeCorrentista = "" ;
   this.ZV81GXV11C = "" ;
   this.OV81GXV11C = "" ;
   this.ZV82GXV11D = "" ;
   this.OV82GXV11D = "" ;
   this.ZV83GXV11E = "" ;
   this.OV83GXV11E = "" ;
   this.ZV84GXV11F = 0 ;
   this.OV84GXV11F = 0 ;
   this.ZV85GXV11G = "" ;
   this.OV85GXV11G = "" ;
   this.ZV86GXV11H = 0 ;
   this.OV86GXV11H = 0 ;
   this.ZV87GXV11I = 0 ;
   this.OV87GXV11I = 0 ;
   this.ZV88GXV11J = 0 ;
   this.OV88GXV11J = 0 ;
   this.ZV89GXV11K = "" ;
   this.OV89GXV11K = "" ;
   this.ZV90GXV11L = "" ;
   this.OV90GXV11L = "" ;
   this.ZV91GXV11M = "" ;
   this.OV91GXV11M = "" ;
   this.ZV92GXV11N = "" ;
   this.OV92GXV11N = "" ;
   this.ZV93GXV11O = "" ;
   this.OV93GXV11O = "" ;
   this.ZV94GXV11P = "" ;
   this.OV94GXV11P = "" ;
   this.ZV95GXV11Q = "" ;
   this.OV95GXV11Q = "" ;
   this.AV65ValorTotalSaldos = 0 ;
   this.ZV65ValorTotalSaldos = 0 ;
   this.OV65ValorTotalSaldos = 0 ;
   this.AV66ValorTotalDebitos = 0 ;
   this.ZV66ValorTotalDebitos = 0 ;
   this.OV66ValorTotalDebitos = 0 ;
   this.AV67ValorTotalCreditos = 0 ;
   this.ZV67ValorTotalCreditos = 0 ;
   this.OV67ValorTotalCreditos = 0 ;
   this.AV75QtdePag = 0 ;
   this.ZV75QtdePag = 0 ;
   this.OV75QtdePag = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.ZV16EmpresaPadrao = "" ;
   this.OV16EmpresaPadrao = "" ;
   this.AV40MesIni = 0 ;
   this.AV41AnoIni = 0 ;
   this.AV42MesFin = 0 ;
   this.AV43AnoFin = 0 ;
   this.AV23Correntista = 0 ;
   this.AV33NomeCorrentista = "" ;
   this.AV65ValorTotalSaldos = 0 ;
   this.AV66ValorTotalDebitos = 0 ;
   this.AV67ValorTotalCreditos = 0 ;
   this.AV75QtdePag = 0 ;
   this.AV5Pagina = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.GXV11C = "" ;
   this.GXV11D = "" ;
   this.GXV11E = "" ;
   this.GXV11F = 0 ;
   this.GXV11G = "" ;
   this.GXV11H = 0 ;
   this.GXV11I = 0 ;
   this.GXV11J = 0 ;
   this.GXV11K = "" ;
   this.GXV11L = "" ;
   this.GXV11M = "" ;
   this.GXV11N = "" ;
   this.GXV11O = "" ;
   this.GXV11P = "" ;
   this.GXV11Q = "" ;
   this.A879SaldoContaEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.A64ContaContabilTradutor = 0 ;
   this.A63ContaContabilNome = "" ;
   this.A111SaldoCorrentistaSaldoAtual = 0 ;
   this.A110SaldoCorrentistaTotalDebito = 0 ;
   this.A109SaldoCorrentistaTotalCredito = 0 ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV98Paginaaux = 0 ;
   this.AV76SaldoCbl = [ ] ;
   this.Events = {"e146d2_client": ["ENTER", true] ,"e116d2_client": ["'FECHAR'", true] ,"e126d2_client": ["'ANTERIOR'", true] ,"e136d2_client": ["'PROXIMO'", true] ,"e186d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV76SaldoCbl',fld:'vSALDOCBL',grid:47},{av:'subGrid_Rows'},{av:'AV98Paginaaux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV76SaldoCbl',fld:'vSALDOCBL',grid:47},{av:'subGrid_Rows'},{av:'AV98Paginaaux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV40MesIni',fld:'vMESINI'},{av:'AV41AnoIni',fld:'vANOINI'},{av:'AV42MesFin',fld:'vMESFIN'},{av:'AV43AnoFin',fld:'vANOFIN'},{av:'AV23Correntista',fld:'vCORRENTISTA'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV58MesAnterior',fld:'vMESANTERIOR'},{av:'AV27AnoAnterior',fld:'vANOANTERIOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A879SaldoContaEmpresaId',fld:'SALDOCONTAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A536SaldoContaDataReferencia',fld:'SALDOCONTADATAREFERENCIA'},{av:'A111SaldoCorrentistaSaldoAtual',fld:'SALDOCORRENTISTASALDOATUAL'},{av:'AV62TotalSaldoAnterior',fld:'vTOTALSALDOANTERIOR'},{av:'AV56SaldoContaSaldoAtual',fld:'vSALDOCONTASALDOATUAL'},{av:'AV38TotalDebito',fld:'vTOTALDEBITO'},{av:'AV39TotalCredito',fld:'vTOTALCREDITO'},{av:'AV48ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV65ValorTotalSaldos',fld:'vVALORTOTALSALDOS'},{av:'AV30SaldoAtual',fld:'vSALDOATUAL'},{av:'AV66ValorTotalDebitos',fld:'vVALORTOTALDEBITOS'},{av:'AV51TotalDebitoGrid',fld:'vTOTALDEBITOGRID'},{av:'AV67ValorTotalCreditos',fld:'vVALORTOTALCREDITOS'},{av:'AV52TotalCreditoGrid',fld:'vTOTALCREDITOGRID'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A110SaldoCorrentistaTotalDebito',fld:'SALDOCORRENTISTATOTALDEBITO'},{av:'A109SaldoCorrentistaTotalCredito',fld:'SALDOCORRENTISTATOTALCREDITO'}],[{av:'AV76SaldoCbl',fld:'vSALDOCBL',grid:47},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV58MesAnterior',fld:'vMESANTERIOR'},{av:'AV27AnoAnterior',fld:'vANOANTERIOR'},{av:'AV55Aux',fld:'vAUX'},{av:'AV61DataAnterior',fld:'vDATAANTERIOR'},{av:'AV60DataInicial',fld:'vDATAINICIAL'},{av:'AV59DataFinal',fld:'vDATAFINAL'},{av:'AV63ErroDataInicial',fld:'vERRODATAINICIAL'},{av:'AV64ErroDataFinal',fld:'vERRODATAFINAL'},{av:'AV70snPessoa',fld:'vSNPESSOA'},{av:'AV50ContaContabilAnt',fld:'vCONTACONTABILANT'},{av:'AV46TipoSaldoAnterior',fld:'vTIPOSALDOANTERIOR'},{av:'AV45TipoSaldoAtual',fld:'vTIPOSALDOATUAL'},{av:'AV62TotalSaldoAnterior',fld:'vTOTALSALDOANTERIOR'},{av:'AV38TotalDebito',fld:'vTOTALDEBITO'},{av:'AV39TotalCredito',fld:'vTOTALCREDITO'},{av:'AV56SaldoContaSaldoAtual',fld:'vSALDOCONTASALDOATUAL'},{av:'AV57Digito',fld:'vDIGITO'},{av:'AV53ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV65ValorTotalSaldos',fld:'vVALORTOTALSALDOS'},{av:'AV66ValorTotalDebitos',fld:'vVALORTOTALDEBITOS'},{av:'AV67ValorTotalCreditos',fld:'vVALORTOTALCREDITOS'},{av:'AV77SaldoCblItem',fld:'vSALDOCBLITEM'},{av:'AV48ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV76SaldoCbl',fld:'vSALDOCBL',grid:47},{av:'subGrid_Rows'},{av:'AV98Paginaaux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV76SaldoCbl',fld:'vSALDOCBL',grid:47},{av:'subGrid_Rows'},{av:'AV98Paginaaux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV75QtdePag',fld:'vQTDEPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV75QtdePag',fld:'vQTDEPAG'}]];
   this.setPrompt("PROMPT_CORRENTISTA", [39]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV98Paginaaux", "vPAGINAAUX", 0, "decimal");
   this.setVCMap("AV98Paginaaux", "vPAGINAAUX", 0, "decimal");
   GridContainer.addRefreshingVar({rfrVar:"AV98Paginaaux"});
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   this.addGridBCProperty("Saldocbl", ["ContaContabilId"], this.GXValidFnc[48], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["TradutorId"], this.GXValidFnc[49], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["ContaContabilDesc"], this.GXValidFnc[50], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrSaldoAnterior"], this.GXValidFnc[51], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["TipoSaldoAnterior"], this.GXValidFnc[52], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrDebito"], this.GXValidFnc[53], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrCredito"], this.GXValidFnc[54], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["VlrSaldoAtual"], this.GXValidFnc[55], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["TipoSaldoAtual"], this.GXValidFnc[56], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["CentroCustoId"], this.GXValidFnc[57], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["CentroCustoDescricao"], this.GXValidFnc[58], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["NaturezaId"], this.GXValidFnc[59], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["NaturezaDescricao"], this.GXValidFnc[60], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["CentroCustoFinal"], this.GXValidFnc[61], "AV76SaldoCbl");
   this.addGridBCProperty("Saldocbl", ["NaturezaFinal"], this.GXValidFnc[62], "AV76SaldoCbl");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasaldoscorrentistas());
