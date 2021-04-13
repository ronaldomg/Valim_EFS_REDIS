/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:11.77
*/
gx.evt.autoSkip = false;
gx.define('hemissaocheque', false, function () {
   this.ServerClass =  "hemissaocheque" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18SdtCheque=gx.fn.getControlValue("vSDTCHEQUE") ;
      this.AV47Tipo=gx.fn.getControlValue("vTIPO") ;
      this.AV5UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV46EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A1014CaixaBancoEmpresaId=gx.fn.getControlValue("CAIXABANCOEMPRESAID") ;
      this.A1015CaixaBancoId=gx.fn.getIntegerValue("CAIXABANCOID",'.') ;
      this.A1017CaixaBancoDescricao=gx.fn.getControlValue("CAIXABANCODESCRICAO") ;
      this.A1035CaixaBancoNoUltCheque=gx.fn.getIntegerValue("CAIXABANCONOULTCHEQUE",'.') ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31NomeAux=gx.fn.getControlValue("vNOMEAUX") ;
   };
   this.Validv_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11bn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12bn2_client=function()
   {
      this.executeServerEvent("VTIPOCHEQUE.CLICK", true, null, false, true);
   };
   this.e13bn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14bn2_client=function()
   {
      this.executeServerEvent("VSNAGRUPAR.CLICK", true, null, false, true);
   };
   this.e18bn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,30,32,38,39,40,41,42,43,44,45,51,57,58,59,60,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hemissaocheque",[],false,1,true,true,0,true,false,false,"CollChequeRecibo.ChequeReciboItem",0,"px","Novo registro",true,false,false,null,null,false,"AV23SdtNom",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV112",38,"CTLTIPODOC","Tipo Doc","","TipoDoc","char",0,"px",1,1,"left",null,[],"GXV112","GXV112",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV113",39,"CTLNUMERODOC","NºCheque","","NumeroDoc","int",0,"px",6,6,"right",null,[],"GXV113","GXV113",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV114",40,"CTLCLIFORID","Código do Titular","","CliForId","int",0,"px",7,7,"right",null,[],"GXV114","GXV114",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV115",41,"CTLNOME","Nominal a","","Nome","svchar",0,"px",100,80,"left",null,[],"GXV115","GXV115",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV116",42,"CTLDATA","Data","","Data","date",0,"px",10,10,"right",null,[],"GXV116","GXV116",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV117",43,"CTLQTDECONTAS","Qtde Contas","","QtdeContas","int",0,"px",4,4,"right",null,[],"GXV117","GXV117",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV118",44,"CTLSNIMPRIME","Sn Imprime","","SnImprime","char",0,"px",1,1,"left",null,[],"GXV118","GXV118",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV119",45,"CTLVALOR","Valor","","Valor","decimal",0,"px",18,18,"right",null,[],"GXV119","GXV119",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV12CaixaBancoId",gxold:"OV12CaixaBancoId",gxvar:"AV12CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV12CaixaBancoId,0)},c2v:function(){gx.O.AV12CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV11CaixaBancoDescricao",gxold:"OV11CaixaBancoDescricao",gxvar:"AV11CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV11CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV11CaixaBancoDescricao,0)},c2v:function(){gx.O.AV11CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOCHEQUE",gxz:"ZV13NoCheque",gxold:"OV13NoCheque",gxvar:"AV13NoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NoCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13NoCheque=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOCHEQUE",gx.O.AV13NoCheque,0)},c2v:function(){gx.O.AV13NoCheque=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOCHEQUE",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCHEQUE",gxz:"ZV14TipoCheque",gxold:"OV14TipoCheque",gxvar:"AV14TipoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14TipoCheque=Value},v2z:function(Value){gx.O.ZV14TipoCheque=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCHEQUE",gx.O.AV14TipoCheque)},c2v:function(){gx.O.AV14TipoCheque=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCHEQUE")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAGRUPAR",gxz:"ZV10SnAgrupar",gxold:"OV10SnAgrupar",gxvar:"AV10SnAgrupar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10SnAgrupar=Value},v2z:function(Value){gx.O.ZV10SnAgrupar=Value},v2c:function(){gx.fn.setComboBoxValue("vSNAGRUPAR",gx.O.AV10SnAgrupar)},c2v:function(){gx.O.AV10SnAgrupar=this.val()},val:function(){return gx.fn.getControlValue("vSNAGRUPAR")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPODOC",gxz:"ZV54GXV112",gxold:"OV54GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV54GXV112=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPODOC",row || gx.fn.currentGridRowImpl(37),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPODOC",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMERODOC",gxz:"ZV55GXV113",gxold:"OV55GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55GXV113=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMERODOC",row || gx.fn.currentGridRowImpl(37),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMERODOC",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIFORID",gxz:"ZV56GXV114",gxold:"OV56GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV114=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56GXV114=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCLIFORID",row || gx.fn.currentGridRowImpl(37),gx.O.GXV114,0)},c2v:function(){gx.O.GXV114=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCLIFORID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOME",gxz:"ZV57GXV115",gxold:"OV57GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV115=Value},v2z:function(Value){gx.O.ZV57GXV115=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(37),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATA",gxz:"ZV58GXV116",gxold:"OV58GXV116",gxvar:"GXV116",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV116=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV58GXV116=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATA",row || gx.fn.currentGridRowImpl(37),gx.O.GXV116,0)},c2v:function(){gx.O.GXV116=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDECONTAS",gxz:"ZV59GXV117",gxold:"OV59GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV117=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59GXV117=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDECONTAS",row || gx.fn.currentGridRowImpl(37),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDECONTAS",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNIMPRIME",gxz:"ZV60GXV118",gxold:"OV60GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV118=Value},v2z:function(Value){gx.O.ZV60GXV118=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNIMPRIME",row || gx.fn.currentGridRowImpl(37),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNIMPRIME",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV61GXV119",gxold:"OV61GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV119=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV61GXV119=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(37),gx.O.GXV119,2,',')},c2v:function(){gx.O.GXV119=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV33CaixaBancoEmpresaId",gxold:"OV33CaixaBancoEmpresaId",gxvar:"AV33CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV33CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV33CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV33CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOQTDEVIAS",gxz:"ZV44ModeloDocumentoQtdeVias",gxold:"OV44ModeloDocumentoQtdeVias",gxvar:"AV44ModeloDocumentoQtdeVias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ModeloDocumentoQtdeVias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44ModeloDocumentoQtdeVias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTOQTDEVIAS",gx.O.AV44ModeloDocumentoQtdeVias,0)},c2v:function(){gx.O.AV44ModeloDocumentoQtdeVias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELODOCUMENTOQTDEVIAS",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTIPOCHEPOR",gxz:"ZV29SnTipoChePor",gxold:"OV29SnTipoChePor",gxvar:"AV29SnTipoChePor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SnTipoChePor=Value},v2z:function(Value){gx.O.ZV29SnTipoChePor=Value},v2c:function(){gx.fn.setControlValue("vSNTIPOCHEPOR",gx.O.AV29SnTipoChePor,0)},c2v:function(){gx.O.AV29SnTipoChePor=this.val()},val:function(){return gx.fn.getControlValue("vSNTIPOCHEPOR")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBOXCHENOMINAL",gxz:"ZV17SnBoxCheNominal",gxold:"OV17SnBoxCheNominal",gxvar:"AV17SnBoxCheNominal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SnBoxCheNominal=Value},v2z:function(Value){gx.O.ZV17SnBoxCheNominal=Value},v2c:function(){gx.fn.setControlValue("vSNBOXCHENOMINAL",gx.O.AV17SnBoxCheNominal,0)},c2v:function(){gx.O.AV17SnBoxCheNominal=this.val()},val:function(){return gx.fn.getControlValue("vSNBOXCHENOMINAL")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   this.AV12CaixaBancoId = 0 ;
   this.ZV12CaixaBancoId = 0 ;
   this.OV12CaixaBancoId = 0 ;
   this.AV11CaixaBancoDescricao = "" ;
   this.ZV11CaixaBancoDescricao = "" ;
   this.OV11CaixaBancoDescricao = "" ;
   this.AV13NoCheque = 0 ;
   this.ZV13NoCheque = 0 ;
   this.OV13NoCheque = 0 ;
   this.AV14TipoCheque = "" ;
   this.ZV14TipoCheque = "" ;
   this.OV14TipoCheque = "" ;
   this.AV10SnAgrupar = "" ;
   this.ZV10SnAgrupar = "" ;
   this.OV10SnAgrupar = "" ;
   this.ZV54GXV112 = "" ;
   this.OV54GXV112 = "" ;
   this.ZV55GXV113 = 0 ;
   this.OV55GXV113 = 0 ;
   this.ZV56GXV114 = 0 ;
   this.OV56GXV114 = 0 ;
   this.ZV57GXV115 = "" ;
   this.OV57GXV115 = "" ;
   this.ZV58GXV116 = gx.date.nullDate() ;
   this.OV58GXV116 = gx.date.nullDate() ;
   this.ZV59GXV117 = 0 ;
   this.OV59GXV117 = 0 ;
   this.ZV60GXV118 = "" ;
   this.OV60GXV118 = "" ;
   this.ZV61GXV119 = 0 ;
   this.OV61GXV119 = 0 ;
   this.AV33CaixaBancoEmpresaId = "" ;
   this.ZV33CaixaBancoEmpresaId = "" ;
   this.OV33CaixaBancoEmpresaId = "" ;
   this.AV44ModeloDocumentoQtdeVias = 0 ;
   this.ZV44ModeloDocumentoQtdeVias = 0 ;
   this.OV44ModeloDocumentoQtdeVias = 0 ;
   this.AV29SnTipoChePor = "" ;
   this.ZV29SnTipoChePor = "" ;
   this.OV29SnTipoChePor = "" ;
   this.AV17SnBoxCheNominal = "" ;
   this.ZV17SnBoxCheNominal = "" ;
   this.OV17SnBoxCheNominal = "" ;
   this.AV12CaixaBancoId = 0 ;
   this.AV11CaixaBancoDescricao = "" ;
   this.AV13NoCheque = 0 ;
   this.AV14TipoCheque = "" ;
   this.AV10SnAgrupar = "" ;
   this.AV33CaixaBancoEmpresaId = "" ;
   this.AV44ModeloDocumentoQtdeVias = 0 ;
   this.AV29SnTipoChePor = "" ;
   this.AV17SnBoxCheNominal = "" ;
   this.AV47Tipo = "" ;
   this.GXV112 = "" ;
   this.GXV113 = 0 ;
   this.GXV114 = 0 ;
   this.GXV115 = "" ;
   this.GXV116 = gx.date.nullDate() ;
   this.GXV117 = 0 ;
   this.GXV118 = "" ;
   this.GXV119 = 0 ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A1028ModeloDocumentoTipo = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1033ModeloDocumentoQtdeVias = 0 ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.A1278LayoutDocumentoConteudo = "" ;
   this.A1284LayoutDocumentoSeq = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1035CaixaBancoNoUltCheque = 0 ;
   this.AV18SdtCheque = [ ] ;
   this.AV5UsrCod = "" ;
   this.AV46EmpresaLogadaId = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.AV31NomeAux = "" ;
   this.Events = {"e11bn2_client": ["ENTER", true] ,"e12bn2_client": ["VTIPOCHEQUE.CLICK", true] ,"e13bn2_client": ["'FECHAR'", true] ,"e14bn2_client": ["VSNAGRUPAR.CLICK", true] ,"e18bn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'subGrid_Rows'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'}],[{av:'AV17SnBoxCheNominal',fld:'vSNBOXCHENOMINAL'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV22QtdeChq',fld:'vQTDECHQ'},{av:'AV70GXV7',fld:'vGXV7'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV34Arquivo',fld:'vARQUIVO'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'subGrid_Rows'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV39ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID'},{av:'AV40ModeloDocumentoId',fld:'vMODELODOCUMENTOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV44ModeloDocumentoQtdeVias',fld:'vMODELODOCUMENTOQTDEVIAS'},{av:'AV48SdtVis',fld:'vSDTVIS'},{av:'AV50ModeloDocumentoTipoImpressao',fld:'vMODELODOCUMENTOTIPOIMPRESSAO'},{av:'A1028ModeloDocumentoTipo',fld:'MODELODOCUMENTOTIPO'},{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'A1033ModeloDocumentoQtdeVias',fld:'MODELODOCUMENTOQTDEVIAS'},{av:'A2017ModeloDocumentoTipoImpressao',fld:'MODELODOCUMENTOTIPOIMPRESSAO'},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'}],[{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV49Idx',fld:'vIDX'},{av:'AV64GXV2',fld:'vGXV2'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV65GXV3',fld:'vGXV3'},{av:'AV66GXV4',fld:'vGXV4'},{av:'AV48SdtVis',fld:'vSDTVIS'},{av:'AV44ModeloDocumentoQtdeVias',fld:'vMODELODOCUMENTOQTDEVIAS'},{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV74GXLvl346',fld:'vGXLVL346'},{av:'AV39ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID'},{av:'AV40ModeloDocumentoId',fld:'vMODELODOCUMENTOID'},{av:'AV50ModeloDocumentoTipoImpressao',fld:'vMODELODOCUMENTOTIPOIMPRESSAO'},{av:'AV75GXLvl361',fld:'vGXLVL361'},{av:'AV76GXLvl369',fld:'vGXLVL369'}]];
   this.EvtParms["VTIPOCHEQUE.CLICK"] = [[{av:'AV17SnBoxCheNominal',fld:'vSNBOXCHENOMINAL'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'gx.fn.getCtrlProperty("GRID","Visible")',ctrl:'GRID',prop:'Visible'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV67GXV5',fld:'vGXV5'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV22QtdeChq',fld:'vQTDECHQ'},{av:'AV70GXV7',fld:'vGXV7'},{av:'AV34Arquivo',fld:'vARQUIVO'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["VSNAGRUPAR.CLICK"] = [[{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37}],[{av:'AV17SnBoxCheNominal',fld:'vSNBOXCHENOMINAL'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV22QtdeChq',fld:'vQTDECHQ'},{av:'AV70GXV7',fld:'vGXV7'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV34Arquivo',fld:'vARQUIVO'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37}],[{av:'AV17SnBoxCheNominal',fld:'vSNBOXCHENOMINAL'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV22QtdeChq',fld:'vQTDECHQ'},{av:'AV70GXV7',fld:'vGXV7'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV34Arquivo',fld:'vARQUIVO'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37}],[{av:'AV17SnBoxCheNominal',fld:'vSNBOXCHENOMINAL'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV22QtdeChq',fld:'vQTDECHQ'},{av:'AV70GXV7',fld:'vGXV7'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV34Arquivo',fld:'vARQUIVO'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV46EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1035CaixaBancoNoUltCheque',fld:'CAIXABANCONOULTCHEQUE'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37}],[{av:'AV17SnBoxCheNominal',fld:'vSNBOXCHENOMINAL'},{av:'AV29SnTipoChePor',fld:'vSNTIPOCHEPOR'},{av:'AV47Tipo',fld:'vTIPO',hsh:true},{av:'AV18SdtCheque',fld:'vSDTCHEQUE'},{av:'AV22QtdeChq',fld:'vQTDECHQ'},{av:'AV70GXV7',fld:'vGXV7'},{av:'AV19SdtChequeItem',fld:'vSDTCHEQUEITEM'},{av:'AV34Arquivo',fld:'vARQUIVO'},{av:'AV68GXV6',fld:'vGXV6'},{av:'AV14TipoCheque',fld:'vTIPOCHEQUE'},{av:'AV10SnAgrupar',fld:'vSNAGRUPAR'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV33CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV11CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV13NoCheque',fld:'vNOCHEQUE'},{av:'AV23SdtNom',fld:'vSDTNOM',grid:37},{av:'AV28NoCheAux',fld:'vNOCHEAUX'},{av:'AV71GXV8',fld:'vGXV8'},{av:'AV30SnExiste',fld:'vSNEXISTE'},{av:'AV72GXV9',fld:'vGXV9'},{av:'AV24SdtNomItem',fld:'vSDTNOMITEM'},{av:'AV31NomeAux',fld:'vNOMEAUX'},{av:'AV36SdtNomLan',fld:'vSDTNOMLAN'},{av:'AV73GXV10',fld:'vGXV10'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV18SdtCheque", "vSDTCHEQUE", 0, "CollLancamentoChqRec.LancamentoChqRecItem");
   this.setVCMap("AV47Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV46EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A1015CaixaBancoId", "CAIXABANCOID", 0, "int");
   this.setVCMap("A1017CaixaBancoDescricao", "CAIXABANCODESCRICAO", 0, "svchar");
   this.setVCMap("A1035CaixaBancoNoUltCheque", "CAIXABANCONOULTCHEQUE", 0, "int");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31NomeAux", "vNOMEAUX", 0, "svchar");
   this.setVCMap("AV18SdtCheque", "vSDTCHEQUE", 0, "CollLancamentoChqRec.LancamentoChqRecItem");
   this.setVCMap("AV47Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV46EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("A1015CaixaBancoId", "CAIXABANCOID", 0, "int");
   this.setVCMap("A1017CaixaBancoDescricao", "CAIXABANCODESCRICAO", 0, "svchar");
   this.setVCMap("A1035CaixaBancoNoUltCheque", "CAIXABANCONOULTCHEQUE", 0, "int");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31NomeAux", "vNOMEAUX", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV18SdtCheque"});
   GridContainer.addRefreshingVar({rfrVar:"AV47Tipo"});
   GridContainer.addRefreshingVar({rfrVar:"AV5UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"AV46EmpresaLogadaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"A1014CaixaBancoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1015CaixaBancoId"});
   GridContainer.addRefreshingVar({rfrVar:"A1017CaixaBancoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A1035CaixaBancoNoUltCheque"});
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar({rfrVar:"AV16EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31NomeAux"});
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   this.addGridBCProperty("Sdtnom", ["TipoDoc"], this.GXValidFnc[38], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["NumeroDoc"], this.GXValidFnc[39], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["CliForId"], this.GXValidFnc[40], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["Nome"], this.GXValidFnc[41], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["Data"], this.GXValidFnc[42], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["QtdeContas"], this.GXValidFnc[43], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["SnImprime"], this.GXValidFnc[44], "AV23SdtNom");
   this.addGridBCProperty("Sdtnom", ["Valor"], this.GXValidFnc[45], "AV23SdtNom");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemissaocheque());
