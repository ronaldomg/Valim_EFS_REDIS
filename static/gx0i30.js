/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:42:21.23
*/
gx.evt.autoSkip = false;
gx.define('gx0i30', false, function () {
   this.ServerClass =  "gx0i30" ;
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
      this.AV13pOrdemServicoEmpresaId=gx.fn.getControlValue("vPORDEMSERVICOEMPRESAID") ;
      this.AV14pOrdemServicoId=gx.fn.getIntegerValue("vPORDEMSERVICOID",'.') ;
   };
   this.e131vt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141vt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0i30",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8791,53,"ORDEMSERVICOEMPRESAID","Empresa Da Ordem de Serviço","","OrdemServicoEmpresaId","char",0,"px",10,10,"left",null,[],8791,"OrdemServicoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8792,54,"ORDEMSERVICOID","Código da Ordem de Serviço","Selecionar","OrdemServicoId","int",0,"px",9,9,"right",null,[],8792,"OrdemServicoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8717,55,"ORDEMSERVICOFILIALID","Filial da Ordem de Serviço","","OrdemServicoFilialId","int",0,"px",7,7,"right",null,[],8717,"OrdemServicoFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8682,56,"ORDEMSERVICOTIPOID","Código do Tipo de Ordem de Serviço","","OrdemServicoTipoId","int",0,"px",2,2,"right",null,[],8682,"OrdemServicoTipoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9918,57,"ORDEMSERVICOPREVENDAID","da saída","","OrdemServicoPreVendaId","int",0,"px",10,10,"right",null,[],9918,"OrdemServicoPreVendaId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKORDEMSERVICOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICOEMPRESAID",gxz:"ZV6cOrdemServicoEmpresaId",gxold:"OV6cOrdemServicoEmpresaId",gxvar:"AV6cOrdemServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cOrdemServicoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cOrdemServicoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICOEMPRESAID",gx.O.AV6cOrdemServicoEmpresaId,0)},c2v:function(){gx.O.AV6cOrdemServicoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCORDEMSERVICOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKORDEMSERVICOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICOID",gxz:"ZV7cOrdemServicoId",gxold:"OV7cOrdemServicoId",gxvar:"AV7cOrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cOrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cOrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICOID",gx.O.AV7cOrdemServicoId,0)},c2v:function(){gx.O.AV7cOrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKORDEMSERVICOFILIALID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICOFILIALID",gxz:"ZV8cOrdemServicoFilialId",gxold:"OV8cOrdemServicoFilialId",gxvar:"AV8cOrdemServicoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cOrdemServicoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cOrdemServicoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICOFILIALID",gx.O.AV8cOrdemServicoFilialId,0)},c2v:function(){gx.O.AV8cOrdemServicoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORDEMSERVICOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKORDEMSERVICOTIPOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICOTIPOID",gxz:"ZV9cOrdemServicoTipoId",gxold:"OV9cOrdemServicoTipoId",gxvar:"AV9cOrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cOrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cOrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICOTIPOID",gx.O.AV9cOrdemServicoTipoId,0)},c2v:function(){gx.O.AV9cOrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKORDEMSERVICOTIPOEMPRESAID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICOTIPOEMPRESAID",gxz:"ZV10cOrdemServicoTipoEmpresaid",gxold:"OV10cOrdemServicoTipoEmpresaid",gxvar:"AV10cOrdemServicoTipoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cOrdemServicoTipoEmpresaid=Value},v2z:function(Value){gx.O.ZV10cOrdemServicoTipoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICOTIPOEMPRESAID",gx.O.AV10cOrdemServicoTipoEmpresaid,0)},c2v:function(){gx.O.AV10cOrdemServicoTipoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vCORDEMSERVICOTIPOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKORDEMSERVICODATHORAEMISSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICODATHORAEMISSAO",gxz:"ZV11cOrdemServicoDatHoraEmissao",gxold:"OV11cOrdemServicoDatHoraEmissao",gxvar:"AV11cOrdemServicoDatHoraEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICODATHORAEMISSAO",gx.O.AV11cOrdemServicoDatHoraEmissao,0)},c2v:function(){gx.O.AV11cOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCORDEMSERVICODATHORAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKORDEMSERVICODATAHORAFECHAMENTO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCORDEMSERVICODATAHORAFECHAMENTO",gxz:"ZV12cOrdemServicoDataHoraFechamento",gxold:"OV12cOrdemServicoDataHoraFechamento",gxvar:"AV12cOrdemServicoDataHoraFechamento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCORDEMSERVICODATAHORAFECHAMENTO",gx.O.AV12cOrdemServicoDataHoraFechamento,0)},c2v:function(){gx.O.AV12cOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCORDEMSERVICODATAHORAFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOEMPRESAID",gxz:"Z8791OrdemServicoEmpresaId",gxold:"O8791OrdemServicoEmpresaId",gxvar:"A8791OrdemServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8791OrdemServicoEmpresaId=Value},v2z:function(Value){gx.O.Z8791OrdemServicoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A8791OrdemServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8791OrdemServicoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOID",gxz:"Z8792OrdemServicoId",gxold:"O8792OrdemServicoId",gxvar:"A8792OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8792OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8792OrdemServicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOID",row || gx.fn.currentGridRowImpl(51),gx.O.A8792OrdemServicoId,0)},c2v:function(){gx.O.A8792OrdemServicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFILIALID",gxz:"Z8717OrdemServicoFilialId",gxold:"O8717OrdemServicoFilialId",gxvar:"A8717OrdemServicoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8717OrdemServicoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8717OrdemServicoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFILIALID",row || gx.fn.currentGridRowImpl(51),gx.O.A8717OrdemServicoFilialId,0)},c2v:function(){gx.O.A8717OrdemServicoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOFILIALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOID",gxz:"Z8682OrdemServicoTipoId",gxold:"O8682OrdemServicoTipoId",gxvar:"A8682OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8682OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8682OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(51),gx.O.A8682OrdemServicoTipoId,0)},c2v:function(){gx.O.A8682OrdemServicoTipoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOPREVENDAID",gxz:"Z9918OrdemServicoPreVendaId",gxold:"O9918OrdemServicoPreVendaId",gxvar:"A9918OrdemServicoPreVendaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9918OrdemServicoPreVendaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9918OrdemServicoPreVendaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOPREVENDAID",row || gx.fn.currentGridRowImpl(51),gx.O.A9918OrdemServicoPreVendaId,0)},c2v:function(){gx.O.A9918OrdemServicoPreVendaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOPREVENDAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cOrdemServicoEmpresaId = "" ;
   this.ZV6cOrdemServicoEmpresaId = "" ;
   this.OV6cOrdemServicoEmpresaId = "" ;
   this.AV7cOrdemServicoId = 0 ;
   this.ZV7cOrdemServicoId = 0 ;
   this.OV7cOrdemServicoId = 0 ;
   this.AV8cOrdemServicoFilialId = 0 ;
   this.ZV8cOrdemServicoFilialId = 0 ;
   this.OV8cOrdemServicoFilialId = 0 ;
   this.AV9cOrdemServicoTipoId = 0 ;
   this.ZV9cOrdemServicoTipoId = 0 ;
   this.OV9cOrdemServicoTipoId = 0 ;
   this.AV10cOrdemServicoTipoEmpresaid = "" ;
   this.ZV10cOrdemServicoTipoEmpresaid = "" ;
   this.OV10cOrdemServicoTipoEmpresaid = "" ;
   this.AV11cOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.ZV11cOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.OV11cOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV12cOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.ZV12cOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.OV12cOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8791OrdemServicoEmpresaId = "" ;
   this.O8791OrdemServicoEmpresaId = "" ;
   this.Z8792OrdemServicoId = 0 ;
   this.O8792OrdemServicoId = 0 ;
   this.Z8717OrdemServicoFilialId = 0 ;
   this.O8717OrdemServicoFilialId = 0 ;
   this.Z8682OrdemServicoTipoId = 0 ;
   this.O8682OrdemServicoTipoId = 0 ;
   this.Z9918OrdemServicoPreVendaId = 0 ;
   this.O9918OrdemServicoPreVendaId = 0 ;
   this.AV6cOrdemServicoEmpresaId = "" ;
   this.AV7cOrdemServicoId = 0 ;
   this.AV8cOrdemServicoFilialId = 0 ;
   this.AV9cOrdemServicoTipoId = 0 ;
   this.AV10cOrdemServicoTipoEmpresaid = "" ;
   this.AV11cOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV12cOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV13pOrdemServicoEmpresaId = "" ;
   this.AV14pOrdemServicoId = 0 ;
   this.A8719OrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.A8718OrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.AV5LinkSelection = "" ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.A8792OrdemServicoId = 0 ;
   this.A8717OrdemServicoFilialId = 0 ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A9918OrdemServicoPreVendaId = 0 ;
   this.Events = {"e131vt2_client": ["ENTER", true] ,"e141vt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cOrdemServicoEmpresaId',fld:'vCORDEMSERVICOEMPRESAID'},{av:'AV7cOrdemServicoId',fld:'vCORDEMSERVICOID'},{av:'AV8cOrdemServicoFilialId',fld:'vCORDEMSERVICOFILIALID'},{av:'AV9cOrdemServicoTipoId',fld:'vCORDEMSERVICOTIPOID'},{av:'AV10cOrdemServicoTipoEmpresaid',fld:'vCORDEMSERVICOTIPOEMPRESAID'},{av:'AV11cOrdemServicoDatHoraEmissao',fld:'vCORDEMSERVICODATHORAEMISSAO'},{av:'AV12cOrdemServicoDataHoraFechamento',fld:'vCORDEMSERVICODATAHORAFECHAMENTO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'}],[{av:'AV13pOrdemServicoEmpresaId',fld:'vPORDEMSERVICOEMPRESAID'},{av:'AV14pOrdemServicoId',fld:'vPORDEMSERVICOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cOrdemServicoEmpresaId',fld:'vCORDEMSERVICOEMPRESAID'},{av:'AV7cOrdemServicoId',fld:'vCORDEMSERVICOID'},{av:'AV8cOrdemServicoFilialId',fld:'vCORDEMSERVICOFILIALID'},{av:'AV9cOrdemServicoTipoId',fld:'vCORDEMSERVICOTIPOID'},{av:'AV10cOrdemServicoTipoEmpresaid',fld:'vCORDEMSERVICOTIPOEMPRESAID'},{av:'AV11cOrdemServicoDatHoraEmissao',fld:'vCORDEMSERVICODATHORAEMISSAO'},{av:'AV12cOrdemServicoDataHoraFechamento',fld:'vCORDEMSERVICODATAHORAFECHAMENTO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cOrdemServicoEmpresaId',fld:'vCORDEMSERVICOEMPRESAID'},{av:'AV7cOrdemServicoId',fld:'vCORDEMSERVICOID'},{av:'AV8cOrdemServicoFilialId',fld:'vCORDEMSERVICOFILIALID'},{av:'AV9cOrdemServicoTipoId',fld:'vCORDEMSERVICOTIPOID'},{av:'AV10cOrdemServicoTipoEmpresaid',fld:'vCORDEMSERVICOTIPOEMPRESAID'},{av:'AV11cOrdemServicoDatHoraEmissao',fld:'vCORDEMSERVICODATHORAEMISSAO'},{av:'AV12cOrdemServicoDataHoraFechamento',fld:'vCORDEMSERVICODATAHORAFECHAMENTO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cOrdemServicoEmpresaId',fld:'vCORDEMSERVICOEMPRESAID'},{av:'AV7cOrdemServicoId',fld:'vCORDEMSERVICOID'},{av:'AV8cOrdemServicoFilialId',fld:'vCORDEMSERVICOFILIALID'},{av:'AV9cOrdemServicoTipoId',fld:'vCORDEMSERVICOTIPOID'},{av:'AV10cOrdemServicoTipoEmpresaid',fld:'vCORDEMSERVICOTIPOEMPRESAID'},{av:'AV11cOrdemServicoDatHoraEmissao',fld:'vCORDEMSERVICODATHORAEMISSAO'},{av:'AV12cOrdemServicoDataHoraFechamento',fld:'vCORDEMSERVICODATAHORAFECHAMENTO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cOrdemServicoEmpresaId',fld:'vCORDEMSERVICOEMPRESAID'},{av:'AV7cOrdemServicoId',fld:'vCORDEMSERVICOID'},{av:'AV8cOrdemServicoFilialId',fld:'vCORDEMSERVICOFILIALID'},{av:'AV9cOrdemServicoTipoId',fld:'vCORDEMSERVICOTIPOID'},{av:'AV10cOrdemServicoTipoEmpresaid',fld:'vCORDEMSERVICOTIPOEMPRESAID'},{av:'AV11cOrdemServicoDatHoraEmissao',fld:'vCORDEMSERVICODATHORAEMISSAO'},{av:'AV12cOrdemServicoDataHoraFechamento',fld:'vCORDEMSERVICODATAHORAFECHAMENTO'}],[]];
   this.setVCMap("AV13pOrdemServicoEmpresaId", "vPORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV14pOrdemServicoId", "vPORDEMSERVICOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0i30());
