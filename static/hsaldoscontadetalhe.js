/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:27.52
*/
gx.evt.autoSkip = false;
gx.define('hsaldoscontadetalhe', false, function () {
   this.ServerClass =  "hsaldoscontadetalhe" ;
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
      this.AV60DetalheSaldo=gx.fn.getControlValue("vDETALHESALDO") ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV24ContaInicial=gx.fn.getControlValue("vCONTAINICIAL") ;
      this.AV25ContaFinal=gx.fn.getControlValue("vCONTAFINAL") ;
   };
   this.s142_client=function()
   {
      if ( this.AV60DetalheSaldo.length > 0 )
      {
         this.AV63QtdePag = gx.num.trunc( this.AV60DetalheSaldo.length / 10 ,0) ;
         if ( gx.num.mod(this.AV60DetalheSaldo.length, 10) != 0 )
         {
            this.AV63QtdePag = gx.num.trunc( this.AV63QtdePag + 1 ,0) ;
         }
         if ( this.AV63QtdePag == 0 )
         {
            this.AV63QtdePag = gx.num.trunc( 1 ,0) ;
         }
      }
      else
      {
         this.AV63QtdePag = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e116l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e126l2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e136l2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e176l2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e186l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,26,28,31,33,36,38,40,43,45,48,50,54,55,56,57,58,59,60,61,62,68,69,70,73,75,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaldoscontadetalhe",[],false,1,true,true,0,false,false,false,"CollDetalheSaldo.DetalheSaldoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV60DetalheSaldo",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLCONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],"GXV11I","GXV11I",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLTRADUTORID","Tradutor","","TradutorId","char",0,"px",7,7,"left",null,[],"GXV11J","GXV11J",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLCONTACONTABILDESCRICAO","Descrição","","ContaContabilDescricao","svchar",0,"px",45,45,"left",null,[],"GXV11K","GXV11K",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLVLRSALDOANTERIOR","Saldo Anterior","","VlrSaldoAnterior","decimal",0,"px",22,22,"right",null,[],"GXV11L","GXV11L",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11M",58,"CTLTIPOSALDOANTERIOR","D/C","","TipoSaldoAnterior","char",0,"px",1,1,"left",null,[],"GXV11M","GXV11M",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLVLRDEBITO","Total Débito","","VlrDebito","decimal",0,"px",22,22,"right",null,[],"GXV11N","GXV11N",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLVLRCREDITO","Total Crédito","","VlrCredito","decimal",0,"px",22,22,"right",null,[],"GXV11O","GXV11O",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLVLRSALDOATUAL","Saldo Atual","","VlrSaldoAtual","decimal",0,"px",22,22,"right",null,[],"GXV11P","GXV11P",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLTIPOSALDOATUAL","D/C","","TipoSaldoAtual","char",0,"px",1,1,"left",null,[],"GXV11Q","GXV11Q",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE11",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV34MesIni",gxold:"OV34MesIni",gxvar:"AV34MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV34MesIni,0)},c2v:function(){gx.O.AV34MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV35AnoIni",gxold:"OV35AnoIni",gxvar:"AV35AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV35AnoIni,0)},c2v:function(){gx.O.AV35AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV36MesFin",gxold:"OV36MesFin",gxvar:"AV36MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV36MesFin,0)},c2v:function(){gx.O.AV36MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV37AnoFin",gxold:"OV37AnoFin",gxvar:"AV37AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV37AnoFin,0)},c2v:function(){gx.O.AV37AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE9",grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOID",gxz:"ZV41CentroCustoId",gxold:"OV41CentroCustoId",gxvar:"AV41CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41CentroCustoId=Value},v2z:function(Value){gx.O.ZV41CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV41CentroCustoId,0)},c2v:function(){gx.O.AV41CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV42CentroCustoDescricao",gxold:"OV42CentroCustoDescricao",gxvar:"AV42CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV42CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV42CentroCustoDescricao,0)},c2v:function(){gx.O.AV42CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[45]={fld:"TABLE10",grid:0};
   GXValidFnc[48]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDODACONTA",gxz:"ZV39SaldoDaConta",gxold:"OV39SaldoDaConta",gxvar:"AV39SaldoDaConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SaldoDaConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV39SaldoDaConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDODACONTA",gx.O.AV39SaldoDaConta,2,',')},c2v:function(){gx.O.AV39SaldoDaConta=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDODACONTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDO",gxz:"ZV40TipoSaldo",gxold:"OV40TipoSaldo",gxvar:"AV40TipoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TipoSaldo=Value},v2z:function(Value){gx.O.ZV40TipoSaldo=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDO",gx.O.AV40TipoSaldo,0)},c2v:function(){gx.O.AV40TipoSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDO")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILID",gxz:"ZV67GXV11I",gxold:"OV67GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV67GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRADUTORID",gxz:"ZV68GXV11J",gxold:"OV68GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11J=Value},v2z:function(Value){gx.O.ZV68GXV11J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILDESCRICAO",gxz:"ZV69GXV11K",gxold:"OV69GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11K=Value},v2z:function(Value){gx.O.ZV69GXV11K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILDESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILDESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOANTERIOR",gxz:"ZV70GXV11L",gxold:"OV70GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11L=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV70GXV11L=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11L,2,',')},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOANTERIOR",gxz:"ZV71GXV11M",gxold:"OV71GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV71GXV11M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRDEBITO",gxz:"ZV72GXV11N",gxold:"OV72GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11N=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72GXV11N=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11N,2,',')},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRCREDITO",gxz:"ZV73GXV11O",gxold:"OV73GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11O=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV73GXV11O=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11O,2,',')},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOATUAL",gxz:"ZV74GXV11P",gxold:"OV74GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11P=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74GXV11P=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11P,2,',')},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOATUAL",gxz:"ZV75GXV11Q",gxold:"OV75GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Q=Value},v2z:function(Value){gx.O.ZV75GXV11Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(53),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV63QtdePag",gxold:"OV63QtdePag",gxvar:"AV63QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV63QtdePag,0)},c2v:function(){gx.O.AV63QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE2",grid:0};
   GXValidFnc[73]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[75]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[77]={fld:"IMAGE5",grid:0};
   this.AV34MesIni = 0 ;
   this.ZV34MesIni = 0 ;
   this.OV34MesIni = 0 ;
   this.AV35AnoIni = 0 ;
   this.ZV35AnoIni = 0 ;
   this.OV35AnoIni = 0 ;
   this.AV36MesFin = 0 ;
   this.ZV36MesFin = 0 ;
   this.OV36MesFin = 0 ;
   this.AV37AnoFin = 0 ;
   this.ZV37AnoFin = 0 ;
   this.OV37AnoFin = 0 ;
   this.AV41CentroCustoId = "" ;
   this.ZV41CentroCustoId = "" ;
   this.OV41CentroCustoId = "" ;
   this.AV42CentroCustoDescricao = "" ;
   this.ZV42CentroCustoDescricao = "" ;
   this.OV42CentroCustoDescricao = "" ;
   this.AV39SaldoDaConta = 0 ;
   this.ZV39SaldoDaConta = 0 ;
   this.OV39SaldoDaConta = 0 ;
   this.AV40TipoSaldo = "" ;
   this.ZV40TipoSaldo = "" ;
   this.OV40TipoSaldo = "" ;
   this.ZV67GXV11I = "" ;
   this.OV67GXV11I = "" ;
   this.ZV68GXV11J = "" ;
   this.OV68GXV11J = "" ;
   this.ZV69GXV11K = "" ;
   this.OV69GXV11K = "" ;
   this.ZV70GXV11L = 0 ;
   this.OV70GXV11L = 0 ;
   this.ZV71GXV11M = "" ;
   this.OV71GXV11M = "" ;
   this.ZV72GXV11N = 0 ;
   this.OV72GXV11N = 0 ;
   this.ZV73GXV11O = 0 ;
   this.OV73GXV11O = 0 ;
   this.ZV74GXV11P = 0 ;
   this.OV74GXV11P = 0 ;
   this.ZV75GXV11Q = "" ;
   this.OV75GXV11Q = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV63QtdePag = 0 ;
   this.ZV63QtdePag = 0 ;
   this.OV63QtdePag = 0 ;
   this.AV34MesIni = 0 ;
   this.AV35AnoIni = 0 ;
   this.AV36MesFin = 0 ;
   this.AV37AnoFin = 0 ;
   this.AV41CentroCustoId = "" ;
   this.AV42CentroCustoDescricao = "" ;
   this.AV39SaldoDaConta = 0 ;
   this.AV40TipoSaldo = "" ;
   this.AV5Pagina = 0 ;
   this.AV63QtdePag = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.AV24ContaInicial = "" ;
   this.AV25ContaFinal = "" ;
   this.GXV11I = "" ;
   this.GXV11J = "" ;
   this.GXV11K = "" ;
   this.GXV11L = 0 ;
   this.GXV11M = "" ;
   this.GXV11N = 0 ;
   this.GXV11O = 0 ;
   this.GXV11P = 0 ;
   this.GXV11Q = "" ;
   this.A879SaldoContaEmpresaId = "" ;
   this.A538CentroCustoSaldoId = "" ;
   this.A536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A533SaldoCentroCustoSaldoAtual = 0 ;
   this.A532SaldoCentroCustoTotalDebito = 0 ;
   this.A531SaldoCentroCustoTotalCredito = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV60DetalheSaldo = [ ] ;
   this.Events = {"e116l2_client": ["'FECHAR'", true] ,"e126l2_client": ["'ANTERIOR'", true] ,"e136l2_client": ["'PROXIMO'", true] ,"e176l2_client": ["ENTER", true] ,"e186l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV63QtdePag',fld:'vQTDEPAG'},{av:'AV60DetalheSaldo',fld:'vDETALHESALDO',grid:53}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV63QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25ContaFinal',fld:'vCONTAFINAL'},{av:'AV24ContaInicial',fld:'vCONTAINICIAL'},{av:'AV40TipoSaldo',fld:'vTIPOSALDO'},{av:'AV39SaldoDaConta',fld:'vSALDODACONTA'},{av:'AV42CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV41CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV37AnoFin',fld:'vANOFIN'},{av:'AV36MesFin',fld:'vMESFIN'},{av:'AV35AnoIni',fld:'vANOINI'},{av:'AV34MesIni',fld:'vMESINI'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV63QtdePag',fld:'vQTDEPAG'},{av:'AV60DetalheSaldo',fld:'vDETALHESALDO',grid:53}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV63QtdePag',fld:'vQTDEPAG'},{av:'AV60DetalheSaldo',fld:'vDETALHESALDO',grid:53}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV63QtdePag',fld:'vQTDEPAG'}]];
   this.setVCMap("AV60DetalheSaldo", "vDETALHESALDO", 0, "CollDetalheSaldo.DetalheSaldoItem");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24ContaInicial", "vCONTAINICIAL", 0, "svchar");
   this.setVCMap("AV25ContaFinal", "vCONTAFINAL", 0, "svchar");
   this.setVCMap("AV60DetalheSaldo", "vDETALHESALDO", 0, "CollDetalheSaldo.DetalheSaldoItem");
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"AV60DetalheSaldo"});
   this.addGridBCProperty("Detalhesaldo", ["ContaContabilId"], this.GXValidFnc[54], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["TradutorId"], this.GXValidFnc[55], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["ContaContabilDescricao"], this.GXValidFnc[56], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrSaldoAnterior"], this.GXValidFnc[57], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["TipoSaldoAnterior"], this.GXValidFnc[58], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrDebito"], this.GXValidFnc[59], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrCredito"], this.GXValidFnc[60], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrSaldoAtual"], this.GXValidFnc[61], "AV60DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["TipoSaldoAtual"], this.GXValidFnc[62], "AV60DetalheSaldo");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaldoscontadetalhe());
