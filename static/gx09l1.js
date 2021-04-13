/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:59.63
*/
gx.evt.autoSkip = false;
gx.define('gx09l1', false, function () {
   this.ServerClass =  "gx09l1" ;
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
      this.AV12pPrecoEmpresaId=gx.fn.getControlValue("vPPRECOEMPRESAID") ;
      this.AV13pPrecoId=gx.fn.getIntegerValue("vPPRECOID",'.') ;
   };
   this.e131o42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141o41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09l1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(710,48,"PRECOID","Preço","","PrecoId","int",0,"px",2,2,"right",null,[],710,"PrecoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(711,49,"PRECODESCRICAO","Descrição Preço","Selecionar","PrecoDescricao","svchar",0,"px",30,30,"left",null,[],711,"PrecoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(722,50,"PRECOTIPO","Tipo do Preço","PrecoTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(738,51,"PRECOVINCULADOEMPRESAID","Empresa Preço Vinculado","","PrecoVinculadoEmpresaId","char",0,"px",10,10,"left",null,[],738,"PrecoVinculadoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(736,52,"PRECOVINCULADOID","Preço Vinculado","","PrecoVinculadoId","int",0,"px",2,2,"right",null,[],736,"PrecoVinculadoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3200,53,"PRECOUSUARIOALT","Usuário de Alteração","","PrecoUsuarioAlt","char",0,"px",12,12,"left",null,[],3200,"PrecoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4342,54,"PRECOPCMARGEM","Percentual Margem","","PrecoPCMargem","decimal",0,"px",10,10,"right",null,[],4342,"PrecoPCMargem",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(709,55,"PRECOEMPRESAID","Empresa Preço","","PrecoEmpresaId","char",0,"px",10,10,"left",null,[],709,"PrecoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPRECOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOID",gxz:"ZV6cPrecoId",gxold:"OV6cPrecoId",gxvar:"AV6cPrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRECOID",gx.O.AV6cPrecoId,0)},c2v:function(){gx.O.AV6cPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPRECODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECODESCRICAO",gxz:"ZV7cPrecoDescricao",gxold:"OV7cPrecoDescricao",gxvar:"AV7cPrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPrecoDescricao=Value},v2z:function(Value){gx.O.ZV7cPrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCPRECODESCRICAO",gx.O.AV7cPrecoDescricao,0)},c2v:function(){gx.O.AV7cPrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPRECOTIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOTIPO",gxz:"ZV8cPrecoTipo",gxold:"OV8cPrecoTipo",gxvar:"AV8cPrecoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cPrecoTipo=Value},v2z:function(Value){gx.O.ZV8cPrecoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCPRECOTIPO",gx.O.AV8cPrecoTipo)},c2v:function(){gx.O.AV8cPrecoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCPRECOTIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPRECOVINCULADOEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOVINCULADOEMPRESAID",gxz:"ZV9cPrecoVinculadoEmpresaId",gxold:"OV9cPrecoVinculadoEmpresaId",gxvar:"AV9cPrecoVinculadoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPrecoVinculadoEmpresaId=Value},v2z:function(Value){gx.O.ZV9cPrecoVinculadoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPRECOVINCULADOEMPRESAID",gx.O.AV9cPrecoVinculadoEmpresaId,0)},c2v:function(){gx.O.AV9cPrecoVinculadoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPRECOVINCULADOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPRECOVINCULADOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOVINCULADOID",gxz:"ZV10cPrecoVinculadoId",gxold:"OV10cPrecoVinculadoId",gxvar:"AV10cPrecoVinculadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPrecoVinculadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cPrecoVinculadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRECOVINCULADOID",gx.O.AV10cPrecoVinculadoId,0)},c2v:function(){gx.O.AV10cPrecoVinculadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRECOVINCULADOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPRECOUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRECOUSUARIOALT",gxz:"ZV11cPrecoUsuarioAlt",gxold:"OV11cPrecoUsuarioAlt",gxvar:"AV11cPrecoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPrecoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cPrecoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPRECOUSUARIOALT",gx.O.AV11cPrecoUsuarioAlt,0)},c2v:function(){gx.O.AV11cPrecoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPRECOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOID",gxz:"Z710PrecoId",gxold:"O710PrecoId",gxvar:"A710PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A710PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z710PrecoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOID",row || gx.fn.currentGridRowImpl(46),gx.O.A710PrecoId,0)},c2v:function(){gx.O.A710PrecoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECODESCRICAO",gxz:"Z711PrecoDescricao",gxold:"O711PrecoDescricao",gxvar:"A711PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A711PrecoDescricao=Value},v2z:function(Value){gx.O.Z711PrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PRECODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A711PrecoDescricao,0)},c2v:function(){gx.O.A711PrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOTIPO",gxz:"Z722PrecoTipo",gxold:"O722PrecoTipo",gxvar:"A722PrecoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A722PrecoTipo=Value},v2z:function(Value){gx.O.Z722PrecoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PRECOTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A722PrecoTipo)},c2v:function(){gx.O.A722PrecoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOVINCULADOEMPRESAID",gxz:"Z738PrecoVinculadoEmpresaId",gxold:"O738PrecoVinculadoEmpresaId",gxvar:"A738PrecoVinculadoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A738PrecoVinculadoEmpresaId=Value},v2z:function(Value){gx.O.Z738PrecoVinculadoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRECOVINCULADOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A738PrecoVinculadoEmpresaId,0)},c2v:function(){gx.O.A738PrecoVinculadoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOVINCULADOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOVINCULADOID",gxz:"Z736PrecoVinculadoId",gxold:"O736PrecoVinculadoId",gxvar:"A736PrecoVinculadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A736PrecoVinculadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z736PrecoVinculadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOVINCULADOID",row || gx.fn.currentGridRowImpl(46),gx.O.A736PrecoVinculadoId,0)},c2v:function(){gx.O.A736PrecoVinculadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOVINCULADOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOUSUARIOALT",gxz:"Z3200PrecoUsuarioAlt",gxold:"O3200PrecoUsuarioAlt",gxvar:"A3200PrecoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3200PrecoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3200PrecoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("PRECOUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A3200PrecoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3200PrecoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"decimal",len:10,dec:6,sign:false,pic:"ZZ9.999999",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOPCMARGEM",gxz:"Z4342PrecoPCMargem",gxold:"O4342PrecoPCMargem",gxvar:"A4342PrecoPCMargem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4342PrecoPCMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4342PrecoPCMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PRECOPCMARGEM",row || gx.fn.currentGridRowImpl(46),gx.O.A4342PrecoPCMargem,6,',')},c2v:function(){gx.O.A4342PrecoPCMargem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PRECOPCMARGEM",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRECOEMPRESAID",gxz:"Z709PrecoEmpresaId",gxold:"O709PrecoEmpresaId",gxvar:"A709PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A709PrecoEmpresaId=Value},v2z:function(Value){gx.O.Z709PrecoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRECOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A709PrecoEmpresaId,0)},c2v:function(){gx.O.A709PrecoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   this.AV6cPrecoId = 0 ;
   this.ZV6cPrecoId = 0 ;
   this.OV6cPrecoId = 0 ;
   this.AV7cPrecoDescricao = "" ;
   this.ZV7cPrecoDescricao = "" ;
   this.OV7cPrecoDescricao = "" ;
   this.AV8cPrecoTipo = "" ;
   this.ZV8cPrecoTipo = "" ;
   this.OV8cPrecoTipo = "" ;
   this.AV9cPrecoVinculadoEmpresaId = "" ;
   this.ZV9cPrecoVinculadoEmpresaId = "" ;
   this.OV9cPrecoVinculadoEmpresaId = "" ;
   this.AV10cPrecoVinculadoId = 0 ;
   this.ZV10cPrecoVinculadoId = 0 ;
   this.OV10cPrecoVinculadoId = 0 ;
   this.AV11cPrecoUsuarioAlt = "" ;
   this.ZV11cPrecoUsuarioAlt = "" ;
   this.OV11cPrecoUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z710PrecoId = 0 ;
   this.O710PrecoId = 0 ;
   this.Z711PrecoDescricao = "" ;
   this.O711PrecoDescricao = "" ;
   this.Z722PrecoTipo = "" ;
   this.O722PrecoTipo = "" ;
   this.Z738PrecoVinculadoEmpresaId = "" ;
   this.O738PrecoVinculadoEmpresaId = "" ;
   this.Z736PrecoVinculadoId = 0 ;
   this.O736PrecoVinculadoId = 0 ;
   this.Z3200PrecoUsuarioAlt = "" ;
   this.O3200PrecoUsuarioAlt = "" ;
   this.Z4342PrecoPCMargem = 0 ;
   this.O4342PrecoPCMargem = 0 ;
   this.Z709PrecoEmpresaId = "" ;
   this.O709PrecoEmpresaId = "" ;
   this.AV6cPrecoId = 0 ;
   this.AV7cPrecoDescricao = "" ;
   this.AV8cPrecoTipo = "" ;
   this.AV9cPrecoVinculadoEmpresaId = "" ;
   this.AV10cPrecoVinculadoId = 0 ;
   this.AV11cPrecoUsuarioAlt = "" ;
   this.AV12pPrecoEmpresaId = "" ;
   this.AV13pPrecoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A710PrecoId = 0 ;
   this.A711PrecoDescricao = "" ;
   this.A722PrecoTipo = "" ;
   this.A738PrecoVinculadoEmpresaId = "" ;
   this.A736PrecoVinculadoId = 0 ;
   this.A3200PrecoUsuarioAlt = "" ;
   this.A4342PrecoPCMargem = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.Events = {"e131o42_client": ["ENTER", true] ,"e141o41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPrecoId',fld:'vCPRECOID'},{av:'AV7cPrecoDescricao',fld:'vCPRECODESCRICAO'},{av:'AV8cPrecoTipo',fld:'vCPRECOTIPO'},{av:'AV9cPrecoVinculadoEmpresaId',fld:'vCPRECOVINCULADOEMPRESAID'},{av:'AV10cPrecoVinculadoId',fld:'vCPRECOVINCULADOID'},{av:'AV11cPrecoUsuarioAlt',fld:'vCPRECOUSUARIOALT'},{av:'AV12pPrecoEmpresaId',fld:'vPPRECOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A710PrecoId',fld:'PRECOID'}],[{av:'AV13pPrecoId',fld:'vPPRECOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPrecoId',fld:'vCPRECOID'},{av:'AV7cPrecoDescricao',fld:'vCPRECODESCRICAO'},{av:'AV8cPrecoTipo',fld:'vCPRECOTIPO'},{av:'AV9cPrecoVinculadoEmpresaId',fld:'vCPRECOVINCULADOEMPRESAID'},{av:'AV10cPrecoVinculadoId',fld:'vCPRECOVINCULADOID'},{av:'AV11cPrecoUsuarioAlt',fld:'vCPRECOUSUARIOALT'},{av:'AV12pPrecoEmpresaId',fld:'vPPRECOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPrecoId',fld:'vCPRECOID'},{av:'AV7cPrecoDescricao',fld:'vCPRECODESCRICAO'},{av:'AV8cPrecoTipo',fld:'vCPRECOTIPO'},{av:'AV9cPrecoVinculadoEmpresaId',fld:'vCPRECOVINCULADOEMPRESAID'},{av:'AV10cPrecoVinculadoId',fld:'vCPRECOVINCULADOID'},{av:'AV11cPrecoUsuarioAlt',fld:'vCPRECOUSUARIOALT'},{av:'AV12pPrecoEmpresaId',fld:'vPPRECOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPrecoId',fld:'vCPRECOID'},{av:'AV7cPrecoDescricao',fld:'vCPRECODESCRICAO'},{av:'AV8cPrecoTipo',fld:'vCPRECOTIPO'},{av:'AV9cPrecoVinculadoEmpresaId',fld:'vCPRECOVINCULADOEMPRESAID'},{av:'AV10cPrecoVinculadoId',fld:'vCPRECOVINCULADOID'},{av:'AV11cPrecoUsuarioAlt',fld:'vCPRECOUSUARIOALT'},{av:'AV12pPrecoEmpresaId',fld:'vPPRECOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPrecoId',fld:'vCPRECOID'},{av:'AV7cPrecoDescricao',fld:'vCPRECODESCRICAO'},{av:'AV8cPrecoTipo',fld:'vCPRECOTIPO'},{av:'AV9cPrecoVinculadoEmpresaId',fld:'vCPRECOVINCULADOEMPRESAID'},{av:'AV10cPrecoVinculadoId',fld:'vCPRECOVINCULADOID'},{av:'AV11cPrecoUsuarioAlt',fld:'vCPRECOUSUARIOALT'},{av:'AV12pPrecoEmpresaId',fld:'vPPRECOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pPrecoEmpresaId", "vPPRECOEMPRESAID", 0, "char");
   this.setVCMap("AV13pPrecoId", "vPPRECOID", 0, "int");
   this.setVCMap("AV12pPrecoEmpresaId", "vPPRECOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pPrecoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09l1());
