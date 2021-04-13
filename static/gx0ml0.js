/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:17.90
*/
gx.evt.autoSkip = false;
gx.define('gx0ml0', false, function () {
   this.ServerClass =  "gx0ml0" ;
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
      this.AV12pTabelaVencimentoEmpresaId=gx.fn.getControlValue("vPTABELAVENCIMENTOEMPRESAID") ;
      this.AV13pTabelaVencimentoId=gx.fn.getIntegerValue("vPTABELAVENCIMENTOID",'.') ;
   };
   this.e132bq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142bq1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,53];
   this.GXLastCtrlId =53;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ml0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11071,48,"TABELAVENCIMENTOEMPRESAID","Empresa Id","","TabelaVencimentoEmpresaId","char",0,"px",10,10,"left",null,[],11071,"TabelaVencimentoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11072,49,"TABELAVENCIMENTOID","Vencimento Id","","TabelaVencimentoId","int",0,"px",3,3,"right",null,[],11072,"TabelaVencimentoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11097,50,"TABELAVENCIMENTODESCRICAO","Vencimento Descricao","Selecionar","TabelaVencimentoDescricao","svchar",0,"px",60,60,"left",null,[],11097,"TabelaVencimentoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTABELAVENCIMENTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELAVENCIMENTOEMPRESAID",gxz:"ZV6cTabelaVencimentoEmpresaId",gxold:"OV6cTabelaVencimentoEmpresaId",gxvar:"AV6cTabelaVencimentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTabelaVencimentoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTabelaVencimentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTABELAVENCIMENTOEMPRESAID",gx.O.AV6cTabelaVencimentoEmpresaId,0)},c2v:function(){gx.O.AV6cTabelaVencimentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTABELAVENCIMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTABELAVENCIMENTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELAVENCIMENTOID",gxz:"ZV7cTabelaVencimentoId",gxold:"OV7cTabelaVencimentoId",gxvar:"AV7cTabelaVencimentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTabelaVencimentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTabelaVencimentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTABELAVENCIMENTOID",gx.O.AV7cTabelaVencimentoId,0)},c2v:function(){gx.O.AV7cTabelaVencimentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTABELAVENCIMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTABELAVENCIMENTODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELAVENCIMENTODESCRICAO",gxz:"ZV8cTabelaVencimentoDescricao",gxold:"OV8cTabelaVencimentoDescricao",gxvar:"AV8cTabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.ZV8cTabelaVencimentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTABELAVENCIMENTODESCRICAO",gx.O.AV8cTabelaVencimentoDescricao,0)},c2v:function(){gx.O.AV8cTabelaVencimentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTABELAVENCIMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTABELAVENCIMENTOVALORMAXIMO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELAVENCIMENTOVALORMAXIMO",gxz:"ZV9cTabelaVencimentoValorMaximo",gxold:"OV9cTabelaVencimentoValorMaximo",gxvar:"AV9cTabelaVencimentoValorMaximo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTabelaVencimentoValorMaximo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cTabelaVencimentoValorMaximo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCTABELAVENCIMENTOVALORMAXIMO",gx.O.AV9cTabelaVencimentoValorMaximo,2,',')},c2v:function(){gx.O.AV9cTabelaVencimentoValorMaximo=this.val()},val:function(){return gx.fn.getDecimalValue("vCTABELAVENCIMENTOVALORMAXIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTABELAVENCIMENTOUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELAVENCIMENTOUSUARIOALT",gxz:"ZV10cTabelaVencimentoUsuarioAlt",gxold:"OV10cTabelaVencimentoUsuarioAlt",gxvar:"AV10cTabelaVencimentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTabelaVencimentoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cTabelaVencimentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTABELAVENCIMENTOUSUARIOALT",gx.O.AV10cTabelaVencimentoUsuarioAlt,0)},c2v:function(){gx.O.AV10cTabelaVencimentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTABELAVENCIMENTOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTABELAVENCIMENTODATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTABELAVENCIMENTODATAHORAALT",gxz:"ZV11cTabelaVencimentoDataHoraAlt",gxold:"OV11cTabelaVencimentoDataHoraAlt",gxvar:"AV11cTabelaVencimentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTabelaVencimentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cTabelaVencimentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTABELAVENCIMENTODATAHORAALT",gx.O.AV11cTabelaVencimentoDataHoraAlt,0)},c2v:function(){gx.O.AV11cTabelaVencimentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTABELAVENCIMENTODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOEMPRESAID",gxz:"Z11071TabelaVencimentoEmpresaId",gxold:"O11071TabelaVencimentoEmpresaId",gxvar:"A11071TabelaVencimentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11071TabelaVencimentoEmpresaId=Value},v2z:function(Value){gx.O.Z11071TabelaVencimentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A11071TabelaVencimentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11071TabelaVencimentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAVENCIMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTOID",gxz:"Z11072TabelaVencimentoId",gxold:"O11072TabelaVencimentoId",gxvar:"A11072TabelaVencimentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11072TabelaVencimentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11072TabelaVencimentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A11072TabelaVencimentoId,0)},c2v:function(){gx.O.A11072TabelaVencimentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TABELAVENCIMENTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TABELAVENCIMENTODESCRICAO",gxz:"Z11097TabelaVencimentoDescricao",gxold:"O11097TabelaVencimentoDescricao",gxvar:"A11097TabelaVencimentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11097TabelaVencimentoDescricao=Value},v2z:function(Value){gx.O.Z11097TabelaVencimentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAVENCIMENTODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A11097TabelaVencimentoDescricao,0)},c2v:function(){gx.O.A11097TabelaVencimentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAVENCIMENTODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE4",grid:0};
   this.AV6cTabelaVencimentoEmpresaId = "" ;
   this.ZV6cTabelaVencimentoEmpresaId = "" ;
   this.OV6cTabelaVencimentoEmpresaId = "" ;
   this.AV7cTabelaVencimentoId = 0 ;
   this.ZV7cTabelaVencimentoId = 0 ;
   this.OV7cTabelaVencimentoId = 0 ;
   this.AV8cTabelaVencimentoDescricao = "" ;
   this.ZV8cTabelaVencimentoDescricao = "" ;
   this.OV8cTabelaVencimentoDescricao = "" ;
   this.AV9cTabelaVencimentoValorMaximo = 0 ;
   this.ZV9cTabelaVencimentoValorMaximo = 0 ;
   this.OV9cTabelaVencimentoValorMaximo = 0 ;
   this.AV10cTabelaVencimentoUsuarioAlt = "" ;
   this.ZV10cTabelaVencimentoUsuarioAlt = "" ;
   this.OV10cTabelaVencimentoUsuarioAlt = "" ;
   this.AV11cTabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cTabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.OV11cTabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11071TabelaVencimentoEmpresaId = "" ;
   this.O11071TabelaVencimentoEmpresaId = "" ;
   this.Z11072TabelaVencimentoId = 0 ;
   this.O11072TabelaVencimentoId = 0 ;
   this.Z11097TabelaVencimentoDescricao = "" ;
   this.O11097TabelaVencimentoDescricao = "" ;
   this.AV6cTabelaVencimentoEmpresaId = "" ;
   this.AV7cTabelaVencimentoId = 0 ;
   this.AV8cTabelaVencimentoDescricao = "" ;
   this.AV9cTabelaVencimentoValorMaximo = 0 ;
   this.AV10cTabelaVencimentoUsuarioAlt = "" ;
   this.AV11cTabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.AV12pTabelaVencimentoEmpresaId = "" ;
   this.AV13pTabelaVencimentoId = 0 ;
   this.A11102TabelaVencimentoDataHoraAlt = gx.date.nullDate() ;
   this.A11101TabelaVencimentoUsuarioAlt = "" ;
   this.A11081TabelaVencimentoValorMaximo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11071TabelaVencimentoEmpresaId = "" ;
   this.A11072TabelaVencimentoId = 0 ;
   this.A11097TabelaVencimentoDescricao = "" ;
   this.Events = {"e132bq2_client": ["ENTER", true] ,"e142bq1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaVencimentoEmpresaId',fld:'vCTABELAVENCIMENTOEMPRESAID'},{av:'AV7cTabelaVencimentoId',fld:'vCTABELAVENCIMENTOID'},{av:'AV8cTabelaVencimentoDescricao',fld:'vCTABELAVENCIMENTODESCRICAO'},{av:'AV9cTabelaVencimentoValorMaximo',fld:'vCTABELAVENCIMENTOVALORMAXIMO'},{av:'AV10cTabelaVencimentoUsuarioAlt',fld:'vCTABELAVENCIMENTOUSUARIOALT'},{av:'AV11cTabelaVencimentoDataHoraAlt',fld:'vCTABELAVENCIMENTODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11071TabelaVencimentoEmpresaId',fld:'TABELAVENCIMENTOEMPRESAID'},{av:'A11072TabelaVencimentoId',fld:'TABELAVENCIMENTOID'}],[{av:'AV12pTabelaVencimentoEmpresaId',fld:'vPTABELAVENCIMENTOEMPRESAID'},{av:'AV13pTabelaVencimentoId',fld:'vPTABELAVENCIMENTOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaVencimentoEmpresaId',fld:'vCTABELAVENCIMENTOEMPRESAID'},{av:'AV7cTabelaVencimentoId',fld:'vCTABELAVENCIMENTOID'},{av:'AV8cTabelaVencimentoDescricao',fld:'vCTABELAVENCIMENTODESCRICAO'},{av:'AV9cTabelaVencimentoValorMaximo',fld:'vCTABELAVENCIMENTOVALORMAXIMO'},{av:'AV10cTabelaVencimentoUsuarioAlt',fld:'vCTABELAVENCIMENTOUSUARIOALT'},{av:'AV11cTabelaVencimentoDataHoraAlt',fld:'vCTABELAVENCIMENTODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaVencimentoEmpresaId',fld:'vCTABELAVENCIMENTOEMPRESAID'},{av:'AV7cTabelaVencimentoId',fld:'vCTABELAVENCIMENTOID'},{av:'AV8cTabelaVencimentoDescricao',fld:'vCTABELAVENCIMENTODESCRICAO'},{av:'AV9cTabelaVencimentoValorMaximo',fld:'vCTABELAVENCIMENTOVALORMAXIMO'},{av:'AV10cTabelaVencimentoUsuarioAlt',fld:'vCTABELAVENCIMENTOUSUARIOALT'},{av:'AV11cTabelaVencimentoDataHoraAlt',fld:'vCTABELAVENCIMENTODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaVencimentoEmpresaId',fld:'vCTABELAVENCIMENTOEMPRESAID'},{av:'AV7cTabelaVencimentoId',fld:'vCTABELAVENCIMENTOID'},{av:'AV8cTabelaVencimentoDescricao',fld:'vCTABELAVENCIMENTODESCRICAO'},{av:'AV9cTabelaVencimentoValorMaximo',fld:'vCTABELAVENCIMENTOVALORMAXIMO'},{av:'AV10cTabelaVencimentoUsuarioAlt',fld:'vCTABELAVENCIMENTOUSUARIOALT'},{av:'AV11cTabelaVencimentoDataHoraAlt',fld:'vCTABELAVENCIMENTODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTabelaVencimentoEmpresaId',fld:'vCTABELAVENCIMENTOEMPRESAID'},{av:'AV7cTabelaVencimentoId',fld:'vCTABELAVENCIMENTOID'},{av:'AV8cTabelaVencimentoDescricao',fld:'vCTABELAVENCIMENTODESCRICAO'},{av:'AV9cTabelaVencimentoValorMaximo',fld:'vCTABELAVENCIMENTOVALORMAXIMO'},{av:'AV10cTabelaVencimentoUsuarioAlt',fld:'vCTABELAVENCIMENTOUSUARIOALT'},{av:'AV11cTabelaVencimentoDataHoraAlt',fld:'vCTABELAVENCIMENTODATAHORAALT'}],[]];
   this.setVCMap("AV12pTabelaVencimentoEmpresaId", "vPTABELAVENCIMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV13pTabelaVencimentoId", "vPTABELAVENCIMENTOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ml0());
