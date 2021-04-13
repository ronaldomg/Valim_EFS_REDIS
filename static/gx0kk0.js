/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:50.23
*/
gx.evt.autoSkip = false;
gx.define('gx0kk0', false, function () {
   this.ServerClass =  "gx0kk0" ;
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
      this.AV13pTipoProdutoEmpresaId=gx.fn.getControlValue("vPTIPOPRODUTOEMPRESAID") ;
      this.AV14pTipoProdutoId=gx.fn.getIntegerValue("vPTIPOPRODUTOID",'.') ;
      this.AV15pTipoProdutoTpCobEmpId=gx.fn.getControlValue("vPTIPOPRODUTOTPCOBEMPID") ;
      this.AV16pTipoProdutoTpCobId=gx.fn.getIntegerValue("vPTIPOPRODUTOTPCOBID",'.') ;
   };
   this.e1323k2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1423k1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kk0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9894,53,"TIPOPRODUTOEMPRESAID","Empresa Id","","TipoProdutoEmpresaId","char",0,"px",10,10,"left",null,[],9894,"TipoProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9895,54,"TIPOPRODUTOID","Produto Conciliadora","","TipoProdutoId","int",0,"px",4,4,"right",null,[],9895,"TipoProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9896,55,"TIPOPRODUTOTPCOBEMPID","Emp Id","","TipoProdutoTpCobEmpId","char",0,"px",10,10,"left",null,[],9896,"TipoProdutoTpCobEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9897,56,"TIPOPRODUTOTPCOBID","de Cobrança","","TipoProdutoTpCobId","int",0,"px",3,3,"right",null,[],9897,"TipoProdutoTpCobId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9910,57,"TIPOPRODUTOTPLANCAMENTOID","Lancamento Id","","TipoProdutoTpLancamentoId","int",0,"px",4,4,"right",null,[],9910,"TipoProdutoTpLancamentoId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOEMPRESAID",gxz:"ZV6cTipoProdutoEmpresaId",gxold:"OV6cTipoProdutoEmpresaId",gxvar:"AV6cTipoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOEMPRESAID",gx.O.AV6cTipoProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOID",gxz:"ZV7cTipoProdutoId",gxold:"OV7cTipoProdutoId",gxvar:"AV7cTipoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOID",gx.O.AV7cTipoProdutoId,0)},c2v:function(){gx.O.AV7cTipoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOPRODUTOTPCOBEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOTPCOBEMPID",gxz:"ZV8cTipoProdutoTpCobEmpId",gxold:"OV8cTipoProdutoTpCobEmpId",gxvar:"AV8cTipoProdutoTpCobEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoProdutoTpCobEmpId=Value},v2z:function(Value){gx.O.ZV8cTipoProdutoTpCobEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOTPCOBEMPID",gx.O.AV8cTipoProdutoTpCobEmpId,0)},c2v:function(){gx.O.AV8cTipoProdutoTpCobEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPRODUTOTPCOBEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOPRODUTOTPCOBID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOTPCOBID",gxz:"ZV9cTipoProdutoTpCobId",gxold:"OV9cTipoProdutoTpCobId",gxvar:"AV9cTipoProdutoTpCobId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoProdutoTpCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cTipoProdutoTpCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOTPCOBID",gx.O.AV9cTipoProdutoTpCobId,0)},c2v:function(){gx.O.AV9cTipoProdutoTpCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOPRODUTOTPCOBID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOPRODUTOTPLANCAMENTOEMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOTPLANCAMENTOEMPID",gxz:"ZV10cTipoProdutoTpLancamentoEmpId",gxold:"OV10cTipoProdutoTpLancamentoEmpId",gxvar:"AV10cTipoProdutoTpLancamentoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoProdutoTpLancamentoEmpId=Value},v2z:function(Value){gx.O.ZV10cTipoProdutoTpLancamentoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOTPLANCAMENTOEMPID",gx.O.AV10cTipoProdutoTpLancamentoEmpId,0)},c2v:function(){gx.O.AV10cTipoProdutoTpLancamentoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPRODUTOTPLANCAMENTOEMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOPRODUTOTPLANCAMENTOID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOTPLANCAMENTOID",gxz:"ZV11cTipoProdutoTpLancamentoId",gxold:"OV11cTipoProdutoTpLancamentoId",gxvar:"AV11cTipoProdutoTpLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTipoProdutoTpLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cTipoProdutoTpLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOTPLANCAMENTOID",gx.O.AV11cTipoProdutoTpLancamentoId,0)},c2v:function(){gx.O.AV11cTipoProdutoTpLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOPRODUTOTPLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOPRODUTOTPBAIXAEMPID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPRODUTOTPBAIXAEMPID",gxz:"ZV12cTipoProdutoTpBaixaEmpId",gxold:"OV12cTipoProdutoTpBaixaEmpId",gxvar:"AV12cTipoProdutoTpBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoProdutoTpBaixaEmpId=Value},v2z:function(Value){gx.O.ZV12cTipoProdutoTpBaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPRODUTOTPBAIXAEMPID",gx.O.AV12cTipoProdutoTpBaixaEmpId,0)},c2v:function(){gx.O.AV12cTipoProdutoTpBaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPRODUTOTPBAIXAEMPID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOEMPRESAID",gxz:"Z9894TipoProdutoEmpresaId",gxold:"O9894TipoProdutoEmpresaId",gxvar:"A9894TipoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9894TipoProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z9894TipoProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A9894TipoProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9894TipoProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOID",gxz:"Z9895TipoProdutoId",gxold:"O9895TipoProdutoId",gxvar:"A9895TipoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9895TipoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9895TipoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A9895TipoProdutoId,0)},c2v:function(){gx.O.A9895TipoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPCOBEMPID",gxz:"Z9896TipoProdutoTpCobEmpId",gxold:"O9896TipoProdutoTpCobEmpId",gxvar:"A9896TipoProdutoTpCobEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9896TipoProdutoTpCobEmpId=Value},v2z:function(Value){gx.O.Z9896TipoProdutoTpCobEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPRODUTOTPCOBEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A9896TipoProdutoTpCobEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9896TipoProdutoTpCobEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPRODUTOTPCOBEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPCOBID",gxz:"Z9897TipoProdutoTpCobId",gxold:"O9897TipoProdutoTpCobId",gxvar:"A9897TipoProdutoTpCobId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9897TipoProdutoTpCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9897TipoProdutoTpCobId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPRODUTOTPCOBID",row || gx.fn.currentGridRowImpl(51),gx.O.A9897TipoProdutoTpCobId,0)},c2v:function(){gx.O.A9897TipoProdutoTpCobId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPRODUTOTPCOBID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPRODUTOTPLANCAMENTOID",gxz:"Z9910TipoProdutoTpLancamentoId",gxold:"O9910TipoProdutoTpLancamentoId",gxvar:"A9910TipoProdutoTpLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9910TipoProdutoTpLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9910TipoProdutoTpLancamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPRODUTOTPLANCAMENTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A9910TipoProdutoTpLancamentoId,0)},c2v:function(){gx.O.A9910TipoProdutoTpLancamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPRODUTOTPLANCAMENTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTipoProdutoEmpresaId = "" ;
   this.ZV6cTipoProdutoEmpresaId = "" ;
   this.OV6cTipoProdutoEmpresaId = "" ;
   this.AV7cTipoProdutoId = 0 ;
   this.ZV7cTipoProdutoId = 0 ;
   this.OV7cTipoProdutoId = 0 ;
   this.AV8cTipoProdutoTpCobEmpId = "" ;
   this.ZV8cTipoProdutoTpCobEmpId = "" ;
   this.OV8cTipoProdutoTpCobEmpId = "" ;
   this.AV9cTipoProdutoTpCobId = 0 ;
   this.ZV9cTipoProdutoTpCobId = 0 ;
   this.OV9cTipoProdutoTpCobId = 0 ;
   this.AV10cTipoProdutoTpLancamentoEmpId = "" ;
   this.ZV10cTipoProdutoTpLancamentoEmpId = "" ;
   this.OV10cTipoProdutoTpLancamentoEmpId = "" ;
   this.AV11cTipoProdutoTpLancamentoId = 0 ;
   this.ZV11cTipoProdutoTpLancamentoId = 0 ;
   this.OV11cTipoProdutoTpLancamentoId = 0 ;
   this.AV12cTipoProdutoTpBaixaEmpId = "" ;
   this.ZV12cTipoProdutoTpBaixaEmpId = "" ;
   this.OV12cTipoProdutoTpBaixaEmpId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9894TipoProdutoEmpresaId = "" ;
   this.O9894TipoProdutoEmpresaId = "" ;
   this.Z9895TipoProdutoId = 0 ;
   this.O9895TipoProdutoId = 0 ;
   this.Z9896TipoProdutoTpCobEmpId = "" ;
   this.O9896TipoProdutoTpCobEmpId = "" ;
   this.Z9897TipoProdutoTpCobId = 0 ;
   this.O9897TipoProdutoTpCobId = 0 ;
   this.Z9910TipoProdutoTpLancamentoId = 0 ;
   this.O9910TipoProdutoTpLancamentoId = 0 ;
   this.AV6cTipoProdutoEmpresaId = "" ;
   this.AV7cTipoProdutoId = 0 ;
   this.AV8cTipoProdutoTpCobEmpId = "" ;
   this.AV9cTipoProdutoTpCobId = 0 ;
   this.AV10cTipoProdutoTpLancamentoEmpId = "" ;
   this.AV11cTipoProdutoTpLancamentoId = 0 ;
   this.AV12cTipoProdutoTpBaixaEmpId = "" ;
   this.AV13pTipoProdutoEmpresaId = "" ;
   this.AV14pTipoProdutoId = 0 ;
   this.AV15pTipoProdutoTpCobEmpId = "" ;
   this.AV16pTipoProdutoTpCobId = 0 ;
   this.A9898TipoProdutoTpBaixaEmpId = "" ;
   this.A9900TipoProdutoTpLancamentoEmpId = "" ;
   this.AV5LinkSelection = "" ;
   this.A9894TipoProdutoEmpresaId = "" ;
   this.A9895TipoProdutoId = 0 ;
   this.A9896TipoProdutoTpCobEmpId = "" ;
   this.A9897TipoProdutoTpCobId = 0 ;
   this.A9910TipoProdutoTpLancamentoId = 0 ;
   this.Events = {"e1323k2_client": ["ENTER", true] ,"e1423k1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoProdutoEmpresaId',fld:'vCTIPOPRODUTOEMPRESAID'},{av:'AV7cTipoProdutoId',fld:'vCTIPOPRODUTOID'},{av:'AV8cTipoProdutoTpCobEmpId',fld:'vCTIPOPRODUTOTPCOBEMPID'},{av:'AV9cTipoProdutoTpCobId',fld:'vCTIPOPRODUTOTPCOBID'},{av:'AV10cTipoProdutoTpLancamentoEmpId',fld:'vCTIPOPRODUTOTPLANCAMENTOEMPID'},{av:'AV11cTipoProdutoTpLancamentoId',fld:'vCTIPOPRODUTOTPLANCAMENTOID'},{av:'AV12cTipoProdutoTpBaixaEmpId',fld:'vCTIPOPRODUTOTPBAIXAEMPID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9894TipoProdutoEmpresaId',fld:'TIPOPRODUTOEMPRESAID'},{av:'A9895TipoProdutoId',fld:'TIPOPRODUTOID'},{av:'A9896TipoProdutoTpCobEmpId',fld:'TIPOPRODUTOTPCOBEMPID'},{av:'A9897TipoProdutoTpCobId',fld:'TIPOPRODUTOTPCOBID'}],[{av:'AV13pTipoProdutoEmpresaId',fld:'vPTIPOPRODUTOEMPRESAID'},{av:'AV14pTipoProdutoId',fld:'vPTIPOPRODUTOID'},{av:'AV15pTipoProdutoTpCobEmpId',fld:'vPTIPOPRODUTOTPCOBEMPID'},{av:'AV16pTipoProdutoTpCobId',fld:'vPTIPOPRODUTOTPCOBID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoProdutoEmpresaId',fld:'vCTIPOPRODUTOEMPRESAID'},{av:'AV7cTipoProdutoId',fld:'vCTIPOPRODUTOID'},{av:'AV8cTipoProdutoTpCobEmpId',fld:'vCTIPOPRODUTOTPCOBEMPID'},{av:'AV9cTipoProdutoTpCobId',fld:'vCTIPOPRODUTOTPCOBID'},{av:'AV10cTipoProdutoTpLancamentoEmpId',fld:'vCTIPOPRODUTOTPLANCAMENTOEMPID'},{av:'AV11cTipoProdutoTpLancamentoId',fld:'vCTIPOPRODUTOTPLANCAMENTOID'},{av:'AV12cTipoProdutoTpBaixaEmpId',fld:'vCTIPOPRODUTOTPBAIXAEMPID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoProdutoEmpresaId',fld:'vCTIPOPRODUTOEMPRESAID'},{av:'AV7cTipoProdutoId',fld:'vCTIPOPRODUTOID'},{av:'AV8cTipoProdutoTpCobEmpId',fld:'vCTIPOPRODUTOTPCOBEMPID'},{av:'AV9cTipoProdutoTpCobId',fld:'vCTIPOPRODUTOTPCOBID'},{av:'AV10cTipoProdutoTpLancamentoEmpId',fld:'vCTIPOPRODUTOTPLANCAMENTOEMPID'},{av:'AV11cTipoProdutoTpLancamentoId',fld:'vCTIPOPRODUTOTPLANCAMENTOID'},{av:'AV12cTipoProdutoTpBaixaEmpId',fld:'vCTIPOPRODUTOTPBAIXAEMPID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoProdutoEmpresaId',fld:'vCTIPOPRODUTOEMPRESAID'},{av:'AV7cTipoProdutoId',fld:'vCTIPOPRODUTOID'},{av:'AV8cTipoProdutoTpCobEmpId',fld:'vCTIPOPRODUTOTPCOBEMPID'},{av:'AV9cTipoProdutoTpCobId',fld:'vCTIPOPRODUTOTPCOBID'},{av:'AV10cTipoProdutoTpLancamentoEmpId',fld:'vCTIPOPRODUTOTPLANCAMENTOEMPID'},{av:'AV11cTipoProdutoTpLancamentoId',fld:'vCTIPOPRODUTOTPLANCAMENTOID'},{av:'AV12cTipoProdutoTpBaixaEmpId',fld:'vCTIPOPRODUTOTPBAIXAEMPID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoProdutoEmpresaId',fld:'vCTIPOPRODUTOEMPRESAID'},{av:'AV7cTipoProdutoId',fld:'vCTIPOPRODUTOID'},{av:'AV8cTipoProdutoTpCobEmpId',fld:'vCTIPOPRODUTOTPCOBEMPID'},{av:'AV9cTipoProdutoTpCobId',fld:'vCTIPOPRODUTOTPCOBID'},{av:'AV10cTipoProdutoTpLancamentoEmpId',fld:'vCTIPOPRODUTOTPLANCAMENTOEMPID'},{av:'AV11cTipoProdutoTpLancamentoId',fld:'vCTIPOPRODUTOTPLANCAMENTOID'},{av:'AV12cTipoProdutoTpBaixaEmpId',fld:'vCTIPOPRODUTOTPBAIXAEMPID'}],[]];
   this.setVCMap("AV13pTipoProdutoEmpresaId", "vPTIPOPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoProdutoId", "vPTIPOPRODUTOID", 0, "int");
   this.setVCMap("AV15pTipoProdutoTpCobEmpId", "vPTIPOPRODUTOTPCOBEMPID", 0, "char");
   this.setVCMap("AV16pTipoProdutoTpCobId", "vPTIPOPRODUTOTPCOBID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kk0());
