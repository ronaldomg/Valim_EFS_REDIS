/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:19:8.77
*/
gx.evt.autoSkip = false;
gx.define('hautorizaverbaconvenio', false, function () {
   this.ServerClass =  "hautorizaverbaconvenio" ;
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
      this.AV12SdtSaldo=gx.fn.getControlValue("vSDTSALDO") ;
      this.AV25NomeTela=gx.fn.getControlValue("vNOMETELA") ;
   };
   this.e11cu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12cu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15cu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,9,10,11,12,13,14,15];
   this.GXLastCtrlId =15;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",7,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hautorizaverbaconvenio",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Contacontabilid",8,"vCONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],"Contacontabilid","ContaContabilId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Contacontabilnome",9,"vCONTACONTABILNOME","Descrição da Conta","","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],"Contacontabilnome","ContaContabilNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Valortotal",10,"vVALORTOTAL","Verba Total","","ValorTotal","decimal",0,"px",22,22,"right",null,[],"Valortotal","ValorTotal",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Valorliberado",11,"vVALORLIBERADO","Já Liberado","","ValorLiberado","decimal",0,"px",22,22,"right",null,[],"Valorliberado","ValorLiberado",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Valorutilizado",12,"vVALORUTILIZADO","Utilizado","","ValorUtilizado","decimal",0,"px",22,22,"right",null,[],"Valorutilizado","ValorUtilizado",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Valorsaldo",13,"vVALORSALDO","Saldo","","ValorSaldo","decimal",0,"px",22,22,"right",null,[],"Valorsaldo","ValorSaldo",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Snerro","vSNERRO",14,0,"px",17,"px",null,"","","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[8]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV17ContaContabilId",gxold:"OV17ContaContabilId",gxvar:"AV17ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17ContaContabilId=Value},v2z:function(Value){gx.O.ZV17ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILID",row || gx.fn.currentGridRowImpl(7),gx.O.AV17ContaContabilId,0)},c2v:function(){gx.O.AV17ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILID",row || gx.fn.currentGridRowImpl(7))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV18ContaContabilNome",gxold:"OV18ContaContabilNome",gxvar:"AV18ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18ContaContabilNome=Value},v2z:function(Value){gx.O.ZV18ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILNOME",row || gx.fn.currentGridRowImpl(7),gx.O.AV18ContaContabilNome,0)},c2v:function(){gx.O.AV18ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILNOME",row || gx.fn.currentGridRowImpl(7))},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV19ValorTotal",gxold:"OV19ValorTotal",gxvar:"AV19ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORTOTAL",row || gx.fn.currentGridRowImpl(7),gx.O.AV19ValorTotal,2,',')},c2v:function(){gx.O.AV19ValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORTOTAL",row || gx.fn.currentGridRowImpl(7),'.',',')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLIBERADO",gxz:"ZV20ValorLiberado",gxold:"OV20ValorLiberado",gxvar:"AV20ValorLiberado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20ValorLiberado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20ValorLiberado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORLIBERADO",row || gx.fn.currentGridRowImpl(7),gx.O.AV20ValorLiberado,2,',')},c2v:function(){gx.O.AV20ValorLiberado=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORLIBERADO",row || gx.fn.currentGridRowImpl(7),'.',',')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORUTILIZADO",gxz:"ZV21ValorUtilizado",gxold:"OV21ValorUtilizado",gxvar:"AV21ValorUtilizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21ValorUtilizado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21ValorUtilizado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORUTILIZADO",row || gx.fn.currentGridRowImpl(7),gx.O.AV21ValorUtilizado,2,',')},c2v:function(){gx.O.AV21ValorUtilizado=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORUTILIZADO",row || gx.fn.currentGridRowImpl(7),'.',',')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORSALDO",gxz:"ZV22ValorSaldo",gxold:"OV22ValorSaldo",gxvar:"AV22ValorSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22ValorSaldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22ValorSaldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORSALDO",row || gx.fn.currentGridRowImpl(7),gx.O.AV22ValorSaldo,2,',')},c2v:function(){gx.O.AV22ValorSaldo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORSALDO",row || gx.fn.currentGridRowImpl(7),'.',',')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:7,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV16SnErro",gxold:"OV16SnErro",gxvar:"AV16SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16SnErro=Value},v2z:function(Value){gx.O.ZV16SnErro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNERRO",row || gx.fn.currentGridRowImpl(7),gx.O.AV16SnErro,gx.O.AV31Snerro_GXI)},c2v:function(){gx.O.AV31Snerro_GXI=this.val_GXI();gx.O.AV16SnErro=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNERRO",row || gx.fn.currentGridRowImpl(7))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNERRO_GXI",row || gx.fn.currentGridRowImpl(7))}, gxvar_GXI:'AV31Snerro_GXI',nac:gx.falseFn};
   GXValidFnc[15]={fld:"DIV2", format:2,grid:0};
   this.ZV17ContaContabilId = "" ;
   this.OV17ContaContabilId = "" ;
   this.ZV18ContaContabilNome = "" ;
   this.OV18ContaContabilNome = "" ;
   this.ZV19ValorTotal = 0 ;
   this.OV19ValorTotal = 0 ;
   this.ZV20ValorLiberado = 0 ;
   this.OV20ValorLiberado = 0 ;
   this.ZV21ValorUtilizado = 0 ;
   this.OV21ValorUtilizado = 0 ;
   this.ZV22ValorSaldo = 0 ;
   this.OV22ValorSaldo = 0 ;
   this.ZV16SnErro = "" ;
   this.OV16SnErro = "" ;
   this.AV25NomeTela = "" ;
   this.AV17ContaContabilId = "" ;
   this.AV18ContaContabilNome = "" ;
   this.AV19ValorTotal = 0 ;
   this.AV20ValorLiberado = 0 ;
   this.AV21ValorUtilizado = 0 ;
   this.AV22ValorSaldo = 0 ;
   this.AV16SnErro = "" ;
   this.AV12SdtSaldo = [ ] ;
   this.Events = {"e11cu2_client": ["ENTER", true] ,"e12cu2_client": ["'FECHAR'", true] ,"e15cu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12SdtSaldo',fld:'vSDTSALDO'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23SnOk',fld:'vSNOK'}],[{av:'AV23SnOk',fld:'vSNOK'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23SnOk',fld:'vSNOK'}],[{av:'AV23SnOk',fld:'vSNOK'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV12SdtSaldo',fld:'vSDTSALDO'}],[{av:'AV30GXV1',fld:'vGXV1'},{av:'AV13SdtSaldoItem',fld:'vSDTSALDOITEM'},{av:'AV17ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV18ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV20ValorLiberado',fld:'vVALORLIBERADO'},{av:'AV22ValorSaldo',fld:'vVALORSALDO'},{av:'AV19ValorTotal',fld:'vVALORTOTAL'},{av:'AV21ValorUtilizado',fld:'vVALORUTILIZADO'},{av:'AV16SnErro',fld:'vSNERRO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12SdtSaldo',fld:'vSDTSALDO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12SdtSaldo',fld:'vSDTSALDO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12SdtSaldo',fld:'vSDTSALDO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12SdtSaldo',fld:'vSDTSALDO'}],[]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV12SdtSaldo", "vSDTSALDO", 0, "CollSaldoConvenio.SaldoConvenioItem");
   this.setVCMap("AV25NomeTela", "vNOMETELA", 0, "svchar");
   this.setVCMap("AV12SdtSaldo", "vSDTSALDO", 0, "CollSaldoConvenio.SaldoConvenioItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV12SdtSaldo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hautorizaverbaconvenio());
