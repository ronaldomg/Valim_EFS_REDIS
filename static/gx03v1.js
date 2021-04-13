/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:24.88
*/
gx.evt.autoSkip = false;
gx.define('gx03v1', false, function () {
   this.ServerClass =  "gx03v1" ;
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
      this.AV12pTipoLancamentoEmpresaid=gx.fn.getControlValue("vPTIPOLANCAMENTOEMPRESAID") ;
      this.AV13pTipoLancamentoId=gx.fn.getIntegerValue("vPTIPOLANCAMENTOID",'.') ;
   };
   this.e131k62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141k61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03v1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(962,48,"TIPOLANCAMENTOID","Código da Tarifa","","TipoLancamentoId","int",0,"px",4,4,"right",null,[],962,"TipoLancamentoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(963,49,"TIPOLANCAMENTODESCRICAO","Descrição do Tipo de Lançamento","Selecionar","TipoLancamentoDescricao","svchar",0,"px",25,25,"left",null,[],963,"TipoLancamentoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(964,50,"TIPOLANCAMENTOPAGREC","Pagar/Receber","TipoLancamentoPagRec","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(965,51,"TIPOLANCAMENTOTIPO","Tipo do Tipo Lançamento","TipoLancamentoTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(966,52,"TIPOLANCAMENTOSNESTORNO","Lançamento Estorno","","TipoLancamentoSnEstorno","char",0,"px",1,1,"left",null,[],966,"TipoLancamentoSnEstorno",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(967,53,"TIPOLANCAMENTOTPCALCACR","Tipo Cálculo Acréscimo","TipoLancamentoTpCalcAcr","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1046,54,"TIPOLANCAMENTOEMPRESAID","Empresa da Tarifa","","TipoLancamentoEmpresaid","char",0,"px",10,10,"left",null,[],1046,"TipoLancamentoEmpresaid",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOLANCAMENTOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOID",gxz:"ZV6cTipoLancamentoId",gxold:"OV6cTipoLancamentoId",gxvar:"AV6cTipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOID",gx.O.AV6cTipoLancamentoId,0)},c2v:function(){gx.O.AV6cTipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOLANCAMENTODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTODESCRICAO",gxz:"ZV7cTipoLancamentoDescricao",gxold:"OV7cTipoLancamentoDescricao",gxvar:"AV7cTipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV7cTipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTODESCRICAO",gx.O.AV7cTipoLancamentoDescricao,0)},c2v:function(){gx.O.AV7cTipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOLANCAMENTOPAGREC", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOPAGREC",gxz:"ZV8cTipoLancamentoPagRec",gxold:"OV8cTipoLancamentoPagRec",gxvar:"AV8cTipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cTipoLancamentoPagRec=Value},v2z:function(Value){gx.O.ZV8cTipoLancamentoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOLANCAMENTOPAGREC",gx.O.AV8cTipoLancamentoPagRec)},c2v:function(){gx.O.AV8cTipoLancamentoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOPAGREC")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOLANCAMENTOTIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOTIPO",gxz:"ZV9cTipoLancamentoTipo",gxold:"OV9cTipoLancamentoTipo",gxvar:"AV9cTipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTipoLancamentoTipo=Value},v2z:function(Value){gx.O.ZV9cTipoLancamentoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOLANCAMENTOTIPO",gx.O.AV9cTipoLancamentoTipo)},c2v:function(){gx.O.AV9cTipoLancamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOLANCAMENTOSNESTORNO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOSNESTORNO",gxz:"ZV10cTipoLancamentoSnEstorno",gxold:"OV10cTipoLancamentoSnEstorno",gxvar:"AV10cTipoLancamentoSnEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoLancamentoSnEstorno=Value},v2z:function(Value){gx.O.ZV10cTipoLancamentoSnEstorno=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOSNESTORNO",gx.O.AV10cTipoLancamentoSnEstorno,0)},c2v:function(){gx.O.AV10cTipoLancamentoSnEstorno=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOSNESTORNO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOLANCAMENTOTPCALCACR", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOTPCALCACR",gxz:"ZV11cTipoLancamentoTpCalcAcr",gxold:"OV11cTipoLancamentoTpCalcAcr",gxvar:"AV11cTipoLancamentoTpCalcAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cTipoLancamentoTpCalcAcr=Value},v2z:function(Value){gx.O.ZV11cTipoLancamentoTpCalcAcr=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOLANCAMENTOTPCALCACR",gx.O.AV11cTipoLancamentoTpCalcAcr)},c2v:function(){gx.O.AV11cTipoLancamentoTpCalcAcr=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOTPCALCACR")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A962TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z962TipoLancamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A963TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.Z963TipoLancamentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOPAGREC",gxz:"Z964TipoLancamentoPagRec",gxold:"O964TipoLancamentoPagRec",gxvar:"A964TipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A964TipoLancamentoPagRec=Value},v2z:function(Value){gx.O.Z964TipoLancamentoPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOPAGREC",row || gx.fn.currentGridRowImpl(46),gx.O.A964TipoLancamentoPagRec)},c2v:function(){gx.O.A964TipoLancamentoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOPAGREC",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOTIPO",gxz:"Z965TipoLancamentoTipo",gxold:"O965TipoLancamentoTipo",gxvar:"A965TipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A965TipoLancamentoTipo=Value},v2z:function(Value){gx.O.Z965TipoLancamentoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A965TipoLancamentoTipo)},c2v:function(){gx.O.A965TipoLancamentoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOSNESTORNO",gxz:"Z966TipoLancamentoSnEstorno",gxold:"O966TipoLancamentoSnEstorno",gxvar:"A966TipoLancamentoSnEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A966TipoLancamentoSnEstorno=Value},v2z:function(Value){gx.O.Z966TipoLancamentoSnEstorno=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOSNESTORNO",row || gx.fn.currentGridRowImpl(46),gx.O.A966TipoLancamentoSnEstorno,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A966TipoLancamentoSnEstorno=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOSNESTORNO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOTPCALCACR",gxz:"Z967TipoLancamentoTpCalcAcr",gxold:"O967TipoLancamentoTpCalcAcr",gxvar:"A967TipoLancamentoTpCalcAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A967TipoLancamentoTpCalcAcr=Value},v2z:function(Value){gx.O.Z967TipoLancamentoTpCalcAcr=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOTPCALCACR",row || gx.fn.currentGridRowImpl(46),gx.O.A967TipoLancamentoTpCalcAcr)},c2v:function(){gx.O.A967TipoLancamentoTpCalcAcr=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOTPCALCACR",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOEMPRESAID",gxz:"Z1046TipoLancamentoEmpresaid",gxold:"O1046TipoLancamentoEmpresaid",gxvar:"A1046TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1046TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.Z1046TipoLancamentoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1046TipoLancamentoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1046TipoLancamentoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLE4",grid:0};
   this.AV6cTipoLancamentoId = 0 ;
   this.ZV6cTipoLancamentoId = 0 ;
   this.OV6cTipoLancamentoId = 0 ;
   this.AV7cTipoLancamentoDescricao = "" ;
   this.ZV7cTipoLancamentoDescricao = "" ;
   this.OV7cTipoLancamentoDescricao = "" ;
   this.AV8cTipoLancamentoPagRec = "" ;
   this.ZV8cTipoLancamentoPagRec = "" ;
   this.OV8cTipoLancamentoPagRec = "" ;
   this.AV9cTipoLancamentoTipo = "" ;
   this.ZV9cTipoLancamentoTipo = "" ;
   this.OV9cTipoLancamentoTipo = "" ;
   this.AV10cTipoLancamentoSnEstorno = "" ;
   this.ZV10cTipoLancamentoSnEstorno = "" ;
   this.OV10cTipoLancamentoSnEstorno = "" ;
   this.AV11cTipoLancamentoTpCalcAcr = "" ;
   this.ZV11cTipoLancamentoTpCalcAcr = "" ;
   this.OV11cTipoLancamentoTpCalcAcr = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z962TipoLancamentoId = 0 ;
   this.O962TipoLancamentoId = 0 ;
   this.Z963TipoLancamentoDescricao = "" ;
   this.O963TipoLancamentoDescricao = "" ;
   this.Z964TipoLancamentoPagRec = "" ;
   this.O964TipoLancamentoPagRec = "" ;
   this.Z965TipoLancamentoTipo = "" ;
   this.O965TipoLancamentoTipo = "" ;
   this.Z966TipoLancamentoSnEstorno = "" ;
   this.O966TipoLancamentoSnEstorno = "" ;
   this.Z967TipoLancamentoTpCalcAcr = "" ;
   this.O967TipoLancamentoTpCalcAcr = "" ;
   this.Z1046TipoLancamentoEmpresaid = "" ;
   this.O1046TipoLancamentoEmpresaid = "" ;
   this.AV6cTipoLancamentoId = 0 ;
   this.AV7cTipoLancamentoDescricao = "" ;
   this.AV8cTipoLancamentoPagRec = "" ;
   this.AV9cTipoLancamentoTipo = "" ;
   this.AV10cTipoLancamentoSnEstorno = "" ;
   this.AV11cTipoLancamentoTpCalcAcr = "" ;
   this.AV12pTipoLancamentoEmpresaid = "" ;
   this.AV13pTipoLancamentoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A966TipoLancamentoSnEstorno = "" ;
   this.A967TipoLancamentoTpCalcAcr = "" ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.Events = {"e131k62_client": ["ENTER", true] ,"e141k61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'},{av:'AV12pTipoLancamentoEmpresaid',fld:'vPTIPOLANCAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'}],[{av:'AV13pTipoLancamentoId',fld:'vPTIPOLANCAMENTOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'},{av:'AV12pTipoLancamentoEmpresaid',fld:'vPTIPOLANCAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'},{av:'AV12pTipoLancamentoEmpresaid',fld:'vPTIPOLANCAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'},{av:'AV12pTipoLancamentoEmpresaid',fld:'vPTIPOLANCAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'},{av:'AV12pTipoLancamentoEmpresaid',fld:'vPTIPOLANCAMENTOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pTipoLancamentoEmpresaid", "vPTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV13pTipoLancamentoId", "vPTIPOLANCAMENTOID", 0, "int");
   this.setVCMap("AV12pTipoLancamentoEmpresaid", "vPTIPOLANCAMENTOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pTipoLancamentoEmpresaid"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03v1());
