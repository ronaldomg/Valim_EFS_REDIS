/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:54.81
*/
gx.evt.autoSkip = false;
gx.define('gx0nb0', false, function () {
   this.ServerClass =  "gx0nb0" ;
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
      this.AV13pTipoConcretoEmpresaId=gx.fn.getControlValue("vPTIPOCONCRETOEMPRESAID") ;
      this.AV14pTipoConcretoCodigo=gx.fn.getIntegerValue("vPTIPOCONCRETOCODIGO",'.') ;
   };
   this.e132et2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142et1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0nb0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11449,53,"TIPOCONCRETOEMPRESAID","Empresa Id","","TipoConcretoEmpresaId","char",0,"px",10,10,"left",null,[],11449,"TipoConcretoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11321,54,"TIPOCONCRETOCODIGO","Concreto Codigo","","TipoConcretoCodigo","int",0,"px",3,3,"right",null,[],11321,"TipoConcretoCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11461,55,"TIPOCONCRETOCONEMPID","Emp Id","","TipoConcretoConEmpId","char",0,"px",10,10,"left",null,[],11461,"TipoConcretoConEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11322,56,"TIPOCONCRETOCONTIPO","Con Tipo","","TipoConcretoConTipo","char",0,"px",1,1,"left",null,[],11322,"TipoConcretoConTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11323,57,"TIPOCONCRETOCONCOD","Con Cod","","TipoConcretoConCod","char",0,"px",2,2,"left",null,[],11323,"TipoConcretoConCod",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOCONCRETOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOEMPRESAID",gxz:"ZV6cTipoConcretoEmpresaId",gxold:"OV6cTipoConcretoEmpresaId",gxvar:"AV6cTipoConcretoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoConcretoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoConcretoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOEMPRESAID",gx.O.AV6cTipoConcretoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoConcretoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOCONCRETOCODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOCODIGO",gxz:"ZV7cTipoConcretoCodigo",gxold:"OV7cTipoConcretoCodigo",gxvar:"AV7cTipoConcretoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoConcretoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoConcretoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOCODIGO",gx.O.AV7cTipoConcretoCodigo,0)},c2v:function(){gx.O.AV7cTipoConcretoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOCONCRETOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOCONCRETOCONEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOCONEMPID",gxz:"ZV8cTipoConcretoConEmpId",gxold:"OV8cTipoConcretoConEmpId",gxvar:"AV8cTipoConcretoConEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoConcretoConEmpId=Value},v2z:function(Value){gx.O.ZV8cTipoConcretoConEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOCONEMPID",gx.O.AV8cTipoConcretoConEmpId,0)},c2v:function(){gx.O.AV8cTipoConcretoConEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOCONEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOCONCRETOCONTIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOCONTIPO",gxz:"ZV9cTipoConcretoConTipo",gxold:"OV9cTipoConcretoConTipo",gxvar:"AV9cTipoConcretoConTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoConcretoConTipo=Value},v2z:function(Value){gx.O.ZV9cTipoConcretoConTipo=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOCONTIPO",gx.O.AV9cTipoConcretoConTipo,0)},c2v:function(){gx.O.AV9cTipoConcretoConTipo=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOCONTIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOCONCRETOCONCOD", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOCONCOD",gxz:"ZV10cTipoConcretoConCod",gxold:"OV10cTipoConcretoConCod",gxvar:"AV10cTipoConcretoConCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoConcretoConCod=Value},v2z:function(Value){gx.O.ZV10cTipoConcretoConCod=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOCONCOD",gx.O.AV10cTipoConcretoConCod,0)},c2v:function(){gx.O.AV10cTipoConcretoConCod=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOCONCOD")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOCONCRETORESISTENCIA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:7,dec:1,sign:false,pic:"ZZZZ9.9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETORESISTENCIA",gxz:"ZV11cTipoConcretoResistencia",gxold:"OV11cTipoConcretoResistencia",gxvar:"AV11cTipoConcretoResistencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTipoConcretoResistencia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cTipoConcretoResistencia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCTIPOCONCRETORESISTENCIA",gx.O.AV11cTipoConcretoResistencia,1,',')},c2v:function(){gx.O.AV11cTipoConcretoResistencia=this.val()},val:function(){return gx.fn.getDecimalValue("vCTIPOCONCRETORESISTENCIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOCONCRETOAGREGRAUDOEMPID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCONCRETOAGREGRAUDOEMPID",gxz:"ZV12cTipoConcretoAgreGraudoEmpId",gxold:"OV12cTipoConcretoAgreGraudoEmpId",gxvar:"AV12cTipoConcretoAgreGraudoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoConcretoAgreGraudoEmpId=Value},v2z:function(Value){gx.O.ZV12cTipoConcretoAgreGraudoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCONCRETOAGREGRAUDOEMPID",gx.O.AV12cTipoConcretoAgreGraudoEmpId,0)},c2v:function(){gx.O.AV12cTipoConcretoAgreGraudoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCONCRETOAGREGRAUDOEMPID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOEMPRESAID",gxz:"Z11449TipoConcretoEmpresaId",gxold:"O11449TipoConcretoEmpresaId",gxvar:"A11449TipoConcretoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11449TipoConcretoEmpresaId=Value},v2z:function(Value){gx.O.Z11449TipoConcretoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONCRETOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A11449TipoConcretoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11449TipoConcretoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONCRETOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCODIGO",gxz:"Z11321TipoConcretoCodigo",gxold:"O11321TipoConcretoCodigo",gxvar:"A11321TipoConcretoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11321TipoConcretoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11321TipoConcretoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCONCRETOCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A11321TipoConcretoCodigo,0)},c2v:function(){gx.O.A11321TipoConcretoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCONCRETOCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCONEMPID",gxz:"Z11461TipoConcretoConEmpId",gxold:"O11461TipoConcretoConEmpId",gxvar:"A11461TipoConcretoConEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11461TipoConcretoConEmpId=Value},v2z:function(Value){gx.O.Z11461TipoConcretoConEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONCRETOCONEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A11461TipoConcretoConEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11461TipoConcretoConEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONCRETOCONEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCONTIPO",gxz:"Z11322TipoConcretoConTipo",gxold:"O11322TipoConcretoConTipo",gxvar:"A11322TipoConcretoConTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11322TipoConcretoConTipo=Value},v2z:function(Value){gx.O.Z11322TipoConcretoConTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONCRETOCONTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A11322TipoConcretoConTipo,0)},c2v:function(){gx.O.A11322TipoConcretoConTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONCRETOCONTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONCRETOCONCOD",gxz:"Z11323TipoConcretoConCod",gxold:"O11323TipoConcretoConCod",gxvar:"A11323TipoConcretoConCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11323TipoConcretoConCod=Value},v2z:function(Value){gx.O.Z11323TipoConcretoConCod=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONCRETOCONCOD",row || gx.fn.currentGridRowImpl(51),gx.O.A11323TipoConcretoConCod,0)},c2v:function(){gx.O.A11323TipoConcretoConCod=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONCRETOCONCOD",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTipoConcretoEmpresaId = "" ;
   this.ZV6cTipoConcretoEmpresaId = "" ;
   this.OV6cTipoConcretoEmpresaId = "" ;
   this.AV7cTipoConcretoCodigo = 0 ;
   this.ZV7cTipoConcretoCodigo = 0 ;
   this.OV7cTipoConcretoCodigo = 0 ;
   this.AV8cTipoConcretoConEmpId = "" ;
   this.ZV8cTipoConcretoConEmpId = "" ;
   this.OV8cTipoConcretoConEmpId = "" ;
   this.AV9cTipoConcretoConTipo = "" ;
   this.ZV9cTipoConcretoConTipo = "" ;
   this.OV9cTipoConcretoConTipo = "" ;
   this.AV10cTipoConcretoConCod = "" ;
   this.ZV10cTipoConcretoConCod = "" ;
   this.OV10cTipoConcretoConCod = "" ;
   this.AV11cTipoConcretoResistencia = 0 ;
   this.ZV11cTipoConcretoResistencia = 0 ;
   this.OV11cTipoConcretoResistencia = 0 ;
   this.AV12cTipoConcretoAgreGraudoEmpId = "" ;
   this.ZV12cTipoConcretoAgreGraudoEmpId = "" ;
   this.OV12cTipoConcretoAgreGraudoEmpId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11449TipoConcretoEmpresaId = "" ;
   this.O11449TipoConcretoEmpresaId = "" ;
   this.Z11321TipoConcretoCodigo = 0 ;
   this.O11321TipoConcretoCodigo = 0 ;
   this.Z11461TipoConcretoConEmpId = "" ;
   this.O11461TipoConcretoConEmpId = "" ;
   this.Z11322TipoConcretoConTipo = "" ;
   this.O11322TipoConcretoConTipo = "" ;
   this.Z11323TipoConcretoConCod = "" ;
   this.O11323TipoConcretoConCod = "" ;
   this.AV6cTipoConcretoEmpresaId = "" ;
   this.AV7cTipoConcretoCodigo = 0 ;
   this.AV8cTipoConcretoConEmpId = "" ;
   this.AV9cTipoConcretoConTipo = "" ;
   this.AV10cTipoConcretoConCod = "" ;
   this.AV11cTipoConcretoResistencia = 0 ;
   this.AV12cTipoConcretoAgreGraudoEmpId = "" ;
   this.AV13pTipoConcretoEmpresaId = "" ;
   this.AV14pTipoConcretoCodigo = 0 ;
   this.A11462TipoConcretoAgreGraudoEmpId = "" ;
   this.A11392TipoConcretoResistencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11449TipoConcretoEmpresaId = "" ;
   this.A11321TipoConcretoCodigo = 0 ;
   this.A11461TipoConcretoConEmpId = "" ;
   this.A11322TipoConcretoConTipo = "" ;
   this.A11323TipoConcretoConCod = "" ;
   this.Events = {"e132et2_client": ["ENTER", true] ,"e142et1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoConcretoEmpresaId',fld:'vCTIPOCONCRETOEMPRESAID'},{av:'AV7cTipoConcretoCodigo',fld:'vCTIPOCONCRETOCODIGO'},{av:'AV8cTipoConcretoConEmpId',fld:'vCTIPOCONCRETOCONEMPID'},{av:'AV9cTipoConcretoConTipo',fld:'vCTIPOCONCRETOCONTIPO'},{av:'AV10cTipoConcretoConCod',fld:'vCTIPOCONCRETOCONCOD'},{av:'AV11cTipoConcretoResistencia',fld:'vCTIPOCONCRETORESISTENCIA'},{av:'AV12cTipoConcretoAgreGraudoEmpId',fld:'vCTIPOCONCRETOAGREGRAUDOEMPID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11449TipoConcretoEmpresaId',fld:'TIPOCONCRETOEMPRESAID'},{av:'A11321TipoConcretoCodigo',fld:'TIPOCONCRETOCODIGO'}],[{av:'AV13pTipoConcretoEmpresaId',fld:'vPTIPOCONCRETOEMPRESAID'},{av:'AV14pTipoConcretoCodigo',fld:'vPTIPOCONCRETOCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoConcretoEmpresaId',fld:'vCTIPOCONCRETOEMPRESAID'},{av:'AV7cTipoConcretoCodigo',fld:'vCTIPOCONCRETOCODIGO'},{av:'AV8cTipoConcretoConEmpId',fld:'vCTIPOCONCRETOCONEMPID'},{av:'AV9cTipoConcretoConTipo',fld:'vCTIPOCONCRETOCONTIPO'},{av:'AV10cTipoConcretoConCod',fld:'vCTIPOCONCRETOCONCOD'},{av:'AV11cTipoConcretoResistencia',fld:'vCTIPOCONCRETORESISTENCIA'},{av:'AV12cTipoConcretoAgreGraudoEmpId',fld:'vCTIPOCONCRETOAGREGRAUDOEMPID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoConcretoEmpresaId',fld:'vCTIPOCONCRETOEMPRESAID'},{av:'AV7cTipoConcretoCodigo',fld:'vCTIPOCONCRETOCODIGO'},{av:'AV8cTipoConcretoConEmpId',fld:'vCTIPOCONCRETOCONEMPID'},{av:'AV9cTipoConcretoConTipo',fld:'vCTIPOCONCRETOCONTIPO'},{av:'AV10cTipoConcretoConCod',fld:'vCTIPOCONCRETOCONCOD'},{av:'AV11cTipoConcretoResistencia',fld:'vCTIPOCONCRETORESISTENCIA'},{av:'AV12cTipoConcretoAgreGraudoEmpId',fld:'vCTIPOCONCRETOAGREGRAUDOEMPID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoConcretoEmpresaId',fld:'vCTIPOCONCRETOEMPRESAID'},{av:'AV7cTipoConcretoCodigo',fld:'vCTIPOCONCRETOCODIGO'},{av:'AV8cTipoConcretoConEmpId',fld:'vCTIPOCONCRETOCONEMPID'},{av:'AV9cTipoConcretoConTipo',fld:'vCTIPOCONCRETOCONTIPO'},{av:'AV10cTipoConcretoConCod',fld:'vCTIPOCONCRETOCONCOD'},{av:'AV11cTipoConcretoResistencia',fld:'vCTIPOCONCRETORESISTENCIA'},{av:'AV12cTipoConcretoAgreGraudoEmpId',fld:'vCTIPOCONCRETOAGREGRAUDOEMPID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoConcretoEmpresaId',fld:'vCTIPOCONCRETOEMPRESAID'},{av:'AV7cTipoConcretoCodigo',fld:'vCTIPOCONCRETOCODIGO'},{av:'AV8cTipoConcretoConEmpId',fld:'vCTIPOCONCRETOCONEMPID'},{av:'AV9cTipoConcretoConTipo',fld:'vCTIPOCONCRETOCONTIPO'},{av:'AV10cTipoConcretoConCod',fld:'vCTIPOCONCRETOCONCOD'},{av:'AV11cTipoConcretoResistencia',fld:'vCTIPOCONCRETORESISTENCIA'},{av:'AV12cTipoConcretoAgreGraudoEmpId',fld:'vCTIPOCONCRETOAGREGRAUDOEMPID'}],[]];
   this.setVCMap("AV13pTipoConcretoEmpresaId", "vPTIPOCONCRETOEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoConcretoCodigo", "vPTIPOCONCRETOCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0nb0());
