/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:29.35
*/
gx.evt.autoSkip = false;
gx.define('himportcblcobolapur', false, function () {
   this.ServerClass =  "himportcblcobolapur" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'ADD'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV11LancApu=gx.fn.getControlValue("vLANCAPU") ;
   };
   this.e13bx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11bx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12bx2_client=function()
   {
      this.executeServerEvent("'ADD'", true, null, false, false);
   };
   this.e14bx2_client=function()
   {
      this.executeServerEvent("'LIMPARSDT'", false, null, false, false);
   };
   this.e17bx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,10,11,12,13,14,15,16];
   this.GXLastCtrlId =16;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"himportcblcobolapur",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Codigo",10,"vCODIGO","Codigo","","Codigo","int",0,"px",7,7,"right",null,[],"Codigo","Codigo",false,0,false,false,"AttributeAlinhadoDireita",1,"");
   Grid1Container.addSingleLineEdit("Mes",11,"vMES","Mês","","Mes","int",0,"px",2,2,"right",null,[],"Mes","Mes",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Ano",12,"vANO","Ano","","Ano","int",0,"px",4,4,"right",null,[],"Ano","Ano",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lote",13,"vLOTE","Lote","","Lote","int",0,"px",4,4,"right",null,[],"Lote","Lote",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lancamentocontabilidini",14,"vLANCAMENTOCONTABILIDINI","Nº Lançamento Inicial","","LancamentoContabilIdIni","int",0,"px",8,8,"right",null,[],"Lancamentocontabilidini","LancamentoContabilIdIni",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lancamentocontabilidfim",15,"vLANCAMENTOCONTABILIDFIM","Nº Lançamento Final","","LancamentoContabilIdFim","int",0,"px",8,8,"right",null,[],"Lancamentocontabilidfim","LancamentoContabilIdFim",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"IMAGE1",grid:0};
   GXValidFnc[8]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[10]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGO",gxz:"ZV18Codigo",gxold:"OV18Codigo",gxvar:"AV18Codigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18Codigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Codigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCODIGO",row || gx.fn.currentGridRowImpl(9),gx.O.AV18Codigo,0)},c2v:function(){gx.O.AV18Codigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCODIGO",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV13Mes",gxold:"OV13Mes",gxvar:"AV13Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Mes=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vMES",row || gx.fn.currentGridRowImpl(9),gx.O.AV13Mes,0)},c2v:function(){gx.O.AV13Mes=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vMES",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV14Ano",gxold:"OV14Ano",gxvar:"AV14Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Ano=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vANO",row || gx.fn.currentGridRowImpl(9),gx.O.AV14Ano,0)},c2v:function(){gx.O.AV14Ano=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vANO",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE",gxz:"ZV15Lote",gxold:"OV15Lote",gxvar:"AV15Lote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15Lote=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Lote=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vLOTE",row || gx.fn.currentGridRowImpl(9),gx.O.AV15Lote,0)},c2v:function(){gx.O.AV15Lote=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vLOTE",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILIDINI",gxz:"ZV16LancamentoContabilIdIni",gxold:"OV16LancamentoContabilIdIni",gxvar:"AV16LancamentoContabilIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16LancamentoContabilIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16LancamentoContabilIdIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vLANCAMENTOCONTABILIDINI",row || gx.fn.currentGridRowImpl(9),gx.O.AV16LancamentoContabilIdIni,0)},c2v:function(){gx.O.AV16LancamentoContabilIdIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vLANCAMENTOCONTABILIDINI",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILIDFIM",gxz:"ZV17LancamentoContabilIdFim",gxold:"OV17LancamentoContabilIdFim",gxvar:"AV17LancamentoContabilIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17LancamentoContabilIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17LancamentoContabilIdFim=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vLANCAMENTOCONTABILIDFIM",row || gx.fn.currentGridRowImpl(9),gx.O.AV17LancamentoContabilIdFim,0)},c2v:function(){gx.O.AV17LancamentoContabilIdFim=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vLANCAMENTOCONTABILIDFIM",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"DIV2", format:2,grid:0};
   this.ZV18Codigo = 0 ;
   this.OV18Codigo = 0 ;
   this.ZV13Mes = 0 ;
   this.OV13Mes = 0 ;
   this.ZV14Ano = 0 ;
   this.OV14Ano = 0 ;
   this.ZV15Lote = 0 ;
   this.OV15Lote = 0 ;
   this.ZV16LancamentoContabilIdIni = 0 ;
   this.OV16LancamentoContabilIdIni = 0 ;
   this.ZV17LancamentoContabilIdFim = 0 ;
   this.OV17LancamentoContabilIdFim = 0 ;
   this.AV18Codigo = 0 ;
   this.AV13Mes = 0 ;
   this.AV14Ano = 0 ;
   this.AV15Lote = 0 ;
   this.AV16LancamentoContabilIdIni = 0 ;
   this.AV17LancamentoContabilIdFim = 0 ;
   this.AV11LancApu = [ ] ;
   this.Events = {"e13bx2_client": ["ENTER", true] ,"e11bx2_client": ["'FECHAR'", true] ,"e12bx2_client": ["'ADD'", true] ,"e14bx2_client": ["'LIMPARSDT'", true] ,"e17bx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11LancApu',fld:'vLANCAPU'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11LancApu',fld:'vLANCAPU'},{av:'AV18Codigo',fld:'vCODIGO',grid:9},{av:'AV13Mes',fld:'vMES',grid:9},{av:'AV14Ano',fld:'vANO',grid:9},{av:'AV15Lote',fld:'vLOTE',grid:9},{av:'AV16LancamentoContabilIdIni',fld:'vLANCAMENTOCONTABILIDINI',grid:9},{av:'AV17LancamentoContabilIdFim',fld:'vLANCAMENTOCONTABILIDFIM',grid:9}],[{av:'AV27GXV3',fld:'vGXV3'},{av:'AV12LancApuItem',fld:'vLANCAPUITEM'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV11LancApu',fld:'vLANCAPU'}],[{av:'AV24GXV1',fld:'vGXV1'},{av:'AV12LancApuItem',fld:'vLANCAPUITEM'},{av:'AV18Codigo',fld:'vCODIGO'},{av:'AV13Mes',fld:'vMES'},{av:'AV14Ano',fld:'vANO'},{av:'AV15Lote',fld:'vLOTE'},{av:'AV16LancamentoContabilIdIni',fld:'vLANCAMENTOCONTABILIDINI'},{av:'AV17LancamentoContabilIdFim',fld:'vLANCAMENTOCONTABILIDFIM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ADD'"] = [[{av:'AV11LancApu',fld:'vLANCAPU'},{av:'AV18Codigo',fld:'vCODIGO',grid:9},{av:'AV13Mes',fld:'vMES',grid:9},{av:'AV14Ano',fld:'vANO',grid:9},{av:'AV15Lote',fld:'vLOTE',grid:9},{av:'AV16LancamentoContabilIdIni',fld:'vLANCAMENTOCONTABILIDINI',grid:9},{av:'AV17LancamentoContabilIdFim',fld:'vLANCAMENTOCONTABILIDFIM',grid:9}],[{av:'AV19ErroLinha',fld:'vERROLINHA'},{av:'AV25GXV2',fld:'vGXV2'},{av:'AV12LancApuItem',fld:'vLANCAPUITEM'},{av:'AV11LancApu',fld:'vLANCAPU'},{av:'AV27GXV3',fld:'vGXV3'}]];
   this.EvtParms["'LIMPARSDT'"] = [[],[{av:'AV11LancApu',fld:'vLANCAPU'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11LancApu',fld:'vLANCAPU'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11LancApu',fld:'vLANCAPU'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11LancApu',fld:'vLANCAPU'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11LancApu',fld:'vLANCAPU'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11LancApu", "vLANCAPU", 0, "CollTelaLancApuracao.TelaLancApuracaoItem");
   this.setVCMap("AV11LancApu", "vLANCAPU", 0, "CollTelaLancApuracao.TelaLancApuracaoItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV11LancApu"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportcblcobolapur());
