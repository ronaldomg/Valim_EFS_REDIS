/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:15.80
*/
gx.evt.autoSkip = false;
gx.define('gx0np0', false, function () {
   this.ServerClass =  "gx0np0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV10pNotaServicoSeq=gx.fn.getIntegerValue("vPNOTASERVICOSEQ",'.') ;
      this.AV11pNotaServicoParcelaSeq=gx.fn.getIntegerValue("vPNOTASERVICOPARCELASEQ",'.') ;
   };
   this.e132fs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142fs1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,44];
   this.GXLastCtrlId =44;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0np0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9348,38,"NOTASERVICOSEQ","Sequencia da Nota","","NotaServicoSeq","int",0,"px",9,9,"right",null,[],9348,"NotaServicoSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11591,39,"NOTASERVICOPARCELASEQ","Parcela Seq","","NotaServicoParcelaSeq","int",0,"px",4,4,"right",null,[],11591,"NotaServicoParcelaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11592,40,"NOTASERVICOPARCELACONTAEMPID","Emp Id","","NotaServicoParcelaContaEmpId","char",0,"px",10,10,"left",null,[],11592,"NotaServicoParcelaContaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11593,41,"NOTASERVICOPARCELACONTANUM","Conta Num","","NotaServicoParcelaContaNum","int",0,"px",8,8,"right",null,[],11593,"NotaServicoParcelaContaNum",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNOTASERVICOSEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOSEQ",gxz:"ZV6cNotaServicoSeq",gxold:"OV6cNotaServicoSeq",gxvar:"AV6cNotaServicoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cNotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOSEQ",gx.O.AV6cNotaServicoSeq,0)},c2v:function(){gx.O.AV6cNotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNOTASERVICOPARCELASEQ", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARCELASEQ",gxz:"ZV7cNotaServicoParcelaSeq",gxold:"OV7cNotaServicoParcelaSeq",gxvar:"AV7cNotaServicoParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNotaServicoParcelaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cNotaServicoParcelaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARCELASEQ",gx.O.AV7cNotaServicoParcelaSeq,0)},c2v:function(){gx.O.AV7cNotaServicoParcelaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARCELASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTAEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARCELACONTAEMPID",gxz:"ZV8cNotaServicoParcelaContaEmpId",gxold:"OV8cNotaServicoParcelaContaEmpId",gxvar:"AV8cNotaServicoParcelaContaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNotaServicoParcelaContaEmpId=Value},v2z:function(Value){gx.O.ZV8cNotaServicoParcelaContaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARCELACONTAEMPID",gx.O.AV8cNotaServicoParcelaContaEmpId,0)},c2v:function(){gx.O.AV8cNotaServicoParcelaContaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCNOTASERVICOPARCELACONTAEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTANUM", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARCELACONTANUM",gxz:"ZV9cNotaServicoParcelaContaNum",gxold:"OV9cNotaServicoParcelaContaNum",gxvar:"AV9cNotaServicoParcelaContaNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cNotaServicoParcelaContaNum=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cNotaServicoParcelaContaNum=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARCELACONTANUM",gx.O.AV9cNotaServicoParcelaContaNum,0)},c2v:function(){gx.O.AV9cNotaServicoParcelaContaNum=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARCELACONTANUM",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOSEQ",gxz:"Z9348NotaServicoSeq",gxold:"O9348NotaServicoSeq",gxvar:"A9348NotaServicoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9348NotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9348NotaServicoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOSEQ",row || gx.fn.currentGridRowImpl(36),gx.O.A9348NotaServicoSeq,0)},c2v:function(){gx.O.A9348NotaServicoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NOTASERVICOSEQ",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELASEQ",gxz:"Z11591NotaServicoParcelaSeq",gxold:"O11591NotaServicoParcelaSeq",gxvar:"A11591NotaServicoParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11591NotaServicoParcelaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11591NotaServicoParcelaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOPARCELASEQ",row || gx.fn.currentGridRowImpl(36),gx.O.A11591NotaServicoParcelaSeq,0)},c2v:function(){gx.O.A11591NotaServicoParcelaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NOTASERVICOPARCELASEQ",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTAEMPID",gxz:"Z11592NotaServicoParcelaContaEmpId",gxold:"O11592NotaServicoParcelaContaEmpId",gxvar:"A11592NotaServicoParcelaContaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11592NotaServicoParcelaContaEmpId=Value},v2z:function(Value){gx.O.Z11592NotaServicoParcelaContaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOPARCELACONTAEMPID",row || gx.fn.currentGridRowImpl(36),gx.O.A11592NotaServicoParcelaContaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11592NotaServicoParcelaContaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("NOTASERVICOPARCELACONTAEMPID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTANUM",gxz:"Z11593NotaServicoParcelaContaNum",gxold:"O11593NotaServicoParcelaContaNum",gxvar:"A11593NotaServicoParcelaContaNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11593NotaServicoParcelaContaNum=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11593NotaServicoParcelaContaNum=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NOTASERVICOPARCELACONTANUM",row || gx.fn.currentGridRowImpl(36),gx.O.A11593NotaServicoParcelaContaNum,0)},c2v:function(){gx.O.A11593NotaServicoParcelaContaNum=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NOTASERVICOPARCELACONTANUM",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   this.AV6cNotaServicoSeq = 0 ;
   this.ZV6cNotaServicoSeq = 0 ;
   this.OV6cNotaServicoSeq = 0 ;
   this.AV7cNotaServicoParcelaSeq = 0 ;
   this.ZV7cNotaServicoParcelaSeq = 0 ;
   this.OV7cNotaServicoParcelaSeq = 0 ;
   this.AV8cNotaServicoParcelaContaEmpId = "" ;
   this.ZV8cNotaServicoParcelaContaEmpId = "" ;
   this.OV8cNotaServicoParcelaContaEmpId = "" ;
   this.AV9cNotaServicoParcelaContaNum = 0 ;
   this.ZV9cNotaServicoParcelaContaNum = 0 ;
   this.OV9cNotaServicoParcelaContaNum = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9348NotaServicoSeq = 0 ;
   this.O9348NotaServicoSeq = 0 ;
   this.Z11591NotaServicoParcelaSeq = 0 ;
   this.O11591NotaServicoParcelaSeq = 0 ;
   this.Z11592NotaServicoParcelaContaEmpId = "" ;
   this.O11592NotaServicoParcelaContaEmpId = "" ;
   this.Z11593NotaServicoParcelaContaNum = 0 ;
   this.O11593NotaServicoParcelaContaNum = 0 ;
   this.AV6cNotaServicoSeq = 0 ;
   this.AV7cNotaServicoParcelaSeq = 0 ;
   this.AV8cNotaServicoParcelaContaEmpId = "" ;
   this.AV9cNotaServicoParcelaContaNum = 0 ;
   this.AV10pNotaServicoSeq = 0 ;
   this.AV11pNotaServicoParcelaSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A9348NotaServicoSeq = 0 ;
   this.A11591NotaServicoParcelaSeq = 0 ;
   this.A11592NotaServicoParcelaContaEmpId = "" ;
   this.A11593NotaServicoParcelaContaNum = 0 ;
   this.Events = {"e132fs2_client": ["ENTER", true] ,"e142fs1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNotaServicoSeq',fld:'vCNOTASERVICOSEQ'},{av:'AV7cNotaServicoParcelaSeq',fld:'vCNOTASERVICOPARCELASEQ'},{av:'AV8cNotaServicoParcelaContaEmpId',fld:'vCNOTASERVICOPARCELACONTAEMPID'},{av:'AV9cNotaServicoParcelaContaNum',fld:'vCNOTASERVICOPARCELACONTANUM'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A11591NotaServicoParcelaSeq',fld:'NOTASERVICOPARCELASEQ'}],[{av:'AV10pNotaServicoSeq',fld:'vPNOTASERVICOSEQ'},{av:'AV11pNotaServicoParcelaSeq',fld:'vPNOTASERVICOPARCELASEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNotaServicoSeq',fld:'vCNOTASERVICOSEQ'},{av:'AV7cNotaServicoParcelaSeq',fld:'vCNOTASERVICOPARCELASEQ'},{av:'AV8cNotaServicoParcelaContaEmpId',fld:'vCNOTASERVICOPARCELACONTAEMPID'},{av:'AV9cNotaServicoParcelaContaNum',fld:'vCNOTASERVICOPARCELACONTANUM'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNotaServicoSeq',fld:'vCNOTASERVICOSEQ'},{av:'AV7cNotaServicoParcelaSeq',fld:'vCNOTASERVICOPARCELASEQ'},{av:'AV8cNotaServicoParcelaContaEmpId',fld:'vCNOTASERVICOPARCELACONTAEMPID'},{av:'AV9cNotaServicoParcelaContaNum',fld:'vCNOTASERVICOPARCELACONTANUM'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNotaServicoSeq',fld:'vCNOTASERVICOSEQ'},{av:'AV7cNotaServicoParcelaSeq',fld:'vCNOTASERVICOPARCELASEQ'},{av:'AV8cNotaServicoParcelaContaEmpId',fld:'vCNOTASERVICOPARCELACONTAEMPID'},{av:'AV9cNotaServicoParcelaContaNum',fld:'vCNOTASERVICOPARCELACONTANUM'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNotaServicoSeq',fld:'vCNOTASERVICOSEQ'},{av:'AV7cNotaServicoParcelaSeq',fld:'vCNOTASERVICOPARCELASEQ'},{av:'AV8cNotaServicoParcelaContaEmpId',fld:'vCNOTASERVICOPARCELACONTAEMPID'},{av:'AV9cNotaServicoParcelaContaNum',fld:'vCNOTASERVICOPARCELACONTANUM'}],[]];
   this.setVCMap("AV10pNotaServicoSeq", "vPNOTASERVICOSEQ", 0, "int");
   this.setVCMap("AV11pNotaServicoParcelaSeq", "vPNOTASERVICOPARCELASEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0np0());
