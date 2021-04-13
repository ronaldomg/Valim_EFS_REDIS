/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:30:50.1
*/
gx.evt.autoSkip = false;
gx.define('gx0780', false, function () {
   this.ServerClass =  "gx0780" ;
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
      this.AV13pConvenioEmpresaId=gx.fn.getControlValue("vPCONVENIOEMPRESAID") ;
      this.AV14pConvenioId=gx.fn.getIntegerValue("vPCONVENIOID",'.') ;
      this.AV15pConvenioCentroCustoEmpId=gx.fn.getControlValue("vPCONVENIOCENTROCUSTOEMPID") ;
      this.AV16pConvenioCentroCustoId=gx.fn.getControlValue("vPCONVENIOCENTROCUSTOID") ;
      this.AV17pConvenioCCusNatDesEmpId=gx.fn.getControlValue("vPCONVENIOCCUSNATDESEMPID") ;
      this.AV18pConvenioCCusNatDesId=gx.fn.getIntegerValue("vPCONVENIOCCUSNATDESID",'.') ;
   };
   this.e131mn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141mn1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0780",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1680,53,"CONVENIOEMPRESAID","Empresa do Convênio","","ConvenioEmpresaId","char",0,"px",10,10,"left",null,[],1680,"ConvenioEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1681,54,"CONVENIOID","Código do Convênio","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2105,55,"CONVENIOCENTROCUSTOEMPID","Empresa Centro de Custo","","ConvenioCentroCustoEmpId","char",0,"px",10,10,"left",null,[],2105,"ConvenioCentroCustoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2106,56,"CONVENIOCENTROCUSTOID","Centro de Custo","","ConvenioCentroCustoId","svchar",0,"px",30,30,"left",null,[],2106,"ConvenioCentroCustoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2096,57,"CONVENIOCCUSNATDESEMPID","Empresa Natureza Despesa","","ConvenioCCusNatDesEmpId","char",0,"px",10,10,"left",null,[],2096,"ConvenioCCusNatDesEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2097,58,"CONVENIOCCUSNATDESID","Natureza Despesa","","ConvenioCCusNatDesId","int",0,"px",8,8,"right",null,[],2097,"ConvenioCCusNatDesId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONVENIOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOEMPRESAID",gxz:"ZV6cConvenioEmpresaId",gxold:"OV6cConvenioEmpresaId",gxvar:"AV6cConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV6cConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCONVENIOEMPRESAID",gx.O.AV6cConvenioEmpresaId,0)},c2v:function(){gx.O.AV6cConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONVENIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOID",gxz:"ZV7cConvenioId",gxold:"OV7cConvenioId",gxvar:"AV7cConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONVENIOID",gx.O.AV7cConvenioId,0)},c2v:function(){gx.O.AV7cConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONVENIOCENTROCUSTOEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOCENTROCUSTOEMPID",gxz:"ZV8cConvenioCentroCustoEmpId",gxold:"OV8cConvenioCentroCustoEmpId",gxvar:"AV8cConvenioCentroCustoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cConvenioCentroCustoEmpId=Value},v2z:function(Value){gx.O.ZV8cConvenioCentroCustoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCCONVENIOCENTROCUSTOEMPID",gx.O.AV8cConvenioCentroCustoEmpId,0)},c2v:function(){gx.O.AV8cConvenioCentroCustoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCCONVENIOCENTROCUSTOEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONVENIOCENTROCUSTOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOCENTROCUSTOID",gxz:"ZV9cConvenioCentroCustoId",gxold:"OV9cConvenioCentroCustoId",gxvar:"AV9cConvenioCentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cConvenioCentroCustoId=Value},v2z:function(Value){gx.O.ZV9cConvenioCentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCCONVENIOCENTROCUSTOID",gx.O.AV9cConvenioCentroCustoId,0)},c2v:function(){gx.O.AV9cConvenioCentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCCONVENIOCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONVENIOCCUSNATDESEMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOCCUSNATDESEMPID",gxz:"ZV10cConvenioCCusNatDesEmpId",gxold:"OV10cConvenioCCusNatDesEmpId",gxvar:"AV10cConvenioCCusNatDesEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cConvenioCCusNatDesEmpId=Value},v2z:function(Value){gx.O.ZV10cConvenioCCusNatDesEmpId=Value},v2c:function(){gx.fn.setControlValue("vCCONVENIOCCUSNATDESEMPID",gx.O.AV10cConvenioCCusNatDesEmpId,0)},c2v:function(){gx.O.AV10cConvenioCCusNatDesEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCCONVENIOCCUSNATDESEMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCONVENIOCCUSNATDESID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOCCUSNATDESID",gxz:"ZV11cConvenioCCusNatDesId",gxold:"OV11cConvenioCCusNatDesId",gxvar:"AV11cConvenioCCusNatDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cConvenioCCusNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cConvenioCCusNatDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONVENIOCCUSNATDESID",gx.O.AV11cConvenioCCusNatDesId,0)},c2v:function(){gx.O.AV11cConvenioCCusNatDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONVENIOCCUSNATDESID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCONVENIOCCUSNATDESUSUARIOALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONVENIOCCUSNATDESUSUARIOALT",gxz:"ZV12cConvenioCCusNatDesUsuarioAlt",gxold:"OV12cConvenioCCusNatDesUsuarioAlt",gxvar:"AV12cConvenioCCusNatDesUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cConvenioCCusNatDesUsuarioAlt=Value},v2z:function(Value){gx.O.ZV12cConvenioCCusNatDesUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCCONVENIOCCUSNATDESUSUARIOALT",gx.O.AV12cConvenioCCusNatDesUsuarioAlt,0)},c2v:function(){gx.O.AV12cConvenioCCusNatDesUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCCONVENIOCCUSNATDESUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOEMPRESAID",gxz:"Z1680ConvenioEmpresaId",gxold:"O1680ConvenioEmpresaId",gxvar:"A1680ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1680ConvenioEmpresaId=Value},v2z:function(Value){gx.O.Z1680ConvenioEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1680ConvenioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1680ConvenioEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCENTROCUSTOEMPID",gxz:"Z2105ConvenioCentroCustoEmpId",gxold:"O2105ConvenioCentroCustoEmpId",gxvar:"A2105ConvenioCentroCustoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2105ConvenioCentroCustoEmpId=Value},v2z:function(Value){gx.O.Z2105ConvenioCentroCustoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCENTROCUSTOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A2105ConvenioCentroCustoEmpId,0)},c2v:function(){gx.O.A2105ConvenioCentroCustoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCENTROCUSTOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCENTROCUSTOID",gxz:"Z2106ConvenioCentroCustoId",gxold:"O2106ConvenioCentroCustoId",gxvar:"A2106ConvenioCentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2106ConvenioCentroCustoId=Value},v2z:function(Value){gx.O.Z2106ConvenioCentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCENTROCUSTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2106ConvenioCentroCustoId,0)},c2v:function(){gx.O.A2106ConvenioCentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCENTROCUSTOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESEMPID",gxz:"Z2096ConvenioCCusNatDesEmpId",gxold:"O2096ConvenioCCusNatDesEmpId",gxvar:"A2096ConvenioCCusNatDesEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2096ConvenioCCusNatDesEmpId=Value},v2z:function(Value){gx.O.Z2096ConvenioCCusNatDesEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCCUSNATDESEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A2096ConvenioCCusNatDesEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2096ConvenioCCusNatDesEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCCUSNATDESEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESID",gxz:"Z2097ConvenioCCusNatDesId",gxold:"O2097ConvenioCCusNatDesId",gxvar:"A2097ConvenioCCusNatDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2097ConvenioCCusNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2097ConvenioCCusNatDesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCCUSNATDESID",row || gx.fn.currentGridRowImpl(51),gx.O.A2097ConvenioCCusNatDesId,0)},c2v:function(){gx.O.A2097ConvenioCCusNatDesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOCCUSNATDESID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cConvenioEmpresaId = "" ;
   this.ZV6cConvenioEmpresaId = "" ;
   this.OV6cConvenioEmpresaId = "" ;
   this.AV7cConvenioId = 0 ;
   this.ZV7cConvenioId = 0 ;
   this.OV7cConvenioId = 0 ;
   this.AV8cConvenioCentroCustoEmpId = "" ;
   this.ZV8cConvenioCentroCustoEmpId = "" ;
   this.OV8cConvenioCentroCustoEmpId = "" ;
   this.AV9cConvenioCentroCustoId = "" ;
   this.ZV9cConvenioCentroCustoId = "" ;
   this.OV9cConvenioCentroCustoId = "" ;
   this.AV10cConvenioCCusNatDesEmpId = "" ;
   this.ZV10cConvenioCCusNatDesEmpId = "" ;
   this.OV10cConvenioCCusNatDesEmpId = "" ;
   this.AV11cConvenioCCusNatDesId = 0 ;
   this.ZV11cConvenioCCusNatDesId = 0 ;
   this.OV11cConvenioCCusNatDesId = 0 ;
   this.AV12cConvenioCCusNatDesUsuarioAlt = "" ;
   this.ZV12cConvenioCCusNatDesUsuarioAlt = "" ;
   this.OV12cConvenioCCusNatDesUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1680ConvenioEmpresaId = "" ;
   this.O1680ConvenioEmpresaId = "" ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.Z2105ConvenioCentroCustoEmpId = "" ;
   this.O2105ConvenioCentroCustoEmpId = "" ;
   this.Z2106ConvenioCentroCustoId = "" ;
   this.O2106ConvenioCentroCustoId = "" ;
   this.Z2096ConvenioCCusNatDesEmpId = "" ;
   this.O2096ConvenioCCusNatDesEmpId = "" ;
   this.Z2097ConvenioCCusNatDesId = 0 ;
   this.O2097ConvenioCCusNatDesId = 0 ;
   this.AV6cConvenioEmpresaId = "" ;
   this.AV7cConvenioId = 0 ;
   this.AV8cConvenioCentroCustoEmpId = "" ;
   this.AV9cConvenioCentroCustoId = "" ;
   this.AV10cConvenioCCusNatDesEmpId = "" ;
   this.AV11cConvenioCCusNatDesId = 0 ;
   this.AV12cConvenioCCusNatDesUsuarioAlt = "" ;
   this.AV13pConvenioEmpresaId = "" ;
   this.AV14pConvenioId = 0 ;
   this.AV15pConvenioCentroCustoEmpId = "" ;
   this.AV16pConvenioCentroCustoId = "" ;
   this.AV17pConvenioCCusNatDesEmpId = "" ;
   this.AV18pConvenioCCusNatDesId = 0 ;
   this.A2108ConvenioCCusNatDesUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2105ConvenioCentroCustoEmpId = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.A2096ConvenioCCusNatDesEmpId = "" ;
   this.A2097ConvenioCCusNatDesId = 0 ;
   this.Events = {"e131mn2_client": ["ENTER", true] ,"e141mn1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cConvenioEmpresaId',fld:'vCCONVENIOEMPRESAID'},{av:'AV7cConvenioId',fld:'vCCONVENIOID'},{av:'AV8cConvenioCentroCustoEmpId',fld:'vCCONVENIOCENTROCUSTOEMPID'},{av:'AV9cConvenioCentroCustoId',fld:'vCCONVENIOCENTROCUSTOID'},{av:'AV10cConvenioCCusNatDesEmpId',fld:'vCCONVENIOCCUSNATDESEMPID'},{av:'AV11cConvenioCCusNatDesId',fld:'vCCONVENIOCCUSNATDESID'},{av:'AV12cConvenioCCusNatDesUsuarioAlt',fld:'vCCONVENIOCCUSNATDESUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2096ConvenioCCusNatDesEmpId',fld:'CONVENIOCCUSNATDESEMPID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'}],[{av:'AV13pConvenioEmpresaId',fld:'vPCONVENIOEMPRESAID'},{av:'AV14pConvenioId',fld:'vPCONVENIOID'},{av:'AV15pConvenioCentroCustoEmpId',fld:'vPCONVENIOCENTROCUSTOEMPID'},{av:'AV16pConvenioCentroCustoId',fld:'vPCONVENIOCENTROCUSTOID'},{av:'AV17pConvenioCCusNatDesEmpId',fld:'vPCONVENIOCCUSNATDESEMPID'},{av:'AV18pConvenioCCusNatDesId',fld:'vPCONVENIOCCUSNATDESID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cConvenioEmpresaId',fld:'vCCONVENIOEMPRESAID'},{av:'AV7cConvenioId',fld:'vCCONVENIOID'},{av:'AV8cConvenioCentroCustoEmpId',fld:'vCCONVENIOCENTROCUSTOEMPID'},{av:'AV9cConvenioCentroCustoId',fld:'vCCONVENIOCENTROCUSTOID'},{av:'AV10cConvenioCCusNatDesEmpId',fld:'vCCONVENIOCCUSNATDESEMPID'},{av:'AV11cConvenioCCusNatDesId',fld:'vCCONVENIOCCUSNATDESID'},{av:'AV12cConvenioCCusNatDesUsuarioAlt',fld:'vCCONVENIOCCUSNATDESUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cConvenioEmpresaId',fld:'vCCONVENIOEMPRESAID'},{av:'AV7cConvenioId',fld:'vCCONVENIOID'},{av:'AV8cConvenioCentroCustoEmpId',fld:'vCCONVENIOCENTROCUSTOEMPID'},{av:'AV9cConvenioCentroCustoId',fld:'vCCONVENIOCENTROCUSTOID'},{av:'AV10cConvenioCCusNatDesEmpId',fld:'vCCONVENIOCCUSNATDESEMPID'},{av:'AV11cConvenioCCusNatDesId',fld:'vCCONVENIOCCUSNATDESID'},{av:'AV12cConvenioCCusNatDesUsuarioAlt',fld:'vCCONVENIOCCUSNATDESUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cConvenioEmpresaId',fld:'vCCONVENIOEMPRESAID'},{av:'AV7cConvenioId',fld:'vCCONVENIOID'},{av:'AV8cConvenioCentroCustoEmpId',fld:'vCCONVENIOCENTROCUSTOEMPID'},{av:'AV9cConvenioCentroCustoId',fld:'vCCONVENIOCENTROCUSTOID'},{av:'AV10cConvenioCCusNatDesEmpId',fld:'vCCONVENIOCCUSNATDESEMPID'},{av:'AV11cConvenioCCusNatDesId',fld:'vCCONVENIOCCUSNATDESID'},{av:'AV12cConvenioCCusNatDesUsuarioAlt',fld:'vCCONVENIOCCUSNATDESUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cConvenioEmpresaId',fld:'vCCONVENIOEMPRESAID'},{av:'AV7cConvenioId',fld:'vCCONVENIOID'},{av:'AV8cConvenioCentroCustoEmpId',fld:'vCCONVENIOCENTROCUSTOEMPID'},{av:'AV9cConvenioCentroCustoId',fld:'vCCONVENIOCENTROCUSTOID'},{av:'AV10cConvenioCCusNatDesEmpId',fld:'vCCONVENIOCCUSNATDESEMPID'},{av:'AV11cConvenioCCusNatDesId',fld:'vCCONVENIOCCUSNATDESID'},{av:'AV12cConvenioCCusNatDesUsuarioAlt',fld:'vCCONVENIOCCUSNATDESUSUARIOALT'}],[]];
   this.setVCMap("AV13pConvenioEmpresaId", "vPCONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV14pConvenioId", "vPCONVENIOID", 0, "int");
   this.setVCMap("AV15pConvenioCentroCustoEmpId", "vPCONVENIOCENTROCUSTOEMPID", 0, "char");
   this.setVCMap("AV16pConvenioCentroCustoId", "vPCONVENIOCENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV17pConvenioCCusNatDesEmpId", "vPCONVENIOCCUSNATDESEMPID", 0, "char");
   this.setVCMap("AV18pConvenioCCusNatDesId", "vPCONVENIOCCUSNATDESID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0780());