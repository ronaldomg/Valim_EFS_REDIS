/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:41.41
*/
gx.evt.autoSkip = false;
gx.define('gx08w0', false, function () {
   this.ServerClass =  "gx08w0" ;
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
      this.AV9pTmpDirfNumeroConta=gx.fn.getIntegerValue("vPTMPDIRFNUMEROCONTA",'.') ;
      this.AV10pTmpDirfRetencaoCodigoRetencao=gx.fn.getIntegerValue("vPTMPDIRFRETENCAOCODIGORETENCAO",'.') ;
   };
   this.e131nw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx08w0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3051,33,"TMPDIRFNUMEROCONTA","Tmp Dirf Numero Conta","","TmpDirfNumeroConta","int",0,"px",8,8,"right",null,[],3051,"TmpDirfNumeroConta",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3067,34,"TMPDIRFRETENCAOCODIGORETENCAO","Tmp Dirf Retencao Codigo Retencao","","TmpDirfRetencaoCodigoRetencao","int",0,"px",4,4,"right",null,[],3067,"TmpDirfRetencaoCodigoRetencao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3066,35,"TMPDIRFRETENCAOVALOR","Tmp Dirf Retencao Valor","Selecionar","TmpDirfRetencaoValor","decimal",0,"px",22,22,"right",null,[],3066,"TmpDirfRetencaoValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTMPDIRFNUMEROCONTA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTMPDIRFNUMEROCONTA",gxz:"ZV6cTmpDirfNumeroConta",gxold:"OV6cTmpDirfNumeroConta",gxvar:"AV6cTmpDirfNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTmpDirfNumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTmpDirfNumeroConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTMPDIRFNUMEROCONTA",gx.O.AV6cTmpDirfNumeroConta,0)},c2v:function(){gx.O.AV6cTmpDirfNumeroConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTMPDIRFNUMEROCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTMPDIRFRETENCAOCODIGORETENCAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTMPDIRFRETENCAOCODIGORETENCAO",gxz:"ZV7cTmpDirfRetencaoCodigoRetencao",gxold:"OV7cTmpDirfRetencaoCodigoRetencao",gxvar:"AV7cTmpDirfRetencaoCodigoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTmpDirfRetencaoCodigoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTmpDirfRetencaoCodigoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTMPDIRFRETENCAOCODIGORETENCAO",gx.O.AV7cTmpDirfRetencaoCodigoRetencao,0)},c2v:function(){gx.O.AV7cTmpDirfRetencaoCodigoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTMPDIRFRETENCAOCODIGORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTMPDIRFRETENCAOVALOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTMPDIRFRETENCAOVALOR",gxz:"ZV8cTmpDirfRetencaoValor",gxold:"OV8cTmpDirfRetencaoValor",gxvar:"AV8cTmpDirfRetencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTmpDirfRetencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cTmpDirfRetencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCTMPDIRFRETENCAOVALOR",gx.O.AV8cTmpDirfRetencaoValor,2,',')},c2v:function(){gx.O.AV8cTmpDirfRetencaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCTMPDIRFRETENCAOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFNUMEROCONTA",gxz:"Z3051TmpDirfNumeroConta",gxold:"O3051TmpDirfNumeroConta",gxvar:"A3051TmpDirfNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3051TmpDirfNumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3051TmpDirfNumeroConta=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TMPDIRFNUMEROCONTA",row || gx.fn.currentGridRowImpl(31),gx.O.A3051TmpDirfNumeroConta,0)},c2v:function(){gx.O.A3051TmpDirfNumeroConta=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TMPDIRFNUMEROCONTA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFRETENCAOCODIGORETENCAO",gxz:"Z3067TmpDirfRetencaoCodigoRetencao",gxold:"O3067TmpDirfRetencaoCodigoRetencao",gxvar:"A3067TmpDirfRetencaoCodigoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3067TmpDirfRetencaoCodigoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3067TmpDirfRetencaoCodigoRetencao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TMPDIRFRETENCAOCODIGORETENCAO",row || gx.fn.currentGridRowImpl(31),gx.O.A3067TmpDirfRetencaoCodigoRetencao,0)},c2v:function(){gx.O.A3067TmpDirfRetencaoCodigoRetencao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TMPDIRFRETENCAOCODIGORETENCAO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFRETENCAOVALOR",gxz:"Z3066TmpDirfRetencaoValor",gxold:"O3066TmpDirfRetencaoValor",gxvar:"A3066TmpDirfRetencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3066TmpDirfRetencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3066TmpDirfRetencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TMPDIRFRETENCAOVALOR",row || gx.fn.currentGridRowImpl(31),gx.O.A3066TmpDirfRetencaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3066TmpDirfRetencaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TMPDIRFRETENCAOVALOR",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cTmpDirfNumeroConta = 0 ;
   this.ZV6cTmpDirfNumeroConta = 0 ;
   this.OV6cTmpDirfNumeroConta = 0 ;
   this.AV7cTmpDirfRetencaoCodigoRetencao = 0 ;
   this.ZV7cTmpDirfRetencaoCodigoRetencao = 0 ;
   this.OV7cTmpDirfRetencaoCodigoRetencao = 0 ;
   this.AV8cTmpDirfRetencaoValor = 0 ;
   this.ZV8cTmpDirfRetencaoValor = 0 ;
   this.OV8cTmpDirfRetencaoValor = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3051TmpDirfNumeroConta = 0 ;
   this.O3051TmpDirfNumeroConta = 0 ;
   this.Z3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.O3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.Z3066TmpDirfRetencaoValor = 0 ;
   this.O3066TmpDirfRetencaoValor = 0 ;
   this.AV6cTmpDirfNumeroConta = 0 ;
   this.AV7cTmpDirfRetencaoCodigoRetencao = 0 ;
   this.AV8cTmpDirfRetencaoValor = 0 ;
   this.AV9pTmpDirfNumeroConta = 0 ;
   this.AV10pTmpDirfRetencaoCodigoRetencao = 0 ;
   this.AV5LinkSelection = "" ;
   this.A3051TmpDirfNumeroConta = 0 ;
   this.A3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.A3066TmpDirfRetencaoValor = 0 ;
   this.Events = {"e131nw2_client": ["ENTER", true] ,"e141nw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTmpDirfNumeroConta',fld:'vCTMPDIRFNUMEROCONTA'},{av:'AV7cTmpDirfRetencaoCodigoRetencao',fld:'vCTMPDIRFRETENCAOCODIGORETENCAO'},{av:'AV8cTmpDirfRetencaoValor',fld:'vCTMPDIRFRETENCAOVALOR'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3051TmpDirfNumeroConta',fld:'TMPDIRFNUMEROCONTA'},{av:'A3067TmpDirfRetencaoCodigoRetencao',fld:'TMPDIRFRETENCAOCODIGORETENCAO'}],[{av:'AV9pTmpDirfNumeroConta',fld:'vPTMPDIRFNUMEROCONTA'},{av:'AV10pTmpDirfRetencaoCodigoRetencao',fld:'vPTMPDIRFRETENCAOCODIGORETENCAO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTmpDirfNumeroConta',fld:'vCTMPDIRFNUMEROCONTA'},{av:'AV7cTmpDirfRetencaoCodigoRetencao',fld:'vCTMPDIRFRETENCAOCODIGORETENCAO'},{av:'AV8cTmpDirfRetencaoValor',fld:'vCTMPDIRFRETENCAOVALOR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTmpDirfNumeroConta',fld:'vCTMPDIRFNUMEROCONTA'},{av:'AV7cTmpDirfRetencaoCodigoRetencao',fld:'vCTMPDIRFRETENCAOCODIGORETENCAO'},{av:'AV8cTmpDirfRetencaoValor',fld:'vCTMPDIRFRETENCAOVALOR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTmpDirfNumeroConta',fld:'vCTMPDIRFNUMEROCONTA'},{av:'AV7cTmpDirfRetencaoCodigoRetencao',fld:'vCTMPDIRFRETENCAOCODIGORETENCAO'},{av:'AV8cTmpDirfRetencaoValor',fld:'vCTMPDIRFRETENCAOVALOR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTmpDirfNumeroConta',fld:'vCTMPDIRFNUMEROCONTA'},{av:'AV7cTmpDirfRetencaoCodigoRetencao',fld:'vCTMPDIRFRETENCAOCODIGORETENCAO'},{av:'AV8cTmpDirfRetencaoValor',fld:'vCTMPDIRFRETENCAOVALOR'}],[]];
   this.setVCMap("AV9pTmpDirfNumeroConta", "vPTMPDIRFNUMEROCONTA", 0, "int");
   this.setVCMap("AV10pTmpDirfRetencaoCodigoRetencao", "vPTMPDIRFRETENCAOCODIGORETENCAO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx08w0());
