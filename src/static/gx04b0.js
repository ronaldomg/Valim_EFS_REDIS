/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:57.57
*/
gx.evt.autoSkip = false;
gx.define('gx04b0', false, function () {
   this.ServerClass =  "gx04b0" ;
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
      this.AV13pCContabilCCustoEmpresaId=gx.fn.getControlValue("vPCCONTABILCCUSTOEMPRESAID") ;
      this.AV14pCContabilCCustoId=gx.fn.getIntegerValue("vPCCONTABILCCUSTOID",'.') ;
   };
   this.e131kk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04b0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1434,53,"CCONTABILCCUSTOEMPRESAID","Empresa","","CContabilCCustoEmpresaId","char",0,"px",10,10,"left",null,[],1434,"CContabilCCustoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1435,54,"CCONTABILCCUSTOID","Código","","CContabilCCustoId","int",0,"px",4,4,"right",null,[],1435,"CContabilCCustoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1423,55,"CCONTABILCCUSTOCUSEMPRESAID","Empresa","","CContabilCCustoCusEmpresaId","char",0,"px",10,10,"left",null,[],1423,"CContabilCCustoCusEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1424,56,"CCONTABILCCUSTOCUSID","Centro de Custo","","CContabilCCustoCusId","svchar",0,"px",30,30,"left",null,[],1424,"CContabilCCustoCusId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1426,57,"CCONTABILCCUSTONATEMPRESAID","Empresa","","CContabilCCustoNatEmpresaId","char",0,"px",10,10,"left",null,[],1426,"CContabilCCustoNatEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1427,58,"CCONTABILCCUSTONATID","Natureza","","CContabilCCustoNatId","svchar",0,"px",30,30,"left",null,[],1427,"CContabilCCustoNatId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1429,59,"CCONTABILCCUSTOCONTAEMPRESAID","Empresa","","CContabilCCustoContaEmpresaId","char",0,"px",10,10,"left",null,[],1429,"CContabilCCustoContaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1432,60,"CCONTABILCCUSTOUSUARIOALT","Usuário Alteração","","CContabilCCustoUsuarioAlt","char",0,"px",12,12,"left",null,[],1432,"CContabilCCustoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCCONTABILCCUSTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTOEMPRESAID",gxz:"ZV6cCContabilCCustoEmpresaId",gxold:"OV6cCContabilCCustoEmpresaId",gxvar:"AV6cCContabilCCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCContabilCCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cCContabilCCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTOEMPRESAID",gx.O.AV6cCContabilCCustoEmpresaId,0)},c2v:function(){gx.O.AV6cCContabilCCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCCONTABILCCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCCONTABILCCUSTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTOID",gxz:"ZV7cCContabilCCustoId",gxold:"OV7cCContabilCCustoId",gxvar:"AV7cCContabilCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCContabilCCustoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cCContabilCCustoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTOID",gx.O.AV7cCContabilCCustoId,0)},c2v:function(){gx.O.AV7cCContabilCCustoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCCONTABILCCUSTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCCONTABILCCUSTOCUSEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTOCUSEMPRESAID",gxz:"ZV8cCContabilCCustoCusEmpresaId",gxold:"OV8cCContabilCCustoCusEmpresaId",gxvar:"AV8cCContabilCCustoCusEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCContabilCCustoCusEmpresaId=Value},v2z:function(Value){gx.O.ZV8cCContabilCCustoCusEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTOCUSEMPRESAID",gx.O.AV8cCContabilCCustoCusEmpresaId,0)},c2v:function(){gx.O.AV8cCContabilCCustoCusEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCCONTABILCCUSTOCUSEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCCONTABILCCUSTOCUSID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTOCUSID",gxz:"ZV9cCContabilCCustoCusId",gxold:"OV9cCContabilCCustoCusId",gxvar:"AV9cCContabilCCustoCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCContabilCCustoCusId=Value},v2z:function(Value){gx.O.ZV9cCContabilCCustoCusId=Value},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTOCUSID",gx.O.AV9cCContabilCCustoCusId,0)},c2v:function(){gx.O.AV9cCContabilCCustoCusId=this.val()},val:function(){return gx.fn.getControlValue("vCCCONTABILCCUSTOCUSID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCCONTABILCCUSTONATEMPRESAID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTONATEMPRESAID",gxz:"ZV10cCContabilCCustoNatEmpresaId",gxold:"OV10cCContabilCCustoNatEmpresaId",gxvar:"AV10cCContabilCCustoNatEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCContabilCCustoNatEmpresaId=Value},v2z:function(Value){gx.O.ZV10cCContabilCCustoNatEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTONATEMPRESAID",gx.O.AV10cCContabilCCustoNatEmpresaId,0)},c2v:function(){gx.O.AV10cCContabilCCustoNatEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCCONTABILCCUSTONATEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCCONTABILCCUSTONATID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTONATID",gxz:"ZV11cCContabilCCustoNatId",gxold:"OV11cCContabilCCustoNatId",gxvar:"AV11cCContabilCCustoNatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCContabilCCustoNatId=Value},v2z:function(Value){gx.O.ZV11cCContabilCCustoNatId=Value},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTONATID",gx.O.AV11cCContabilCCustoNatId,0)},c2v:function(){gx.O.AV11cCContabilCCustoNatId=this.val()},val:function(){return gx.fn.getControlValue("vCCCONTABILCCUSTONATID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCCONTABILCCUSTOCONTAEMPRESAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCCONTABILCCUSTOCONTAEMPRESAID",gxz:"ZV12cCContabilCCustoContaEmpresaId",gxold:"OV12cCContabilCCustoContaEmpresaId",gxvar:"AV12cCContabilCCustoContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCContabilCCustoContaEmpresaId=Value},v2z:function(Value){gx.O.ZV12cCContabilCCustoContaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCCONTABILCCUSTOCONTAEMPRESAID",gx.O.AV12cCContabilCCustoContaEmpresaId,0)},c2v:function(){gx.O.AV12cCContabilCCustoContaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCCONTABILCCUSTOCONTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOEMPRESAID",gxz:"Z1434CContabilCCustoEmpresaId",gxold:"O1434CContabilCCustoEmpresaId",gxvar:"A1434CContabilCCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1434CContabilCCustoEmpresaId=Value},v2z:function(Value){gx.O.Z1434CContabilCCustoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1434CContabilCCustoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1434CContabilCCustoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOID",gxz:"Z1435CContabilCCustoId",gxold:"O1435CContabilCCustoId",gxvar:"A1435CContabilCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1435CContabilCCustoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1435CContabilCCustoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1435CContabilCCustoId,0)},c2v:function(){gx.O.A1435CContabilCCustoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CCONTABILCCUSTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCUSEMPRESAID",gxz:"Z1423CContabilCCustoCusEmpresaId",gxold:"O1423CContabilCCustoCusEmpresaId",gxvar:"A1423CContabilCCustoCusEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1423CContabilCCustoCusEmpresaId=Value},v2z:function(Value){gx.O.Z1423CContabilCCustoCusEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCUSEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1423CContabilCCustoCusEmpresaId,0)},c2v:function(){gx.O.A1423CContabilCCustoCusEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCUSEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCUSID",gxz:"Z1424CContabilCCustoCusId",gxold:"O1424CContabilCCustoCusId",gxvar:"A1424CContabilCCustoCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1424CContabilCCustoCusId=Value},v2z:function(Value){gx.O.Z1424CContabilCCustoCusId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCUSID",row || gx.fn.currentGridRowImpl(51),gx.O.A1424CContabilCCustoCusId,0)},c2v:function(){gx.O.A1424CContabilCCustoCusId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCUSID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTONATEMPRESAID",gxz:"Z1426CContabilCCustoNatEmpresaId",gxold:"O1426CContabilCCustoNatEmpresaId",gxvar:"A1426CContabilCCustoNatEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1426CContabilCCustoNatEmpresaId=Value},v2z:function(Value){gx.O.Z1426CContabilCCustoNatEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTONATEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1426CContabilCCustoNatEmpresaId,0)},c2v:function(){gx.O.A1426CContabilCCustoNatEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTONATEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTONATID",gxz:"Z1427CContabilCCustoNatId",gxold:"O1427CContabilCCustoNatId",gxvar:"A1427CContabilCCustoNatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1427CContabilCCustoNatId=Value},v2z:function(Value){gx.O.Z1427CContabilCCustoNatId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTONATID",row || gx.fn.currentGridRowImpl(51),gx.O.A1427CContabilCCustoNatId,0)},c2v:function(){gx.O.A1427CContabilCCustoNatId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTONATID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCONTAEMPRESAID",gxz:"Z1429CContabilCCustoContaEmpresaId",gxold:"O1429CContabilCCustoContaEmpresaId",gxvar:"A1429CContabilCCustoContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1429CContabilCCustoContaEmpresaId=Value},v2z:function(Value){gx.O.Z1429CContabilCCustoContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCONTAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1429CContabilCCustoContaEmpresaId,0)},c2v:function(){gx.O.A1429CContabilCCustoContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCONTAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOUSUARIOALT",gxz:"Z1432CContabilCCustoUsuarioAlt",gxold:"O1432CContabilCCustoUsuarioAlt",gxvar:"A1432CContabilCCustoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1432CContabilCCustoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1432CContabilCCustoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A1432CContabilCCustoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1432CContabilCCustoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cCContabilCCustoEmpresaId = "" ;
   this.ZV6cCContabilCCustoEmpresaId = "" ;
   this.OV6cCContabilCCustoEmpresaId = "" ;
   this.AV7cCContabilCCustoId = 0 ;
   this.ZV7cCContabilCCustoId = 0 ;
   this.OV7cCContabilCCustoId = 0 ;
   this.AV8cCContabilCCustoCusEmpresaId = "" ;
   this.ZV8cCContabilCCustoCusEmpresaId = "" ;
   this.OV8cCContabilCCustoCusEmpresaId = "" ;
   this.AV9cCContabilCCustoCusId = "" ;
   this.ZV9cCContabilCCustoCusId = "" ;
   this.OV9cCContabilCCustoCusId = "" ;
   this.AV10cCContabilCCustoNatEmpresaId = "" ;
   this.ZV10cCContabilCCustoNatEmpresaId = "" ;
   this.OV10cCContabilCCustoNatEmpresaId = "" ;
   this.AV11cCContabilCCustoNatId = "" ;
   this.ZV11cCContabilCCustoNatId = "" ;
   this.OV11cCContabilCCustoNatId = "" ;
   this.AV12cCContabilCCustoContaEmpresaId = "" ;
   this.ZV12cCContabilCCustoContaEmpresaId = "" ;
   this.OV12cCContabilCCustoContaEmpresaId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1434CContabilCCustoEmpresaId = "" ;
   this.O1434CContabilCCustoEmpresaId = "" ;
   this.Z1435CContabilCCustoId = 0 ;
   this.O1435CContabilCCustoId = 0 ;
   this.Z1423CContabilCCustoCusEmpresaId = "" ;
   this.O1423CContabilCCustoCusEmpresaId = "" ;
   this.Z1424CContabilCCustoCusId = "" ;
   this.O1424CContabilCCustoCusId = "" ;
   this.Z1426CContabilCCustoNatEmpresaId = "" ;
   this.O1426CContabilCCustoNatEmpresaId = "" ;
   this.Z1427CContabilCCustoNatId = "" ;
   this.O1427CContabilCCustoNatId = "" ;
   this.Z1429CContabilCCustoContaEmpresaId = "" ;
   this.O1429CContabilCCustoContaEmpresaId = "" ;
   this.Z1432CContabilCCustoUsuarioAlt = "" ;
   this.O1432CContabilCCustoUsuarioAlt = "" ;
   this.AV6cCContabilCCustoEmpresaId = "" ;
   this.AV7cCContabilCCustoId = 0 ;
   this.AV8cCContabilCCustoCusEmpresaId = "" ;
   this.AV9cCContabilCCustoCusId = "" ;
   this.AV10cCContabilCCustoNatEmpresaId = "" ;
   this.AV11cCContabilCCustoNatId = "" ;
   this.AV12cCContabilCCustoContaEmpresaId = "" ;
   this.AV13pCContabilCCustoEmpresaId = "" ;
   this.AV14pCContabilCCustoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1434CContabilCCustoEmpresaId = "" ;
   this.A1435CContabilCCustoId = 0 ;
   this.A1423CContabilCCustoCusEmpresaId = "" ;
   this.A1424CContabilCCustoCusId = "" ;
   this.A1426CContabilCCustoNatEmpresaId = "" ;
   this.A1427CContabilCCustoNatId = "" ;
   this.A1429CContabilCCustoContaEmpresaId = "" ;
   this.A1432CContabilCCustoUsuarioAlt = "" ;
   this.Events = {"e131kk2_client": ["ENTER", true] ,"e141kk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCContabilCCustoEmpresaId',fld:'vCCCONTABILCCUSTOEMPRESAID'},{av:'AV7cCContabilCCustoId',fld:'vCCCONTABILCCUSTOID'},{av:'AV8cCContabilCCustoCusEmpresaId',fld:'vCCCONTABILCCUSTOCUSEMPRESAID'},{av:'AV9cCContabilCCustoCusId',fld:'vCCCONTABILCCUSTOCUSID'},{av:'AV10cCContabilCCustoNatEmpresaId',fld:'vCCCONTABILCCUSTONATEMPRESAID'},{av:'AV11cCContabilCCustoNatId',fld:'vCCCONTABILCCUSTONATID'},{av:'AV12cCContabilCCustoContaEmpresaId',fld:'vCCCONTABILCCUSTOCONTAEMPRESAID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1434CContabilCCustoEmpresaId',fld:'CCONTABILCCUSTOEMPRESAID'},{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'}],[{av:'AV13pCContabilCCustoEmpresaId',fld:'vPCCONTABILCCUSTOEMPRESAID'},{av:'AV14pCContabilCCustoId',fld:'vPCCONTABILCCUSTOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCContabilCCustoEmpresaId',fld:'vCCCONTABILCCUSTOEMPRESAID'},{av:'AV7cCContabilCCustoId',fld:'vCCCONTABILCCUSTOID'},{av:'AV8cCContabilCCustoCusEmpresaId',fld:'vCCCONTABILCCUSTOCUSEMPRESAID'},{av:'AV9cCContabilCCustoCusId',fld:'vCCCONTABILCCUSTOCUSID'},{av:'AV10cCContabilCCustoNatEmpresaId',fld:'vCCCONTABILCCUSTONATEMPRESAID'},{av:'AV11cCContabilCCustoNatId',fld:'vCCCONTABILCCUSTONATID'},{av:'AV12cCContabilCCustoContaEmpresaId',fld:'vCCCONTABILCCUSTOCONTAEMPRESAID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCContabilCCustoEmpresaId',fld:'vCCCONTABILCCUSTOEMPRESAID'},{av:'AV7cCContabilCCustoId',fld:'vCCCONTABILCCUSTOID'},{av:'AV8cCContabilCCustoCusEmpresaId',fld:'vCCCONTABILCCUSTOCUSEMPRESAID'},{av:'AV9cCContabilCCustoCusId',fld:'vCCCONTABILCCUSTOCUSID'},{av:'AV10cCContabilCCustoNatEmpresaId',fld:'vCCCONTABILCCUSTONATEMPRESAID'},{av:'AV11cCContabilCCustoNatId',fld:'vCCCONTABILCCUSTONATID'},{av:'AV12cCContabilCCustoContaEmpresaId',fld:'vCCCONTABILCCUSTOCONTAEMPRESAID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCContabilCCustoEmpresaId',fld:'vCCCONTABILCCUSTOEMPRESAID'},{av:'AV7cCContabilCCustoId',fld:'vCCCONTABILCCUSTOID'},{av:'AV8cCContabilCCustoCusEmpresaId',fld:'vCCCONTABILCCUSTOCUSEMPRESAID'},{av:'AV9cCContabilCCustoCusId',fld:'vCCCONTABILCCUSTOCUSID'},{av:'AV10cCContabilCCustoNatEmpresaId',fld:'vCCCONTABILCCUSTONATEMPRESAID'},{av:'AV11cCContabilCCustoNatId',fld:'vCCCONTABILCCUSTONATID'},{av:'AV12cCContabilCCustoContaEmpresaId',fld:'vCCCONTABILCCUSTOCONTAEMPRESAID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCContabilCCustoEmpresaId',fld:'vCCCONTABILCCUSTOEMPRESAID'},{av:'AV7cCContabilCCustoId',fld:'vCCCONTABILCCUSTOID'},{av:'AV8cCContabilCCustoCusEmpresaId',fld:'vCCCONTABILCCUSTOCUSEMPRESAID'},{av:'AV9cCContabilCCustoCusId',fld:'vCCCONTABILCCUSTOCUSID'},{av:'AV10cCContabilCCustoNatEmpresaId',fld:'vCCCONTABILCCUSTONATEMPRESAID'},{av:'AV11cCContabilCCustoNatId',fld:'vCCCONTABILCCUSTONATID'},{av:'AV12cCContabilCCustoContaEmpresaId',fld:'vCCCONTABILCCUSTOCONTAEMPRESAID'}],[]];
   this.setVCMap("AV13pCContabilCCustoEmpresaId", "vPCCONTABILCCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pCContabilCCustoId", "vPCCONTABILCCUSTOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04b0());