/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:14.77
*/
gx.evt.autoSkip = false;
gx.define('gx0hb0', false, function () {
   this.ServerClass =  "gx0hb0" ;
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
      this.AV9pSpedPisCofinsFilial=gx.fn.getIntegerValue("vPSPEDPISCOFINSFILIAL",'.') ;
      this.AV10pSpedPisCofinsRegistro=gx.fn.getControlValue("vPSPEDPISCOFINSREGISTRO") ;
      this.AV11pSpedPisCofinsSeq=gx.fn.getIntegerValue("vPSPEDPISCOFINSSEQ",'.') ;
   };
   this.e131y32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141y31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0hb0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8452,33,"SPEDPISCOFINSFILIAL","Sped Pis Cofins Filial","","SpedPisCofinsFilial","int",0,"px",7,7,"right",null,[],8452,"SpedPisCofinsFilial",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8453,34,"SPEDPISCOFINSREGISTRO","Sped Pis Cofins Registro","","SpedPisCofinsRegistro","char",0,"px",1,1,"left",null,[],8453,"SpedPisCofinsRegistro",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8454,35,"SPEDPISCOFINSSEQ","Sped Pis Cofins Seq","Selecionar","SpedPisCofinsSeq","int",0,"px",6,6,"right",null,[],8454,"SpedPisCofinsSeq",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSPEDPISCOFINSFILIAL", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDPISCOFINSFILIAL",gxz:"ZV6cSpedPisCofinsFilial",gxold:"OV6cSpedPisCofinsFilial",gxvar:"AV6cSpedPisCofinsFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSpedPisCofinsFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cSpedPisCofinsFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSPEDPISCOFINSFILIAL",gx.O.AV6cSpedPisCofinsFilial,0)},c2v:function(){gx.O.AV6cSpedPisCofinsFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSPEDPISCOFINSFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSPEDPISCOFINSREGISTRO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDPISCOFINSREGISTRO",gxz:"ZV7cSpedPisCofinsRegistro",gxold:"OV7cSpedPisCofinsRegistro",gxvar:"AV7cSpedPisCofinsRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSpedPisCofinsRegistro=Value},v2z:function(Value){gx.O.ZV7cSpedPisCofinsRegistro=Value},v2c:function(){gx.fn.setControlValue("vCSPEDPISCOFINSREGISTRO",gx.O.AV7cSpedPisCofinsRegistro,0)},c2v:function(){gx.O.AV7cSpedPisCofinsRegistro=this.val()},val:function(){return gx.fn.getControlValue("vCSPEDPISCOFINSREGISTRO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSPEDPISCOFINSSEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDPISCOFINSSEQ",gxz:"ZV8cSpedPisCofinsSeq",gxold:"OV8cSpedPisCofinsSeq",gxvar:"AV8cSpedPisCofinsSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSpedPisCofinsSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSpedPisCofinsSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSPEDPISCOFINSSEQ",gx.O.AV8cSpedPisCofinsSeq,0)},c2v:function(){gx.O.AV8cSpedPisCofinsSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSPEDPISCOFINSSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSFILIAL",gxz:"Z8452SpedPisCofinsFilial",gxold:"O8452SpedPisCofinsFilial",gxvar:"A8452SpedPisCofinsFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8452SpedPisCofinsFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8452SpedPisCofinsFilial=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SPEDPISCOFINSFILIAL",row || gx.fn.currentGridRowImpl(31),gx.O.A8452SpedPisCofinsFilial,0)},c2v:function(){gx.O.A8452SpedPisCofinsFilial=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SPEDPISCOFINSFILIAL",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSREGISTRO",gxz:"Z8453SpedPisCofinsRegistro",gxold:"O8453SpedPisCofinsRegistro",gxvar:"A8453SpedPisCofinsRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8453SpedPisCofinsRegistro=Value},v2z:function(Value){gx.O.Z8453SpedPisCofinsRegistro=Value},v2c:function(row){gx.fn.setGridControlValue("SPEDPISCOFINSREGISTRO",row || gx.fn.currentGridRowImpl(31),gx.O.A8453SpedPisCofinsRegistro,0)},c2v:function(){gx.O.A8453SpedPisCofinsRegistro=this.val()},val:function(row){return gx.fn.getGridControlValue("SPEDPISCOFINSREGISTRO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSSEQ",gxz:"Z8454SpedPisCofinsSeq",gxold:"O8454SpedPisCofinsSeq",gxvar:"A8454SpedPisCofinsSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8454SpedPisCofinsSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8454SpedPisCofinsSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SPEDPISCOFINSSEQ",row || gx.fn.currentGridRowImpl(31),gx.O.A8454SpedPisCofinsSeq,0)},c2v:function(){gx.O.A8454SpedPisCofinsSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SPEDPISCOFINSSEQ",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cSpedPisCofinsFilial = 0 ;
   this.ZV6cSpedPisCofinsFilial = 0 ;
   this.OV6cSpedPisCofinsFilial = 0 ;
   this.AV7cSpedPisCofinsRegistro = "" ;
   this.ZV7cSpedPisCofinsRegistro = "" ;
   this.OV7cSpedPisCofinsRegistro = "" ;
   this.AV8cSpedPisCofinsSeq = 0 ;
   this.ZV8cSpedPisCofinsSeq = 0 ;
   this.OV8cSpedPisCofinsSeq = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8452SpedPisCofinsFilial = 0 ;
   this.O8452SpedPisCofinsFilial = 0 ;
   this.Z8453SpedPisCofinsRegistro = "" ;
   this.O8453SpedPisCofinsRegistro = "" ;
   this.Z8454SpedPisCofinsSeq = 0 ;
   this.O8454SpedPisCofinsSeq = 0 ;
   this.AV6cSpedPisCofinsFilial = 0 ;
   this.AV7cSpedPisCofinsRegistro = "" ;
   this.AV8cSpedPisCofinsSeq = 0 ;
   this.AV9pSpedPisCofinsFilial = 0 ;
   this.AV10pSpedPisCofinsRegistro = "" ;
   this.AV11pSpedPisCofinsSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8452SpedPisCofinsFilial = 0 ;
   this.A8453SpedPisCofinsRegistro = "" ;
   this.A8454SpedPisCofinsSeq = 0 ;
   this.Events = {"e131y32_client": ["ENTER", true] ,"e141y31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedPisCofinsFilial',fld:'vCSPEDPISCOFINSFILIAL'},{av:'AV7cSpedPisCofinsRegistro',fld:'vCSPEDPISCOFINSREGISTRO'},{av:'AV8cSpedPisCofinsSeq',fld:'vCSPEDPISCOFINSSEQ'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8452SpedPisCofinsFilial',fld:'SPEDPISCOFINSFILIAL'},{av:'A8453SpedPisCofinsRegistro',fld:'SPEDPISCOFINSREGISTRO'},{av:'A8454SpedPisCofinsSeq',fld:'SPEDPISCOFINSSEQ'}],[{av:'AV9pSpedPisCofinsFilial',fld:'vPSPEDPISCOFINSFILIAL'},{av:'AV10pSpedPisCofinsRegistro',fld:'vPSPEDPISCOFINSREGISTRO'},{av:'AV11pSpedPisCofinsSeq',fld:'vPSPEDPISCOFINSSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedPisCofinsFilial',fld:'vCSPEDPISCOFINSFILIAL'},{av:'AV7cSpedPisCofinsRegistro',fld:'vCSPEDPISCOFINSREGISTRO'},{av:'AV8cSpedPisCofinsSeq',fld:'vCSPEDPISCOFINSSEQ'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedPisCofinsFilial',fld:'vCSPEDPISCOFINSFILIAL'},{av:'AV7cSpedPisCofinsRegistro',fld:'vCSPEDPISCOFINSREGISTRO'},{av:'AV8cSpedPisCofinsSeq',fld:'vCSPEDPISCOFINSSEQ'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedPisCofinsFilial',fld:'vCSPEDPISCOFINSFILIAL'},{av:'AV7cSpedPisCofinsRegistro',fld:'vCSPEDPISCOFINSREGISTRO'},{av:'AV8cSpedPisCofinsSeq',fld:'vCSPEDPISCOFINSSEQ'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedPisCofinsFilial',fld:'vCSPEDPISCOFINSFILIAL'},{av:'AV7cSpedPisCofinsRegistro',fld:'vCSPEDPISCOFINSREGISTRO'},{av:'AV8cSpedPisCofinsSeq',fld:'vCSPEDPISCOFINSSEQ'}],[]];
   this.setVCMap("AV9pSpedPisCofinsFilial", "vPSPEDPISCOFINSFILIAL", 0, "int");
   this.setVCMap("AV10pSpedPisCofinsRegistro", "vPSPEDPISCOFINSREGISTRO", 0, "char");
   this.setVCMap("AV11pSpedPisCofinsSeq", "vPSPEDPISCOFINSSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0hb0());
