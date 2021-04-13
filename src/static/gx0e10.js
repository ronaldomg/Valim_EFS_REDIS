/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:17.98
*/
gx.evt.autoSkip = false;
gx.define('gx0e10', false, function () {
   this.ServerClass =  "gx0e10" ;
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
      this.AV10pObsLancamentoFiscalCodigo=gx.fn.getIntegerValue("vPOBSLANCAMENTOFISCALCODIGO",'.') ;
   };
   this.e131qw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141qw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,42];
   this.GXLastCtrlId =42;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0e10",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5488,38,"OBSLANCAMENTOFISCALCODIGO","Obs Lancamento Fiscal Codigo","","ObsLancamentoFiscalCodigo","int",0,"px",4,4,"right",null,[],5488,"ObsLancamentoFiscalCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5484,39,"OBSLANCAMENTOFISCALDESCRICAO","Obs Lancamento Fiscal Descricao","Selecionar","ObsLancamentoFiscalDescricao","svchar",0,"px",70,70,"left",null,[],5484,"ObsLancamentoFiscalDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKOBSLANCAMENTOFISCALCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSLANCAMENTOFISCALCODIGO",gxz:"ZV6cObsLancamentoFiscalCodigo",gxold:"OV6cObsLancamentoFiscalCodigo",gxvar:"AV6cObsLancamentoFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOBSLANCAMENTOFISCALCODIGO",gx.O.AV6cObsLancamentoFiscalCodigo,0)},c2v:function(){gx.O.AV6cObsLancamentoFiscalCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBSLANCAMENTOFISCALCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKOBSLANCAMENTOFISCALDESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSLANCAMENTOFISCALDESCRICAO",gxz:"ZV7cObsLancamentoFiscalDescricao",gxold:"OV7cObsLancamentoFiscalDescricao",gxvar:"AV7cObsLancamentoFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cObsLancamentoFiscalDescricao=Value},v2z:function(Value){gx.O.ZV7cObsLancamentoFiscalDescricao=Value},v2c:function(){gx.fn.setControlValue("vCOBSLANCAMENTOFISCALDESCRICAO",gx.O.AV7cObsLancamentoFiscalDescricao,0)},c2v:function(){gx.O.AV7cObsLancamentoFiscalDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCOBSLANCAMENTOFISCALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKOBSLANCAMENTOFISCALUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSLANCAMENTOFISCALUSUARIOALT",gxz:"ZV8cObsLancamentoFiscalUsuarioAlt",gxold:"OV8cObsLancamentoFiscalUsuarioAlt",gxvar:"AV8cObsLancamentoFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cObsLancamentoFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cObsLancamentoFiscalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCOBSLANCAMENTOFISCALUSUARIOALT",gx.O.AV8cObsLancamentoFiscalUsuarioAlt,0)},c2v:function(){gx.O.AV8cObsLancamentoFiscalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCOBSLANCAMENTOFISCALUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKOBSLANCAMENTOFISCALDATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSLANCAMENTOFISCALDATAHORAALT",gxz:"ZV9cObsLancamentoFiscalDataHoraAlt",gxold:"OV9cObsLancamentoFiscalDataHoraAlt",gxvar:"AV9cObsLancamentoFiscalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cObsLancamentoFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cObsLancamentoFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCOBSLANCAMENTOFISCALDATAHORAALT",gx.O.AV9cObsLancamentoFiscalDataHoraAlt,0)},c2v:function(){gx.O.AV9cObsLancamentoFiscalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCOBSLANCAMENTOFISCALDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALCODIGO",gxz:"Z5488ObsLancamentoFiscalCodigo",gxold:"O5488ObsLancamentoFiscalCodigo",gxvar:"A5488ObsLancamentoFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5488ObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5488ObsLancamentoFiscalCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSLANCAMENTOFISCALCODIGO",row || gx.fn.currentGridRowImpl(36),gx.O.A5488ObsLancamentoFiscalCodigo,0)},c2v:function(){gx.O.A5488ObsLancamentoFiscalCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OBSLANCAMENTOFISCALCODIGO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSLANCAMENTOFISCALDESCRICAO",gxz:"Z5484ObsLancamentoFiscalDescricao",gxold:"O5484ObsLancamentoFiscalDescricao",gxvar:"A5484ObsLancamentoFiscalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5484ObsLancamentoFiscalDescricao=Value},v2z:function(Value){gx.O.Z5484ObsLancamentoFiscalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OBSLANCAMENTOFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(36),gx.O.A5484ObsLancamentoFiscalDescricao,0)},c2v:function(){gx.O.A5484ObsLancamentoFiscalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OBSLANCAMENTOFISCALDESCRICAO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE4",grid:0};
   this.AV6cObsLancamentoFiscalCodigo = 0 ;
   this.ZV6cObsLancamentoFiscalCodigo = 0 ;
   this.OV6cObsLancamentoFiscalCodigo = 0 ;
   this.AV7cObsLancamentoFiscalDescricao = "" ;
   this.ZV7cObsLancamentoFiscalDescricao = "" ;
   this.OV7cObsLancamentoFiscalDescricao = "" ;
   this.AV8cObsLancamentoFiscalUsuarioAlt = "" ;
   this.ZV8cObsLancamentoFiscalUsuarioAlt = "" ;
   this.OV8cObsLancamentoFiscalUsuarioAlt = "" ;
   this.AV9cObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.OV9cObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5488ObsLancamentoFiscalCodigo = 0 ;
   this.O5488ObsLancamentoFiscalCodigo = 0 ;
   this.Z5484ObsLancamentoFiscalDescricao = "" ;
   this.O5484ObsLancamentoFiscalDescricao = "" ;
   this.AV6cObsLancamentoFiscalCodigo = 0 ;
   this.AV7cObsLancamentoFiscalDescricao = "" ;
   this.AV8cObsLancamentoFiscalUsuarioAlt = "" ;
   this.AV9cObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.AV10pObsLancamentoFiscalCodigo = 0 ;
   this.A5486ObsLancamentoFiscalDataHoraAlt = gx.date.nullDate() ;
   this.A5485ObsLancamentoFiscalUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A5488ObsLancamentoFiscalCodigo = 0 ;
   this.A5484ObsLancamentoFiscalDescricao = "" ;
   this.Events = {"e131qw2_client": ["ENTER", true] ,"e141qw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObsLancamentoFiscalCodigo',fld:'vCOBSLANCAMENTOFISCALCODIGO'},{av:'AV7cObsLancamentoFiscalDescricao',fld:'vCOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV8cObsLancamentoFiscalUsuarioAlt',fld:'vCOBSLANCAMENTOFISCALUSUARIOALT'},{av:'AV9cObsLancamentoFiscalDataHoraAlt',fld:'vCOBSLANCAMENTOFISCALDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5488ObsLancamentoFiscalCodigo',fld:'OBSLANCAMENTOFISCALCODIGO'}],[{av:'AV10pObsLancamentoFiscalCodigo',fld:'vPOBSLANCAMENTOFISCALCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObsLancamentoFiscalCodigo',fld:'vCOBSLANCAMENTOFISCALCODIGO'},{av:'AV7cObsLancamentoFiscalDescricao',fld:'vCOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV8cObsLancamentoFiscalUsuarioAlt',fld:'vCOBSLANCAMENTOFISCALUSUARIOALT'},{av:'AV9cObsLancamentoFiscalDataHoraAlt',fld:'vCOBSLANCAMENTOFISCALDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObsLancamentoFiscalCodigo',fld:'vCOBSLANCAMENTOFISCALCODIGO'},{av:'AV7cObsLancamentoFiscalDescricao',fld:'vCOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV8cObsLancamentoFiscalUsuarioAlt',fld:'vCOBSLANCAMENTOFISCALUSUARIOALT'},{av:'AV9cObsLancamentoFiscalDataHoraAlt',fld:'vCOBSLANCAMENTOFISCALDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObsLancamentoFiscalCodigo',fld:'vCOBSLANCAMENTOFISCALCODIGO'},{av:'AV7cObsLancamentoFiscalDescricao',fld:'vCOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV8cObsLancamentoFiscalUsuarioAlt',fld:'vCOBSLANCAMENTOFISCALUSUARIOALT'},{av:'AV9cObsLancamentoFiscalDataHoraAlt',fld:'vCOBSLANCAMENTOFISCALDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObsLancamentoFiscalCodigo',fld:'vCOBSLANCAMENTOFISCALCODIGO'},{av:'AV7cObsLancamentoFiscalDescricao',fld:'vCOBSLANCAMENTOFISCALDESCRICAO'},{av:'AV8cObsLancamentoFiscalUsuarioAlt',fld:'vCOBSLANCAMENTOFISCALUSUARIOALT'},{av:'AV9cObsLancamentoFiscalDataHoraAlt',fld:'vCOBSLANCAMENTOFISCALDATAHORAALT'}],[]];
   this.setVCMap("AV10pObsLancamentoFiscalCodigo", "vPOBSLANCAMENTOFISCALCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0e10());
