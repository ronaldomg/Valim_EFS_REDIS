/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:15.6
*/
gx.evt.autoSkip = false;
gx.define('hsaldonaturezadetalhe', false, function () {
   this.ServerClass =  "hsaldonaturezadetalhe" ;
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
      this.AV92DetalheSaldo=gx.fn.getControlValue("vDETALHESALDO") ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV26ContaInicial=gx.fn.getControlValue("vCONTAINICIAL") ;
      this.AV27ContaFinal=gx.fn.getControlValue("vCONTAFINAL") ;
   };
   this.s142_client=function()
   {
      if ( this.AV92DetalheSaldo.length > 0 )
      {
         this.AV93QtdePag = gx.num.trunc( this.AV92DetalheSaldo.length / 10 ,0) ;
         if ( gx.num.mod(this.AV92DetalheSaldo.length, 10) != 0 )
         {
            this.AV93QtdePag = gx.num.trunc( this.AV93QtdePag + 1 ,0) ;
         }
         if ( this.AV93QtdePag == 0 )
         {
            this.AV93QtdePag = gx.num.trunc( 1 ,0) ;
         }
      }
      else
      {
         this.AV93QtdePag = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e116o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e126o2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e136o2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e176o2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e186o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,23,25,27,29,34,36,39,41,46,48,51,53,59,60,61,62,63,64,65,66,67,73,74,75,78,80,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaldonaturezadetalhe",[],false,1,true,true,0,false,false,false,"CollDetalheSaldo.DetalheSaldoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV92DetalheSaldo",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLCONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],"GXV11N","GXV11N",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLTRADUTORID","Tradutor","","TradutorId","char",0,"px",7,7,"left",null,[],"GXV11O","GXV11O",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLCONTACONTABILDESCRICAO","Descrição","","ContaContabilDescricao","svchar",0,"px",45,45,"left",null,[],"GXV11P","GXV11P",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLVLRSALDOANTERIOR","Saldo Anterior","","VlrSaldoAnterior","decimal",0,"px",22,22,"right",null,[],"GXV11Q","GXV11Q",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11R",63,"CTLTIPOSALDOANTERIOR","D/C","","TipoSaldoAnterior","char",0,"px",1,1,"left",null,[],"GXV11R","GXV11R",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11S",64,"CTLVLRDEBITO","Total Débito","","VlrDebito","decimal",0,"px",22,22,"right",null,[],"GXV11S","GXV11S",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11T",65,"CTLVLRCREDITO","Total Crédito","","VlrCredito","decimal",0,"px",22,22,"right",null,[],"GXV11T","GXV11T",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11U",66,"CTLVLRSALDOATUAL","Saldo Atual","","VlrSaldoAtual","decimal",0,"px",22,22,"right",null,[],"GXV11U","GXV11U",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLTIPOSALDOATUAL","D/C","","TipoSaldoAtual","char",0,"px",1,1,"left",null,[],"GXV11V","GXV11V",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE4",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINI",gxz:"ZV64MesIni",gxold:"OV64MesIni",gxvar:"AV64MesIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64MesIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64MesIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINI",gx.O.AV64MesIni,0)},c2v:function(){gx.O.AV64MesIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINI",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINI",gxz:"ZV65AnoIni",gxold:"OV65AnoIni",gxvar:"AV65AnoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65AnoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65AnoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINI",gx.O.AV65AnoIni,0)},c2v:function(){gx.O.AV65AnoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINI",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFIN",gxz:"ZV66MesFin",gxold:"OV66MesFin",gxvar:"AV66MesFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66MesFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66MesFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFIN",gx.O.AV66MesFin,0)},c2v:function(){gx.O.AV66MesFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFIN",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFIN",gxz:"ZV67AnoFin",gxold:"OV67AnoFin",gxvar:"AV67AnoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67AnoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67AnoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFIN",gx.O.AV67AnoFin,0)},c2v:function(){gx.O.AV67AnoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE7",grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAID",gxz:"ZV79NaturezaId",gxold:"OV79NaturezaId",gxvar:"AV79NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79NaturezaId=Value},v2z:function(Value){gx.O.ZV79NaturezaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAID",gx.O.AV79NaturezaId,0)},c2v:function(){gx.O.AV79NaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESCRICAO",gxz:"ZV80NaturezaDescricao",gxold:"OV80NaturezaDescricao",gxvar:"AV80NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80NaturezaDescricao=Value},v2z:function(Value){gx.O.ZV80NaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCRICAO",gx.O.AV80NaturezaDescricao,0)},c2v:function(){gx.O.AV80NaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE6",grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDODACONTA",gxz:"ZV70SaldoDaConta",gxold:"OV70SaldoDaConta",gxvar:"AV70SaldoDaConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70SaldoDaConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV70SaldoDaConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDODACONTA",gx.O.AV70SaldoDaConta,2,',')},c2v:function(){gx.O.AV70SaldoDaConta=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDODACONTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDO",gxz:"ZV71TipoSaldo",gxold:"OV71TipoSaldo",gxvar:"AV71TipoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71TipoSaldo=Value},v2z:function(Value){gx.O.ZV71TipoSaldo=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDO",gx.O.AV71TipoSaldo,0)},c2v:function(){gx.O.AV71TipoSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDO")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILID",gxz:"ZV97GXV11N",gxold:"OV97GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11N=Value},v2z:function(Value){gx.O.ZV97GXV11N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRADUTORID",gxz:"ZV98GXV11O",gxold:"OV98GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11O=Value},v2z:function(Value){gx.O.ZV98GXV11O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTRADUTORID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILDESCRICAO",gxz:"ZV99GXV11P",gxold:"OV99GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11P=Value},v2z:function(Value){gx.O.ZV99GXV11P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILDESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILDESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOANTERIOR",gxz:"ZV100GXV11Q",gxold:"OV100GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Q=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV100GXV11Q=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11Q,2,',')},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOANTERIOR",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOANTERIOR",gxz:"ZV101GXV11R",gxold:"OV101GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV101GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOANTERIOR",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRDEBITO",gxz:"ZV102GXV11S",gxold:"OV102GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11S=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV102GXV11S=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11S,2,',')},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRDEBITO",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRCREDITO",gxz:"ZV103GXV11T",gxold:"OV103GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11T=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV103GXV11T=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11T,2,',')},c2v:function(){gx.O.GXV11T=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRCREDITO",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRSALDOATUAL",gxz:"ZV104GXV11U",gxold:"OV104GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11U=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV104GXV11U=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11U,2,',')},c2v:function(){gx.O.GXV11U=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRSALDOATUAL",row || gx.fn.currentGridRowImpl(58),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOSALDOATUAL",gxz:"ZV105GXV11V",gxold:"OV105GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11V=Value},v2z:function(Value){gx.O.ZV105GXV11V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(58),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOSALDOATUAL",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV93QtdePag",gxold:"OV93QtdePag",gxvar:"AV93QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV93QtdePag,0)},c2v:function(){gx.O.AV93QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TABLE2",grid:0};
   GXValidFnc[78]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[80]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[82]={fld:"IMAGE5",grid:0};
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
   this.AV79NaturezaId = "" ;
   this.ZV79NaturezaId = "" ;
   this.OV79NaturezaId = "" ;
   this.AV80NaturezaDescricao = "" ;
   this.ZV80NaturezaDescricao = "" ;
   this.OV80NaturezaDescricao = "" ;
   this.AV70SaldoDaConta = 0 ;
   this.ZV70SaldoDaConta = 0 ;
   this.OV70SaldoDaConta = 0 ;
   this.AV71TipoSaldo = "" ;
   this.ZV71TipoSaldo = "" ;
   this.OV71TipoSaldo = "" ;
   this.ZV97GXV11N = "" ;
   this.OV97GXV11N = "" ;
   this.ZV98GXV11O = "" ;
   this.OV98GXV11O = "" ;
   this.ZV99GXV11P = "" ;
   this.OV99GXV11P = "" ;
   this.ZV100GXV11Q = 0 ;
   this.OV100GXV11Q = 0 ;
   this.ZV101GXV11R = "" ;
   this.OV101GXV11R = "" ;
   this.ZV102GXV11S = 0 ;
   this.OV102GXV11S = 0 ;
   this.ZV103GXV11T = 0 ;
   this.OV103GXV11T = 0 ;
   this.ZV104GXV11U = 0 ;
   this.OV104GXV11U = 0 ;
   this.ZV105GXV11V = "" ;
   this.OV105GXV11V = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV93QtdePag = 0 ;
   this.ZV93QtdePag = 0 ;
   this.OV93QtdePag = 0 ;
   this.AV64MesIni = 0 ;
   this.AV65AnoIni = 0 ;
   this.AV66MesFin = 0 ;
   this.AV67AnoFin = 0 ;
   this.AV79NaturezaId = "" ;
   this.AV80NaturezaDescricao = "" ;
   this.AV70SaldoDaConta = 0 ;
   this.AV71TipoSaldo = "" ;
   this.AV5Pagina = 0 ;
   this.AV93QtdePag = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.AV26ContaInicial = "" ;
   this.AV27ContaFinal = "" ;
   this.GXV11N = "" ;
   this.GXV11O = "" ;
   this.GXV11P = "" ;
   this.GXV11Q = 0 ;
   this.GXV11R = "" ;
   this.GXV11S = 0 ;
   this.GXV11T = 0 ;
   this.GXV11U = 0 ;
   this.GXV11V = "" ;
   this.A879SaldoContaEmpresaId = "" ;
   this.A172NaturezaId = "" ;
   this.A536SaldoContaDataReferencia = gx.date.nullDate() ;
   this.A62ContaContabilId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A63ContaContabilNome = "" ;
   this.A527SaldoContaSaldoAtual = 0 ;
   this.A525SaldoContaTotalDebito = 0 ;
   this.A526SaldoContaTotalCredito = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV92DetalheSaldo = [ ] ;
   this.Events = {"e116o2_client": ["'FECHAR'", true] ,"e126o2_client": ["'ANTERIOR'", true] ,"e136o2_client": ["'PROXIMO'", true] ,"e176o2_client": ["ENTER", true] ,"e186o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV93QtdePag',fld:'vQTDEPAG'},{av:'AV92DetalheSaldo',fld:'vDETALHESALDO',grid:58}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV93QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27ContaFinal',fld:'vCONTAFINAL'},{av:'AV26ContaInicial',fld:'vCONTAINICIAL'},{av:'AV71TipoSaldo',fld:'vTIPOSALDO'},{av:'AV70SaldoDaConta',fld:'vSALDODACONTA'},{av:'AV80NaturezaDescricao',fld:'vNATUREZADESCRICAO'},{av:'AV79NaturezaId',fld:'vNATUREZAID'},{av:'AV67AnoFin',fld:'vANOFIN'},{av:'AV66MesFin',fld:'vMESFIN'},{av:'AV65AnoIni',fld:'vANOINI'},{av:'AV64MesIni',fld:'vMESINI'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV93QtdePag',fld:'vQTDEPAG'},{av:'AV92DetalheSaldo',fld:'vDETALHESALDO',grid:58}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV93QtdePag',fld:'vQTDEPAG'},{av:'AV92DetalheSaldo',fld:'vDETALHESALDO',grid:58}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV93QtdePag',fld:'vQTDEPAG'}]];
   this.setVCMap("AV92DetalheSaldo", "vDETALHESALDO", 0, "CollDetalheSaldo.DetalheSaldoItem");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV26ContaInicial", "vCONTAINICIAL", 0, "svchar");
   this.setVCMap("AV27ContaFinal", "vCONTAFINAL", 0, "svchar");
   this.setVCMap("AV92DetalheSaldo", "vDETALHESALDO", 0, "CollDetalheSaldo.DetalheSaldoItem");
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV92DetalheSaldo"});
   this.addGridBCProperty("Detalhesaldo", ["ContaContabilId"], this.GXValidFnc[59], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["TradutorId"], this.GXValidFnc[60], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["ContaContabilDescricao"], this.GXValidFnc[61], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrSaldoAnterior"], this.GXValidFnc[62], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["TipoSaldoAnterior"], this.GXValidFnc[63], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrDebito"], this.GXValidFnc[64], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrCredito"], this.GXValidFnc[65], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["VlrSaldoAtual"], this.GXValidFnc[66], "AV92DetalheSaldo");
   this.addGridBCProperty("Detalhesaldo", ["TipoSaldoAtual"], this.GXValidFnc[67], "AV92DetalheSaldo");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaldonaturezadetalhe());
