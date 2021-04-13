/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:13.40
*/
gx.evt.autoSkip = false;
gx.define('gx0gu0', false, function () {
   this.ServerClass =  "gx0gu0" ;
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
      this.AV13pSintegra75ProdutoId=gx.fn.getControlValue("vPSINTEGRA75PRODUTOID") ;
      this.AV14pSintegra75Unidade=gx.fn.getControlValue("vPSINTEGRA75UNIDADE") ;
      this.AV15pSintegra75SituacaoTributaria=gx.fn.getControlValue("vPSINTEGRA75SITUACAOTRIBUTARIA") ;
      this.AV16pSintegra75AliquotaICMS=gx.fn.getIntegerValue("vPSINTEGRA75ALIQUOTAICMS",'.') ;
   };
   this.e131y22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141y21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0gu0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8211,53,"SINTEGRA75PRODUTOID","Sintegra75 Produto Id","","Sintegra75ProdutoId","svchar",0,"px",14,14,"left",null,[],8211,"Sintegra75ProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8212,54,"SINTEGRA75UNIDADE","Sintegra75 Unidade","","Sintegra75Unidade","char",0,"px",3,3,"left",null,[],8212,"Sintegra75Unidade",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8213,55,"SINTEGRA75SITUACAOTRIBUTARIA","Sintegra75 Situacao Tributaria","","Sintegra75SituacaoTributaria","char",0,"px",4,4,"left",null,[],8213,"Sintegra75SituacaoTributaria",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8214,56,"SINTEGRA75ALIQUOTAICMS","Sintegra75 Aliquota ICMS","","Sintegra75AliquotaICMS","int",0,"px",4,4,"right",null,[],8214,"Sintegra75AliquotaICMS",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8207,57,"SINTEGRA75ALIQUOTAIPI","Sintegra75 Aliquota IPI","Selecionar","Sintegra75AliquotaIPI","int",0,"px",4,4,"right",null,[],8207,"Sintegra75AliquotaIPI",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSINTEGRA75PRODUTOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75PRODUTOID",gxz:"ZV6cSintegra75ProdutoId",gxold:"OV6cSintegra75ProdutoId",gxvar:"AV6cSintegra75ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSintegra75ProdutoId=Value},v2z:function(Value){gx.O.ZV6cSintegra75ProdutoId=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75PRODUTOID",gx.O.AV6cSintegra75ProdutoId,0)},c2v:function(){gx.O.AV6cSintegra75ProdutoId=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRA75PRODUTOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSINTEGRA75UNIDADE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75UNIDADE",gxz:"ZV7cSintegra75Unidade",gxold:"OV7cSintegra75Unidade",gxvar:"AV7cSintegra75Unidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSintegra75Unidade=Value},v2z:function(Value){gx.O.ZV7cSintegra75Unidade=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75UNIDADE",gx.O.AV7cSintegra75Unidade,0)},c2v:function(){gx.O.AV7cSintegra75Unidade=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRA75UNIDADE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSINTEGRA75SITUACAOTRIBUTARIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75SITUACAOTRIBUTARIA",gxz:"ZV8cSintegra75SituacaoTributaria",gxold:"OV8cSintegra75SituacaoTributaria",gxvar:"AV8cSintegra75SituacaoTributaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSintegra75SituacaoTributaria=Value},v2z:function(Value){gx.O.ZV8cSintegra75SituacaoTributaria=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75SITUACAOTRIBUTARIA",gx.O.AV8cSintegra75SituacaoTributaria,0)},c2v:function(){gx.O.AV8cSintegra75SituacaoTributaria=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRA75SITUACAOTRIBUTARIA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSINTEGRA75ALIQUOTAICMS", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75ALIQUOTAICMS",gxz:"ZV9cSintegra75AliquotaICMS",gxold:"OV9cSintegra75AliquotaICMS",gxvar:"AV9cSintegra75AliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSintegra75AliquotaICMS=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cSintegra75AliquotaICMS=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75ALIQUOTAICMS",gx.O.AV9cSintegra75AliquotaICMS,0)},c2v:function(){gx.O.AV9cSintegra75AliquotaICMS=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSINTEGRA75ALIQUOTAICMS",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSINTEGRA75ALIQUOTAIPI", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75ALIQUOTAIPI",gxz:"ZV10cSintegra75AliquotaIPI",gxold:"OV10cSintegra75AliquotaIPI",gxvar:"AV10cSintegra75AliquotaIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSintegra75AliquotaIPI=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cSintegra75AliquotaIPI=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75ALIQUOTAIPI",gx.O.AV10cSintegra75AliquotaIPI,0)},c2v:function(){gx.O.AV10cSintegra75AliquotaIPI=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSINTEGRA75ALIQUOTAIPI",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSINTEGRA75NBM", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75NBM",gxz:"ZV11cSintegra75NBM",gxold:"OV11cSintegra75NBM",gxvar:"AV11cSintegra75NBM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSintegra75NBM=Value},v2z:function(Value){gx.O.ZV11cSintegra75NBM=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75NBM",gx.O.AV11cSintegra75NBM,0)},c2v:function(){gx.O.AV11cSintegra75NBM=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRA75NBM")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSINTEGRA75PRODUTOREFERENCIA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSINTEGRA75PRODUTOREFERENCIA",gxz:"ZV12cSintegra75ProdutoReferencia",gxold:"OV12cSintegra75ProdutoReferencia",gxvar:"AV12cSintegra75ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSintegra75ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV12cSintegra75ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vCSINTEGRA75PRODUTOREFERENCIA",gx.O.AV12cSintegra75ProdutoReferencia,0)},c2v:function(){gx.O.AV12cSintegra75ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vCSINTEGRA75PRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:14,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75PRODUTOID",gxz:"Z8211Sintegra75ProdutoId",gxold:"O8211Sintegra75ProdutoId",gxvar:"A8211Sintegra75ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8211Sintegra75ProdutoId=Value},v2z:function(Value){gx.O.Z8211Sintegra75ProdutoId=Value},v2c:function(row){gx.fn.setGridControlValue("SINTEGRA75PRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A8211Sintegra75ProdutoId,0)},c2v:function(){gx.O.A8211Sintegra75ProdutoId=this.val()},val:function(row){return gx.fn.getGridControlValue("SINTEGRA75PRODUTOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75UNIDADE",gxz:"Z8212Sintegra75Unidade",gxold:"O8212Sintegra75Unidade",gxvar:"A8212Sintegra75Unidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8212Sintegra75Unidade=Value},v2z:function(Value){gx.O.Z8212Sintegra75Unidade=Value},v2c:function(row){gx.fn.setGridControlValue("SINTEGRA75UNIDADE",row || gx.fn.currentGridRowImpl(51),gx.O.A8212Sintegra75Unidade,0)},c2v:function(){gx.O.A8212Sintegra75Unidade=this.val()},val:function(row){return gx.fn.getGridControlValue("SINTEGRA75UNIDADE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75SITUACAOTRIBUTARIA",gxz:"Z8213Sintegra75SituacaoTributaria",gxold:"O8213Sintegra75SituacaoTributaria",gxvar:"A8213Sintegra75SituacaoTributaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8213Sintegra75SituacaoTributaria=Value},v2z:function(Value){gx.O.Z8213Sintegra75SituacaoTributaria=Value},v2c:function(row){gx.fn.setGridControlValue("SINTEGRA75SITUACAOTRIBUTARIA",row || gx.fn.currentGridRowImpl(51),gx.O.A8213Sintegra75SituacaoTributaria,0)},c2v:function(){gx.O.A8213Sintegra75SituacaoTributaria=this.val()},val:function(row){return gx.fn.getGridControlValue("SINTEGRA75SITUACAOTRIBUTARIA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75ALIQUOTAICMS",gxz:"Z8214Sintegra75AliquotaICMS",gxold:"O8214Sintegra75AliquotaICMS",gxvar:"A8214Sintegra75AliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8214Sintegra75AliquotaICMS=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8214Sintegra75AliquotaICMS=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SINTEGRA75ALIQUOTAICMS",row || gx.fn.currentGridRowImpl(51),gx.O.A8214Sintegra75AliquotaICMS,0)},c2v:function(){gx.O.A8214Sintegra75AliquotaICMS=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SINTEGRA75ALIQUOTAICMS",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRA75ALIQUOTAIPI",gxz:"Z8207Sintegra75AliquotaIPI",gxold:"O8207Sintegra75AliquotaIPI",gxvar:"A8207Sintegra75AliquotaIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8207Sintegra75AliquotaIPI=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8207Sintegra75AliquotaIPI=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SINTEGRA75ALIQUOTAIPI",row || gx.fn.currentGridRowImpl(51),gx.O.A8207Sintegra75AliquotaIPI,0)},c2v:function(){gx.O.A8207Sintegra75AliquotaIPI=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SINTEGRA75ALIQUOTAIPI",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cSintegra75ProdutoId = "" ;
   this.ZV6cSintegra75ProdutoId = "" ;
   this.OV6cSintegra75ProdutoId = "" ;
   this.AV7cSintegra75Unidade = "" ;
   this.ZV7cSintegra75Unidade = "" ;
   this.OV7cSintegra75Unidade = "" ;
   this.AV8cSintegra75SituacaoTributaria = "" ;
   this.ZV8cSintegra75SituacaoTributaria = "" ;
   this.OV8cSintegra75SituacaoTributaria = "" ;
   this.AV9cSintegra75AliquotaICMS = 0 ;
   this.ZV9cSintegra75AliquotaICMS = 0 ;
   this.OV9cSintegra75AliquotaICMS = 0 ;
   this.AV10cSintegra75AliquotaIPI = 0 ;
   this.ZV10cSintegra75AliquotaIPI = 0 ;
   this.OV10cSintegra75AliquotaIPI = 0 ;
   this.AV11cSintegra75NBM = "" ;
   this.ZV11cSintegra75NBM = "" ;
   this.OV11cSintegra75NBM = "" ;
   this.AV12cSintegra75ProdutoReferencia = "" ;
   this.ZV12cSintegra75ProdutoReferencia = "" ;
   this.OV12cSintegra75ProdutoReferencia = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8211Sintegra75ProdutoId = "" ;
   this.O8211Sintegra75ProdutoId = "" ;
   this.Z8212Sintegra75Unidade = "" ;
   this.O8212Sintegra75Unidade = "" ;
   this.Z8213Sintegra75SituacaoTributaria = "" ;
   this.O8213Sintegra75SituacaoTributaria = "" ;
   this.Z8214Sintegra75AliquotaICMS = 0 ;
   this.O8214Sintegra75AliquotaICMS = 0 ;
   this.Z8207Sintegra75AliquotaIPI = 0 ;
   this.O8207Sintegra75AliquotaIPI = 0 ;
   this.AV6cSintegra75ProdutoId = "" ;
   this.AV7cSintegra75Unidade = "" ;
   this.AV8cSintegra75SituacaoTributaria = "" ;
   this.AV9cSintegra75AliquotaICMS = 0 ;
   this.AV10cSintegra75AliquotaIPI = 0 ;
   this.AV11cSintegra75NBM = "" ;
   this.AV12cSintegra75ProdutoReferencia = "" ;
   this.AV13pSintegra75ProdutoId = "" ;
   this.AV14pSintegra75Unidade = "" ;
   this.AV15pSintegra75SituacaoTributaria = "" ;
   this.AV16pSintegra75AliquotaICMS = 0 ;
   this.A8210Sintegra75ProdutoReferencia = "" ;
   this.A8208Sintegra75NBM = "" ;
   this.AV5LinkSelection = "" ;
   this.A8211Sintegra75ProdutoId = "" ;
   this.A8212Sintegra75Unidade = "" ;
   this.A8213Sintegra75SituacaoTributaria = "" ;
   this.A8214Sintegra75AliquotaICMS = 0 ;
   this.A8207Sintegra75AliquotaIPI = 0 ;
   this.Events = {"e131y22_client": ["ENTER", true] ,"e141y21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegra75ProdutoId',fld:'vCSINTEGRA75PRODUTOID'},{av:'AV7cSintegra75Unidade',fld:'vCSINTEGRA75UNIDADE'},{av:'AV8cSintegra75SituacaoTributaria',fld:'vCSINTEGRA75SITUACAOTRIBUTARIA'},{av:'AV9cSintegra75AliquotaICMS',fld:'vCSINTEGRA75ALIQUOTAICMS'},{av:'AV10cSintegra75AliquotaIPI',fld:'vCSINTEGRA75ALIQUOTAIPI'},{av:'AV11cSintegra75NBM',fld:'vCSINTEGRA75NBM'},{av:'AV12cSintegra75ProdutoReferencia',fld:'vCSINTEGRA75PRODUTOREFERENCIA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8211Sintegra75ProdutoId',fld:'SINTEGRA75PRODUTOID'},{av:'A8212Sintegra75Unidade',fld:'SINTEGRA75UNIDADE'},{av:'A8213Sintegra75SituacaoTributaria',fld:'SINTEGRA75SITUACAOTRIBUTARIA'},{av:'A8214Sintegra75AliquotaICMS',fld:'SINTEGRA75ALIQUOTAICMS'}],[{av:'AV13pSintegra75ProdutoId',fld:'vPSINTEGRA75PRODUTOID'},{av:'AV14pSintegra75Unidade',fld:'vPSINTEGRA75UNIDADE'},{av:'AV15pSintegra75SituacaoTributaria',fld:'vPSINTEGRA75SITUACAOTRIBUTARIA'},{av:'AV16pSintegra75AliquotaICMS',fld:'vPSINTEGRA75ALIQUOTAICMS'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegra75ProdutoId',fld:'vCSINTEGRA75PRODUTOID'},{av:'AV7cSintegra75Unidade',fld:'vCSINTEGRA75UNIDADE'},{av:'AV8cSintegra75SituacaoTributaria',fld:'vCSINTEGRA75SITUACAOTRIBUTARIA'},{av:'AV9cSintegra75AliquotaICMS',fld:'vCSINTEGRA75ALIQUOTAICMS'},{av:'AV10cSintegra75AliquotaIPI',fld:'vCSINTEGRA75ALIQUOTAIPI'},{av:'AV11cSintegra75NBM',fld:'vCSINTEGRA75NBM'},{av:'AV12cSintegra75ProdutoReferencia',fld:'vCSINTEGRA75PRODUTOREFERENCIA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegra75ProdutoId',fld:'vCSINTEGRA75PRODUTOID'},{av:'AV7cSintegra75Unidade',fld:'vCSINTEGRA75UNIDADE'},{av:'AV8cSintegra75SituacaoTributaria',fld:'vCSINTEGRA75SITUACAOTRIBUTARIA'},{av:'AV9cSintegra75AliquotaICMS',fld:'vCSINTEGRA75ALIQUOTAICMS'},{av:'AV10cSintegra75AliquotaIPI',fld:'vCSINTEGRA75ALIQUOTAIPI'},{av:'AV11cSintegra75NBM',fld:'vCSINTEGRA75NBM'},{av:'AV12cSintegra75ProdutoReferencia',fld:'vCSINTEGRA75PRODUTOREFERENCIA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegra75ProdutoId',fld:'vCSINTEGRA75PRODUTOID'},{av:'AV7cSintegra75Unidade',fld:'vCSINTEGRA75UNIDADE'},{av:'AV8cSintegra75SituacaoTributaria',fld:'vCSINTEGRA75SITUACAOTRIBUTARIA'},{av:'AV9cSintegra75AliquotaICMS',fld:'vCSINTEGRA75ALIQUOTAICMS'},{av:'AV10cSintegra75AliquotaIPI',fld:'vCSINTEGRA75ALIQUOTAIPI'},{av:'AV11cSintegra75NBM',fld:'vCSINTEGRA75NBM'},{av:'AV12cSintegra75ProdutoReferencia',fld:'vCSINTEGRA75PRODUTOREFERENCIA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSintegra75ProdutoId',fld:'vCSINTEGRA75PRODUTOID'},{av:'AV7cSintegra75Unidade',fld:'vCSINTEGRA75UNIDADE'},{av:'AV8cSintegra75SituacaoTributaria',fld:'vCSINTEGRA75SITUACAOTRIBUTARIA'},{av:'AV9cSintegra75AliquotaICMS',fld:'vCSINTEGRA75ALIQUOTAICMS'},{av:'AV10cSintegra75AliquotaIPI',fld:'vCSINTEGRA75ALIQUOTAIPI'},{av:'AV11cSintegra75NBM',fld:'vCSINTEGRA75NBM'},{av:'AV12cSintegra75ProdutoReferencia',fld:'vCSINTEGRA75PRODUTOREFERENCIA'}],[]];
   this.setVCMap("AV13pSintegra75ProdutoId", "vPSINTEGRA75PRODUTOID", 0, "svchar");
   this.setVCMap("AV14pSintegra75Unidade", "vPSINTEGRA75UNIDADE", 0, "char");
   this.setVCMap("AV15pSintegra75SituacaoTributaria", "vPSINTEGRA75SITUACAOTRIBUTARIA", 0, "char");
   this.setVCMap("AV16pSintegra75AliquotaICMS", "vPSINTEGRA75ALIQUOTAICMS", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0gu0());
